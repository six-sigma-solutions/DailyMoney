import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('http://localhost:4000/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('sent');
        setForm({ name: "", email: "", phone: "", company: "", message: "" });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

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
          <form onSubmit={handleSubmit}>
            <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Name" required />
            <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" required />
            <input name="phone" value={form.phone} onChange={handleChange} type="text" placeholder="Phone" />
            <input name="company" value={form.company} onChange={handleChange} type="text" placeholder="Company" />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message"></textarea>

            <button className="send-btn" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send'}
              <i style={{ color: "white", paddingLeft: "20px" }} className="fas fa fa-angle-right"></i>
            </button>

            {status === 'sent' && <p style={{ color: 'green', marginTop: 12 }}>Thank you — your enquiry has been submitted.</p>}
            {status === 'error' && <p style={{ color: 'red', marginTop: 12 }}>Submission failed — please try again later.</p>}
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="footer-main">
          <div className="footer-cta">
            <h2>Tell us about your project</h2>
                        <Link to="/" className="say-hello-btn">Say Hello</Link>
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
