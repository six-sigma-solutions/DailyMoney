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
    { code: "+91", country: "India" },
    { code: "+1", country: "USA/Canada" },
    { code: "+44", country: "United Kingdom" },
    { code: "+61", country: "Australia" },
    { code: "+81", country: "Japan" },
    { code: "+86", country: "China" },
    { code: "+49", country: "Germany" },
    { code: "+33", country: "France" },
    { code: "+39", country: "Italy" },
    { code: "+7", country: "Russia/Kazakhstan" },
    { code: "+55", country: "Brazil" },
    { code: "+34", country: "Spain" },
    { code: "+27", country: "South Africa" },
    { code: "+82", country: "South Korea" },
    { code: "+65", country: "Singapore" },
    { code: "+62", country: "Indonesia" },
    { code: "+60", country: "Malaysia" },
    { code: "+63", country: "Philippines" },
    { code: "+66", country: "Thailand" },
    { code: "+92", country: "Pakistan" },
    { code: "+880", country: "Bangladesh" },
    { code: "+94", country: "Sri Lanka" },
    { code: "+977", country: "Nepal" },
    { code: "+20", country: "Egypt" },
    { code: "+971", country: "UAE" },
    { code: "+966", country: "Saudi Arabia" },
    { code: "+90", country: "Turkey" },
    { code: "+98", country: "Iran" },
    { code: "+964", country: "Iraq" },
    { code: "+972", country: "Israel" },
    { code: "+351", country: "Portugal" },
    { code: "+46", country: "Sweden" },
    { code: "+47", country: "Norway" },
    { code: "+45", country: "Denmark" },
    { code: "+358", country: "Finland" },
    { code: "+31", country: "Netherlands" },
    { code: "+32", country: "Belgium" },
    { code: "+41", country: "Switzerland" },
    { code: "+43", country: "Austria" },
    { code: "+48", country: "Poland" },
    { code: "+420", country: "Czech Republic" },
    { code: "+421", country: "Slovakia" },
    { code: "+36", country: "Hungary" },
    { code: "+40", country: "Romania" },
    { code: "+380", country: "Ukraine" },
    { code: "+353", country: "Ireland" },
    { code: "+30", country: "Greece" },
    { code: "+52", country: "Mexico" }
    
  ];

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ state: "sending" });

    // ✅ Fixed template literal syntax
    const combinedPhoneNumber = form.phone ? `${form.countryCode} ${form.phone}` : "";

    const formData = {
      ...form,
      phone: combinedPhoneNumber,
      countryCode: undefined,
    };

    emailjs
      .send(
        "service_f8o9xuz", // Your EmailJS Service ID
        "template_6n6bxcd", // Your Template ID
        formData,
        "AVAVj3_wM2trMKMkp" // Your Public Key
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
        {/* Office Info Section */}
        <div className="office-info">
          <h1 style={{ color: "red" }}>Six Sigma Solutions</h1>
          <h2 style={{ paddingTop: "10px" }}>Our offices</h2>

          <p style={{ paddingTop: "10px" }}>
            India <br />
            No 13, Breeze Enclave, Noombal Main Road, <br />
            Chennai, TN-600077. <br />
          </p>

          <p style={{ paddingTop: "20px" }}>
            NKC Towers 1st Floor, Karuppur, <br />
            Salem, TN-636011.
          </p>

          <strong style={{ paddingTop: "80px" }}>Get in Touch</strong>
          <h3 style={{ paddingTop: "0px" }}>Email us</h3>
          <p>
            <a href="mailto:cpdian@gmail.com">cpdian@gmail.com</a>
          </p>

          <strong>Call us</strong>
          <p>
            <a href="tel:+919884590009">+91 9884590009</a>
          </p>

          <strong style={{ paddingTop: "80px" }}>Get in Touch</strong>
          <p className="social-links">
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

        {/* Form Section */}
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
