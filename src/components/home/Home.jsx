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
          <h2>Six Sigma Solutions.</h2>
          <p id="hero-subtitle">Independent for entire life.</p>
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
        <div className="hero-image-container">
          <div className="image-container">
            <img src="https://res.cloudinary.com/dq9zq6ubg/image/upload/v1758863572/i-phone-buddha-2_vpr8gt.jpg" alt="Styled" className="styled-img" />
          </div>
        </div>
      </section>

      {/* Features / Solutions */}
      <section className="solutions-cards">
        <div className="solution-card">
          <img
            className="solution-card-img"
            src="https://i.imgur.com/8QfQF8F.png"
            alt="Custom Apps"
          />
          <div className="solution-card-title">Custom Applications</div>
          <div className="solution-card-desc">
            Scale your business with reliable mobile and web apps built for
            performance and growth.
          </div>
        </div>
        <div className="solution-card">
          <img
            className="solution-card-img"
            src="https://i.imgur.com/8QfQF8F.png"
            alt="Design Systems"
          />
          <div className="solution-card-title">Brand & Design Systems</div>
          <div className="solution-card-desc">
            Build recognition with cohesive identity and design systems across
            touchpoints.
          </div>
        </div>
        <div className="solution-card">
          <img
            className="solution-card-img"
            src="https://i.imgur.com/8QfQF8F.png"
            alt="AI Tools"
          />
          <div className="solution-card-title">AI Plugins & Automation</div>
          <div className="solution-card-desc">
            Streamline operations and enhance user experience with intelligent
            automation.
          </div>
        </div>
      </section>

      {/* Infra Section */}
      <section className="infra-container">
        <div className="infra-left">
          <img src="https://i.imgur.com/8QfQF8F.png" alt="Infrastructure" />
        </div>
        <div className="infra-right">
          <div className="infra-title">Infrastructure & Hosting</div>
          <div className="infra-desc">
            Get complete setup from domain registration to reliable cloud
            hosting and maintenance.
          </div>
          <img src="https://i.imgur.com/8QfQF8F.png" alt="Hosting" />
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients-container">
        <div className="clients-title">You're in good company</div>
        <div className="clients-logos">
          {[
            "Xerox",
            "AT&T",
            "Staples",
            "Honest Co.",
            "RootMetrics",
            "Xome",
            "Copper Mobile",
            "ChildFund",
          ].map((client) => (
            <div className="client-logo-block" key={client}>
              <img src="https://i.imgur.com/8QfQF8F.png" alt={client} />
              <span>{client}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-main">
          <div className="footer-cta">
            <h2>Tell us about your project</h2>
            <button className="say-hello-btn">Say Hello</button>
          </div>
          <hr className="footer-divider" />
          <div className="footer-bottom-content">
            <div className="footer-logo-block">
              <img src="/images/logo.jpg" alt="Logo" />
              <span className="footer-logo-text">Daily Money</span>
              <span className="footer-subtext">software design studio</span>
              <span className="footer-copyright">
                © 2025. All rights reserved.
              </span>
            </div>
            <div className="footer-links-block">
              <div className="footer-links-col">
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
              <div className="footer-links-col">
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
      </footer>
    </div>
  );
}
