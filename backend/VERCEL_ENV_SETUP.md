# 🔧 Vercel Environment Variables Setup Guide

## ❌ Command Line Issue
You tried to set environment variables in PowerShell with:
```
DB_PORT=3306
NODE_ENV=production
```
This doesn't work in PowerShell. Environment variables need to be set in Vercel Dashboard.

## ✅ Correct Way: Use Vercel Dashboard

### Step 1: Go to Vercel Dashboard
1. Visit: https://vercel.com/dashboard
2. Find your project: `daily-money-backend`
3. Click on the project

### Step 2: Access Settings
1. Click **Settings** tab
2. Click **Environment Variables** in the sidebar

### Step 3: Add Each Variable
Click **"Add"** button and enter these **ONE BY ONE**:

```
Name: DB_HOST
Value: mysql.railway.internal

Name: DB_USER  
Value: root

Name: DB_PASS
Value: BhpHYwtArdQwuggPMReRiZXCFtqtayjg

Name: DB_NAME
Value: railway

Name: DB_PORT
Value: 3306

Name: NODE_ENV
Value: production

Name: JWT_SECRET
Value: Jegan@2025secretkey

Name: FRONTEND_URL
Value: https://daily-money.vercel.app
```

### Step 4: Select Environment
For each variable, select:
- ✅ **Production**
- ✅ **Preview** 
- ✅ **Development**

### Step 5: Save
Click **"Add"** for each variable.

---

## 🚀 After Setting Variables

### Deploy Again
```powershell
vercel --prod
```

### Check Deployment
- Vercel will show you the deployment URL
- Test the API: `https://your-backend-url.vercel.app/`

---

## 🧪 Test Production API

```javascript
// Test contact form submission
fetch('https://your-backend-url.vercel.app/api/enquiries', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Production Test',
    email: 'test@production.com',
    phone: '+91 9876543210',
    company: 'Test Company',
    message: 'Testing production deployment'
  })
})
.then(res => res.json())
.then(data => console.log('Success:', data))
.catch(err => console.error('Error:', err));
```

---

## 💡 Important Notes

1. **Don't set environment variables in command line** - use Vercel Dashboard
2. **Use `mysql.railway.internal`** for production (not the external hostname)
3. **Use port `3306`** for production (not 44210)
4. **Railway provides internal networking** for Vercel deployments

**Vercel dashboard-ல போய் environment variables-a set பண்ணுங்க, அப்புறம் deploy பண্ணுங்க!** 🎯