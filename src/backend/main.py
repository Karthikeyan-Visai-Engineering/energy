from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

# Define a Pydantic model to validate the request body
class ContactForm(BaseModel):
    name: str
    email: str
    subject: str
    message: str

@app.post("/contact/")
async def submit_contact_form(form_data: ContactForm):
    # Simulate storing data (e.g., save to database or send an email)
    print("Received Contact Form:", form_data.dict())

    return {"message": "Form submitted successfully!"}

# Root endpoint (optional)
@app.get("/")
def home():
    return {"message": "FastAPI Contact Form Backend Running!"}
