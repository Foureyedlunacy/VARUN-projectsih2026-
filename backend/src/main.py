from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
app =FastAPI()

@app.get(path="/")
async def home():
    return {"message":"VARUN"}

origins = [
    "https://varun-projectsih2026-1.onrender.com",  
    "http://localhost:5173",                        
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


if __name__=="__main__":
    uvicorn.run(app="main:app", host="localhost",port= 8085,reload=True)

