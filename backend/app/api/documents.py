from fastapi import APIRouter
from app.services.document_registry import list_documents

router = APIRouter()

@router.get("/documents")
def get_documents(clinic_id: str):
    return list_documents(clinic_id)
