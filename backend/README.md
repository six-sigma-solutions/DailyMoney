Setup and run the backend (PowerShell) — assumes MySQL is installed locally.

1) Create the database and table using the provided SQL (powershell):

```powershell
# open mysql cli (you will be prompted for the password)
mysql -u root -p

# then in mysql CLI paste or run the contents of init.sql
SOURCE C:\Users\admin\Desktop\cpv\DailyMoney\backend\init.sql;

# Or run directly from PowerShell (replace password if needed):
mysql -u root -pJegan@2025 < "C:\Users\admin\Desktop\cpv\DailyMoney\backend\init.sql"
```

2) Start the backend server:

```powershell
cd C:\Users\admin\Desktop\cpv\DailyMoney\backend
npm install
copy .env.example .env
# edit .env if you want to change credentials
npm run dev
```

The server will listen on PORT (default 4000). Endpoints:
- POST /api/enquiries   (body: {name,email,phone,company,message})
- GET  /api/enquiries/recent  (returns 3 most recent enquiries)
