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

-- show recent 3
USE dailymoney_contacts;
SELECT * FROM enquiries ORDER BY created_at DESC LIMIT 3;
