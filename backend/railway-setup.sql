-- Railway MySQL Database Setup for DailyMoney
-- Run this on your Railway MySQL database

CREATE DATABASE IF NOT EXISTS dailymoney;

USE dailymoney;

-- Create enquiry table for contact form
CREATE TABLE IF NOT EXISTS enquiry (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  company VARCHAR(100),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_created_at (created_at),
  INDEX idx_email (email)
);

-- Users table for authentication system
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
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_username (username),
  INDEX idx_email (email),
  INDEX idx_verification_token (verification_token),
  INDEX idx_reset_token (reset_token)
);

-- Sessions table for user authentication
CREATE TABLE IF NOT EXISTS user_sessions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  session_token VARCHAR(255) NOT NULL,
  expires_at DATETIME NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_user_id (user_id),
  INDEX idx_session_token (session_token),
  INDEX idx_expires_at (expires_at)
);

-- Insert sample data for testing
INSERT INTO enquiry (name, email, phone, company, message) VALUES 
('Test User', 'test@example.com', '+91 9876543210', 'Test Company', 'This is a test enquiry from Railway MySQL setup'),
('Sample Contact', 'contact@sample.com', '+91 8765432109', 'Sample Corp', 'Another test enquiry to verify database setup')
ON DUPLICATE KEY UPDATE message = VALUES(message);

-- Verify setup
SELECT 'Database setup completed successfully!' as status;
SELECT COUNT(*) as total_enquiries FROM enquiry;
SELECT * FROM enquiry ORDER BY created_at DESC LIMIT 3;