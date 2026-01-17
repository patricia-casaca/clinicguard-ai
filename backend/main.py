from fastapi import FastAPI
from app.api.upload import router as upload_router
from app.api.documents import router as documents_router
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"status": "ClinicGuard backend running"}

app.include_router(upload_router)
app.include_router(documents_router)