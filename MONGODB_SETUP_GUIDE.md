# MongoDB Atlas Production Setup Guide

This guide will walk you through setting up a secure, production-ready MongoDB Atlas cluster for Team Sanjivani 4.0.

---

## Phase 1: Create Account & Project

1.  **Log In**:
    *   Go to [cloud.mongodb.com](https://cloud.mongodb.com/).
    *   Log in with your credentials.

2.  **Create New Project**:
    *   Click the dropdown menu in the top-left (showing your current project name).
    *   Click **"New Project"**.
    *   **Name**: Enter `Sanjivani-Prod`.
    *   Click **"Next"** -> **"Create Project"**.

---

## Phase 2: Deploy Production Cluster

1.  **Build a Database**:
    *   Click the green **"+ Create"** button.

2.  **Choose Configuration**:
    *   **Cluster Type**:
        *   **M0 Sandbox** (Free): Good for testing, but has limits (512MB storage, shared CPU).
        *   **M10+** (Paid): Recommended for **Production**. Includes backups, dedicated resources, and no sleep mode.
    *   **Provider**: Choose AWS (recommended), Google Cloud, or Azure.
    *   **Region**: Select the region closest to your users (e.g., `mumbai` for India).
    *   **Name**: Change "Cluster0" to `sanjivani-prod-cluster`.

3.  **Deploy**:
    *   Click **"Create Deployment"**.
    *   Wait 3-5 minutes for the cluster to provision.

---

## Phase 3: Security Configuration (Critical)

1.  **Create Database User**:
    *   You will be prompted to "Set up authentication".
    *   **Username**: `sanjivani_admin` (or similar).
    *   **Password**: Click "Autogenerate Secure Password". **COPY THIS IMMEDIATELY**.
    *   **Role**: Ensure "Read and write to any database" is selected (or configure specific privileges later).
    *   Click **"Create Database User"**.

2.  **Network Access (IP Whitelist)**:
    *   **Option A (Static IP - Most Secure)**: If your hosting provider (e.g., DigitalOcean, AWS EC2) gives you a static IP, enter that IP address.
    *   **Option B (Dynamic/Shared - Easier)**: If you are using Vercel/Heroku/Render or don't have a static IP, click **"Allow Access from Anywhere"** (`0.0.0.0/0`).
        *   *Note: While less secure, this is often necessary for PaaS hosting. Your strong password is your primary defense.*
    *   Click **"Add IP Address"**.

---

## Phase 4: Get Connection String

1.  **Connect**:
    *   On the Database Deployments page, click **"Connect"** on your new cluster.

2.  **Choose Driver**:
    *   Select **"Drivers"**.
    *   **Driver**: Node.js.
    *   **Version**: 5.5 or later.

3.  **Copy String**:
    *   Copy the connection string. It will look like:
        `mongodb+srv://sanjivani_admin:<password>@sanjivani-prod-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority`

---

## Phase 5: Update Application

1.  **Update `.env`**:
    *   Open `d:\Sanjivani 4.0\server\.env`.
    *   Replace the `MONGODB_URI` value with your new connection string.
    *   **Important**: Replace `<password>` with the password you generated in Phase 3.
    *   **Important**: Add the database name `/sanjivani_prod` before the `?`.

    **Example**:
    ```env
    MONGODB_URI=mongodb+srv://sanjivani_admin:MySecurePassword123@sanjivani-prod-cluster.abcde.mongodb.net/sanjivani_prod?retryWrites=true&w=majority
    ```

2.  **Verify Connection**:
    *   Restart your server: `npm run dev`.
    *   Check the console for: `✅ MongoDB Connected: ...` and `📊 Database: sanjivani_prod`.

---

## Phase 6: Backup Configuration (If using Paid Tier)

1.  **Enable Backups**:
    *   Go to **"Backup"** tab in your cluster view.
    *   Ensure "Cloud Backups" is enabled.
    *   Configure your snapshot schedule (e.g., Daily).

2.  **Test Restore**:
    *   Run the verification script we created:
        ```bash
        cd server
        node scripts/verify-backup.js
        ```
