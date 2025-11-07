# 🚀 Production Database Setup for Vercel Deployment

## 🎯 **Current Issue:**
- Your backend is deployed on Vercel but needs a cloud database
- Local MySQL doesn't work in production
- Contact form data won't save without proper database

## ✅ **SOLUTION: Set up Cloud MySQL Database**

### Option 1: PlanetScale (FREE & Recommended) ⭐

1. **Sign Up**: Go to https://planetscale.com
2. **Create Database**:
   - Database name: `dailymoney-contacts`
   - Region: Choose nearest to your users
3. **Get Connection Details**:
   - Host: `your-db.psdb.cloud`
   - Username: `your-username`  
   - Password: `your-password`

4. **Add Environment Variables in Vercel**:
   ```
   DB_HOST=your-planetscale-host.psdb.cloud
   DB_USER=your-planetscale-username
   DB_PASS=your-planetscale-password
   DB_NAME=dailymoney-contacts
   NODE_ENV=production
   JWT_SECRET=your-super-secret-jwt-key-2024
   FRONTEND_URL=https://daily-money.vercel.app
   ```

### Option 2: Railway (Easy Setup) 🚂

1. **Sign Up**: Go to https://railway.app
2. **Create MySQL Database**:
   - Click "New Project" → "Provision MySQL"
3. **Get Connection String**:
   - Copy the connection details
4. **Add to Vercel Environment Variables**

### Option 3: Aiven (Good Free Tier) ☁️

1. **Sign Up**: Go to https://aiven.io
2. **Create MySQL Service**:
   - Choose free tier
   - Select region
3. **Configure Connection**

---

## 🔧 **Step-by-Step Vercel Environment Setup:**

### 1. Go to Vercel Dashboard
- Visit: https://vercel.com/dashboard
- Select your backend project: `daily-money-backend`

### 2. Add Environment Variables
- Go to **Settings** → **Environment Variables**
- Add these variables:

```env
DB_HOST=your-cloud-database-host
DB_USER=your-database-username  
DB_PASS=your-database-password
DB_NAME=dailymoney_contacts
NODE_ENV=production
JWT_SECRET=dailymoney_super_secret_key_change_in_production_2024
FRONTEND_URL=https://daily-money.vercel.app
PORT=4000
```

### 3. Initialize Cloud Database
After setting up cloud database, run this SQL:

```sql
CREATE DATABASE IF NOT EXISTS dailymoney_contacts;

USE dailymoney_contacts;

CREATE TABLE IF NOT EXISTS enquiries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
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
  is_verified BOOLEAN DEFAULT FALSE,
  verification_token VARCHAR(255),
  reset_token VARCHAR(255),
  reset_token_expiry DATETIME,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS user_sessions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  session_token VARCHAR(255) NOT NULL,
  expires_at DATETIME NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

---

## 🎯 **Expected Result After Setup:**

✅ **Other users can submit contact forms**  
✅ **Data gets saved to cloud database**  
✅ **Backend works from any computer**  
✅ **Production-ready deployment**

---

## 🚀 **Quick Test After Setup:**

1. **Test Contact API**:
   ```javascript
   fetch('https://your-backend.vercel.app/api/enquiries', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       name: 'Test User',
       email: 'test@example.com',
       phone: '+91 9876543210',
       company: 'Test Company',
       message: 'Test from production'
     })
   })
   ```

2. **Check Recent Enquiries**:
   ```
   GET https://your-backend.vercel.app/api/enquiries/recent
   ```

---

## ⚡ **Immediate Action Required:**

1. Choose a cloud database provider (PlanetScale recommended)
2. Set up the database
3. Add environment variables to Vercel
4. Redeploy your backend
5. Test contact form functionality

**அப்புறம் உங்க contact form எல்லா users-க்கும் perfect-ஆ work ஆகும்!** 🎉