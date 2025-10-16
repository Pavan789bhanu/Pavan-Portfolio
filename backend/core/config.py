from typing import Optional
from pydantic import BaseSettings


class Settings(BaseSettings):
    # App
    PROJECT_NAME: str = "Pavan Portfolio API"

    # Gemini
    GEMINI_API_KEY: str
    GEMINI_MODEL: str = "gemini-2.5-pro"

    # Optional S3 (only if you store resume)
    S3_BUCKET_NAME: Optional[str] = None
    S3_KNOWLEDGE_BASE_KEY: Optional[str] = None  
    # LINKEDIN_S3_KEY: Optional[str] = None      

    # Contact
    CONTACT_EMAIL: str   

    
    FRONTEND_ORIGINS: Optional[str] = None

    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()
