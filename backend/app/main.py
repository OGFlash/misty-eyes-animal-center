from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum

from app.config import settings
from app.routers import contact, adopt, volunteer, foster, surrender, newsletter, fundraiser, pets

app = FastAPI(
    title="Misty Eyes Animal Center API",
    version="1.0.0",
    docs_url="/api/docs" if not settings.is_production else None,
    redoc_url=None,
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

# Routers
app.include_router(contact.router,    prefix="/api")
app.include_router(adopt.router,      prefix="/api")
app.include_router(volunteer.router,  prefix="/api")
app.include_router(foster.router,     prefix="/api")
app.include_router(surrender.router,  prefix="/api")
app.include_router(newsletter.router, prefix="/api")
app.include_router(fundraiser.router, prefix="/api")
app.include_router(pets.router,       prefix="/api")


@app.get("/api/health")
async def health_check():
    return {"status": "ok", "service": "mistyeyes-api"}


# Lambda handler (Mangum)
handler = Mangum(app, lifespan="off")
