/* eslint-disable no-irregular-whitespace */
import React, { useEffect } from "react";
import "./Vision.css";

// use public folder paths (no import)
const visionImage = "/vision1.jpeg";
const missionImage = "/mission.jpeg";

export default function Vision() {
  useEffect(() => {
    const txts = document.querySelectorAll(".card-text");
    txts.forEach((txt) => {
      txt.style.opacity = "0";
      txt.style.transform = "translateY(8px)";
      txt.style.transition = "opacity 520ms ease, transform 520ms ease";
      requestAnimationFrame(() => {
        txt.style.opacity = "1";
        txt.style.transform = "translateY(0)";
      });
    });
  }, []);

  return (
    <main className="vision-page">
      <section className="hero-card">
        <div className="card-inner">
          <img className="card-media" src={visionImage} alt="Vision" />
          <div className="card-overlay">
            <div className="card-text">
              <p className="kicker">Our Vision</p>
              <h1>
                Build with intention.
                <br />
                Deliver with precision.
              </h1>
              <p className="lead">
                Daily money is not just about spending — it’s about creating
                value, building strength, and shaping the future.
              </p>
            </div>
          </div>
          <div className="card-features">
            <div className="col">
              <strong>Financial Excellence.</strong>
              <span> Master money management through smart habits.</span>
            </div>
            <div className="col">
              <strong>Trusted Partnership.</strong>
              <span> Walk with users as true partners in growth.</span>
            </div>
            <div className="col">
              <strong>Seamless Experience.</strong>
              <span> One integrated platform.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="standards">
        <div className="container">
          <p className="kicker small">Our standards</p>
          <h2>Every Detail Matters in Daily Money</h2>
          <p className="lead muted">
            Consistent financial growth requires clear standards and smart choices.
          </p>

          <div className="grid-features">
            <div className="feature">
              <h4>Transparent Communication.</h4>
              <p>Track every expense with clear plans and timelines.</p>
            </div>
            <div className="feature">
              <h4>Security by Design.</h4>
              <p>Industry‑standard security protocols implemented from day one.</p>
            </div>
            <div className="feature">
              <h4>Accessibility Standards.</h4>
              <p>Secure methods for saving and investing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="hero-card">
        <div className="card-inner">
          <img className="card-media" src={missionImage} alt="Mission" />
          <div className="card-overlay">
            <div className="card-text">
              <p className="kicker">Our Mission</p>
              <h1>To make daily money smarter, safer, and more impactful.</h1>
              <p className="lead">
                We empower people to spend wisely, save consistently, and grow steadily.
              </p>
            </div>
          </div>
          <div className="card-features">
            <div className="col">
              <strong>Financial Excellence.</strong>
              <span> Master money management through smart habits.</span>
            </div>
            <div className="col">
              <strong>Trusted Partnership.</strong>
              <span> Work alongside individuals and businesses.</span>
            </div>
            <div className="col">
              <strong>Integrated Approach.</strong>
              <span> Blend planning, saving, and investing.</span>
            </div>
          </div>
        </div>
      </section>
      <section className="standards">
        <div className="container">
          <p className="kicker small">Our standards</p>
          <h2>Every Detail Matters in Daily Money</h2>
          <p className="lead muted">
            Consistent financial growth requires clear standards and smart choices.
          </p>

          <div className="grid-features">
            <div className="feature">
              <h4>Transparent Communication.</h4>
              <p>Track every expense with clear plans and timelines.</p>
            </div>
            <div className="feature">
              <h4>Security by Design.</h4>
              <p>Industry‑standard security protocols implemented from day one.</p>
            </div>
            <div className="feature">
              <h4>Accessibility Standards.</h4>
              <p>Secure methods for saving and investing.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
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
                {/* <ul>
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
                </ul> */}
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
      </section>
   
    </main>
    
  );
}
