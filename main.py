import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import gspread
from oauth2client.service_account import ServiceAccountCredentials
from dotenv import load_dotenv

# .env file load karein
load_dotenv()

app = FastAPI()

# .env se allowed origins utha rahe hain
# Agar .env mein nahi milega toh default empty list hogi
origins = os.getenv("ALLOWED_ORIGINS", "").split(",")

# CORS configuration (ab dynamic hai)
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins, 
    allow_methods=["*"],
    allow_headers=["*"],
)

# Google Sheets Setup
scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]

# 'credentials.json' wahi file hai
creds = ServiceAccountCredentials.from_json_keyfile_name('credentials.json', scope)
client = gspread.authorize(creds)

@app.get("/api/data")
def get_sheet_data():
    # Aapki sheet ka sahi naam
    sheet = client.open("Unseen-Civ-Data").sheet1
    data = sheet.get_all_records()
    return {"data": data}