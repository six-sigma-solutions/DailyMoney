import React from "react";
import "./FounderMsg.css"; // Import the new styling file

const founder = {
    name: "Dr.V.Chellapondy",
    role: "Founder & Financial Advisor",
    // Use the image URL you intend to use for the founder
    image: "/sir1.jpg", 
};

export default function FounderMsg() {
    return (
        // Use the custom class for the outer section
        <section className="founder-page-section">
            
            {/* Main Content Card */}
            <div className="founder-message-card">

                {/* Top Section: Branding and Title */}
                <div className="card-header-bg">
                    <h1 className="header-title">
                        Founder's Message
                    </h1>
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
                    “I’m <span className="signature">Chellapondy Vellaiswamy</span>, with 35+ years of experience across Media, Finance, and Wellness. From launching Kailash Cable Network in 1990 to serving as Deputy Director - Distribution in Tamilthirai Tv and AVP at India Infoline Ltd, I’ve built expertise in leadership and business growth. Since 2010, I’ve been a wellness consultant, helping over 1 lakh people transform their health and wealth while building an organization of 5000+ associates. My global learning across 15+ countries and a Doctorate in Social Work reflect my passion for holistic well-being and community impact.”
                    </p>

                    <p className="message-paragraph">
                        "Welcome to DailyMoney. Our vision is to empower every individual to achieve "financial independence" and lead a healthy, joyful life. We believe that with the right knowledge and a positive mindset, anyone can transform their life for the better."
                    </p>

                
                    <p className="message-paragraph">
                        DailyMoney was founded on the core principle that financial freedom should be accessible to everyone, regardless of their background. Over the years, we have built a community committed to holistic growth, focusing equally on "Health, Wealth, and Family" relationships. Our proprietary solutions are designed to simplify complex financial concepts and turn them into actionable, life-changing strategies.
                    </p>

                    <p className="message-paragraph">
                       Our mission is simple: to provide accessible, practical solutions that lead to holistic growth. We are committed to "integrity, excellence, and the ultimate success" of every member of our DailyMoney community. We are more than just a platform; we are a partner in your life-long journey to become "Independent for Entire Life".
                    </p>
                    
                    {/* Signature style closing */}
                    <div className="signature-block">
                        <p className="signature-name">
                            {founder.name}
                        </p>
                        <p className="signature-title">
                            Founder, DailyMoney
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