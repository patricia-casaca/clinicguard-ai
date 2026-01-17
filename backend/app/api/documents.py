from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.document_registry import list_documents, load_registry, delete_document, replace_document
from app.services.file_storage import save_uploaded_file, delete_file
from fastapi.responses import FileResponse
import os


router = APIRouter()

@router.get("/documents")
def get_documents(clinic_id: str):
    return list_documents(clinic_id)

@router.delete("/documents/{document_id}")
def delete_document_endpoint(document_id: str):
    docs = load_registry()
    doc = next((d for d in docs if d["document_id"] == document_id), None)

    if not doc:
        raise HTTPException(status_code=404, detail="Document not found")

    delete_file(doc.get("file_path"))
    delete_document(document_id)

    return {"success": True}

@router.put("/documents/{document_id}/replace")
async def replace_document_endpoint(
    document_id: str,
    file: UploadFile = File(...)
):
    docs = load_registry()
    doc = next((d for d in docs if d["document_id"] == document_id), None)

    if not doc:
        raise HTTPException(status_code=404, detail="Document not found")

    # Delete old file
    delete_file(doc.get("file_path"))

    # Save new file (same clinic)
    clinic_id = doc["clinic_id"]
    new_file_path = await save_uploaded_file(file, clinic_id)

    # Update registry
    replace_document(
        document_id=document_id,
        new_file_path=new_file_path,
        new_filename=file.filename,
    )

    return {"success": True}

@router.get("/documents/{document_id}/view")
def view_document(document_id: str):
    docs = load_registry()
    doc = next((d for d in docs if d["document_id"] == document_id), None)

    if not doc:
        raise HTTPException(status_code=404, detail="Document not found")

    file_path = doc.get("file_path")

    if not file_path or not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="File not found")

    return FileResponse(
        path=file_path,
        filename=doc["filename"],
        media_type="application/octet-stream"
    )
