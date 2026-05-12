from fastapi import APIRouter
from app.models.requests import ContactRequest, ApiResponse
from app.services.email import send_org_notification, send_confirmation
from app.config import settings

router = APIRouter(tags=["contact"])


@router.post("/contact", response_model=ApiResponse)
async def submit_contact_form(data: ContactRequest):
    html_org = f"""
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> {data.name}</p>
    <p><strong>Email:</strong> {data.email}</p>
    <p><strong>Phone:</strong> {data.phone or 'Not provided'}</p>
    <p><strong>Subject:</strong> {data.subject}</p>
    <hr/>
    <p><strong>Message:</strong></p>
    <p>{data.message}</p>
    """

    html_confirm = f"""
    <h2>Thanks for reaching out, {data.name}!</h2>
    <p>We received your message and will get back to you as soon as possible.</p>
    <p>In the meantime, check out our <a href="https://www.mistyeyesanimalcenter.com/adoptablepets">adoptable pets</a>!</p>
    <br/><p>— The Misty Eyes Animal Center Team</p>
    """

    send_org_notification(f"[Contact] {data.subject} — {data.name}", html_org)
    send_confirmation(data.email, "We received your message — Misty Eyes Animal Center", html_confirm)

    return ApiResponse(success=True, message="Your message has been sent. We'll be in touch soon!")
