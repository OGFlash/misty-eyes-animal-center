from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

    # SES
    ses_region: str = "us-east-1"
    ses_from_email: str = "noreply@mistyeyesanimalcenter.com"
    ses_org_email: str = "info@mistyeyesanimalcenter.com"

    # CORS
    allowed_origins: list[str] = [
        "https://mistyeyesanimalcenter.com",
        "https://www.mistyeyesanimalcenter.com",
        "https://staging.mistyeyesanimalcenter.com",
        "http://localhost:3000",
    ]

    # Environment
    environment: str = "development"

    @property
    def is_production(self) -> bool:
        return self.environment == "production"


settings = Settings()
