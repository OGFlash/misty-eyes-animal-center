"""
Proxy endpoints that pull live adoptable-pet data from the Petango web-service
and return clean JSON so the frontend never hits Petango directly.
"""

from __future__ import annotations

import asyncio
import re
from typing import Any
from urllib.parse import parse_qs, urlparse

import httpx
from bs4 import BeautifulSoup
from fastapi import APIRouter, HTTPException

router = APIRouter(tags=["pets"])

# ── Petango constants ────────────────────────────────────────────────────────

AUTH_KEY = "ishtxjls2bflhq8x02sbyu2ece0hu45k6hrggw161rq8ga07yy"

LIST_URL = (
    "https://ws.petango.com/webservices/adoptablesearch/wsAdoptableAnimals.aspx"
)
DETAIL_URL = (
    "https://ws.petango.com/webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx"
)

LIST_PARAMS = {
    "species": "All",
    "sex": "A",
    "agegroup": "All",
    "onhold": "A",
    "orderby": "ID",
    "colnum": "3",
    "AuthKey": AUTH_KEY,
}


# ── Helpers ──────────────────────────────────────────────────────────────────


def _extract_id_from_href(href: str) -> str | None:
    """Pull the numeric id= value from a Petango detail URL."""
    try:
        qs = parse_qs(urlparse(href).query)
        return (qs.get("id") or qs.get("ID") or [None])[0]
    except Exception:
        return None


def _text(tag: Any) -> str:
    return tag.get_text(strip=True) if tag else ""


def _categorize_age(age_str: str) -> str:
    """Map a Petango age string like '2 years 3 months' to a display category."""
    age_lower = age_str.lower()
    years = 0
    months = 0
    y = re.search(r"(\d+)\s*year", age_lower)
    m = re.search(r"(\d+)\s*month", age_lower)
    w = re.search(r"(\d+)\s*week", age_lower)
    if y:
        years = int(y.group(1))
    if m:
        months = int(m.group(1))
    if w:
        # treat weeks-old as kitten
        return "kitten"

    total_months = years * 12 + months
    if total_months < 12:
        return "kitten"
    if total_months < 36:
        return "young"
    if total_months < 96:
        return "adult"
    return "senior"


# ── Parsers ──────────────────────────────────────────────────────────────────


def _parse_list_html(html: str) -> list[dict]:
    """
    Parse the Petango adoptable-animals list page.

    Each animal lives in a <td class="list-item"> with child divs that have
    explicit class names: list-animal-name, list-animal-species, etc.
    """
    soup = BeautifulSoup(html, "html.parser")
    animals: list[dict] = []
    seen: set[str] = set()

    for td in soup.find_all("td", class_="list-item"):
        # Animal ID from the detail link href
        link = td.find("a", href=re.compile(r"wsAdoptableAnimalDetails", re.I))
        if not link:
            continue
        animal_id = _extract_id_from_href(link.get("href", ""))
        if not animal_id or animal_id in seen:
            continue
        seen.add(animal_id)

        def _div(cls: str) -> str:
            tag = td.find("div", class_=cls)
            return _text(tag)

        # Name lives in list-animal-name > a
        name_div = td.find("div", class_="list-animal-name")
        name = _text(name_div.find("a") if name_div else None) or _text(name_div)

        photo_tag = td.find("img", class_="list-animal-photo")
        photo_url = photo_tag.get("src", "") if photo_tag else ""

        species      = _div("list-animal-species")
        gender_status = _div("list-animal-sexSN")
        breed        = _div("list-animal-breed")
        age          = _div("list-animal-age")
        location     = _div("list-animal-location") or "On Site"

        gender = "female" if "female" in gender_status.lower() else "male"

        animals.append(
            {
                "animal_id": animal_id,
                "name": name,
                "species": species or "Unknown",
                "breed": breed,
                "age": age,
                "age_category": _categorize_age(age),
                "gender_status": gender_status,
                "gender": gender,
                "location": location,
                "photo_url": photo_url,
            }
        )

    return animals


def _parse_detail_html(html: str, animal_id: str) -> dict:
    """
    Parse the Petango animal-details page into a flat dict.
    Uses the explicit CSS class names the page provides.
    """
    soup = BeautifulSoup(html, "html.parser")
    data: dict[str, Any] = {"animal_id": animal_id}

    # ── Key/value table rows (detail-label / detail-value) ──────────────────
    labels = soup.find_all("td", class_="detail-label")
    for label_td in labels:
        key = _text(label_td).rstrip(":").strip()
        value_td = label_td.find_next_sibling("td", class_="detail-value")
        if key and value_td:
            data[key] = _text(value_td)

    # ── Description ──────────────────────────────────────────────────────────
    desc_div = soup.find("div", class_="detail-animal-desc")
    data["Description"] = _text(desc_div) if desc_div else ""

    # ── Photos ───────────────────────────────────────────────────────────────
    # Primary photo
    primary_img = soup.find("img", class_="detail-animal-photo")
    primary_url = primary_img.get("src", "") if primary_img else ""

    # Additional photos via onclick="loadPhoto('URL')"
    photo_urls: list[str] = []
    seen_photos: set[str] = set()

    if primary_url:
        photo_urls.append(primary_url)
        seen_photos.add(primary_url)

    for a in soup.find_all("a", onclick=True):
        onclick = a.get("onclick", "")
        match = re.search(r"loadPhoto\(['\"](.+?)['\"]\)", onclick)
        if match:
            url = match.group(1)
            if url not in seen_photos:
                photo_urls.append(url)
                seen_photos.add(url)

    data["Photo URL"] = photo_urls[0] if photo_urls else ""
    data["photos"] = photo_urls

    # ── Normalise ─────────────────────────────────────────────────────────────
    data.setdefault("Animal ID", animal_id)
    data.setdefault("Description", "")

    gender_raw = data.get("Gender", "")
    spayed = data.get("Spayed/Neutered", "")
    data["gender"] = "female" if "female" in gender_raw.lower() else "male"
    data["gender_status"] = (
        f"{gender_raw}/{'Neutered' if gender_raw.lower() == 'male' else 'Spayed'}"
        if spayed == "Yes"
        else gender_raw
    )
    data["age_category"] = _categorize_age(data.get("Age", ""))

    return data


# ── Routes ───────────────────────────────────────────────────────────────────


@router.get("/pets")
async def get_adoptable_pets():
    """Return all currently adoptable animals from Petango (list view)."""
    try:
        async with httpx.AsyncClient(timeout=30, follow_redirects=True) as client:
            resp = await client.get(LIST_URL, params=LIST_PARAMS)
            resp.raise_for_status()
    except httpx.HTTPError as exc:
        raise HTTPException(status_code=502, detail=f"Petango fetch failed: {exc}") from exc

    pets = _parse_list_html(resp.text)
    return {"pets": pets, "total": len(pets)}


@router.get("/pets/{animal_id}")
async def get_pet_details(animal_id: str):
    """Return full details for a single animal from Petango."""
    try:
        async with httpx.AsyncClient(timeout=30, follow_redirects=True) as client:
            resp = await client.get(
                DETAIL_URL,
                params={"id": animal_id, "css": "", "authkey": AUTH_KEY},
            )
            resp.raise_for_status()
    except httpx.HTTPError as exc:
        raise HTTPException(status_code=502, detail=f"Petango fetch failed: {exc}") from exc

    detail = _parse_detail_html(resp.text, animal_id)
    return detail
