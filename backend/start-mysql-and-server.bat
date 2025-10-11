@echo off
echo ========================================
echo     MySQL Service Startup Script
echo ========================================
echo.

echo [1/5] Checking for MySQL services...
echo.

rem Check for different MySQL service names
set MYSQL_SERVICE_FOUND=0

echo Checking for MySQL80...
sc query MySQL80 >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Found MySQL80 service
    set MYSQL_SERVICE=MySQL80
    set MYSQL_SERVICE_FOUND=1
    goto :start_service
)

echo Checking for MySQL57...
sc query MySQL57 >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Found MySQL57 service
    set MYSQL_SERVICE=MySQL57
    set MYSQL_SERVICE_FOUND=1
    goto :start_service
)

echo Checking for MySQL...
sc query MySQL >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Found MySQL service
    set MYSQL_SERVICE=MySQL
    set MYSQL_SERVICE_FOUND=1
    goto :start_service
)

echo Checking for mysqld...
sc query mysqld >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Found mysqld service
    set MYSQL_SERVICE=mysqld
    set MYSQL_SERVICE_FOUND=1
    goto :start_service
)

if %MYSQL_SERVICE_FOUND% equ 0 (
    echo ❌ No MySQL service found!
    echo.
    echo 📥 Please install MySQL first:
    echo    1. Download MySQL from: https://dev.mysql.com/downloads/installer/
    echo    2. Or install XAMPP: https://www.apachefriends.org/download.html
    echo    3. Or install MySQL via Chocolatey: choco install mysql
    echo.
    echo 🔍 Checking for XAMPP...
    if exist "C:\xampp\mysql\bin\mysqld.exe" (
        echo ✅ Found XAMPP MySQL! Starting XAMPP MySQL...
        "C:\xampp\mysql\bin\mysqld.exe" --defaults-file="C:\xampp\mysql\bin\my.ini" --standalone --console
        goto :end
    )
    echo ❌ XAMPP MySQL not found either
    goto :end
)

:start_service
echo.
echo [2/5] Attempting to start %MYSQL_SERVICE% service...
echo.

rem Check if already running
sc query %MYSQL_SERVICE% | findstr "RUNNING" >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ %MYSQL_SERVICE% is already running!
    goto :test_connection
)

echo Starting %MYSQL_SERVICE% service...
net start %MYSQL_SERVICE% 2>nul
if %errorlevel% equ 0 (
    echo ✅ %MYSQL_SERVICE% started successfully!
    goto :test_connection
) else (
    echo ❌ Failed to start %MYSQL_SERVICE% (need admin privileges)
    echo.
    echo 🔧 SOLUTION: Run this script as Administrator
    echo    1. Right-click on this file
    echo    2. Select "Run as administrator"
    echo.
    goto :end
)

:test_connection
echo.
echo [3/5] Testing MySQL connection...
echo.

rem Test MySQL connection
mysql -u root -p"Pondy@2025" -e "SELECT 'MySQL connection successful!' as status;" 2>nul
if %errorlevel% equ 0 (
    echo ✅ MySQL connection successful!
) else (
    echo ⚠️  MySQL is running but connection failed
    echo    This might be due to wrong password or MySQL not fully started
    echo    Current password in .env: Pondy@2025
)

echo.
echo [4/5] Initializing database...
echo.

rem Initialize database if Node.js is available
where node >nul 2>&1
if %errorlevel% equ 0 (
    echo Running database initialization...
    node run-init.js
    if %errorlevel% equ 0 (
        echo ✅ Database initialized successfully!
    ) else (
        echo ⚠️  Database initialization had issues
    )
) else (
    echo ❌ Node.js not found - please install Node.js
)

echo.
echo [5/5] Starting backend server...
echo.

rem Start the backend server
where node >nul 2>&1
if %errorlevel% equ 0 (
    echo Starting backend server...
    echo Press Ctrl+C to stop the server
    echo.
    node index.js
) else (
    echo ❌ Cannot start server - Node.js not available
)

:end
echo.
echo ========================================
echo Script completed. Check messages above.
echo ========================================
pause