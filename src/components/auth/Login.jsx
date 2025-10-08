import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const { login, loading } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState({ type: '', text: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    if (!formData.username || !formData.password) {
      setMessage({ type: 'error', text: 'Please fill in all fields' });
      return;
    }

    const result = await login(formData);
    
    if (result.success) {
      setMessage({ type: 'success', text: result.message });
      setTimeout(() => {
        navigate('/');
      }, 1000);
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
          <h2>Welcome Back!</h2>
          <p>Sign in to access your account</p>
        </div>

        {/* Auth Tabs */}
        <div className="auth-tabs">
          <button type="button" className="auth-tab active">Login</button>
          <Link to="/register" className="auth-tab">Signup</Link>
        </div>

        <form onSubmit={handleSubmit} className="simple-form">
          <div className="simple-input-group">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Email Address"
              required
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

          <div className="forgot-password-link">
            <Link to="/forgot-password">Forgot password?</Link>
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
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <div className="signup-link">
            Not a member? <Link to="/register">Signup now</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;