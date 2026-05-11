from fastapi import APIRouter
from app.models.requests import FosterRequest, ApiResponse
from app.services.email import send_org_notification, send_confirmation

router = APIRouter(tags=["foster"])


@router.post("/foster/apply", response_model=ApiResponse)
async def submit_foster_application(data: FosterRequest):
    html_org = f"""
    <h2>New Foster Application</h2>
    <p><strong>Name:</strong> {data.first_name} {data.last_name}</p>
    <p><strong>Email:</strong> {data.email} | <strong>Phone:</strong> {data.phone}</p>
    <p><strong>Address:</strong> {data.address}, {data.city}, {data.state} {data.zip}</p>
    <p><strong>Housing:</strong> {data.housing_type}</p>
    <p><strong>Foster Types:</strong> {', '.join(data.foster_types)}</p>
    <p><strong>Can foster kittens:</strong> {data.can_foster_kittens} | <strong>Neonatal:</strong> {data.can_foster_neonatal}</p>
    <p><strong>Current Pets:</strong> {data.current_pets or 'None'}</p>
    <p><strong>Experience:</strong> {data.experience or 'None'}</p>
    <p><strong>Message:</strong> {data.message or 'None'}</p>
    """

    html_confirm = f"""
    <h2>Foster Application Received — Thank You, {data.first_name}!</h2>
    <p>We've received your foster application and our foster coordinator will reach out to you shortly.</p>
    <p>Fostering saves lives — thank you for opening your heart and home!</p>
    <br/><p>— Misty Eyes Animal Center</p>
    """

    send_org_notification(f"[Foster App] {data.first_name} {data.last_name}", html_org)
    send_confirmation(data.email, "Your foster application has been received — Misty Eyes", html_confirm)

    return ApiResponse(success=True, message="Your foster application has been received. We'll be in touch soon!")
