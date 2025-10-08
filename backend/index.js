const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const {
  validatePassword,
  validateEmail,
  generateToken,
  generateRandomToken,
  authenticateToken,
  bcrypt
} = require('./auth');

const app = express();
const port = process.env.PORT || 4000;

require('dotenv').config();

app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  // default to the init.sql database so queries succeed when .env isn't configured
  database: process.env.DB_NAME || 'dailymoney_contacts',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Make pool available to auth middleware
app.locals.pool = pool;

app.get('/', (req, res) => res.json({ status: 'ok' }));

// ===== AUTHENTICATION ROUTES =====

// User Registration
app.post('/api/auth/register', async (req, res) => {
  const { username, email, password, fullName, phone } = req.body;
  
  try {
    // Validate input
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'Username, email, and password are required' });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    const passwordValidation = validatePassword(password);
    if (!passwordValidation.valid) {
      return res.status(400).json({ error: passwordValidation.message });
    }

    // Check if user already exists
    const [existingUsers] = await pool.query('SELECT id FROM users WHERE username = ? OR email = ?', [username, email]);
    if (existingUsers.length > 0) {
      return res.status(409).json({ error: 'Username or email already exists' });
    }

    // Hash password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Generate verification token
    const verificationToken = generateRandomToken();

    // Create user
    const [result] = await pool.query(
      'INSERT INTO users (username, email, password, full_name, phone, verification_token) VALUES (?, ?, ?, ?, ?, ?)',
      [username, email, hashedPassword, fullName || null, phone || null, verificationToken]
    );

    res.status(201).json({ 
      message: 'User registered successfully. Please check your email for verification.',
      userId: result.insertId 
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Server error during registration' });
  }
});

// User Login
app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;
  
  try {
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    // Find user by username or email
    const [users] = await pool.query('SELECT * FROM users WHERE username = ? OR email = ?', [username, username]);
    if (users.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = users[0];

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = generateToken(user.id);

    // Create session
    const sessionToken = generateRandomToken();
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
    await pool.query(
      'INSERT INTO user_sessions (user_id, session_token, expires_at) VALUES (?, ?, ?)',
      [user.id, sessionToken, expiresAt]
    );

    // Remove password from response
    const { password: _, verification_token, reset_token, reset_token_expiry, ...userResponse } = user;

    res.json({
      message: 'Login successful',
      token,
      user: userResponse
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Server error during login' });
  }
});

// Forgot Password
app.post('/api/auth/forgot-password', async (req, res) => {
  const { email } = req.body;
  
  try {
    if (!email || !validateEmail(email)) {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    // Check if user exists
    const [users] = await pool.query('SELECT id, email FROM users WHERE email = ?', [email]);
    if (users.length === 0) {
      // Don't reveal if email exists or not for security
      return res.json({ message: 'If your email is registered, you will receive a password reset link.' });
    }

    const user = users[0];
    const resetToken = generateRandomToken();
    const resetExpiry = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    // Save reset token
    await pool.query(
      'UPDATE users SET reset_token = ?, reset_token_expiry = ? WHERE id = ?',
      [resetToken, resetExpiry, user.id]
    );

    // In a real application, you would send an email here
    console.log(`Password reset token for ${email}: ${resetToken}`);

    // For development/testing, include the reset token in the response so the frontend can show it
    const payload = { message: 'If your email is registered, you will receive a password reset link.' };
    if (process.env.NODE_ENV !== 'production') {
      payload.resetToken = resetToken;
    }

    res.json(payload);
  } catch (error) {
    console.error('Forgot password error:', error);
    res.status(500).json({ error: 'Server error processing password reset' });
  }
});

// Reset Password
app.post('/api/auth/reset-password', async (req, res) => {
  const { token, newPassword } = req.body;
  
  try {
    if (!token || !newPassword) {
      return res.status(400).json({ error: 'Reset token and new password are required' });
    }

    const passwordValidation = validatePassword(newPassword);
    if (!passwordValidation.valid) {
      return res.status(400).json({ error: passwordValidation.message });
    }

    // Check if reset token is valid and not expired
    const [users] = await pool.query(
      'SELECT id FROM users WHERE reset_token = ? AND reset_token_expiry > NOW()',
      [token]
    );

    if (users.length === 0) {
      return res.status(400).json({ error: 'Invalid or expired reset token' });
    }

    const user = users[0];

    // Hash new password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    // Update password and clear reset token
    await pool.query(
      'UPDATE users SET password = ?, reset_token = NULL, reset_token_expiry = NULL WHERE id = ?',
      [hashedPassword, user.id]
    );

    // Clear all sessions for security
    await pool.query('DELETE FROM user_sessions WHERE user_id = ?', [user.id]);

    res.json({ message: 'Password reset successfully. Please login with your new password.' });
  } catch (error) {
    console.error('Reset password error:', error);
    res.status(500).json({ error: 'Server error during password reset' });
  }
});

// Get User Profile (Protected Route)
app.get('/api/auth/profile', authenticateToken, async (req, res) => {
  res.json({ user: req.user });
});

// Update User Profile (Protected Route)
app.put('/api/auth/profile', authenticateToken, async (req, res) => {
  const { fullName, phone } = req.body;
  const userId = req.user.id;
  
  try {
    await pool.query(
      'UPDATE users SET full_name = ?, phone = ? WHERE id = ?',
      [fullName || null, phone || null, userId]
    );

    // Get updated user info
    const [users] = await pool.query('SELECT id, username, email, full_name, phone FROM users WHERE id = ?', [userId]);
    
    res.json({ 
      message: 'Profile updated successfully',
      user: users[0]
    });
  } catch (error) {
    console.error('Profile update error:', error);
    res.status(500).json({ error: 'Server error updating profile' });
  }
});

// Change Password (Protected Route)
app.put('/api/auth/change-password', authenticateToken, async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const userId = req.user.id;
  
  try {
    if (!currentPassword || !newPassword) {
      return res.status(400).json({ error: 'Current password and new password are required' });
    }

    const passwordValidation = validatePassword(newPassword);
    if (!passwordValidation.valid) {
      return res.status(400).json({ error: passwordValidation.message });
    }

    // Get current password hash
    const [users] = await pool.query('SELECT password FROM users WHERE id = ?', [userId]);
    const user = users[0];

    // Verify current password
    const isCurrentPasswordValid = await bcrypt.compare(currentPassword, user.password);
    if (!isCurrentPasswordValid) {
      return res.status(400).json({ error: 'Current password is incorrect' });
    }

    // Hash new password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    // Update password
    await pool.query('UPDATE users SET password = ? WHERE id = ?', [hashedPassword, userId]);

    // Clear all sessions for security
    await pool.query('DELETE FROM user_sessions WHERE user_id = ?', [userId]);

    res.json({ message: 'Password changed successfully. Please login again.' });
  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({ error: 'Server error changing password' });
  }
});

// Logout (Protected Route)
app.post('/api/auth/logout', authenticateToken, async (req, res) => {
  const userId = req.user.id;
  
  try {
    // Clear all user sessions
    await pool.query('DELETE FROM user_sessions WHERE user_id = ?', [userId]);
    res.json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ error: 'Server error during logout' });
  }
});

// create enquiry
app.post('/api/enquiries', async (req, res) => {
  const { name, email, phone, company, message } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO enquiries (name, email, phone, company, message) VALUES (?, ?, ?, ?, ?)',
      [name, email, phone, company, message]
    );
    res.json({ id: result.insertId });
  } catch (err) {
    // Provide clearer error when the database hasn't been selected/created
    console.error('DB error inserting enquiry:', err.message || err);
    if (err && err.code === 'ER_NO_DB_ERROR') {
      return res.status(500).json({ error: 'No database selected. Run the init.sql to create the database or set DB_NAME in backend/.env' });
    }
    res.status(500).json({ error: 'Database error' });
  }
});

// recent 3 enquiries
app.get('/api/enquiries/recent', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM enquiries ORDER BY created_at DESC LIMIT 3');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
