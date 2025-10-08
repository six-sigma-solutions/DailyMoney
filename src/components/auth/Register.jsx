import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Auth.css';

const Register = () => {
  const navigate = useNavigate();
  const { register, loading } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phone: ''
  });
  const [message, setMessage] = useState({ type: '', text: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    if (!formData.username || !formData.email || !formData.password) {
      return 'Please fill in all required fields';
    }

    if (formData.username.length < 3) {
      return 'Username must be at least 3 characters long';
    }

    if (formData.password !== formData.confirmPassword) {
      return 'Passwords do not match';
    }

    if (formData.password.length < 8) {
      return 'Password must be at least 8 characters long';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return 'Please enter a valid email address';
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    const validationError = validateForm();
    if (validationError) {
      setMessage({ type: 'error', text: validationError });
      return;
    }

    const { confirmPassword, ...registrationData } = formData;
    const result = await register(registrationData);
    
    if (result.success) {
      setMessage({ type: 'success', text: result.message });
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } else {
      setMessage({ type: 'error', text: result.message });
    }
  };

  return (
    <div className="simple-auth-container">
      <div className="simple-auth-card">
        {/* DailyMoney Logo */}
        <div className="auth-logo-section">
          <div className="dailymoney-logo">
            <img 
              src="https://res.cloudinary.com/dq9zq6ubg/image/upload/v1758609670/daily-money_fbjvzk.png"
              alt="DailyMoney Logo"
              className="logo-image"
            />
          </div>
          <h1 className="dailymoney-title">DailyMoney</h1>
        </div>

        {/* Welcome Message */}
        <div className="welcome-message">
          <h2>Join DailyMoney!</h2>
          <p>Create your account to get started</p>
        </div>

        {/* Auth Tabs */}
        <div className="auth-tabs">
          <Link to="/login" className="auth-tab">Login</Link>
          <button className="auth-tab active" type="button">Signup</button>
        </div>

        <form onSubmit={handleSubmit} className="simple-form">
          <div className="simple-input-group">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              required
              className="simple-input"
            />
          </div>

          <div className="simple-input-group">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="simple-input"
            />
          </div>

          <div className="simple-input-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="simple-input"
            />
          </div>

          <div className="simple-input-group">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="simple-input"
            />
          </div>

          <div className="simple-input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="simple-input"
            />
          </div>

          <div className="simple-input-group">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
              className="simple-input"
            />
          </div>

          {message.text && (
            <div className={`simple-message ${message.type}`}>
              {message.text}
            </div>
          )}

          <button 
            type="submit" 
            className="simple-submit-btn"
            disabled={loading}
          >
            {loading ? 'Creating Account...' : 'Signup'}
          </button>

          <div className="signup-link">
            Already a member? <Link to="/login">Login now</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;