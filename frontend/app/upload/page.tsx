"use client";

import { useState } from "react";
import { uploadDocument, fetchDocuments } from "@/lib/api";
import { useEffect } from "react";

export default function UploadPage() {
  const [files, setFiles] = useState<File[]>([]);
  // const [existingDocs, setExistingDocs] = useState([
  //   {
  //     id: 1,
  //     name: "Clinic_Policy_2023.pdf",
  //     uploadedAt: "Jan 10, 2026",
  //     status: "Scanned",
  //   },
  //   {
  //     id: 2,
  //     name: "Employee_Handbook.docx",
  //     uploadedAt: "Jan 9, 2026",
  //     status: "Pending",
  //   },
  //   {
  //     id: 3,
  //     name: "Safety_Protocol.pdf",
  //     uploadedAt: "Jan 8, 2026",
  //     status: "Scanned",
  //   },
  // ]);
  const [existingDocs, setExistingDocs] = useState<any[]>([]);

  const [docToDelete, setDocToDelete] = useState<number | null>(null);

  const CLINIC_ID = "demo_clinic_123";

  useEffect(() => {
    const loadDocs = async () => {
      const docs = await fetchDocuments(CLINIC_ID);
      setExistingDocs(docs);
    };

    loadDocs();
  }, []);

  const uploadFiles = async () => {
    try {
      for (const file of files) {
        const res = await uploadDocument(file, CLINIC_ID);

        setExistingDocs((prev) => [
          {
            document_id: res.document.document_id,
            filename: res.document.filename,
            uploaded_at: res.document.uploaded_at,
            status: "Pending", // until scan completes
          },
          ...prev,
        ]);
      }

      // Clear upload box
      setFiles([]);
      const docs = await fetchDocuments(CLINIC_ID);
      setExistingDocs(docs);
    } catch (err) {
      console.error(err);
      alert("One or more files failed to upload");
    }
  };

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFiles([...files, ...Array.from(e.target.files)]);
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const confirmDeleteDoc = (id: number) => {
    setDocToDelete(id);
  };

  const deleteDoc = () => {
    if (docToDelete !== null) {
      setExistingDocs(existingDocs.filter((doc) => doc.id !== docToDelete));
      setDocToDelete(null);
    }
  };

  const viewDoc = (docName: string) => {
    // For now we just alert, later replace with actual file URL
    alert(`Open or download ${docName}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">
          Upload Clinic Documents
        </h1>
        <p className="text-gray-600 mb-8">
          Upload PDF or DOCX files to begin your AI compliance scan.
        </p>

        {/* Drag & Drop / File Upload */}
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center cursor-pointer hover:border-[#5FA8D3] transition-colors">
          <label className="cursor-pointer">
            <input
              type="file"
              multiple
              className="hidden"
              onChange={handleFiles}
            />
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="text-6xl text-gray-300">📄</div>
              <div className="text-gray-700 font-medium">
                Drag & drop files here or click to select
              </div>
              <div className="text-sm text-gray-400">
                PDF or DOCX · Up to 10MB each
              </div>
            </div>
          </label>
        </div>

        {/* Uploaded Files List */}
        {files.length > 0 && (
          <div className="mt-8 bg-white rounded-xl border border-gray-200 p-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Files to Upload
            </h2>
            <ul className="space-y-2">
              {files.map((file, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center px-4 py-2 border border-gray-200 rounded-lg"
                >
                  <span className="text-sm text-gray-700">{file.name}</span>
                  <button
                    onClick={() => removeFile(index)}
                    className="text-sm font-medium text-red-500 hover:text-red-700 transition-colors"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          disabled={files.length === 0}
          onClick={uploadFiles}
          className={`mt-8 w-full py-3 rounded-lg font-semibold text-white transition-colors ${
            files.length === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-[#3B82A0] hover:bg-[#256B85]"
          }`}
        >
          Upload Documents
        </button>

        {/* Existing Documents */}
        {existingDocs.length > 0 && (
          <div className="mt-16">
            <h2 className="text-sm font-semibold text-gray-900 mb-4">
              Previously Uploaded Documents
            </h2>
            <div className="bg-gray-50 border border-gray-200 rounded-xl divide-y">
              {existingDocs.map((doc) => (
                <div
                  key={doc.document_id}
                  className="flex justify-between items-center px-4 py-3 text-sm hover:bg-gray-100 transition-colors rounded-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-gray-400 text-lg">
                      {doc.filename.endsWith(".pdf")
                        ? "📄"
                        : doc.filename.endsWith(".docx")
                          ? "📝"
                          : "📁"}
                    </div>
                    <div>
                      <div className="text-gray-800 font-medium">
                        {doc.filename}
                      </div>
                      <div className="text-gray-400 text-xs">
                        Uploaded{" "}
                        {new Date(doc.uploaded_at).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span
                      className={`px-2 py-1 text-xs rounded-full font-semibold transition-colors ${
                        doc.status === "Scanned"
                          ? "bg-green-100 text-green-800"
                          : doc.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {doc.status}
                    </span>

                    <button
                      onClick={() => viewDoc(doc.filename)}
                      className="text-sm text-[#3B82A0] font-semibold hover:underline transition-colors"
                    >
                      View
                    </button>

                    <button
                      onClick={() => confirmDeleteDoc(doc.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                      aria-label="Delete document"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Button */}
        <button
          disabled={files.length === 0}
          className={`mt-8 w-full py-3 rounded-lg font-semibold text-white transition-colors ${
            files.length === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-[#3B82A0] hover:bg-[#256B85]"
          }`}
        >
          Start Scan
        </button>

        {/* Info */}
        <p className="mt-4 text-gray-500 text-sm">
          ClinicGuard AI analyzes document structure and content to identify
          compliance gaps. No patient PHI is required.
        </p>
      </div>

      {/* Delete Confirmation Modal */}
      {docToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full text-center">
            <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this document? This action cannot
              be undone.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setDocToDelete(null)}
                className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={deleteDoc}
                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
