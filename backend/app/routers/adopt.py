from fastapi import APIRouter
from app.models.requests import AdoptionApplicationRequest, ApiResponse
from app.services.email import send_org_notification, send_confirmation

router = APIRouter(tags=["adopt"])


@router.post("/adopt/apply", response_model=ApiResponse)
async def submit_adoption_application(data: AdoptionApplicationRequest):
    pet_info = data.pet_of_interest or "Open to suggestions"
    html_org = f"""
    <h2>New Adoption Application</h2>
    <h3>Applicant Information</h3>
    <p><strong>Name:</strong> {data.first_name} {data.last_name}</p>
    <p><strong>Email:</strong> {data.email}</p>
    <p><strong>Phone:</strong> {data.phone}</p>
    <p><strong>Address:</strong> {data.address}, {data.city}, {data.state} {data.zip}</p>
    <h3>Household</h3>
    <p><strong>Housing:</strong> {data.housing_type}</p>
    <p><strong>Adults:</strong> {data.adults_in_home} | <strong>Children:</strong> {data.children_in_home}</p>
    <p><strong>Current Pets:</strong> {data.current_pets or 'None'}</p>
    <h3>Pet Interest</h3>
    <p><strong>Pet of Interest:</strong> {pet_info}</p>
    <p><strong>Why Adopt:</strong> {data.why_adopt}</p>
    <p><strong>Experience:</strong> {data.experience_with_pets}</p>
    """

    html_confirm = f"""
    <h2>Application Received — Thank You, {data.first_name}!</h2>
    <p>We have received your adoption application and our team will review it shortly.</p>
    <p>If we have any questions, we'll reach out to you at {data.email} or {data.phone}.</p>
    <p><strong>Pet of interest:</strong> {pet_info}</p>
    <br/><p>— Misty Eyes Animal Center</p>
    """

    send_org_notification(
        f"[Adoption App] {data.first_name} {data.last_name} — {pet_info}",
        html_org,
    )
    send_confirmation(
        data.email,
        "Your adoption application has been received — Misty Eyes",
        html_confirm,
    )

    return ApiResponse(
        success=True,
        message="Your application has been submitted! We'll be in touch within 2–3 business days.",
    )
