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
              "For the betterment of all people across the world, especially
              those driving innovation in the global IT community."
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
          DM for Health and Wellness - The World Premium Healthy and
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
            DM stands for discipline, unity and independance.
          </p>
          <p id="hero-desc" className="hero-desc">
            Together, we are shaping a future of health, wealth and limitless
            opportunities.
          </p>
          <p id="hero-desc" className="hero-desc">
            With DM, every step forward is a step towards economic freedom and a life
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
                  <span className="red-text-1">
                    Solutions for every
                    <br />
                    stage of DM
                  </span>
                </h2>
                <ul className="solution-bullets">
                  <li>
                      Solutions for Every Stage of Your Health & Wealth Journey.
                 
                  </li>
                  <li>
                    DM Made Easy, Health & Wealth Made Possible.
                  </li>
                  <li>
                   
                      Smart Choices for DM, Smarter Future in Health & Wealth.
                   
                  </li>
                  <li>
                      From Today’s Health to Tomorrow’s Wealth & Wellness.
                   
                  </li>
                  <li>
                   
                      Empowering You Every Day with Health, and Wealth.
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

<<<<<<< HEAD
          <span id="vision" className="vision">Vision</span>
=======
          <span className="vision">Vision</span>
>>>>>>> 109e872a107dfc2f8665711dc2eee97481d6a9b8
          <div className="solutions-grid">
            <div className="solution-card1">
              <div className="solution-card-content">
                <div className="solution-card-title1">
                  <span>
                   Vision for your Future
                  </span>
                </div>
              </div>
              <img
                className="solution-card-img1"
                src="ph-1.png"
                alt="Custom Apps"
              />
            </div>
             
            <div className="solution-card1">
              <div className="solution-card-content">
                <div className="solution-card-title1">
                  <span>
                    Vision for your <br /> Future Generation
                  </span>
                </div>
              </div>
              <img
                className="solution-card-img1"
                src="/ph-2.jpg"
                alt="Design Systems"
              />
            </div>
            <div className="solution-card1">
              <div className="solution-card-content">
                <div className="solution-card-title1">
                  <span>
                    Vision for your <br /> Generation After Generations
                  </span>
                </div>
              </div>
              <img
                className="solution-card-img1"
                src="/ph-3.jpg"
                alt="AI Tools"
              />
            </div>
          </div>
          <span className="mission">Mission</span> 
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
                <ul className="solution-bullets">
                  <li>
                    
                      Your Partner in DM, Health and Wealth for Life.
                    
                  </li>
                  <li>
                    
                      Every Stage, Every Step, Health & Wealth Solutions.
                    
                  </li>
                  <li>
                    
                      DM Balance Your Life. Build Your Health. Grow Your Wealth.
                    
                  </li>
                  <li>
                    
                      Small Income Wins, Big Health & Wealth Gains.
                    
                  </li>
                  <li>
                    
                      Simplify with DM. Strengthen Health. Secure Wealth.
                   
                  </li>
                  <li>
                   
                      Master Your Day, Master Your Health, Master Your
                      Well-being.
                 
                  </li>
                  <li>
                   
                      Turn Daily Financial Actions into a Lifetime of Health and
                      Wealth.
                   
                  </li>
                  <li>
                    Live Well, Live Wealthy, Every Single Day.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="CoreTeam" className="clients-container">
        <div className="clients-title">Core Team</div>

        {/* Founder is now in a separate div at the top */}
        <div className="founder-card">
          <img src="/cpdian12.png" alt="Dr.V.Chellapondy DSW" />
          <h4 className="team-member-name">Dr.V.Chellapondy</h4>
        </div>

        {/* The other team members remain in the grid below */}
        <div className="team-grid">
          <div className="team-member-card">
            <img src="person-1.jpg" alt="S.Vasu" />
            <h4 className="team-member-name">S.Vasu</h4>
          </div>


          <div className="team-member-card">
            <img src="https://via.placeholder.com/120" alt="xxxx" />
            <h4 className="team-member-name">xxxxx</h4>
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
              <img src="DM-100.jpg" alt="DailyMoney Logo" />
              <span className="footer-subtext1">
                Six Sigma Solutions,<br />
                NKC Towers
                1st Floor,<br /> Opp to Government Engineering College,<br />
                Kottagoundampatti, Karuppur,<br /> Salem-636011. TamilNadu, India.
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
                    <a href="https://x.com/dailymsghealthy"><i class="fa-brands fa-x-twitter"></i> Twitter</a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/Daily.Message.Healthy"><i class="fa-brands fa-facebook"></i> Facebook</a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/daily_message_healthy/"><i class="fa-brands fa-instagram"></i> Instagram</a>
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
