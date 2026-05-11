import boto3
from botocore.exceptions import ClientError
from app.config import settings


def get_ses_client():
    return boto3.client("ses", region_name=settings.ses_region)


def send_email(
    to_addresses: list[str],
    subject: str,
    html_body: str,
    text_body: str | None = None,
) -> bool:
    """Send an email via AWS SES. Returns True on success."""
    client = get_ses_client()
    body: dict = {"Html": {"Data": html_body, "Charset": "UTF-8"}}
    if text_body:
        body["Text"] = {"Data": text_body, "Charset": "UTF-8"}

    try:
        client.send_email(
            Source=settings.ses_from_email,
            Destination={"ToAddresses": to_addresses},
            Message={
                "Subject": {"Data": subject, "Charset": "UTF-8"},
                "Body": body,
            },
        )
        return True
    except ClientError as e:
        # Log but don't crash — let caller decide how to handle
        print(f"[SES ERROR] {e.response['Error']['Code']}: {e.response['Error']['Message']}")
        return False


def send_org_notification(subject: str, html_body: str) -> bool:
    return send_email([settings.ses_org_email], subject, html_body)


def send_confirmation(to_email: str, subject: str, html_body: str) -> bool:
    return send_email([to_email], subject, html_body)
