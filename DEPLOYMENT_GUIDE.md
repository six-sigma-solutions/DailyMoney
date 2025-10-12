# 🚀 Vercel Deployment Guide for DailyMoney

## Problem Solved
Your contact form works locally but fails for other users because:
- Backend runs on localhost (only accessible from your computer)
- Database is local MySQL (not accessible from cloud)
- Frontend tries to connect to local IP (192.168.1.10:4000)

## Solution: Deploy to Vercel

### Step 1: Setup Cloud Database (Choose One)

#### Option A: PlanetScale (Recommended - Free MySQL)
1. Go to https://planetscale.com/
2. Sign up and create a new database
3. Get connection details from dashboard

#### Option B: Railway (Easy setup)
1. Go to https://railway.app/
2. Create MySQL database
3. Copy connection string

#### Option C: Aiven (Free tier available)
1. Go to https://aiven.io/
2. Create MySQL service
3. Get connection details

### Step 2: Deploy Backend

1. **Navigate to backend folder:**
   ```powershell
   cd backend
   ```

2. **Login to Vercel:**
   ```powershell
   vercel login
   ```

3. **Deploy backend:**
   ```powershell
   vercel
   ```
   - Choose "Link to existing project?" → No
   - Project name: `dailymoney-backend`
   - Select backend directory

4. **Set Environment Variables in Vercel Dashboard:**
   - Go to https://vercel.com/dashboard
   - Select your backend project
   - Go to Settings → Environment Variables
   - Add these variables:
     ```
     DB_HOST=your-cloud-db-host
     DB_USER=your-db-username
     DB_PASS=your-db-password
     DB_NAME=dailymoney_contacts
     NODE_ENV=production
     FRONTEND_URL=https://your-frontend-url.vercel.app
     ```

### Step 3: Create Database Tables

Create these tables in your cloud database:

```sql
CREATE DATABASE IF NOT EXISTS dailymoney_contacts;

USE dailymoney_contacts;

CREATE TABLE IF NOT EXISTS enquiries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  phone VARCHAR(20),
  company VARCHAR(100),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  full_name VARCHAR(100),
  phone VARCHAR(20),
  verification_token VARCHAR(255),
  is_verified BOOLEAN DEFAULT FALSE,
  reset_token VARCHAR(255),
  reset_token_expires DATETIME,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Step 4: Deploy Frontend

1. **Navigate back to root:**
   ```powershell
   cd ..
   ```

2. **Update .env with your backend URL:**
   ```
   VITE_API_URL=https://your-backend-name.vercel.app
   ```

3. **Deploy frontend:**
   ```powershell
   vercel
   ```
   - Choose "Link to existing project?" → No
   - Project name: `dailymoney-frontend`

### Step 5: Update CORS Settings

Update your backend's FRONTEND_URL environment variable in Vercel dashboard to your frontend URL.

### Step 6: Test Your Deployment

1. Visit your frontend URL
2. Try the contact form
3. Check if data is saved in your cloud database

## 🎉 Success!

Your contact form will now work for all users worldwide!

## Quick Commands Reference

```powershell
# Deploy backend
cd backend
vercel --prod

# Deploy frontend  
cd ..
vercel --prod

# View deployments
vercel list
```

## Troubleshooting

If contact form still fails:
1. Check Vercel function logs in dashboard
2. Verify environment variables are set
3. Test API endpoint directly: https://your-backend.vercel.app/api/enquiries/recent
4. Check database connection in cloud provider dashboard