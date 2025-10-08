import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="card-footer-bg">
      <div className="footer-logo-container">
        <img 
          alt="DailyMoney Logo" 
          className="footer-logo" 
          src="https://res.cloudinary.com/dq9zq6ubg/image/upload/v1758609670/daily-money_fbjvzk.png"
        />
      </div>
      <h1 className="footer-title2">DAILY MONEY</h1>
      <p className="footer-subtitle2">Independent for Entire Life</p>
    </div>
  );
};

export default Footer;