from fastapi import APIRouter
from app.models.requests import FundraiserRequest, ApiResponse
from app.services.email import send_org_notification, send_confirmation

router = APIRouter(tags=["fundraiser"])


@router.post("/fundraiser", response_model=ApiResponse)
async def submit_fundraiser_inquiry(data: FundraiserRequest):
    html_org = f"""
    <h2>New Fundraiser Inquiry</h2>
    <p><strong>Name:</strong> {data.name} | <strong>Email:</strong> {data.email} | <strong>Phone:</strong> {data.phone or 'N/A'}</p>
    <p><strong>Organization:</strong> {data.organization or 'Individual'}</p>
    <p><strong>Event Type:</strong> {data.event_type}</p>
    <p><strong>Proposed Date:</strong> {data.proposed_date or 'TBD'}</p>
    <p><strong>Est. Attendees:</strong> {data.estimated_attendees or 'Unknown'}</p>
    <p><strong>Message:</strong> {data.message}</p>
    """

    html_confirm = f"""
    <h2>Fundraiser Inquiry Received — Thank You, {data.name}!</h2>
    <p>We're excited about the possibility of hosting a fundraiser with you! Our team will review your inquiry and reach out within 2–3 business days.</p>
    <p><strong>Event type:</strong> {data.event_type}</p>
    <br/><p>— Misty Eyes Animal Center</p>
    """

    send_org_notification(f"[Fundraiser] {data.event_type} — {data.name}", html_org)
    send_confirmation(data.email, "Fundraiser inquiry received — Misty Eyes Animal Center", html_confirm)

    return ApiResponse(success=True, message="Your fundraiser inquiry has been received. We'll be in touch soon!")
