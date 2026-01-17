import uuid
from fastapi import APIRouter, UploadFile, File, Form
from app.services.file_storage import save_uploaded_file
from app.services.document_registry import add_document
from app.services.ingestion import load_and_chunk
from app.services.embeddings import get_or_create_index
from datetime import datetime

router = APIRouter()

@router.post("/upload")
async def upload_document(
    clinic_id: str = Form(...),
    file: UploadFile = File(...)
):
    file_path = await save_uploaded_file(file, clinic_id)
    document_id = str(uuid.uuid4())

    # nodes = load_and_chunk(file_path, clinic_id, document_id)
    # get_or_create_index(clinic_id, nodes)

    document = {
        "document_id": document_id,
        "clinic_id": clinic_id,
        "filename": file.filename,
        "file_path": file_path,
        "uploaded_at": datetime.utcnow().isoformat(),
        "status": "Not Scanned",
    }

    add_document(document)

    return {
        "status": "success",
        "document": document
    }



