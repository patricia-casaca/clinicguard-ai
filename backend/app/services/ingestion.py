from llama_index.core import SimpleDirectoryReader
from llama_index.core.node_parser import SentenceSplitter
from pathlib import Path

def load_and_chunk(file_path, clinic_id, document_id):
    file_path = Path(file_path)
    documents = SimpleDirectoryReader(
        input_files=[str(file_path)]
    ).load_data()

    for doc in documents:
        doc.metadata = {
            "clinic_id": clinic_id,
            "document_id": document_id,
            "filename": file_path.name
        }

    splitter = SentenceSplitter(chunk_size=512, chunk_overlap=50)
    nodes = splitter.get_nodes_from_documents(documents)

    return nodes
