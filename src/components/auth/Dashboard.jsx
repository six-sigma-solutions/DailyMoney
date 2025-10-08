import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Auth.css';

const Dashboard = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    if (window.confirm('Are you sure you want to logout?')) {
      await logout();
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="welcome-section">
          <h1>Welcome back, {user?.full_name || user?.username}! 👋</h1>
          <p>Manage your DailyMoney account and explore opportunities</p>
        </div>
        
        <div className="dashboard-actions">
          <Link to="/profile" className="dashboard-btn primary">
            My Profile
          </Link>
          <Link to="/" className="dashboard-btn secondary">
            Go to Website
          </Link>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-grid">
          {/* Account Information Card */}
          <div className="dashboard-card">
            <h3>Account Information</h3>
            <div className="account-info">
              <div className="info-item">
                <span className="label">Username:</span>
                <span className="value">{user?.username}</span>
              </div>
              <div className="info-item">
                <span className="label">Email:</span>
                <span className="value">{user?.email}</span>
              </div>
              <div className="info-item">
                <span className="label">Full Name:</span>
                <span className="value">{user?.full_name || 'Not provided'}</span>
              </div>
              <div className="info-item">
                <span className="label">Phone:</span>
                <span className="value">{user?.phone || 'Not provided'}</span>
              </div>
              <div className="info-item">
                <span className="label">Member since:</span>
                <span className="value">
                  {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
                </span>
              </div>
            </div>
            <Link to="/profile" className="card-action-btn">
              Update Profile
            </Link>
          </div>

          {/* Quick Actions Card */}
          <div className="dashboard-card">
            <h3>Quick Actions</h3>
            <div className="quick-actions">
              <Link to="/contact" className="action-btn">
                <span className="action-icon">📞</span>
                <div>
                  <strong>Contact Us</strong>
                  <p>Get in touch with our team</p>
                </div>
              </Link>
              
              <Link to="/health" className="action-btn">
                <span className="action-icon">🏥</span>
                <div>
                  <strong>Health Services</strong>
                  <p>Explore health opportunities</p>
                </div>
              </Link>
              
              <Link to="/wealth" className="action-btn">
                <span className="action-icon">💰</span>
                <div>
                  <strong>Wealth Building</strong>
                  <p>Financial growth solutions</p>
                </div>
              </Link>
              
              <Link to="/family" className="action-btn">
                <span className="action-icon">👨‍👩‍👧‍👦</span>
                <div>
                  <strong>Family Programs</strong>
                  <p>Family-focused initiatives</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Security Card */}
          <div className="dashboard-card">
            <h3>Security Settings</h3>
            <div className="security-actions">
              <Link to="/change-password" className="security-btn">
                🔒 Change Password
              </Link>
              <div className="security-info">
                <p>Keep your account secure by using a strong password and updating it regularly.</p>
              </div>
            </div>
          </div>

          {/* Recent Activity Card */}
          <div className="dashboard-card">
            <h3>Recent Activity</h3>
            <div className="activity-list">
              <div className="activity-item">
                <span className="activity-icon">✅</span>
                <div>
                  <strong>Account Created</strong>
                  <p>Welcome to DailyMoney!</p>
                </div>
                <span className="activity-time">
                  {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'Recently'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;