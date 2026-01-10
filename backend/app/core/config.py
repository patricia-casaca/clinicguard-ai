# Why this file exists

# This becomes your single source of truth for configuration.

# Later you’ll add:

# database URLs

# environment flags (dev/prod)

# storage paths

# But everything imports from here, not directly from .env.

import os
from dotenv import load_dotenv

load_dotenv()  # reads backend/.env

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

if not OPENAI_API_KEY:
    raise ValueError("OPENAI_API_KEY is not set")
