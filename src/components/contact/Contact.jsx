import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div>
      <div className="contact">
        <h3>Contact us</h3>
        <h1>Let's create together</h1>
        <h2>We can't wait to hear from you.</h2>
      </div>

      <div className="container">
        {/* Left Section */}
        <div className="office-info">
          <h3>Our offices</h3>
          <p>
            NKC Towers 1st Floor , opp to Government engineering College,
          </p>
          <p>Kottagoundampatti, Karuppur, Salem-636011.</p>

          <h3 style={{ paddingBottom: "20px", paddingTop: "80px" }}>Email us</h3>
          <strong style={{ paddingBottom: "5px", paddingTop: "10px" }}>
            Get in touch
          </strong>
          <p>
            <a href="mailto:hello@archetypelabs.com">hello@archetypelabs.com</a>
          </p>

          <strong style={{ paddingBottom: "5px", paddingTop: "10px" }}>
            Media Inquiries
          </strong>
          <p>
            <a href="mailto:hello@archetypelabs.com">hello@archetypelabs.com</a>
          </p>

          <h3 style={{ paddingBottom: "5px", paddingTop: "10px" }}>
            Join our team
          </h3>
          <p>
            <a href="mailto:hello@archetypelabs.com">hello@archetypelabs.com</a>
          </p>

          <h3 style={{ paddingTop: "80px", paddingBottom: "20px" }}>
            Get in Touch
          </h3>
          <p>
            <a href="#">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#">
              <i className="fa-solid fa-phone"></i>
            </a>
          </p>
        </div>

        {/* Right Section */}
        <div className="form-section">
          <h3>For Inquiries</h3>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="Company" />
            <textarea placeholder="Message"></textarea>

            <h4 style={{ fontWeight: 200 }}>Budget</h4>

            <div className="budget-options">
              <label>
                <input type="radio" name="budget" />$25k-$50k
              </label>
              <label>
                <input type="radio" name="budget" />$50k-$100k
              </label>
              <label>
                <input type="radio" name="budget" />$100k-$150k
              </label>
              <label>
                <input type="radio" name="budget" />
                More than $150k
              </label>
            </div>

            <button type="submit">
              <i style={{ color: "white" }} className="fas fa fa-angle-right"></i>
              Send
            </button>
          </form>
        </div>
      </div>

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
              <span className="footer-subtext">
                imagine a world where nature's bounty fuels your financial
                future. fresh leaves and fruits dance in the dark. welcome to
                daily money!
              </span>
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
