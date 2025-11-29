from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="NeuroPaint API",
    description="Backend API for NeuroPaint - AI Assisted Creative Canvas",
    version="0.1.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to NeuroPaint API", "status": "running"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}
