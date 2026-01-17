export const API_URL = process.env.NEXT_PUBLIC_API_URL;

/* ---------------- DOCUMENTS ---------------- */

export async function fetchDocuments(clinicId: string) {
  const res = await fetch(`${API_URL}/documents?clinic_id=${clinicId}`);

  if (!res.ok) {
    throw new Error("Failed to fetch documents");
  }

  return res.json();
}

export async function uploadDocument(file: File, clinicId: string) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("clinic_id", clinicId);

  const res = await fetch(`${API_URL}/upload`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Upload failed");
  }

  return res.json();
}

export async function deleteDocument(documentId: string) {
  const res = await fetch(`${API_URL}/documents/${documentId}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Delete failed");
  }

  return res.json();
}

export async function replaceDocument(documentId: string, file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_URL}/documents/${documentId}/replace`, {
    method: "PUT",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Replace failed");
  }

  return res.json();
}

export function viewDocument(documentId: string) {
  window.open(`${API_URL}/documents/${documentId}/view`, "_blank");
}
