"use client";

import { useState } from "react";

export default function UploadPage() {
  const [files, setFiles] = useState<File[]>([]);

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFiles([...files, ...Array.from(e.target.files)]);
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
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
    </div>
  );
}
