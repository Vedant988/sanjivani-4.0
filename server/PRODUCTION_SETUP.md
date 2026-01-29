# Production Deployment Checklist & Configuration Guide

## 1. MongoDB Atlas Production Setup
- [ ] **Create Project**: Create a new Project in Atlas named "Sanjivani-Prod"
- [ ] **Create Cluster**: Deploy a dedicated cluster (M10 or higher recommended for prod, M0 for low traffic)
- [ ] **Network Access**: Whitelist only your production server IP (or 0.0.0.0/0 if using dynamic IPs, but less secure)
- [ ] **Database User**: Create a new database user with `readWrite` role specifically for the `sanjivani_prod` database
- [ ] **Connection String**: Get the SRV connection string
- [ ] **Update .env**:
  ```env
  MONGODB_URI=mongodb+srv://<prod_user>:<prod_pass>@<prod-cluster>.mongodb.net/sanjivani_prod?retryWrites=true&w=majority
  ```

## 2. Domain & CORS Configuration
- [ ] **Purchase Domain**: Buy `yourdomain.com` (if not owned)
- [ ] **DNS Records**:
  - A Record: `@` -> Server IP
  - CNAME: `www` -> `yourdomain.com`
  - CNAME: `api` -> Server IP (or separate subdomain for backend)
- [ ] **Update .env**:
  ```env
  FRONTEND_URL=https://www.yourdomain.com
  ADMIN_URL=https://admin.yourdomain.com
  ```
- [ ] **Verify CORS**: Ensure `server.js` allowedOrigins array includes ONLY these production domains.

## 3. Sentry Setup
- [ ] **Create Account**: Sign up at sentry.io
- [ ] **Create Project**: Create a "Node.js" project
- [ ] **Get DSN**: Copy the Client Key (DSN)
- [ ] **Update .env**:
  ```env
  SENTRY_DSN=https://xxxxxxxx@o0.ingest.sentry.io/0
  ```

## 4. Admin Credentials
- [ ] **Generate Secure Password**: Use a password manager to generate a 32+ char password
- [ ] **Update .env**:
  ```env
  ADMIN_EMAIL=real-admin-email@sanjivani.com
  ADMIN_PASSWORD=<generated-secure-password>
  ```

## 5. Backup & Restore Verification
- [ ] **Configure Atlas Backups**: Enable Cloud Backups in Atlas (usually on by default for paid tiers)
- [ ] **Run Verification Script**:
  ```bash
  cd server
  node scripts/verify-backup.js
  ```
- [ ] **Test Restore**: Once a month, restore a backup to a temporary cluster to verify integrity.

## 6. HTTPS & HSTS Configuration
- [ ] **SSL Certificate**: Use Certbot (Let's Encrypt) on your server:
  ```bash
  sudo certbot --nginx -d yourdomain.com -d api.yourdomain.com
  ```
- [ ] **HSTS**: The backend `helmet()` configuration already enables HSTS. Ensure your reverse proxy (Nginx/Apache) also sends:
  ```nginx
  add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
  ```

## 7. Final Production .env Template
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://prod_user:prod_pass@prod-cluster.mongodb.net/sanjivani_prod
FRONTEND_URL=https://www.sanjivani.com
ADMIN_URL=https://admin.sanjivani.com
JWT_SECRET=<generate-random-64-char-string>
JWT_EXPIRE=12h
ADMIN_EMAIL=admin@sanjivani.com
ADMIN_PASSWORD=<secure-password>
SENTRY_DSN=https://<key>@sentry.io/<id>
```