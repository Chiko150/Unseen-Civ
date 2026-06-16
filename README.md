# Unseen Civ Dashboard

Unseen Civ is a dynamic dashboard designed to visualize team status and operational data, integrated directly with Google Sheets.

## Project Overview
This dashboard fetches real-time data from a Google Sheet, allowing the team to maintain and update information seamlessly without touching the code.

## Key Features
- **Live Data Synchronization:** Automatically fetches and displays the latest status updates from your Google Sheet.
- **Secure Configuration:** Sensitive credentials and spreadsheet identifiers are managed via `.env` files for security.
- **Dynamic CORS:** Secure cross-origin resource sharing configured for seamless communication between frontend and backend.

---

## 🚀 Setup Instructions (A to Z)

Follow these steps to set up and run the project locally.

### 1. Prerequisites
Ensure you have the following installed on your computer:
* [Node.js](https://nodejs.org/) (for Frontend)
* [Python](https://www.python.org/) (for Backend)

### 2. Project Setup
1.  **Clone the repository:**
```bash
    git clone <your-repository-url>
    cd my-optimized-app
    ```

2.  **Environment Variables:**
    Create a file named `.env` in the root directory and add the following:
```env
    ALLOWED_ORIGINS=http://localhost:5173
    ```

3.  **Google API Setup:**
    * Get your **Google Service Account** JSON file.
    * Rename it to `credentials.json` and place it in the **root directory**.

### 3. Backend Setup
1.  **Install dependencies:**
```bash
    pip install fastapi uvicorn gspread oauth2client python-dotenv
    ```
2.  **Run the Backend server:**
```bash
    python -m uvicorn main:app --reload
    ```

### 4. Frontend Setup
1.  **Install dependencies:**
```bash
    npm install
    ```
2.  **Run the Frontend server:**
```bash
    npm run dev
    ```

---

## How it Works
1.  **Frontend** sends a request to the **FastAPI Backend**.
2.  **Backend** validates the request using **CORS** settings.
3.  **Backend** authenticates with **Google Sheets** using the `credentials.json` file.
4.  **Google Sheets** returns the data, which is then rendered on the **Dashboard**.