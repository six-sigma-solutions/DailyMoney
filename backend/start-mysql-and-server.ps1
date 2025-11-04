# MySQL Service Startup and Backend Server Script
# PowerShell version for better compatibility

Write-Host "========================================"  -ForegroundColor Cyan
Write-Host "     MySQL Service Startup Script"         -ForegroundColor Cyan  
Write-Host "========================================"  -ForegroundColor Cyan
Write-Host ""

Write-Host "[1/5] Checking for MySQL services..." -ForegroundColor Yellow
Write-Host ""

# Function to check if service exists
function Test-ServiceExists {
    param($ServiceName)
    try {
        $service = Get-Service -Name $ServiceName -ErrorAction Stop
        return $true
    }
    catch {
        return $false
    }
}

# Function to start MySQL service
function Start-MySQLService {
    param($ServiceName)
    
    try {
        $service = Get-Service -Name $ServiceName
        
        if ($service.Status -eq "Running") {
            Write-Host "✅ $ServiceName is already running!" -ForegroundColor Green
            return $true
        }
        
        Write-Host "Starting $ServiceName service..." -ForegroundColor Yellow
        Start-Service -Name $ServiceName -ErrorAction Stop
        Write-Host "✅ $ServiceName started successfully!" -ForegroundColor Green
        return $true
    }
    catch {
        Write-Host "❌ Failed to start $ServiceName" -ForegroundColor Red
        Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
        return $false
    }
}

# Check for different MySQL service names
$mysqlServices = @("MySQL80", "MySQL57", "MySQL", "mysqld", "MYSQL80", "MYSQL57", "MYSQL")
$foundService = $null

foreach ($serviceName in $mysqlServices) {
    if (Test-ServiceExists $serviceName) {
        Write-Host "✅ Found $serviceName service" -ForegroundColor Green
        $foundService = $serviceName
        break
    }
}

if (-not $foundService) {
    Write-Host "❌ No MySQL service found!" -ForegroundColor Red
    Write-Host ""
    Write-Host "📥 Install options:" -ForegroundColor Cyan
    Write-Host "   1. MySQL Official: https://dev.mysql.com/downloads/installer/" -ForegroundColor White
    Write-Host "   2. XAMPP: https://www.apachefriends.org/download.html" -ForegroundColor White
    Write-Host "   3. Chocolatey: choco install mysql" -ForegroundColor White
    Write-Host ""
    
    # Check for XAMPP
    if (Test-Path "C:\xampp\mysql\bin\mysqld.exe") {
        Write-Host "✅ Found XAMPP MySQL!" -ForegroundColor Green
        Write-Host "Please start MySQL from XAMPP Control Panel" -ForegroundColor Yellow
    }
    
    Write-Host "Press any key to exit..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
}

Write-Host ""
Write-Host "[2/5] Starting MySQL service..." -ForegroundColor Yellow
Write-Host ""

$serviceStarted = Start-MySQLService $foundService

if (-not $serviceStarted) {
    Write-Host ""
    Write-Host "🔧 SOLUTION: Run PowerShell as Administrator" -ForegroundColor Cyan
    Write-Host "   1. Press Win + X" -ForegroundColor White
    Write-Host "   2. Select 'Windows PowerShell (Admin)'" -ForegroundColor White
    Write-Host "   3. Navigate to: C:\Users\cpdia\Desktop\web1\DailyMoney\backend" -ForegroundColor White
    Write-Host "   4. Run: .\start-mysql-and-server.ps1" -ForegroundColor White
    Write-Host ""
    Write-Host "Press any key to exit..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
}

Write-Host ""
Write-Host "[3/5] Testing MySQL connection..." -ForegroundColor Yellow
Write-Host ""

# Test MySQL connection
try {
    $testResult = & mysql -u root -p"Pondy@2025" -e "SELECT 'Connection successful!' as status;" 2>$null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ MySQL connection successful!" -ForegroundColor Green
    } else {
        Write-Host "⚠️  MySQL is running but connection failed" -ForegroundColor Yellow
        Write-Host "   Password in .env: Pondy@2025" -ForegroundColor White
    }
}
catch {
    Write-Host "⚠️  Could not test MySQL connection (mysql command not in PATH)" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "[4/5] Initializing database..." -ForegroundColor Yellow
Write-Host ""

# Initialize database
if (Get-Command node -ErrorAction SilentlyContinue) {
    Write-Host "Running database initialization..." -ForegroundColor White
    & node run-init.js
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Database initialized successfully!" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Database initialization had issues" -ForegroundColor Yellow
    }
} else {
    Write-Host "❌ Node.js not found - please install Node.js" -ForegroundColor Red
}

Write-Host ""
Write-Host "[5/5] Starting backend server..." -ForegroundColor Yellow
Write-Host ""

# Start backend server
if (Get-Command node -ErrorAction SilentlyContinue) {
    Write-Host "🚀 Starting backend server..." -ForegroundColor Green
    Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Cyan
    Write-Host ""
    
    & node index.js
} else {
    Write-Host "❌ Cannot start server - Node.js not available" -ForegroundColor Red
}

Write-Host ""
Write-Host "========================================"  -ForegroundColor Cyan
Write-Host "Script completed."                         -ForegroundColor Cyan
Write-Host "========================================"  -ForegroundColor Cyan