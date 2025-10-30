/* eslint-disable no-irregular-whitespace */
// Home.jsx

// FIXED: Added 'useRef' to the import from "react"
import React, { useState, useRef } from "react";
import "./Home.css";
import heroVideo from "/budhha-video6.mp4";
import { Link, useNavigate } from "react-router-dom";
// FIXED: Removed redundant 'useState' import

export default function Home() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(true);

  // --- ADDED THIS ---
  // Create a ref to target the video element
  const videoRef = useRef(null);

  const handleSayHelloClick = () => {
    navigate("/contact");
  };

  // --- ADDED THESE FUNCTIONS ---
  // Function to play the video on hover


  return (
    <div className="container1">
      {/* Popup Section */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-container">
            <h2 className="popup-title">Welcome to DM </h2>
            <p className="popup-text">
              "For the betterment of all people across the world — Especially
              those driving innovation in the Global IT Community."
            </p>
            <button
              className="popup-close-btn"
              onClick={() => setShowPopup(false)}
            >
              Get in →
            </button>
          </div>
        </div>
      )}

      <div className="dm">
        <span>
          DM - Daily Message - Health and Wellness - The World Premium Healthy and
          Happy Community.
        </span>
      </div>
      <section className="hero-section">
        <div className="hero-content">
          <h1 id="daily-money">
            <span className="hero-red">
              D<span className="money">M</span>
            </span>
          </h1>
          <strong>
            <h2 className="hero-sub">Health & Wealth.</h2>
          </strong>
          <strong>
            <p id="hero-subtitle">Independent for Entire life.</p>
          </strong>
          <p id="hero-desc" className="hero-desc">
            DM stands for discipline, unity, and independance.
          </p>
          <p id="hero-desc" className="hero-desc">
            Together, we are shaping a future of health, wealth, and limitless
            opportunities.
          </p>
          <p id="hero-desc" className="hero-desc">
            With DM, every step forward is a step towards  economic freedom, and a life
            without limits.
            <br /> Welcome to{" "}
            <strong>
              <span className="daily-money">DM!</span>
            </strong>
          </p>
          <div className="hero-actions">
            <Link className="link" to="/overview">
              <button type="button" className="see-work-btn">
                See our work
              </button>
            </Link>
            <Link className="link" to="/health">
              <button type="button" className="get-started-btn">
                Get started →
              </button>
            </Link>
          </div>
        </div>

        {/* === START: HERO IMAGE SECTION (UPDATED) === */}
        <div className="hero-image-container">
          <div className="cutout-shape">
            {/* Replaced the div with a video element */}
            <video
              ref={videoRef}
              className="hero-promo-video"
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              aria-label="Daily Money app video"
            ></video>
          </div>
        </div>
        {/* === END: HERO IMAGE SECTION === */}
      </section>

      <section className="solutions-section">
        <div className="container1">
          {/* This is the main container for the two-column layout */}
          <div className="solution-container">
            {/* Left Column: Contains all the text content */}
            <div className="solution-text-content">
              <div>
                {" "}
                {/* Added a wrapper div for clean flex alignment */}
                <h2>
                  <span className="red-text">
                    Solutions for every
                    <br />
                    stage of DM
                  </span>
                </h2>
                <ul className="solution-bullets">
                  <li>
                    <strong>
                      Solutions for Every Stage of Your Health & Wealth Journey.
                    </strong>
                  </li>
                  <li>
                    <strong>DM Made Easy, Health & Wealth Made Possible.</strong>
                  </li>
                  <li>
                    <strong>
                      Smart Choices for DM, Smarter Future in Health & Wealth.
                    </strong>
                  </li>
                  <li>
                    <strong>
                      From Today’s Health to Tomorrow’s Wealth & Wellness.
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Empowering You Every Day with Health, and Wealth.
                    </strong>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Contains the image */}
            <div className="solution-image-container">
              <img
                className="solution-image"
                src="/DM123.png"
                // FIXED: Removed invalid 'alt' prop
              ></img>
            </div>
          </div>
          <div className="solutions-grid">
            <div className="solution-card1">
              <div className="solution-card-content">
                <div className="solution-card-title1">
                  Vision & Mission is your{" "}
                  <span>
                    <br />
                    Future
                  </span>
                </div>
              </div>
              <img
                className="solution-card-img1"
                src="phonef.png"
                alt="Custom Apps"
              />
            </div>
            <div className="solution-card1">
              <div className="solution-card-content">
                <div className="solution-card-title1">
                  Vision & Mission is your{" "}
                  <span>
                    {" "}
                    <br />
                    Future Generation
                  </span>
                </div>
              </div>
              <img
                className="solution-card-img1"
                src="/phonec.png"
                alt="Design Systems"
              />
            </div>
            <div className="solution-card1">
              <div className="solution-card-content">
                <div className="solution-card-title1">
                  Vision & Mission is your{" "}
                  <span>
                    {" "}
                    <br />
                    Generation After Generations
                  </span>
                </div>
              </div>
              <img
                className="solution-card-img1"
                src="/phonel.png"
                alt="AI Tools"
              />
            </div>
          </div>

          <div className="ar-vr-container">
            {/* Left Column with the Image */}
            <div className="ar-vr-image-column">
              <img src="./nature.png" alt="AR/VR Experiences" />
              {/* The title overlay was removed from the previous design,
                  but you can add it back here if you want: 
                  <h3 className="ar-vr-image-title">AR/VR Experiences</h3> 
              */}
            </div>
            {/* Right Column with Content */}
            <div className="ar-vr-content-column">
              {/* The H3 and P tags have been REMOVED from here */}

              <div className="ar-vr-nested-card">
                <h4 className="nested-card-title">The DM Philosophy</h4>
                <ul className="solution-bullets">
                  <li>
                    <strong>
                      Your Partner in DM, Health, and Wealth for Life.
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Every Stage - Every Step - Health & Wealth Solutions.
                    </strong>
                  </li>
                  <li>
                    <strong>
                      DM Balance Your Life. Build Your Health. Grow Your Wealth.
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Small Income Wins, Big Health & Wealth Gains.
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Simplify with DM. Strengthen Health. Secure Wealth.
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Master Your Day, Master Your Health, Master Your
                      Well-being.
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Turn Daily Financial Actions into a Lifetime of Health and
                      Wealth.
                    </strong>
                  </li>
                  <li>
                    <strong>Live Well - Live Wealthy - Every Single Day.</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="clients-container">
        <div className="clients-title">Core Team</div>

        {/* Founder is now in a separate div at the top */}
        <div className="founder-card">
          <img src="/CPSIR.png" alt="Dr.V.Chellapondy DSW" />
          <h4 className="team-member-name">Dr.V.Chellapondy</h4>
        </div>

        {/* The other team members remain in the grid below */}
        <div className="team-grid">
          <div className="team-member-card">
            <img src="https://via.placeholder.com/120" alt="S.Vasu" />
            <h4 className="team-member-name">S.Vasu</h4>
          </div>

          <div className="team-member-card">
            <img src="https://via.placeholder.com/120" alt="Dr. KP Kosygan" />
            <h4 className="team-member-name">Dr. KP Kosygan</h4>
          </div>

          <div className="team-member-card">
            <img src="https://via.placeholder.com/120" alt="R.K.Selvamani" />
            <h4 className="team-member-name">R.K.Selvamani</h4>
          </div>
        </div>
      </section>

      <footer className="footer-main1">
        <div>
          <div className="footer-cta1">
            <img className="img-fluid" src="/xxx.jpg"></img>
            <button className="say-hello-btn1" onClick={handleSayHelloClick}>
              Say Hello
            </button>{" "}
          </div>
          <hr className="footer-divider1" />
          <div className="footer-bottom-content1">
            <div className="footer-logo-block1">
              <img src="DM.png" alt="DailyMoney Logo" />
              <span className="footer-subtext1">
                Six Sigma Solutions, NKC Towers <br />
                1st Floor, Opp to Government Engineering College,
                Kottagoundampatti, Karuppur, Salem-636011. TamilNadu, India.
              </span>
              <span className="footer-copyright1">
                © 2025. All rights reserved.
              </span>
            </div>
            <div className="footer-links-block1">
              <div className="footer-links-col1">
                <h4>Company</h4>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/health">Health</Link>
                  </li>
                  <li>
                    <Link to="/wealth">Wealth</Link>
                  </li>
                  <li>
                    <Link to="/family">Family</Link>
                  </li>
                  <li>
                    <Link to="/overview">About</Link>
                  </li>
                  <li>
                    <Link to="/entrepreneur">My Life</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-links-col1">
                <h4>Connect</h4>
                <ul>
                  <li>
                    <a href="https://x.com/dailymsghealthy">Follow on X</a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/Daily.Message.Healthy">Follow on Facebook</a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/daily_message_healthy/">Follow on Instagram</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
