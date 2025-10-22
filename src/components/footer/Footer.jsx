import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="card-footer-bg">
      <div className="footer-logo-container">
        <img 
          alt="DailyMoney Logo" 
          className="footer-logo" 
          src="DM.png"
        />
      </div>
      <h1 className="footer-title2">DM</h1>
      <p className="footer-subtitle2">Independent for Entire Life</p>
    </div>
  );
};

export default Footer;
