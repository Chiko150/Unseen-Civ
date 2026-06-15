# Unseen Civ Dashboard

Unseen Civ is a dynamic dashboard designed to visualize team status and operational data, integrated directly with Google Sheets.

## Project Overview
This dashboard fetches real-time data from a Google Sheet, allowing the team to maintain and update information seamlessly without touching the code.

## Key Features
- **Live Data Synchronization:** Automatically fetches and displays the latest status updates from your Google Sheet.
- **Data Analysis Interface:** Includes a built-in "View & Analyze" button that redirects users directly to the source Google Sheet for quick management.
- **Secure Configuration:** Sensitive credentials and spreadsheet identifiers are managed via environment variables to ensure security and scalability.

## Setup Instructions

### 1. Environment Configuration
To run this project locally, you need to set up your environment variables.
1. Create a file named `.env` in the root directory of this project.
2. Add the following content to the file:

```env
VITE_SHEET_ID=your_actual_sheet_id_here
VITE_GOOGLE_CLIENT_EMAIL=your_service_account_email_here
VITE_GOOGLE_PRIVATE_KEY="your_actual_private_key_here"