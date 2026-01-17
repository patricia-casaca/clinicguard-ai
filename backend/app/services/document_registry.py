import json
from pathlib import Path
from datetime import datetime

REGISTRY_PATH = Path("data/documents.json")
REGISTRY_PATH.parent.mkdir(parents=True, exist_ok=True)

def load_registry():
    if not REGISTRY_PATH.exists():
        return []
    with open(REGISTRY_PATH, "r") as f:
        return json.load(f)

def save_registry(docs):
    with open(REGISTRY_PATH, "w") as f:
        json.dump(docs, f, indent=2)

def add_document(doc):
    docs = load_registry()
    docs.append(doc)
    save_registry(docs)

def list_documents(clinic_id: str):
    return [d for d in load_registry() if d["clinic_id"] == clinic_id]

def update_status(document_id: str, status: str):
    docs = load_registry()
    for d in docs:
        if d["document_id"] == document_id:
            d["status"] = status
            break
    save_registry(docs)
