# Duracool Website (React + Vite + TypeScript)

Custom website for a car detailing brand focused on window and sun protection films.

## Included Sections

- Home
- About Us (Vision, Mission, company details, owner details)
- Awards (dummy images + descriptions)
- Products (description + before/after images)
- Contact Us (Instagram, WhatsApp, Facebook)
- Booking Form (connected to Google Sheets through Apps Script webhook)
- Footer with all page links and copyright line

## Theme Direction

- Primary palette inspired by provided logo: orange, white, black, grey
- Responsive layout for desktop and mobile
- Sticky header and smooth scroll navigation

## Run Locally

```bash
npm install
npm run dev
```

Build production bundle:

```bash
npm run build
```

## Environment Setup

1. Copy `.env.example` to `.env`.
2. Update values as needed.
3. Restart dev server after `.env` changes.

Main key for booking integration:

- `VITE_BOOKING_SCRIPT_URL` = deployed Google Apps Script Web App URL

## Replace Images Later

Put your real files inside `public/images` and update `.env` paths if required.

Current placeholders:

- `logo-placeholder.svg`
- `award-1-placeholder.svg`
- `award-2-placeholder.svg`
- `award-3-placeholder.svg`
- `product-1-before.svg`
- `product-1-after.svg`
- `product-2-before.svg`
- `product-2-after.svg`

## Google Sheets Booking Integration

Apps Script template is available in `apps-script/Code.gs`.

### Full Setup (Step-by-Step)

1. Create a Google Sheet.
2. Rename first sheet tab to `Appointments` (or keep default; script creates `Appointments` automatically).
3. Open Extensions -> Apps Script.
4. Replace default code with the content from `apps-script/Code.gs`.
5. Save the project.
6. Deploy as Web App:
   - Click Deploy -> New deployment.
   - Type: `Web app`.
   - Execute as: `Me`.
   - Who has access: `Anyone`.
   - Click Deploy and authorize permissions.
7. Copy the Web App URL (it ends with `/exec`).
8. In this project, create/update `.env`:

```bash
VITE_BOOKING_SCRIPT_URL=https://script.google.com/macros/s/XXXXXXXXXXXX/exec
```

9. Restart Vite dev server after env changes:

```bash
npm run dev
```

### How Booking Data Flows

1. User submits form on Booking page.
2. Frontend sends POST request to `VITE_BOOKING_SCRIPT_URL`.
3. Apps Script `doPost` appends a row to `Appointments`.
4. Google Sheet gets these columns:
   - Timestamp
   - Name
   - Phone
   - Car Model
   - Product
   - Preferred Date
   - Preferred Time
   - Message
   - Submitted At (ISO)
   - Source

### Verify It Is Working

1. Run site locally and submit Booking form once.
2. Open Google Sheet and check new row in `Appointments`.
3. If row does not appear:
   - Confirm `.env` has correct `/exec` URL (not `/dev`).
   - Confirm deployment access is `Anyone`.
   - Redeploy after Apps Script edits: Deploy -> Manage deployments -> Edit -> Deploy.
   - Restart frontend server after `.env` updates.
