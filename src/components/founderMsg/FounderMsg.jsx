/* eslint-disable no-irregular-whitespace */
import React from "react";
import "./FounderMsg.css"; // Import the new styling file
import { Link } from "react-router-dom";

const founder = {
  name: "Dr.V.Chellapondy",
  role: "Founder & CEO",
  // Use the image URL you intend to use for the founder
  image: "/cpdian12.png",
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
<<<<<<< HEAD
          <img src="Life.jpg" className="message-image" />
=======
          <img src="namba.jpg" className="message-image" />
>>>>>>> 109e872a107dfc2f8665711dc2eee97481d6a9b8

          <div className="message-section">
            <img src="founders0.png" alt="Welcome" className="message-image" />
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
              src="DM-100.jpg"
              alt="DailyMoney Logo"
              className="footer-logo"
            />
          </div>
          <p className="footer-subtitle2">Independent for Entire Life</p>
        </div>
      </div>
    </section>
  );
}
