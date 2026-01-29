# API Testing Script for Team Sanjivani 4.0 Backend
# Run this script after starting the server to test all endpoints

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  Team Sanjivani 4.0 API Test Suite" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

$baseUrl = "http://localhost:5000/api"

# Test Health Endpoint
Write-Host "[1/6] Testing Health Endpoint..." -ForegroundColor Yellow
try {
    $health = Invoke-RestMethod -Uri "$baseUrl/health" -Method Get
    Write-Host "✅ Health Check: " -NoNewline -ForegroundColor Green
    Write-Host $health.message -ForegroundColor White
} catch {
    Write-Host "❌ Health Check Failed: $_" -ForegroundColor Red
    exit 1
}

# Test Products Endpoint
Write-Host "`n[2/6] Testing Products Endpoint..." -ForegroundColor Yellow
try {
    $products = Invoke-RestMethod -Uri "$baseUrl/products" -Method Get
    Write-Host "✅ Products: " -NoNewline -ForegroundColor Green
    Write-Host "Found $($products.data.Count) products" -ForegroundColor White
} catch {
    Write-Host "❌ Products Failed: $_" -ForegroundColor Red
}

# Test Team Endpoint
Write-Host "`n[3/6] Testing Team Endpoint..." -ForegroundColor Yellow
try {
    $team = Invoke-RestMethod -Uri "$baseUrl/team" -Method Get
    Write-Host "✅ Team: " -NoNewline -ForegroundColor Green
    Write-Host "Found $($team.data.Count) team members" -ForegroundColor White
} catch {
    Write-Host "❌ Team Failed: $_" -ForegroundColor Red
}

# Test Projects Endpoint
Write-Host "`n[4/6] Testing Projects Endpoint..." -ForegroundColor Yellow
try {
    $projects = Invoke-RestMethod -Uri "$baseUrl/projects" -Method Get
    Write-Host "✅ Projects: " -NoNewline -ForegroundColor Green
    Write-Host "Found $($projects.data.Count) projects" -ForegroundColor White
} catch {
    Write-Host "❌ Projects Failed: $_" -ForegroundColor Red
}

# Test Contact Form Submission
Write-Host "`n[5/6] Testing Contact Form Submission..." -ForegroundColor Yellow
try {
    $contactData = @{
        name = "Test User"
        email = "test@example.com"
        subject = "API Test"
        message = "This is a test message from the API test script"
    } | ConvertTo-Json

    $contact = Invoke-RestMethod -Uri "$baseUrl/contact" -Method Post -Body $contactData -ContentType "application/json"
    Write-Host "✅ Contact Form: " -NoNewline -ForegroundColor Green
    Write-Host $contact.message -ForegroundColor White
} catch {
    Write-Host "❌ Contact Form Failed: $_" -ForegroundColor Red
}

# Test Booking Submission
Write-Host "`n[6/6] Testing Booking Submission..." -ForegroundColor Yellow
try {
    $bookingData = @{
        name = "John Doe"
        email = "john@example.com"
        phone = "+1234567890"
        type = "engineer"
        department = "Mechanical Design"
        purpose = "Need consultation for agricultural machinery"
    } | ConvertTo-Json

    $booking = Invoke-RestMethod -Uri "$baseUrl/bookings" -Method Post -Body $bookingData -ContentType "application/json"
    Write-Host "✅ Booking: " -NoNewline -ForegroundColor Green
    Write-Host $booking.message -ForegroundColor White
} catch {
    Write-Host "❌ Booking Failed: $_" -ForegroundColor Red
}

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  API Testing Complete!" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

