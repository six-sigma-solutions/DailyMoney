// Home.jsx

import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            <span className="hero-red">
              Daily <span className="money">Money</span>
            </span>
          </h1>
          <h2 className="hero-sub">Health & wealth.</h2>
          <p id="hero-subtitle">Independent for Entire life.</p>
          <p className="hero-desc">
            imagine a world where nature's bounty fuels your financial future.
            fresh leaves and fruits dance in the dark. welcome to{" "}
            <span className="daily-money">daily money!</span>
          </p>
          <div className="hero-actions">
            <a href="#" className="see-work-btn">
              See our work
            </a>
            <a href="#" className="get-started-btn">
              Get started →
            </a>
          </div>
        </div>

        {/* === START: HERO IMAGE SECTION === */}
        <div className="hero-image-container">
          <div className="cutout-shape">
            {/* This is your main phone image */}
            <img
              src="/phone.png"
              alt="Daily Money app on phone"
              className="hero-promo-image"
            />
            {/* Four money pile images, one for each corner */}
            <img
              src="/money-pile.png"
              alt="Money pile"
              className="money-pile money-bl" /* Bottom-Left */
            />
            <img
              src="/money-pile.png"
              alt="Money pile"
              className="money-pile money-br" /* Bottom-Right */
            />
            <img
              src="/money-pile.png"
              alt="Money pile"
              className="money-pile money-tl" /* Top-Left */
            />
            <img
              src="/money-pile.png"
              alt="Money pile"
              className="money-pile money-tr" /* Top-Right */
            />
             {/* PASTE THE NEW CODE HERE */}
             <img
              src="/currency-bl.png"
              alt="Money"
              className="new-money new-bl"
            />
            <img
              src="/currency-tr.png"
              alt="Money"
              className="new-money new-tr"
            />
            {/* <img
              src="/money-pile.png"
              alt="Money"
              className="extra-money extra-top"
            />
            <img
              src="/money-7.png"
              alt="Money"
              className="extra-money extra-bottom"
            /> */}
          </div>
        </div>
        {/* === END: HERO IMAGE SECTION === */}
      </section>

   

      {/* ... (The rest of your page content remains the same) ... */}
      <section className="testimonial-section">
        <div className="testimonial-content">
          <blockquote className="testimonial-quote">
            “Archetype Labs created an identity with incredible
            <br />
            depth – something that reveals our engineering
            <br />
            expertise at every glance. Simple yet sophisticated.”
          </blockquote>
          <div className="testimonial-author">
            <img
              src="https://res.cloudinary.com/dq9zq6ubg/image/upload/v1758609670/daily-money_fbjvzk.png"
              alt="DailyMoney Logo"
              className="author-icon"
            />
            <div className="author-details">
              <p className="author-name">Kannappan Sethunarayanan</p>
              <p className="author-title">Hydro Engineering Products</p>
            </div>
          </div>
        </div>
      </section>

      <section className="solutions-section">
        <div className="container">
          <div className="solutions-header">
            <p className="solutions-tagline">Services</p>
            <h2>
              <span className="red-text">Solutions for every <br></br>stage of your journey</span>
            </h2>
            <p className="solutions-description">
              Whether you’re launching your first product or scaling an established business, get custom solutions that fit your specific needs and timeline.
            </p>
          </div>
          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-card-content">
                <div className="solution-card-title">Custom Applications</div>
                <div className="solution-card-desc">
                  Scale your business with reliable mobile and web applications built for performance and growth.
                </div>
              </div>
              <img
                className="solution-card-img"
                src="https://res.cloudinary.com/dq9zq6ubg/image/upload/v1758863572/i-phone-buddha-2_vpr8gt.jpg"
                alt="Custom Apps"
              />
            </div>
            <div className="solution-card">
              <div className="solution-card-content">
                <div className="solution-card-title">Brand & Design Systems</div>
                <div className="solution-card-desc">
                  Build recognition with cohesive visual identity and design systems across all your touchpoints.
                </div>
              </div>
              <img
                className="solution-card-img"
                src="https://res.cloudinary.com/dq9zq6ubg/image/upload/v1758863572/i-phone-buddha-2_vpr8gt.jpg"
                alt="Design Systems"
              />
            </div>
            <div className="solution-card">
              <div className="solution-card-content">
                <div className="solution-card-title">AI Plugins, Chatbots & Automation Tools</div>
                <div className="solution-card-desc">
                  Streamline operations and enhance user experience with intelligent automation solutions.
                </div>
              </div>
              <img
                className="solution-card-img"
                src="https://res.cloudinary.com/dq9zq6ubg/image/upload/v1758863572/i-phone-buddha-2_vpr8gt.jpg"
                alt="AI Tools"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="clients-container">
        <div className="clients-title">Our Clinte's</div>
        <div className="clients-logos">
          {[
            "Xerox", "AT&T", "Staples", "Honest Co.",
            "RootMetrics", "Xome", "Copper Mobile", "ChildFund",
          ].map((client) => (
            <div className="client-logo-block" key={client}>
              <img src="https://i.imgur.com/8QfQF8F.png" alt={client} />
              <span>{client}</span>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <div className="footer-cta">
            <h2>Tell us about your project</h2>
            <button className="say-hello-btn">Say Hello</button>
          </div>
          <hr className="footer-divider" />
          <div className="footer-bottom-content">
            <div className="footer-logo-block">
            <img
            src="https://res.cloudinary.com/dq9zq6ubg/image/upload/v1758609670/daily-money_fbjvzk.png"
            alt="DailyMoney Logo"
          />
              <span className="footer-logo-text">Daily Money</span>
              <span className="footer-subtext">imagine a world where nature's bounty fuels your financial future. fresh leaves and fruits dance in the dark. welcome to daily money!</span>
              <span className="footer-copyright">
                © 2025. All rights reserved.
              </span>
            </div>
            <div className="footer-links-block">
              <div className="footer-links-col">
                <h4>Company</h4>
                <ul>
                  <li><a href="#">Work</a></li>
                  <li><a href="#">Process</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Blog</a></li>
                </ul>
              </div>
              <div className="footer-links-col">
                <h4>Connect</h4>
                <ul>
                  <li><a href="#">Follow on X</a></li>
                  <li><a href="#">Book a call</a></li>
                  <li><a href="#">Get in touch</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}