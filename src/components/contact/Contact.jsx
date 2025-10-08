import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "", countryCode: "+91" });
  const [status, setStatus] = useState(null);

  // Comprehensive Country codes list
  const countryCodes = [
    // Asia & Middle East
    { code: "+91", country: "India", flag: "🇮🇳" },
    { code: "+86", country: "China", flag: "🇨🇳" },
    { code: "+81", country: "Japan", flag: "🇯🇵" },
    { code: "+82", country: "South Korea", flag: "🇰🇷" },
    { code: "+62", country: "Indonesia", flag: "🇮🇩" },
    { code: "+92", country: "Pakistan", flag: "��" },
    { code: "+880", country: "Bangladesh", flag: "🇧🇩" },
    { code: "+63", country: "Philippines", flag: "🇵🇭" },
    { code: "+84", country: "Vietnam", flag: "��" },
    { code: "+66", country: "Thailand", flag: "🇹🇭" },
    { code: "+60", country: "Malaysia", flag: "��" },
    { code: "+65", country: "Singapore", flag: "🇸🇬" },
    { code: "+852", country: "Hong Kong", flag: "🇭🇰" },
    { code: "+886", country: "Taiwan", flag: "🇹🇼" },
    { code: "+94", country: "Sri Lanka", flag: "🇱🇰" },
    { code: "+977", country: "Nepal", flag: "🇳🇵" },
    { code: "+975", country: "Bhutan", flag: "🇧🇹" },
    { code: "+95", country: "Myanmar", flag: "🇲🇲" },
    { code: "+855", country: "Cambodia", flag: "🇰🇭" },
    { code: "+856", country: "Laos", flag: "🇱🇦" },
    { code: "+673", country: "Brunei", flag: "🇧🇳" },
    { code: "+960", country: "Maldives", flag: "🇲🇻" },
    { code: "+998", country: "Uzbekistan", flag: "🇺🇿" },
    { code: "+996", country: "Kyrgyzstan", flag: "🇰🇬" },
    { code: "+992", country: "Tajikistan", flag: "🇹🇯" },
    { code: "+993", country: "Turkmenistan", flag: "🇹🇲" },
    { code: "+7", country: "Kazakhstan/Russia", flag: "🇰🇿" },
    { code: "+374", country: "Armenia", flag: "��🇲" },
    { code: "+994", country: "Azerbaijan", flag: "🇦�" },
    { code: "+995", country: "Georgia", flag: "🇬🇪" },
    
    // Middle East
    { code: "+971", country: "UAE", flag: "🇦🇪" },
    { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
    { code: "+974", country: "Qatar", flag: "🇶🇦" },
    { code: "+968", country: "Oman", flag: "🇴🇲" },
    { code: "+973", country: "Bahrain", flag: "🇧🇭" },
    { code: "+965", country: "Kuwait", flag: "🇰🇼" },
    { code: "+964", country: "Iraq", flag: "🇮🇶" },
    { code: "+98", country: "Iran", flag: "🇮🇷" },
    { code: "+90", country: "Turkey", flag: "🇹🇷" },
    { code: "+972", country: "Israel", flag: "🇮🇱" },
    { code: "+970", country: "Palestine", flag: "🇵🇸" },
    { code: "+962", country: "Jordan", flag: "🇯🇴" },
    { code: "+963", country: "Syria", flag: "🇸🇾" },
    { code: "+961", country: "Lebanon", flag: "🇱🇧" },
    { code: "+967", country: "Yemen", flag: "🇾🇪" },
    { code: "+93", country: "Afghanistan", flag: "🇦🇫" },
    
    // Europe
    { code: "+49", country: "Germany", flag: "🇩🇪" },
    { code: "+44", country: "United Kingdom", flag: "🇬🇧" },
    { code: "+33", country: "France", flag: "🇫🇷" },
    { code: "+39", country: "Italy", flag: "🇮🇹" },
    { code: "+34", country: "Spain", flag: "🇪🇸" },
    { code: "+31", country: "Netherlands", flag: "��" },
    { code: "+32", country: "Belgium", flag: "🇧🇪" },
    { code: "+41", country: "Switzerland", flag: "🇨🇭" },
    { code: "+43", country: "Austria", flag: "🇦🇹" },
    { code: "+46", country: "Sweden", flag: "🇸🇪" },
    { code: "+47", country: "Norway", flag: "�🇴" },
    { code: "+45", country: "Denmark", flag: "🇩�🇰" },
    { code: "+358", country: "Finland", flag: "🇫🇮" },
    { code: "+354", country: "Iceland", flag: "🇮🇸" },
    { code: "+353", country: "Ireland", flag: "🇮🇪" },
    { code: "+351", country: "Portugal", flag: "🇵🇹" },
    { code: "+30", country: "Greece", flag: "🇬🇷" },
    { code: "+48", country: "Poland", flag: "🇵🇱" },
    { code: "+420", country: "Czech Republic", flag: "🇨🇿" },
    { code: "+421", country: "Slovakia", flag: "��" },
    { code: "+36", country: "Hungary", flag: "🇭🇺" },
    { code: "+40", country: "Romania", flag: "🇷🇴" },
    { code: "+359", country: "Bulgaria", flag: "🇧🇬" },
    { code: "+385", country: "Croatia", flag: "🇭🇷" },
    { code: "+386", country: "Slovenia", flag: "🇸🇮" },
    { code: "+387", country: "Bosnia", flag: "🇧🇦" },
    { code: "+381", country: "Serbia", flag: "🇷🇸" },
    { code: "+382", country: "Montenegro", flag: "🇲🇪" },
    { code: "+389", country: "North Macedonia", flag: "🇲🇰" },
    { code: "+355", country: "Albania", flag: "🇦🇱" },
    { code: "+383", country: "Kosovo", flag: "��" },
    { code: "+373", country: "Moldova", flag: "🇲🇩" },
    { code: "+380", country: "Ukraine", flag: "🇺🇦" },
    { code: "+375", country: "Belarus", flag: "🇧🇾" },
    { code: "+370", country: "Lithuania", flag: "�🇹" },
    { code: "+371", country: "Latvia", flag: "🇱�🇻" },
    { code: "+372", country: "Estonia", flag: "�🇪" },
    
    // North America
    { code: "+1", country: "USA/Canada", flag: "🇺🇸" },
    { code: "+52", country: "Mexico", flag: "🇲🇽" },
    { code: "+503", country: "El Salvador", flag: "🇸🇻" },
    { code: "+502", country: "Guatemala", flag: "🇬🇹" },
    { code: "+504", country: "Honduras", flag: "🇭🇳" },
    { code: "+505", country: "Nicaragua", flag: "��🇮" },
    { code: "+506", country: "Costa Rica", flag: "🇨�" },
    { code: "+507", country: "Panama", flag: "🇵🇦" },
    
    // South America
    { code: "+55", country: "Brazil", flag: "🇧🇷" },
    { code: "+54", country: "Argentina", flag: "🇦🇷" },
    { code: "+56", country: "Chile", flag: "🇨🇱" },
    { code: "+51", country: "Peru", flag: "🇵🇪" },
    { code: "+57", country: "Colombia", flag: "🇨🇴" },
    { code: "+58", country: "Venezuela", flag: "🇻🇪" },
    { code: "+593", country: "Ecuador", flag: "🇪🇨" },
    { code: "+591", country: "Bolivia", flag: "🇧🇴" },
    { code: "+595", country: "Paraguay", flag: "🇵🇾" },
    { code: "+598", country: "Uruguay", flag: "🇺🇾" },
    { code: "+592", country: "Guyana", flag: "🇬🇾" },
    { code: "+597", country: "Suriname", flag: "🇸🇷" },
    
    // Africa
    { code: "+20", country: "Egypt", flag: "🇪�" },
    { code: "+27", country: "South Africa", flag: "🇿🇦" },
    { code: "+234", country: "Nigeria", flag: "🇳🇬" },
    { code: "+254", country: "Kenya", flag: "�🇪" },
    { code: "+256", country: "Uganda", flag: "🇺�🇬" },
    { code: "+255", country: "Tanzania", flag: "🇹🇿" },
    { code: "+251", country: "Ethiopia", flag: "🇪�" },
    { code: "+233", country: "Ghana", flag: "�🇬🇭" },
    { code: "+225", country: "Ivory Coast", flag: "🇨🇮" },
    { code: "+221", country: "Senegal", flag: "🇸🇳" },
    { code: "+212", country: "Morocco", flag: "🇲🇦" },
    { code: "+216", country: "Tunisia", flag: "🇹🇳" },
    { code: "+213", country: "Algeria", flag: "🇩🇿" },
    { code: "+218", country: "Libya", flag: "🇱🇾" },
    { code: "+249", country: "Sudan", flag: "🇸🇩" },
    { code: "+250", country: "Rwanda", flag: "🇷🇼" },
    { code: "+257", country: "Burundi", flag: "🇧🇮" },
    { code: "+260", country: "Zambia", flag: "🇿🇲" },
    { code: "+263", country: "Zimbabwe", flag: "🇿🇼" },
    { code: "+265", country: "Malawi", flag: "🇲🇼" },
    { code: "+266", country: "Lesotho", flag: "🇱🇸" },
    { code: "+267", country: "Botswana", flag: "🇧🇼" },
    { code: "+268", country: "Swaziland", flag: "🇸�" },
    { code: "+269", country: "Comoros", flag: "�🇲" },
    { code: "+261", country: "Madagascar", flag: "🇲🇬" },
    { code: "+230", country: "Mauritius", flag: "🇲�" },
    { code: "+248", country: "Seychelles", flag: "🇸🇨" },
    
    // Oceania
    { code: "+61", country: "Australia", flag: "🇦🇺" },
    { code: "+64", country: "New Zealand", flag: "🇳🇿" },
    { code: "+679", country: "Fiji", flag: "🇫🇯" },
    { code: "+685", country: "Samoa", flag: "🇼�" },
    { code: "+676", country: "Tonga", flag: "🇹🇴" },
    { code: "+678", country: "Vanuatu", flag: "🇻🇺" },
    { code: "+687", country: "New Caledonia", flag: "🇳🇨" },
    { code: "+689", country: "French Polynesia", flag: "🇵�" }
  ];

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Combine country code and phone number
    const formData = {
      ...form,
      phone: form.phone ? `${form.countryCode} ${form.phone}` : ''
    };
    
    console.log('Submitting form:', formData);
    try {
      console.log('Sending request to backend...');
      const res = await fetch('http://localhost:4000/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      console.log('Response status:', res.status);
      console.log('Response ok:', res.ok);
      
      if (res.ok) {
        const result = await res.json();
        console.log('Success result:', result);
        setStatus('sent');
        setForm({ name: "", email: "", phone: "", company: "", message: "", countryCode: "+91" });
      } else {
        const errorText = await res.text();
        console.error('Backend error:', errorText);
        setStatus('error');
      }
    } catch (err) {
      console.error('Network error:', err);
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
            <a href="mailto:cpdian@gmail.com">
              cpdian@gmail.com
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
            Call us
          </strong>
          <p>
            <a href="tel:+919884590009">
              +91 9884590009
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
            
            {/* Phone input with country code dropdown */}
            <div className="phone-input-container">
              <select 
                name="countryCode" 
                value={form.countryCode} 
                onChange={handleChange} 
                className="country-code-select"
              >
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.flag} {country.code} {country.country}
                  </option>
                ))}
              </select>
              <input 
                name="phone" 
                value={form.phone} 
                onChange={handleChange} 
                type="tel" 
                placeholder="Phone Number" 
                className="phone-number-input"
              />
            </div>
            
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
