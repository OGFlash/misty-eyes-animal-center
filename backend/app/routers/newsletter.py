from fastapi import APIRouter
from app.models.requests import NewsletterRequest, ApiResponse
from app.services.email import send_org_notification, send_confirmation

router = APIRouter(tags=["newsletter"])


@router.post("/newsletter", response_model=ApiResponse)
async def subscribe_newsletter(data: NewsletterRequest):
    name = data.first_name or "Friend"

    html_org = f"""
    <h2>New Newsletter Subscriber</h2>
    <p><strong>Email:</strong> {data.email}</p>
    <p><strong>Name:</strong> {data.first_name or 'Not provided'}</p>
    """

    html_confirm = f"""
    <h2>You're on the list, {name}!</h2>
    <p>Thanks for subscribing to the Misty Eyes Animal Center newsletter. You'll be the first to hear about adoptable animals, events, and ways to help.</p>
    <br/><p>— Misty Eyes Animal Center</p>
    """

    send_org_notification(f"[Newsletter] New subscriber: {data.email}", html_org)
    send_confirmation(data.email, "You're subscribed! — Misty Eyes Animal Center", html_confirm)

    return ApiResponse(success=True, message="You've been subscribed to our newsletter!")
