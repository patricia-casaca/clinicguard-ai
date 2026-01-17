import os
from fastapi import UploadFile
from fastapi.responses import FileResponse

UPLOAD_DIR = "app/data/documents"

os.makedirs(UPLOAD_DIR, exist_ok=True)

UPLOAD_DIR = "app/data/documents"

async def save_uploaded_file(file: UploadFile, clinic_id: str) -> str:
    clinic_dir = os.path.join(UPLOAD_DIR, clinic_id)
    os.makedirs(clinic_dir, exist_ok=True)

    file_path = os.path.join(clinic_dir, file.filename)

    with open(file_path, "wb") as f:
        f.write(await file.read())

    return file_path


def delete_file(file_path: str | None):
    if file_path and os.path.exists(file_path):
        os.remove(file_path)

def get_file_path(filename: str):
    return os.path.join(UPLOAD_DIR, filename)
