/* eslint-disable no-irregular-whitespace */
import React from "react";
import "./FounderMsg.css"; // Import the new styling file
import { Link } from "react-router-dom";

const founder = {
  name: "Dr.V.Chellapondy",
  role: "Founder & Financial Advisor",
  // Use the image URL you intend to use for the founder
  image: "/sir.png",
};

export default function FounderMsg() {
  return (
    // Use the custom class for the outer section
    <section className="founder-page-section">
      {/* Main Content Card */}
      <div className="founder-message-card">
        {/* Top Section: Branding and Title */}
        <div className="card-header-bg">
          <h1 className="header-title">Founder's Message</h1>
          <p className="header-subtitle">A Note on Vision and Commitment</p>
        </div>

        {/* Founder Profile: Larger photo, centered, with a prominent border */}
        <div className="founder-profile-area">
          <img
            src={founder.image}
            alt={founder.name}
            className="founder-image"
          />

          <h2 className="founder-name">{founder.name}</h2>
          <p className="founder-role">{founder.role}</p>
        </div>

        {/* Message Content Section */}
        <div className="message-content">
          <p className="message-quote">
           “I’m <span className="signature">Chellapondy Vellaiswamy,</span> with over 35 years of experience across Media, Finance, and Wellness. From launching Kailash Cable Network in 1990 to serving as Deputy Director – Distribution at Tamilthirai TV and AVP at India Infoline Ltd, I have developed extensive expertise in leadership and business growth. Since 2010, I’ve been a wellness consultant, helping over 100,000 people transform their health and wealth while building an organization of 5,000+ associates. My global learning across 15+ countries, combined with a Doctorate in Social Work, reflects my passion for holistic well-being and community impact.”
          </p>

          <div className="message-section">
            <img src="foundermain.jpg" alt="Welcome" className="message-image" />
          </div>
        </div>

        <div className="view-more-link-my-life">
              <Link className="view-more-link" to="/presidents-msg">
                <button className="view-more" type="button">
                  View More
                </button>
              </Link>
              </div>

        {/* Footer/Tagline Section */}
        <div className="card-footer-bg">
          {/* START: ADDED LOGO SECTION */}
          <div className="footer-logo-container">
            <img
              // This logo URL is consistent with your Navbar.jsx
              src="https://res.cloudinary.com/dq9zq6ubg/image/upload/v1758609670/daily-money_fbjvzk.png"
              alt="DailyMoney Logo"
              className="footer-logo"
            />
          </div>
          <h1 className="footer-title2">DAILY MONEY</h1>
          <p className="footer-subtitle2">Independent for Entire Life</p>
        </div>
      </div>
    </section>
  );
}
