import React from "react";
import "./style.css";

const ContactPage = () => {
  return (
    <div>
      <div className="contact">
        <h3>Contact us</h3>
      </div>

      <div className="contact-1">
        <h1>Join Together!.</h1>
        <h1>Journey Together!.</h1>
      </div>

      <div className="container">
        {/* Left Section */}
        <div className="office-info">
          <h3>Our offices</h3>
          <p style={{ paddingTop: "20px" }}>
            Six Sigma Solution,
            <br />
            NKC Towers 1st Floor,
            <br /> Opp to Government Engineering College,
            <br />
            Kottagoundampatti, Karuppur, Salem-636011.
            <br />
            TamilNadu, India.
          </p>

          <h3
            style={{
              paddingBottom: "20px",
              paddingTop: "80px",
              margin: "0px",
              paddingRight: "0px",
            }}
          >
            Email us
          </h3>

          <strong style={{ paddingBottom: "5px", paddingTop: "10px" }}>
            Get in touch
          </strong>
          <p>
            <a href="https://www.dailymoney360.com/">
              hello@dailymoney360.com
            </a>
          </p>

          <strong
            style={{
              paddingBottom: "5px",
              paddingTop: "10px",
              margin: "0px",
              paddingRight: "0px",
            }}
          >
            Join our team
          </strong>
          <p>
            <a href="https://chat.whatsapp.com/Dx7fjCDwy248xNDKq2Rg77">
              hello@dailymoney.com
            </a>
          </p>

          <strong
            style={{
              paddingTop: "80px",
              paddingBottom: "20px",
              margin: "0px",
              paddingRight: "0px",
            }}
          >
            Get in Touch
          </strong>
          <p>
            <a href="https://x.com/cpdian?s=11">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://www.facebook.com/share/1Cx1RDAMqQ/?mibextid=wwXIfr">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/chellapondyvellaiswamy?igsh=MTgwM25qbnBpb2Nxbg%3D%3D&utm_source=qr">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="tel:+919884590009">
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
            <input type="number" placeholder="Phone" />
            <input type="text" placeholder="Company" />
            <textarea placeholder="Message"></textarea>

            <button className="send-btn" type="submit">
              Send
              <a href="">
                <i
                  style={{ color: "white", paddingLeft: "20px" }}
                  className="fas fa fa-angle-right"
                ></i>
              </a>
            </button>
          </form>
        </div>
      </div>

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
              <span className="footer-subtext1">Imagine a world where nature's abundance powers your financial future. fresh leaves and fruits dance in the dark.</span>
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
};

export default ContactPage;
