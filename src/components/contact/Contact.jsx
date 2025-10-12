
import React, { useState } from "react";
import "./Contact.css";
import Footer from "../footer/Footer";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    countryCode: "+91",
  });

  const [status, setStatus] = useState(null);

  const countryCodes = [
     { code: "+91", country: "India", flag: "🇮🇳" },
    { code: "+1", country: "USA/Canada", flag: "🇺🇸" },
    { code: "+44", country: "United Kingdom", flag: "🇬🇧" },
    { code: "+61", country: "Australia", flag: "🇦🇺" },
    { code: "+81", country: "Japan", flag: "🇯🇵" },
    { code: "+86", country: "China", flag: "🇨🇳" },
    { code: "+49", country: "Germany", flag: "🇩🇪" },
    { code: "+33", country: "France", flag: "🇫🇷" },
    { code: "+39", country: "Italy", flag: "🇮🇹" },
    { code: "+7", country: "Russia", flag: "🇷🇺" },
    { code: "+55", country: "Brazil", flag: "🇧🇷" },
    { code: "+34", country: "Spain", flag: "🇪🇸" },
    { code: "+27", country: "South Africa", flag: "🇿🇦" },
    { code: "+82", country: "South Korea", flag: "🇰🇷" },
    { code: "+65", country: "Singapore", flag: "🇸🇬" },
    { code: "+62", country: "Indonesia", flag: "🇮🇩" },
    { code: "+60", country: "Malaysia", flag: "🇲🇾" },
    { code: "+63", country: "Philippines", flag: "🇵🇭" },
    { code: "+66", country: "Thailand", flag: "🇹🇭" },
    { code: "+92", country: "Pakistan", flag: "🇵🇰" },
    { code: "+880", country: "Bangladesh", flag: "🇧🇩" },
    { code: "+94", country: "Sri Lanka", flag: "🇱🇰" },
    { code: "+977", country: "Nepal", flag: "🇳🇵" },
    { code: "+7", country: "Kazakhstan", flag: "🇰🇿" },
    { code: "+20", country: "Egypt", flag: "🇪🇬" },
    { code: "+971", country: "UAE", flag: "🇦🇪" },
    { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
    { code: "+90", country: "Turkey", flag: "🇹🇷" },
    { code: "+98", country: "Iran", flag: "🇮🇷" },
    { code: "+964", country: "Iraq", flag: "🇮🇶" },
    { code: "+972", country: "Israel", flag: "🇮🇱" },
    { code: "+351", country: "Portugal", flag: "🇵🇹" },
    { code: "+46", country: "Sweden", flag: "🇸🇪" },
    { code: "+47", country: "Norway", flag: "🇳🇴" },
    { code: "+45", country: "Denmark", flag: "🇩🇰" },
    { code: "+358", country: "Finland", flag: "🇫🇮" },
    { code: "+31", country: "Netherlands", flag: "🇳🇱" },
    { code: "+32", country: "Belgium", flag: "🇧🇪" },
    { code: "+41", country: "Switzerland", flag: "🇨🇭" },
    { code: "+43", country: "Austria", flag: "🇦🇹" },
    { code: "+48", country: "Poland", flag: "🇵🇱" },
    { code: "+420", country: "Czech Republic", flag: "🇨🇿" },
    { code: "+421", country: "Slovakia", flag: "🇸🇰" },
    { code: "+36", country: "Hungary", flag: "🇭🇺" },
    { code: "+40", country: "Romania", flag: "🇷🇴" },
    { code: "+380", country: "Ukraine", flag: "🇺🇦" },
    { code: "+48", country: "Poland", flag: "🇵🇱" },
    { code: "+420", country: "Czech Republic", flag: "🇨🇿" },
    { code: "+421", country: "Slovakia", flag: "🇸🇰" },
    { code: "+36", country: "Hungary", flag: "🇭🇺" },
    { code: "+40", country: "Romania", flag: "🇷🇴" },
    { code: "+380", country: "Ukraine", flag: "🇺🇦" },
    { code: "+351", country: "Portugal", flag: "🇵🇹" },
    { code: "+353", country: "Ireland", flag: "🇮🇪" },
    { code: "+30", country: "Greece", flag: "🇬🇷" },
    { code: "+52", country: "Mexico", flag: "🇲🇽" },
    { code: "+54", country: "Argentina", flag: "🇦🇷" },
    { code: "+56", country: "Chile", flag: "🇨🇱" },
    { code: "+57", country: "Colombia", flag: "🇨🇴" },
    { code: "+51", country: "Peru", flag: "🇵🇪" },
    { code: "+507", country: "Panama", flag: "🇵🇦" },
    { code: "+505", country: "Nicaragua", flag: "🇳🇮" },
    { code: "+591", country: "Bolivia", flag: "🇧🇴" },
    { code: "+593", country: "Ecuador", flag: "🇪🇨" },
    { code: "+595", country: "Paraguay", flag: "🇵🇾" },
    { code: "+598", country: "Uruguay", flag: "🇺🇾" },
    { code: "+1-876", country: "Jamaica", flag: "🇯🇲" },
    { code: "+1-246", country: "Barbados", flag: "🇧🇧" },
    { code: "+1-268", country: "Antigua and Barbuda", flag: "🇦🇬" },
    { code: "+1-242", country: "Bahamas", flag: "🇧🇸" },
    { code: "+1-441", country: "Bermuda", flag: "🇧🇲" },
    { code: "+1-758", country: "Saint Lucia", flag: "🇱🇨" },
    { code: "+1-784", country: "Saint Vincent and the Grenadines", flag: "🇻🇨" },
    { code: "+1-868", country: "Trinidad and Tobago", flag: "🇹🇹" },
    { code: "+1-264", country: "Anguilla", flag: "🇦🇮" },
    { code: "+1-340", country: "U.S. Virgin Islands", flag: "🇻🇮" },
    { code: "+1-809", country: "Dominican Republic", flag: "🇩🇴" },
    { code: "+1-829", country: "Dominican Republic", flag: "🇩🇴" },
    { code: "+1-849", country: "Dominican Republic", flag: "🇩🇴" },
    { code: "+1-473", country: "Grenada", flag: "🇬🇩" },
    { code: "+1-664", country: "Montserrat", flag: "🇲🇸" },
    { code: "+1-869", country: "Saint Kitts and Nevis", flag: "🇰🇳" },
    { code: "+1-345", country: "Cayman Islands", flag: "🇰🇾" },
    { code: "+1-767", country: "Dominica", flag: "🇩🇲" },
    { code: "+1-784", country: "Saint Vincent and the Grenadines", flag: "🇻🇨" },
    { code: "+1-868", country: "Trinidad and Tobago", flag: "🇹🇹" },
    { code: "+1-876", country: "Jamaica", flag: "🇯🇲" },
    { code: "+1-809", country: "Dominican Republic", flag: "🇩🇴" },
    { code: "+1-829", country: "Dominican Republic", flag: "🇩🇴" },
    { code: "+1-849", country: "Dominican Republic", flag: "🇩🇴" },
    { code: "+1-473", country: "Grenada", flag: "🇬🇩" },
    { code: "+1-664", country: "Montserrat", flag: "🇲🇸" },
    { code: "+1-869", country: "Saint Kitts and Nevis", flag: "🇰🇳" },
    { code: "+1-345", country: "Cayman Islands", flag: "🇰🇾" },
    { code: "+1-767", country: "Dominica", flag: "🇩🇲" },
    { code: "+1-784", country: "Saint Vincent and the Grenadines", flag: "🇻🇨" },
    { code: "+1-868", country: "Trinidad and Tobago", flag: "🇹🇹" },
    { code: "+1-876", country: "Jamaica", flag: "🇯🇲" },
    { code: "+1-809", country: "Dominican Republic", flag: "🇩🇴" },
    { code: "+1-829", country: "Dominican Republic", flag: "🇩🇴" },
    { code: "+1-849", country: "Dominican Republic", flag: "🇩🇴" },
    { code: "+1-473", country: "Grenada", flag: "🇬🇩" },
    { code: "+1-664", country: "Montserrat", flag: "🇲🇸" },
    { code: "+1-869", country: "Saint Kitts and Nevis", flag: "🇰🇳" },
    { code: "+1-345", country: "Cayman Islands", flag: "🇰🇾" },
    { code: "+1-767", country: "Dominica", flag: "🇩🇲" },
    { code: "+1-784", country: "Saint Vincent and the Grenadines", flag: "🇻🇨" },
    { code: "+1-868", country: "Trinidad and Tobago", flag: "🇹🇹" },
    { code: "+1-876", country: "Jamaica", flag: "🇯🇲" },
    { code: "+1-809", country: "Dominican Republic", flag: "🇩🇴" },
    { code: "+1-829", country: "Dominican Republic", flag: "🇩🇴" },
    { code: "+1-849", country: "Dominican Republic", flag: "🇩🇴" },
    { code: "+1-473", country: "Grenada", flag: "🇬🇩" },
    { code: "+1-664", country: "Montserrat", flag: "🇲🇸" },
    { code: "+1-869", country: "Saint Kitts and Nevis", flag: "🇰🇳" },
    { code: "+1-345", country: "Cayman Islands", flag: "🇰🇾" },
    { code: "+1-767", country: "Dominica", flag: "🇩🇲" },
    { code: "+1-784", country: "Saint Vincent and the Grenadines", flag: "🇻🇨" },
    { code: "+1-868", country: "Trinidad and Tobago", flag: "🇹🇹" },
    { code: "+1-876", country: "Jamaica", flag: "🇯🇲" },
    { code: "+1-809", country: "Dominican Republic", flag: "🇩🇴" },
    { code: "+1-829", country: "Dominican Republic", flag: "🇩🇴" },
    { code: "+1-849", country: "Dominican Republic", flag: "🇩🇴" },
    { code: "+1-473", country: "Grenada", flag: "🇬🇩" },
    { code: "+1-664", country: "Montserrat", flag: "🇲🇸" },
    { code: "+1-869", country: "Saint Kitts and Nevis", flag: "🇰🇳" },
    { code: "+1-345", country: "Cayman Islands", flag: "🇰🇾" },
    { code: "+1-767", country: "Dominica", flag: "🇩🇲" },
    { code: "+1-784", country: "Saint Vincent and the Grenadines", flag: "🇻🇨" },
    { code: "+1-868", country: "Trinidad and Tobago", flag: "🇹🇹" },
    { code: "+1-876", country: "Jamaica", flag: "🇯🇲" },
    { code: "+1-809", country: "Dominican Republic", flag: "🇩🇴" },
    { code: "+1-829", country: "Dominican Republic", flag: "🇩🇴" },
    { code: "+1-849", country: "Dominican Republic", flag: "🇩🇴" }
    
  ];

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ state: "sending" });

    // Combine phone number
    const formData = {
      ...form,
      phone: form.phone ? `${form.countryCode} ${form.phone}` : "",
    };

    // EmailJS integration
    emailjs
      .send(
        "service_f8o9xuz", // 👉 replace with your EmailJS Service ID
        "template_6n6bxcd", // 👉 replace with your EmailJS Template ID
        formData,
        "AVAVj3_wM2trMKMkp" // 👉 replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus({ state: "sent" });
          setForm({
            name: "",
            email: "",
            phone: "",
            company: "",
            subject: "",
            message: "",
            countryCode: "+91",
          });
        },
        (error) => {
          setStatus({
            state: "error",
            message: error.text || "Failed to send message",
          });
        }
      );
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
            SIX SIGMA SOLUTIONS,
            <br />
            F-1,No 13,Breeze Enclave,Noombal
            <br />
            Main Road,Noombal,Chennai,
            <br />
            Tamil Nadu-600077,INDIA
          </p>
          <p style={{ paddingTop: "20px" }}>
            SIX SIGMA SOLUTIONS,
            <br />
            NKC Towers 1st Floor,
            <br />
            Opp to Government Engineering College,
            <br />
            Kottagoundampatti, Karuppur, Salem-636011.
            <br />
            TamilNadu, India.
          </p>

          <h3 style={{ paddingTop: "80px" }}>Email us</h3>
          <strong>Get in touch</strong>
          <p>
            <a href="mailto:cpdian@gmail.com">cpdian@gmail.com</a>
          </p>

          <strong>Call us</strong>
          <p>
            <a href="tel:+919884590009">+91 9884590009</a>
          </p>

          <strong style={{ paddingTop: "80px" }}>Get in Touch</strong>
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
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Name"
              required
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              required
            />

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

            {/* ✅ Fixed Subject Field */}
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              type="text"
              placeholder="Subject"
            />

            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              type="text"
              placeholder="Company Name"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
            ></textarea>

            <button
              className="send-btn"
              type="submit"
              disabled={status && status.state === "sending"}
            >
              {status && status.state === "sending" ? "Sending..." : "Send"}
              <i
                style={{ color: "white", paddingLeft: "20px" }}
                className="fas fa fa-angle-right"
              ></i>
            </button>

            {status && status.state === "sent" && (
              <p style={{ color: "green", marginTop: 12 }}>
                ✅ Thank you — your enquiry has been submitted successfully!
              </p>
            )}
            {status && status.state === "error" && (
              <p style={{ color: "red", marginTop: 12 }}>
                ❌ Submission failed —{" "}
                {status.message || "please try again later."}
              </p>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// import React, { useState } from "react";
// import "./Contact.css";
// import Footer from '../footer/Footer';

// export default function Contact() {
//   const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "", countryCode: "+91" });
//   const [status, setStatus] = useState(null);

//   // Comprehensive country codes list
//   const countryCodes = [
//     { code: "+91", country: "India", flag: "🇮🇳" },
//     { code: "+1", country: "USA/Canada", flag: "🇺🇸" },
//     { code: "+44", country: "United Kingdom", flag: "🇬🇧" },
//     { code: "+61", country: "Australia", flag: "🇦🇺" },
//     { code: "+81", country: "Japan", flag: "🇯🇵" },
//     { code: "+86", country: "China", flag: "🇨🇳" },
//     { code: "+49", country: "Germany", flag: "🇩🇪" },
//     { code: "+33", country: "France", flag: "🇫🇷" },
//     { code: "+39", country: "Italy", flag: "🇮🇹" },
//     { code: "+7", country: "Russia", flag: "🇷🇺" },
//     { code: "+55", country: "Brazil", flag: "🇧🇷" },
//     { code: "+34", country: "Spain", flag: "🇪🇸" },
//     { code: "+27", country: "South Africa", flag: "🇿🇦" },
//     { code: "+82", country: "South Korea", flag: "🇰🇷" },
//     { code: "+65", country: "Singapore", flag: "🇸🇬" },
//     { code: "+62", country: "Indonesia", flag: "🇮🇩" },
//     { code: "+60", country: "Malaysia", flag: "🇲🇾" },
//     { code: "+63", country: "Philippines", flag: "🇵🇭" },
//     { code: "+66", country: "Thailand", flag: "🇹🇭" },
//     { code: "+92", country: "Pakistan", flag: "🇵🇰" },
//     { code: "+880", country: "Bangladesh", flag: "🇧🇩" },
//     { code: "+94", country: "Sri Lanka", flag: "🇱🇰" },
//     { code: "+977", country: "Nepal", flag: "🇳🇵" },
//     { code: "+7", country: "Kazakhstan", flag: "🇰🇿" },
//     { code: "+20", country: "Egypt", flag: "🇪🇬" },
//     { code: "+971", country: "UAE", flag: "🇦🇪" },
//     { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
//     { code: "+90", country: "Turkey", flag: "🇹🇷" },
//     { code: "+98", country: "Iran", flag: "🇮🇷" },
//     { code: "+964", country: "Iraq", flag: "🇮🇶" },
//     { code: "+972", country: "Israel", flag: "🇮🇱" },
//     { code: "+351", country: "Portugal", flag: "🇵🇹" },
//     { code: "+46", country: "Sweden", flag: "🇸🇪" },
//     { code: "+47", country: "Norway", flag: "🇳🇴" },
//     { code: "+45", country: "Denmark", flag: "🇩🇰" },
//     { code: "+358", country: "Finland", flag: "🇫🇮" },
//     { code: "+31", country: "Netherlands", flag: "🇳🇱" },
//     { code: "+32", country: "Belgium", flag: "🇧🇪" },
//     { code: "+41", country: "Switzerland", flag: "🇨🇭" },
//     { code: "+43", country: "Austria", flag: "🇦🇹" },
//     { code: "+48", country: "Poland", flag: "🇵🇱" },
//     { code: "+420", country: "Czech Republic", flag: "🇨🇿" },
//     { code: "+421", country: "Slovakia", flag: "🇸🇰" },
//     { code: "+36", country: "Hungary", flag: "🇭🇺" },
//     { code: "+40", country: "Romania", flag: "🇷🇴" },
//     { code: "+380", country: "Ukraine", flag: "🇺🇦" },
//     { code: "+48", country: "Poland", flag: "🇵🇱" },
//     { code: "+420", country: "Czech Republic", flag: "🇨🇿" },
//     { code: "+421", country: "Slovakia", flag: "🇸🇰" },
//     { code: "+36", country: "Hungary", flag: "🇭🇺" },
//     { code: "+40", country: "Romania", flag: "🇷🇴" },
//     { code: "+380", country: "Ukraine", flag: "🇺🇦" },
//     { code: "+351", country: "Portugal", flag: "🇵🇹" },
//     { code: "+353", country: "Ireland", flag: "🇮🇪" },
//     { code: "+30", country: "Greece", flag: "🇬🇷" },
//     { code: "+52", country: "Mexico", flag: "🇲🇽" },
//     { code: "+54", country: "Argentina", flag: "🇦🇷" },
//     { code: "+56", country: "Chile", flag: "🇨🇱" },
//     { code: "+57", country: "Colombia", flag: "🇨🇴" },
//     { code: "+51", country: "Peru", flag: "🇵🇪" },
//     { code: "+507", country: "Panama", flag: "🇵🇦" },
//     { code: "+505", country: "Nicaragua", flag: "🇳🇮" },
//     { code: "+591", country: "Bolivia", flag: "🇧🇴" },
//     { code: "+593", country: "Ecuador", flag: "🇪🇨" },
//     { code: "+595", country: "Paraguay", flag: "🇵🇾" },
//     { code: "+598", country: "Uruguay", flag: "🇺🇾" },
//     { code: "+1-876", country: "Jamaica", flag: "🇯🇲" },
//     { code: "+1-246", country: "Barbados", flag: "🇧🇧" },
//     { code: "+1-268", country: "Antigua and Barbuda", flag: "🇦🇬" },
//     { code: "+1-242", country: "Bahamas", flag: "🇧🇸" },
//     { code: "+1-441", country: "Bermuda", flag: "🇧🇲" },
//     { code: "+1-758", country: "Saint Lucia", flag: "🇱🇨" },
//     { code: "+1-784", country: "Saint Vincent and the Grenadines", flag: "🇻🇨" },
//     { code: "+1-868", country: "Trinidad and Tobago", flag: "🇹🇹" },
//     { code: "+1-264", country: "Anguilla", flag: "🇦🇮" },
//     { code: "+1-340", country: "U.S. Virgin Islands", flag: "🇻🇮" },
//     { code: "+1-809", country: "Dominican Republic", flag: "🇩🇴" },
//     { code: "+1-829", country: "Dominican Republic", flag: "🇩🇴" },
//     { code: "+1-849", country: "Dominican Republic", flag: "🇩🇴" },
//     { code: "+1-473", country: "Grenada", flag: "🇬🇩" },
//     { code: "+1-664", country: "Montserrat", flag: "🇲🇸" },
//     { code: "+1-869", country: "Saint Kitts and Nevis", flag: "🇰🇳" },
//     { code: "+1-345", country: "Cayman Islands", flag: "🇰🇾" },
//     { code: "+1-767", country: "Dominica", flag: "🇩🇲" },
//     { code: "+1-784", country: "Saint Vincent and the Grenadines", flag: "🇻🇨" },
//     { code: "+1-868", country: "Trinidad and Tobago", flag: "🇹🇹" },
//     { code: "+1-876", country: "Jamaica", flag: "🇯🇲" },
//     { code: "+1-809", country: "Dominican Republic", flag: "🇩🇴" },
//     { code: "+1-829", country: "Dominican Republic", flag: "🇩🇴" },
//     { code: "+1-849", country: "Dominican Republic", flag: "🇩🇴" },
//     { code: "+1-473", country: "Grenada", flag: "🇬🇩" },
//     { code: "+1-664", country: "Montserrat", flag: "🇲🇸" },
//     { code: "+1-869", country: "Saint Kitts and Nevis", flag: "🇰🇳" },
//     { code: "+1-345", country: "Cayman Islands", flag: "🇰🇾" },
//     { code: "+1-767", country: "Dominica", flag: "🇩🇲" },
//     { code: "+1-784", country: "Saint Vincent and the Grenadines", flag: "🇻🇨" },
//     { code: "+1-868", country: "Trinidad and Tobago", flag: "🇹🇹" },
//     { code: "+1-876", country: "Jamaica", flag: "🇯🇲" },
//     { code: "+1-809", country: "Dominican Republic", flag: "🇩🇴" },
//     { code: "+1-829", country: "Dominican Republic", flag: "🇩🇴" },
//     { code: "+1-849", country: "Dominican Republic", flag: "🇩🇴" },
//     { code: "+1-473", country: "Grenada", flag: "🇬🇩" },
//     { code: "+1-664", country: "Montserrat", flag: "🇲🇸" },
//     { code: "+1-869", country: "Saint Kitts and Nevis", flag: "🇰🇳" },
//     { code: "+1-345", country: "Cayman Islands", flag: "🇰🇾" },
//     { code: "+1-767", country: "Dominica", flag: "🇩🇲" },
//     { code: "+1-784", country: "Saint Vincent and the Grenadines", flag: "🇻🇨" },
//     { code: "+1-868", country: "Trinidad and Tobago", flag: "🇹🇹" },
//     { code: "+1-876", country: "Jamaica", flag: "🇯🇲" },
//     { code: "+1-809", country: "Dominican Republic", flag: "🇩🇴" },
//     { code: "+1-829", country: "Dominican Republic", flag: "🇩🇴" },
//     { code: "+1-849", country: "Dominican Republic", flag: "🇩🇴" },
//     { code: "+1-473", country: "Grenada", flag: "🇬🇩" },
//     { code: "+1-664", country: "Montserrat", flag: "🇲🇸" },
//     { code: "+1-869", country: "Saint Kitts and Nevis", flag: "🇰🇳" },
//     { code: "+1-345", country: "Cayman Islands", flag: "🇰🇾" },
//     { code: "+1-767", country: "Dominica", flag: "🇩🇲" },
//     { code: "+1-784", country: "Saint Vincent and the Grenadines", flag: "🇻🇨" },
//     { code: "+1-868", country: "Trinidad and Tobago", flag: "🇹🇹" },
//     { code: "+1-876", country: "Jamaica", flag: "🇯🇲" },
//     { code: "+1-809", country: "Dominican Republic", flag: "🇩🇴" },
//     { code: "+1-829", country: "Dominican Republic", flag: "🇩🇴" },
//     { code: "+1-849", country: "Dominican Republic", flag: "🇩🇴" },
//     { code: "+1-473", country: "Grenada", flag: "🇬🇩" },
//     { code: "+1-664", country: "Montserrat", flag: "🇲🇸" },
//     { code: "+1-869", country: "Saint Kitts and Nevis", flag: "🇰🇳" },
//     { code: "+1-345", country: "Cayman Islands", flag: "🇰🇾" },
//     { code: "+1-767", country: "Dominica", flag: "🇩🇲" },
//     { code: "+1-784", country: "Saint Vincent and the Grenadines", flag: "🇻🇨" },
//     { code: "+1-868", country: "Trinidad and Tobago", flag: "🇹🇹" },
//     { code: "+1-876", country: "Jamaica", flag: "🇯🇲" },
//     { code: "+1-809", country: "Dominican Republic", flag: "🇩🇴" },
//     { code: "+1-829", country: "Dominican Republic", flag: "🇩🇴" },
//     { code: "+1-849", country: "Dominican Republic", flag: "🇩🇴" }
//   ];

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ state: 'sending' });

//     const formData = {
//       ...form,
//       phone: form.phone ? `${form.countryCode} ${form.phone}` : ''
//     };

//     try {
//       let API_BASE = import.meta.env.VITE_API_URL || '';
//       if (API_BASE.endsWith('/')) API_BASE = API_BASE.slice(0, -1);
//       const endpoint = API_BASE ? `${API_BASE}/api/enquiries` : '/api/enquiries';

//       const res = await fetch(endpoint, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         await res.json();
//         setStatus({ state: 'sent' });
//         setForm({ name: "", email: "", phone: "", company: "", message: "", countryCode: "+91" });
//       } else {
//         let errorText = '';
//         try {
//           const json = await res.json();
//           errorText = json.error || JSON.stringify(json);
//         } catch (e) {
//           errorText = await res.text();
//         }
//         setStatus({ state: 'error', message: errorText || `Request failed with status ${res.status}` });
//       }
//     } catch (err) {
//       setStatus({ state: 'error', message: err.message });
//     }
//   };

//   return (
//     <div>
//       <div className="contact">
//         <h3>Contact us</h3>
//       </div>
//       <div className="contact-1">
//         <h1>Join Together!.</h1>
//         <h1>Journey Together!.</h1>
//       </div>
//       <div className="container">
//         {/* Left Section */}
//         <div className="office-info">
//           <h3>Our offices</h3>
//            <p style={{ paddingTop: "20px" }}>
//             SIX SIGMA SOLUTIONS,<br />
//             F-1,No 13,Breeze Enclave,Noombal<br />
//             Main Road,Noombal,Chennai,<br />
//             Tamil Nadu-600077,INDIA
           
//           </p>
//           <p style={{ paddingTop: "20px" }}>
//             SIX SIGMA SOLUTIONS,<br />
//             NKC Towers 1st Floor,<br />
//             Opp to Government Engineering College,<br />
//             Kottagoundampatti, Karuppur, Salem-636011.<br />
//             TamilNadu, India.
//           </p>
//           <h3 style={{ paddingBottom: "20px", paddingTop: "80px", margin: "0px", paddingRight: "0px" }}>Email us</h3>
//           <strong style={{ paddingBottom: "5px", paddingTop: "10px" }}>Get in touch</strong>
//           <p><a href="mailto:cpdian@gmail.com">cpdian@gmail.com</a></p>
//           <strong style={{ paddingBottom: "5px", paddingTop: "10px", margin: "0px", paddingRight: "0px" }}>Call us</strong>
//           <p><a href="tel:+919884590009">+91 9884590009</a></p>
//           <strong style={{ paddingTop: "80px", paddingBottom: "20px", margin: "0px", paddingRight: "0px" }}>Get in Touch</strong>
//           <p>
//             <a href="https://x.com/cpdian?s=11"><i className="fa-brands fa-x-twitter"></i></a>
//             <a href="https://www.facebook.com/share/1Cx1RDAMqQ/?mibextid=wwXIfr"><i className="fa-brands fa-facebook"></i></a>
//             <a href="https://www.instagram.com/chellapondyvellaiswamy?igsh=MTgwM25qbnBpb2Nxbg%3D%3D&utm_source=qr"><i className="fa-brands fa-instagram"></i></a>
//             <a href="tel:+919884590009"><i className="fa-solid fa-phone"></i></a>
//           </p>
//         </div>
//         {/* Right Section */}
//         <div className="form-section">
//           <h3>For Inquiries</h3>
//           <form onSubmit={handleSubmit}>
//             <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Name" required />
//             <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" required />
//             <div className="phone-input-container">
//               <select name="countryCode" value={form.countryCode} onChange={handleChange} className="country-code-select">
//                 {countryCodes.map((country) => (
//                   <option key={country.code} value={country.code}>{country.flag} {country.code} {country.country}</option>
//                 ))}
//               </select>
//               <input name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="Phone Number" className="phone-number-input" />
//             </div>
//             <input name="company" value={form.company} onChange={handleChange} type="text" placeholder="Company" />
//             <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message"></textarea>
//             <button className="send-btn" type="submit" disabled={status && status.state === 'sending'}>
//               {status && status.state === 'sending' ? 'Sending...' : 'Send'}
//               <i style={{ color: "white", paddingLeft: "20px" }} className="fas fa fa-angle-right"></i>
//             </button>
//             {status && status.state === 'sent' && <p style={{ color: 'green', marginTop: 12 }}>Thank you — your enquiry has been submitted.</p>}
//             {status && status.state === 'error' && <p style={{ color: 'red', marginTop: 12 }}>Submission failed — {status.message || 'please try again later.'}</p>}
//           </form>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }
