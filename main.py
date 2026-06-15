from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import gspread
from oauth2client.service_account import ServiceAccountCredentials

app = FastAPI()

# CORS allow karein taake React aapka backend call kar sake
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_methods=["*"],
    allow_headers=["*"],
)

# Google Sheets Setup
scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]

# 'credentials.json' wahi file hai jiska naam aapne change kiya tha
creds = ServiceAccountCredentials.from_json_keyfile_name('credentials.json', scope)
client = gspread.authorize(creds)

@app.get("/api/data")
def get_sheet_data():
    # Aapki sheet ka sahi naam
    sheet = client.open("Unseen-Civ-Data").sheet1
    data = sheet.get_all_records()
    return {"data": data}