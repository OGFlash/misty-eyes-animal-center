from fastapi import APIRouter
from app.models.requests import SurrenderRequest, ApiResponse
from app.services.email import send_org_notification, send_confirmation

router = APIRouter(tags=["surrender"])


@router.post("/surrender", response_model=ApiResponse)
async def submit_surrender_request(data: SurrenderRequest):
    html_org = f"""
    <h2>Owner Surrender Intake Request</h2>
    <p><strong>Owner:</strong> {data.owner_name} | <strong>Email:</strong> {data.email} | <strong>Phone:</strong> {data.phone}</p>
    <h3>Animal Information</h3>
    <p><strong>Name:</strong> {data.animal_name} | <strong>Species:</strong> {data.animal_species}</p>
    <p><strong>Breed:</strong> {data.animal_breed or 'Unknown'} | <strong>Age:</strong> {data.animal_age or 'Unknown'}</p>
    <p><strong>Reason for Surrender:</strong> {data.reason}</p>
    <p><strong>Medical History:</strong> {data.medical_history or 'None provided'}</p>
    <p><strong>Behavioral Notes:</strong> {data.behavioral_notes or 'None provided'}</p>
    <p><strong>Timeline:</strong> {data.timeline or 'Not specified'}</p>
    """

    html_confirm = f"""
    <h2>Surrender Request Received</h2>
    <p>Dear {data.owner_name},</p>
    <p>We've received your surrender intake request for <strong>{data.animal_name}</strong>. Our intake team will review your request and contact you to schedule an appointment.</p>
    <p>We understand this is a difficult decision, and we appreciate you reaching out to ensure {data.animal_name} is cared for.</p>
    <br/><p>— Misty Eyes Animal Center</p>
    """

    send_org_notification(f"[Surrender] {data.animal_name} ({data.animal_species}) — {data.owner_name}", html_org)
    send_confirmation(data.email, "Surrender request received — Misty Eyes Animal Center", html_confirm)

    return ApiResponse(success=True, message="Your surrender request has been received. Our team will contact you shortly.")
