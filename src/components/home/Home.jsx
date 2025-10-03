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
          <strong><p id="hero-subtitle">Independent for Entire life.</p></strong>
          <p className="hero-desc">
            Imagine a world where nature's bounty fuels your financial future.
            fresh leaves and fruits dance in the dark.<br/> Welcome to{" "}
            <strong><span className="daily-money">daily money!</span></strong>
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
              src="/logo2.png"
              alt="Daily Money app on phone"
              className="hero-promo-image"
            />
          </div>
        </div>
        {/* === END: HERO IMAGE SECTION === */}
      </section>


      <section className="approach-section">
        <div className="container1">
          <div className="approach-header">
            <p className="approach-tagline">Our Approach</p>
            <h2>
              <span className="red-text">Technology with purpose,</span><br/>
              <span className="red-text">Design with impact.</span>
            </h2>
            <p className="approach-description">
              Get digital solutions that work the way you think. Your team
              stays focused on what matters while technology handles the
              complexity behind the scenes.
            </p>
          </div>
          <div className="approach-cards">
            <div className="approach-card">
              <h4>Digital Transformation: Complete brand and digital presence.</h4>
              <p>
                Establish your market position with cohesive brand identity and
                digital touchpoints that reflect your vision.
              </p>
            </div>
            <div className="approach-card">
              <h4>Custom solutions that fit your needs</h4>
              <p>
                Free up your team for strategic thinking. Let intelligent
                systems handle routine tasks while you focus on growth.
              </p>
            </div>
            <div className="approach-card">
              <h4>AR & VR: Engage users through immersive experiences.</h4>
              <p>
                Connect with your audience through AR/VR training, marketing, and
                interactive environments built for modern devices.
              </p>
            </div>
          </div>
        </div>
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
        <div className="container1">
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
            <div className="solution-card1">
              <div className="solution-card-content">
                <div className="solution-card-title1">Custom Applications</div>
                <div className="solution-card-desc1">
                  Scale your business with reliable mobile and web applications built for performance and growth.
                </div>
              </div>
              <img
                className="solution-card-img1"
                src="https://res.cloudinary.com/dq9zq6ubg/image/upload/v1758863572/i-phone-buddha-2_vpr8gt.jpg"
                alt="Custom Apps"
              />
            </div>
            <div className="solution-card1">
              <div className="solution-card-content">
                <div className="solution-card-title1">Brand & Design Systems</div>
                <div className="solution-card-desc1">
                  Build recognition with cohesive visual identity and design systems across all your touchpoints.
                </div>
              </div>
              <img
                className="solution-card-img1"
                src="https://res.cloudinary.com/dq9zq6ubg/image/upload/v1758863572/i-phone-buddha-2_vpr8gt.jpg"
                alt="Design Systems"
              />
            </div>
            <div className="solution-card1">
              <div className="solution-card-content">
                <div className="solution-card-title1">AI Plugins, Chatbots & Automation Tools</div>
                <div className="solution-card-desc1">
                  Streamline operations and enhance user experience with intelligent automation solutions.
                </div>
              </div>
              <img
                className="solution-card-img1"
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
              <span className="footer-subtext1">imagine a world where nature's bounty fuels your financial future. fresh leaves and fruits dance in the dark. welcome to daily money!</span>
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
                  <li><a href="#">Work</a></li>
                  <li><a href="#">Process</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Blog</a></li>
                </ul>
              </div>
              {/* Changed class name below */}
              <div className="footer-links-col1">
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
      </footer1>
    </div>
  );
}
