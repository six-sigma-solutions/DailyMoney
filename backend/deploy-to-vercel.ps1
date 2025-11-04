# Vercel Deployment Script for DailyMoney Backend
# Run this after setting up cloud database

Write-Host "🚀 Deploying DailyMoney Backend to Vercel..." -ForegroundColor Cyan
Write-Host ""

# Check if vercel CLI is installed
if (-not (Get-Command vercel -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Vercel CLI not found. Installing..." -ForegroundColor Red
    npm install -g vercel
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Failed to install Vercel CLI. Please run: npm install -g vercel" -ForegroundColor Red
        exit 1
    }
}

# Navigate to backend directory
$backendPath = "C:\Users\cpdia\Desktop\web1\DailyMoney\backend"
Set-Location $backendPath

Write-Host "✅ Current directory: $PWD" -ForegroundColor Green

# Check if .env file exists for reference
if (Test-Path ".env") {
    Write-Host "📄 Found .env file - remember to set these in Vercel dashboard:" -ForegroundColor Yellow
    Write-Host ""
    Get-Content .env | Where-Object { $_ -notmatch "^#" -and $_ -match "=" } | ForEach-Object {
        Write-Host "   $_" -ForegroundColor White
    }
    Write-Host ""
} else {
    Write-Host "⚠️  No .env file found - make sure to set environment variables in Vercel" -ForegroundColor Yellow
}

# Show required environment variables
Write-Host "🔧 Required Environment Variables in Vercel Dashboard:" -ForegroundColor Cyan
Write-Host "   DB_HOST=your-cloud-database-host" -ForegroundColor White
Write-Host "   DB_USER=your-database-username" -ForegroundColor White  
Write-Host "   DB_PASS=your-database-password" -ForegroundColor White
Write-Host "   DB_NAME=dailymoney_contacts" -ForegroundColor White
Write-Host "   NODE_ENV=production" -ForegroundColor White
Write-Host "   JWT_SECRET=your-super-secret-key" -ForegroundColor White
Write-Host "   FRONTEND_URL=https://daily-money.vercel.app" -ForegroundColor White
Write-Host ""

# Ask for confirmation
$response = Read-Host "Have you set up cloud database and environment variables? (y/n)"
if ($response -ne "y" -and $response -ne "Y") {
    Write-Host "❌ Please set up cloud database first. Check PRODUCTION_DATABASE_SETUP.md" -ForegroundColor Red
    exit 1
}

Write-Host "🚀 Starting deployment..." -ForegroundColor Green

# Deploy to Vercel
vercel --prod

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "🎉 Deployment successful!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📝 Next steps:" -ForegroundColor Cyan
    Write-Host "1. Test your contact form: https://daily-money.vercel.app" -ForegroundColor White
    Write-Host "2. Check backend health: https://your-backend.vercel.app" -ForegroundColor White
    Write-Host "3. Verify enquiries API: https://your-backend.vercel.app/api/enquiries/recent" -ForegroundColor White
    Write-Host ""
    Write-Host "✅ Your contact form will now work for all users worldwide! 🌍" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "❌ Deployment failed. Check the error messages above." -ForegroundColor Red
    Write-Host "💡 Common issues:" -ForegroundColor Yellow
    Write-Host "   - Missing environment variables" -ForegroundColor White
    Write-Host "   - Database connection errors" -ForegroundColor White
    Write-Host "   - Vercel authentication issues" -ForegroundColor White
}

Write-Host ""
Write-Host "📚 For help, check PRODUCTION_DATABASE_SETUP.md" -ForegroundColor Cyan