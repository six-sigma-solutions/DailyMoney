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
    { code: "+7", country: "Russia/Kazakhstan", flag: "🇷🇺" },
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
    { code: "+353", country: "Ireland", flag: "🇮🇪" },
    { code: "+30", country: "Greece", flag: "🇬🇷" },
    { code: "+52", country: "Mexico", flag: "🇲🇽" },
  ];

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ state: "sending" });

    // Fixed: Properly use a template literal (backticks) for the combined phone number string
    const combinedPhoneNumber = form.phone ? `${form.countryCode} ${form.phone}` : "";

    const formData = {
      ...form,
      // Overwrite the 'phone' property with the combined string
      phone: combinedPhoneNumber,
      // Optional: You can remove the separate countryCode field from the payload
      countryCode: undefined, 
    };

    emailjs
      .send(
        "service_f8o9xuz", // replace with your Service ID
        "template_6n6bxcd", // replace with your Template ID
        formData,
        "AVAVj3_wM2trMKMkp" // replace with your Public Key
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
        <div className="office-info">
          <h3>Our offices</h3>
          <p style={{ paddingTop: "20px" }}>
            Six Sigma Solution,<br />
            NKC Towers 1st Floor,<br />
            Opp to Government Engineering College,<br />
            Kottagoundampatti, Karuppur, Salem-636011.<br />
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
            <a href="https://www.instagram.com/chellapondyvellaiswamy">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="tel:+919884590009">
              <i className="fa-solid fa-phone"></i>
            </a>
          </p>
        </div>

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
                className="fas fa-angle-right"
              ></i>
            </button>
            {status && status.state === "sent" && (
              <p style={{ color: "green", marginTop: 12 }}>
                ✅ Thank you — your enquiry has been submitted successfully!
              </p>
            )}
            {status && status.state === "error" && (
              <p style={{ color: "red", marginTop: 12 }}>
                ❌ Submission failed — {status.message || "please try again later."}
              </p>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
