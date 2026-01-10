export async function uploadDocument(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upload`, {
        method: "POST",
        body: formData,
    });

    if (!res.ok) throw new Error("Upload failed");
    return res.json();
}