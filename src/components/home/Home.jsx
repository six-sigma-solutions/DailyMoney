/* eslint-disable no-irregular-whitespace */
// Home.jsx

import React from "react";
import "./Home.css";
import videoFile from "../../assets/gif7.mp4";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const navigate = useNavigate();

  //  Define popup state
  const[showPopup,setShowPopup] = useState(true);

  const handleSayHelloClick = () => {
    navigate("/contact");
  };

  return (
    <div className="container1">
      {/* Popup Section */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-container">
            <h2 className="popup-title">Welcome to Daily Money 💰</h2>
            <p className="popup-text">Dedicated to the global IT Industry</p>
            <button
              className="popup-close-btn"
              onClick={() => setShowPopup(false)}
            >
              Get in →
            </button>
          </div>
        </div>
       )}
      

      <section className="hero-section">
        <div className="hero-content">
          <h1 id="daily-money">
            <span className="hero-red">
              Daily <span className="money">Money</span>
            </span>
          </h1>
          <strong>
            <h2 className="hero-sub">Health & wealth.</h2>
          </strong>
          <strong>
            <p id="hero-subtitle">Independent for Entire life.</p>
          </strong>
          <p id="hero-desc" className="hero-desc">
            Daily Money stands for discipline, unity and freedom.
          </p>
          <p  id="hero-desc" className= "hero-desc">
            Together,we are shaping a future of health,wealth,and limitless opportunities
          </p>
          <p id="hero-desc" className="hero-desc">
            With Daily Money, every step forward is a step toward freedom,
            and a life without limits.
            <br /> Welcome to{" "}
            <strong>
              <span className="daily-money">daily money!</span>
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
            {/* This is now a div for the two-image effect */}
            <div
              className="hero-promo-image"
              role="img"
              aria-label="Daily Money app on phone"
            ></div>
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
                    stage of Daily Money
                  </span>
                </h2>
                <ul className="solution-bullets">
                  <li>
                    <strong>
                      Solutions for Every Stage of Your Health & Wealth Journey.
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Daily Money Made Easy, Health & Wealth Made Possible.
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Smart Choices for Daily Money, Smarter Future in Health &
                      Wealth.
                    </strong>
                  </li>
                  <li>
                    <strong>
                      From Today’s Money to Tomorrow’s Wealth & Wellness.
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Empowering You Every Day with Money, Health, and Wealth.
                    </strong>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Contains the image */}
            <div className="solution-image-container">
              <video
                src={videoFile}
                autoPlay
                loop
                muted
                alt="Daily Money Solutions"
              ></video>
            </div>
          </div>
          <div className="solutions-grid">
            <div className="solution-card1">
              <div className="solution-card-content">
                <div className="solution-card-title1">
                  Vision & Mission is your <span>Future</span>
                </div>
              </div>
              <img
                className="solution-card-img1"
                src="gen-1.jpg"
                alt="Custom Apps"
              />
            </div>
            <div className="solution-card1">
              <div className="solution-card-content">
                <div className="solution-card-title1">
                  Vision & Mission is your <span>future generation</span>
                </div>
              </div>
              <img
                className="solution-card-img1"
                src="/gen-2.jpg"
                alt="Design Systems"
              />
            </div>
            <div className="solution-card1">
              <div className="solution-card-content">
                <div className="solution-card-title1">
                  Vision & Mission is your <span>generation after generations</span>
                </div>
              </div>
              <img
                className="solution-card-img1"
                src="/gen-3.png"
                alt="AI Tools"
              />
            </div>
          </div>

          <div className="ar-vr-container">
            {/* Left Column with the Image */}
            <div className="ar-vr-image-column">
              <img src="./www.jpg" alt="AR/VR Experiences" />
              {/* The title overlay was removed from the previous design,
                  but you can add it back here if you want: 
                  <h3 className="ar-vr-image-title">AR/VR Experiences</h3> 
              */}
            </div>
            {/* Right Column with Content */}
            <div className="ar-vr-content-column">
              {/* The H3 and P tags have been REMOVED from here */}

              <div className="ar-vr-nested-card">
                <h4 className="nested-card-title">
                  The Daily Money Philosophy
                </h4>
                <ul className="solution-bullets">
                  <li>
                    <strong>
                      Your Partner in Daily Money, Health, and Wealth for Life.
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Every Stage, Every Step Money, Health & Wealth Solutions.
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Balance Your Daily Money. Build Your Health. Grow Your
                      Wealth.
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Small Daily Money Wins, Big Health & Wealth Gains.
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Simplify Daily Money. Strengthen Health. Secure Wealth.
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Master Your Day, Master Your Money, Master Your
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
                    <strong>Live Well, Live Wealthy, Every Single Day.</strong>
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
          <img src="/sir.png" alt="Dr.V.Chellapondy DSW" />
          <h4 className="team-member-name">Dr.V.Chellapondy</h4>
          <p className="team-member-role founder">Founder & CEO</p>
        </div>

        {/* The other team members remain in the grid below */}
        <div className="team-grid">
          <div className="team-member-card">
            <img src="https://via.placeholder.com/120" alt="S.Vasu" />
            <h4 className="team-member-name">S.Vasu</h4>
            <p className="team-member-role">Technocrat & Media Industry</p>
          </div>

          <div className="team-member-card">
            <img src="https://via.placeholder.com/120" alt="Dr. KP Kosygan" />
            <h4 className="team-member-name">Dr. KP Kosygan</h4>
            <p className="team-member-role">Senior Orthopaedic Consultant</p>
          </div>

          <div className="team-member-card">
            <img src="https://via.placeholder.com/120" alt="R.K.Selvamani" />
            <h4 className="team-member-name">R.K.Selvamani</h4>
            <p className="team-member-role">Film Director & Producer</p>
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
              <img
                src="https://res.cloudinary.com/dq9zq6ubg/image/upload/v1758609670/daily-money_fbjvzk.png"
                alt="DailyMoney Logo"
              />
              <span className="footer-logo-text1">Daily Money</span>
              <span className="footer-subtext1">
                Six Sigma Solution, NKC Towers 1st Floor, Opp to Government
                Engineering College, Kottagoundampatti, Karuppur, Salem-636011.
                TamilNadu, India.
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
                    <a href="https://x.com/?lang=en">Follow on X</a>
                  </li>
                  <li>
                    <a href="https://facebook.com">Follow on Facebook</a>
                  </li>
                  <li>
                    <a href="">Follow on Instagram</a>
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


