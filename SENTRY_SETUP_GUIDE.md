# Sentry Setup Guide for Team Sanjivani 4.0

This guide will walk you through setting up Sentry for real-time error tracking and performance monitoring for both your Backend (Node.js/Express) and Frontend (React/Vite).

---

## Phase 1: Create Sentry Account & Projects

1.  **Sign Up / Log In**:
    *   Go to [sentry.io](https://sentry.io/signup/).
    *   Create an account or log in.

2.  **Create Backend Project (Node.js)**:
    *   Click **"Create Project"**.
    *   **Platform**: Select **Node.js** (under "Server").
    *   **Alert Frequency**: Choose "Alert me on every new issue".
    *   **Project Name**: Enter `sanjivani-backend`.
    *   **Team**: Select or create a team (e.g., "Engineering").
    *   Click **"Create Project"**.
    *   **Copy DSN**: On the "Configure Node.js" page, look for your **DSN** (Client Key). It looks like `https://<key>@o<org>.ingest.sentry.io/<id>`.
    *   **Save this DSN** - you will need it for your server `.env`.

3.  **Create Frontend Project (React)**:
    *   Go back to the dashboard and click **"Create Project"** again.
    *   **Platform**: Select **React** (under "Browser").
    *   **Project Name**: Enter `sanjivani-frontend`.
    *   Click **"Create Project"**.
    *   **Copy DSN**: Copy the DSN for this frontend project. **It will be different from the backend DSN.**

---

## Phase 2: Backend Configuration (Already Implemented)

We have already installed the packages and added the code to `server.js`. You just need to add the DSN.

1.  **Update Environment Variable**:
    *   Open `d:\Sanjivani 4.0\server\.env`.
    *   Find `SENTRY_DSN=`.
    *   Paste your **Backend Project DSN** there.
    
    ```env
    SENTRY_DSN=https://your-backend-dsn-here@o0.ingest.sentry.io/0
    ```

2.  **Verify Backend Integration**:
    *   Restart your server: `npm run dev` (in `server/` directory).
    *   Trigger a test error (optional): You can temporarily add a route like `app.get('/debug-sentry', function mainHandler(req, res) { throw new Error('My first Sentry error!'); });` to `server.js` and hit it.

---

## Phase 3: Frontend Configuration (Action Required)

We need to add Sentry to your React frontend.

1.  **Install Sentry for React**:
    *   Open a terminal in the root directory (`d:\Sanjivani 4.0`).
    *   Run: `npm install @sentry/react --save`

2.  **Initialize Sentry in `main.tsx`**:
    *   We will edit `src/main.tsx` to initialize Sentry.

3.  **Add Error Boundary**:
    *   Wrap your app in an Error Boundary to catch crashes gracefully.

---

## Phase 4: Verification

1.  **Check Sentry Dashboard**:
    *   Go to your Sentry Dashboard.
    *   You should see "Issues" appearing if errors occur.
    *   Go to "Performance" to see transaction data (api calls, page loads).

---

**Ready to proceed with Phase 3 (Frontend Integration)? Say "Yes" and I will install the package and update your frontend code.**
