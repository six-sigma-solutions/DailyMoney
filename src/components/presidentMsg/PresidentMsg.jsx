import React from "react";
import "./PresidentMsg.css"; // Import the new styling file

const president = {
    name: "XXXXXX", // Placeholder Name
    role: "President", 
    // Placeholder image URL 
    image: "https://via.placeholder.com/150/0d9488/ffffff?text=President", 
};

export default function PresidentMsg() {
    return (
        // Note the renamed outer section class: president-page-section
        <section className="president-page-section">
            
            {/* Main Content Card - renamed: president-message-card */}
            <div className="president-message-card">

                {/* Top Section: Branding and Title (SHARED classes) */}
                <div className="card-header-bg">
                    <h1 className="header-title">
                        President's Message
                    </h1>
                    <p className="header-subtitle">Leading with Vision and Commitment</p>
                </div>

                {/* President Profile: Renamed: president-profile-area */}
                <div className="president-profile-area">
                    <img
                        src={president.image}
                        alt="XXXX"
                        className="president-image" // Renamed
                    />
                    
                    <h2 className="president-name">{president.name}</h2> {/* Renamed */}
                    <p className="president-role">{president.role}</p> {/* Renamed */}
                </div>


                {/* Message Content Section (SHARED classes) */}
                <div className="message-content">
                    <p className="message-quote">
                        "It is my Honor to lead the DailyMoney community. We are dedicated to translating our Founder's Vision into tangible success for every individual. Our focus remains steadfast on the balance of "Health, Wealth, and Family".
                    </p>

                    <p className="message-paragraph">
                        As President, I oversee the strategic implementation of our programs and ensure that our solutions remain cutting-edge, ethical, and highly effective. We are committed to fostering an environment where growth is not just expected, but is supported by robust educational tools and a network of passionate associates.
                    </p>

                    <p className="message-paragraph">
                       Our strength lies in our community. We encourage collaboration, continuous learning, and a proactive approach to life's challenges. I look forward to witnessing your transformation and celebrating your journey toward becoming "Independent for Entire Life".
                    </p>
                    
                    {/* Signature style closing (SHARED classes) */}
                    <div className="signature-block">
                        <p className="signature-name">
                            {president.name}
                        </p>
                        <p className="signature-title">
                            President, DailyMoney
                        </p>
                    </div>
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
                    <h1 className="footer-title2">
                        DAILY MONEY
                    </h1>
                    <p className="footer-subtitle2">
                        Independent for Entire Life
                    </p>
                </div>
                
            </div>

        </section>
    );
}
