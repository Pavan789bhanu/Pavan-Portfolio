# main.py — Final Production Version

from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware
import logging

from api import chat
from core.config import settings

# -----------------------
# Logger (for debugging via CloudWatch)
# -----------------------
logger = logging.getLogger("uvicorn.error")
logger.setLevel(logging.INFO)

# -----------------------
# CORS: allow only CloudFront frontend
# -----------------------
ALLOWED_ORIGINS = [
    "https://dlsjxie4epl9e.cloudfront.net",  # Frontend URL
]

# -----------------------
# FastAPI Application
# -----------------------
app = FastAPI(
    title=settings.PROJECT_NAME,
    version="1.0.0",
    description="Portfolio Chatbot API for Pavan"
)

# Global CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins= ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------
# Root Health Check
# -----------------------
@app.get("/")
def health_check():
    return {"status": "running", "message": "Portfolio API online"}

# -----------------------
# OPTIONS Handler for Preflight (Critical for Browser Chat!)
# -----------------------
# @app.options("/api/chat")
# def chat_preflight() -> Response:
#     return Response(status_code=204)

# -----------------------
# Chat Endpoint (POST /api/chat)
# -----------------------
app.include_router(chat.router, prefix="/api")

# -----------------------
# AWS Lambda Adapter (Mangum)
# -----------------------
try:
    from mangum import Mangum
    handler = Mangum(app)  
    logger.info("Mangum handler initialized successfully.")
except Exception as e:
    logger.error(f"Failed to initialize Mangum: {e}")
    handler = None
