from pathlib import Path
from llama_index.core import VectorStoreIndex, StorageContext
from llama_index.vector_stores.faiss import FaissVectorStore
from llama_index.embeddings.openai import OpenAIEmbedding
import faiss

VECTOR_STORE_DIR = Path("data/vector_store")

def get_or_create_index(clinic_id, nodes=None):
    clinic_dir = Path(f"data/vector_store/clinic_{clinic_id}")
    clinic_dir.mkdir(parents=True, exist_ok=True)

    faiss_path = clinic_dir / "index.faiss"

    embed_model = OpenAIEmbedding(model="text-embedding-3-small")

    if faiss_path.exists():
        faiss_index = faiss.read_index(str(faiss_path))
        vector_store = FaissVectorStore(faiss_index=faiss_index)
        storage_context = StorageContext.from_defaults(
            vector_store=vector_store
        )
        return VectorStoreIndex.from_vector_store(
            vector_store,
            embed_model=embed_model
        )

    # Create new index
    faiss_index = faiss.IndexFlatL2(1536)
    vector_store = FaissVectorStore(faiss_index=faiss_index)
    storage_context = StorageContext.from_defaults(
        vector_store=vector_store
    )

    index = VectorStoreIndex(
        nodes,
        storage_context=storage_context,
        embed_model=embed_model
    )

    faiss.write_index(faiss_index, str(faiss_path))
    return index
