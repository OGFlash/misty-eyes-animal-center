from fastapi import APIRouter
from app.models.requests import VolunteerRequest, ApiResponse
from app.services.email import send_org_notification, send_confirmation

router = APIRouter(tags=["volunteer"])


@router.post("/volunteer/apply", response_model=ApiResponse)
async def submit_volunteer_application(data: VolunteerRequest):
    html_org = f"""
    <h2>New Volunteer Sign-Up</h2>
    <p><strong>Name:</strong> {data.first_name} {data.last_name}</p>
    <p><strong>Email:</strong> {data.email}</p>
    <p><strong>Phone:</strong> {data.phone}</p>
    <p><strong>Availability:</strong> {', '.join(data.availability)}</p>
    <p><strong>Interests:</strong> {', '.join(data.interests)}</p>
    <p><strong>Experience:</strong> {data.experience or 'Not provided'}</p>
    <p><strong>Message:</strong> {data.message or 'None'}</p>
    """

    html_confirm = f"""
    <h2>Thanks for volunteering, {data.first_name}!</h2>
    <p>We're thrilled to have you join the Misty Eyes family. Our volunteer coordinator will reach out soon.</p>
    <p><strong>Your interest areas:</strong> {', '.join(data.interests)}</p>
    <br/><p>— Misty Eyes Animal Center</p>
    """

    send_org_notification(f"[Volunteer] {data.first_name} {data.last_name}", html_org)
    send_confirmation(data.email, "Welcome to the Misty Eyes volunteer team!", html_confirm)

    return ApiResponse(success=True, message="Thank you for signing up to volunteer! We'll be in touch soon.")
