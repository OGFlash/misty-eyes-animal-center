from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

    # SES
    ses_region: str = "us-east-1"
    ses_from_email: str = "noreply@mistyeyes.org"
    ses_org_email: str = "info@mistyeyes.org"

    # CORS
    allowed_origins: list[str] = [
        "https://mistyeyes.org",
        "https://www.mistyeyes.org",
        "https://staging.mistyeyes.org",
        "http://localhost:3000",
    ]

    # Environment
    environment: str = "development"

    @property
    def is_production(self) -> bool:
        return self.environment == "production"


settings = Settings()
