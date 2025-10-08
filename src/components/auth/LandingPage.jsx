import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="fullscreen-auth-container">
      <div className="auth-content-center">
        {/* Logo and Header */}
        <div className="auth-header">
          <h1 className="main-title">Welcome to DailyMoney</h1>
          <p className="subtitle">Your Gateway to Health, Wealth, and Family Prosperity</p>
        </div>

        {/* Content Card */}
        <div className="auth-main-card">
          <h2 className="auth-title">Join DailyMoney Today!</h2>
          <p className="auth-description">Sign in to access exclusive content and opportunities</p>

          <div className="benefits-section">
            <h3>Why Join DailyMoney?</h3>
            <div className="benefits-list">
              <div className="benefit-item">✅ Access to exclusive health and wealth programs</div>
              <div className="benefit-item">✅ Family-focused financial solutions</div>
              <div className="benefit-item">✅ Professional development opportunities</div>
              <div className="benefit-item">✅ Community support and networking</div>
              <div className="benefit-item">✅ Expert guidance and mentorship</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;