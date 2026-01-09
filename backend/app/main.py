from fastapi import FastAPI

app = FastAPI(title="ClinicGuard AI")

@app.get("/")
def health():
    return {"status": "ok"}