// Home.jsx

import React from "react";
import "./Home.css";
import videoFile from "../../assets/gif.mp4";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>
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
          <p className="hero-desc">
            Daily Money stands for discipline, unity, and freedom. Together, we
            are shaping a future of health, wealth, and limitless opportunities.
            With Daily Money, every step forward is a step toward freedom,
            prosperity, and a life without limits.
            <br /> Welcome to{" "}
            <strong>
              <span className="daily-money">daily money!</span>
            </strong>
          </p>
          <div className="hero-actions">
            <Link className="link" to="/overview" >
             <button type="button" className="see-work-btn">
              See our work
            </button>
            </Link>
            <Link className="link" to="/health" >
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
                  Daily Money is your <span>Future</span>
                </div>
              </div>
              <img
                className="solution-card-img1"
                src="/phone-1.png"
                alt="Custom Apps"
              />
            </div>
            <div className="solution-card1">
              <div className="solution-card-content">
                <div className="solution-card-title1">
                  Daily Money is your <span>future generation</span>
                </div>
              </div>
              <img
                className="solution-card-img1"
                src="/phone-2.png"
                alt="Design Systems"
              />
            </div>
            <div className="solution-card1">
              <div className="solution-card-content">
                <div className="solution-card-title1">
                  Daily Money is your <span>generation after generations</span>
                </div>
              </div>
              <img
                className="solution-card-img1"
                src="./phone-3.png"
                alt="AI Tools"
              />
            </div>
          </div>

          <div className="ar-vr-container">
            {/* Left Column with the Image */}
            <div className="ar-vr-image-column">
              <img src="./wealth1.jpg" alt="AR/VR Experiences" />
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

      <footer1>
        <div className="footer-main1">
          <div className="footer-cta1">
            <h2>Tell us about your project</h2>
            {/* Changed class name below */}
            <button className="say-hello-btn1">Say Hello</button>
          </div>
          {/* Changed class name below */}
          <hr className="footer-divider1" />
          {/* Changed class name below */}
          <div className="footer-bottom-content1">
            {/* Changed class name below */}
            <div className="footer-logo-block1">
              <img
                src="https://res.cloudinary.com/dq9zq6ubg/image/upload/v1758609670/daily-money_fbjvzk.png"
                alt="DailyMoney Logo"
              />
              {/* Changed class name below */}
              <span className="footer-logo-text1">Daily Money</span>
              {/* Changed class name below */}
              <span className="footer-subtext1">
                Imagine a world where nature's abundance powers your financial
                future. fresh leaves and fruits dance in the dark.
              </span>
              {/* Changed class name below */}
              <span className="footer-copyright1">
                © 2025. All rights reserved.
              </span>
            </div>
            {/* Changed class name below */}
            <div className="footer-links-block1">
              {/* Changed class name below */}
              <div className="footer-links-col1">
                <h4>Company</h4>
                <ul>
                  <li>
                    <a href="#">Work</a>
                  </li>
                  <li>
                    <a href="#">Process</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </div>
              {/* Changed class name below */}
              <div className="footer-links-col1">
                <h4>Connect</h4>
                <ul>
                  <li>
                    <a href="#">Follow on X</a>
                  </li>
                  <li>
                    <a href="#">Book a call</a>
                  </li>
                  <li>
                    <a href="#">Get in touch</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer1>
    </div>
  );
}
