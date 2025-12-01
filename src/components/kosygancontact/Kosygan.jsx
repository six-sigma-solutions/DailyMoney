import React, { useState } from "react";
import "./Kosygan.css";
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
  { "code": "+93", "country": "Afghanistan" },
  { "code": "+355", "country": "Albania" },
  { "code": "+213", "country": "Algeria" },
  { "code": "+1-684", "country": "American Samoa" },
  { "code": "+376", "country": "Andorra" },
  { "code": "+244", "country": "Angola" },
  { "code": "+1-264", "country": "Anguilla" },
  { "code": "+1-268", "country": "Antigua and Barbuda" },
  { "code": "+54", "country": "Argentina" },
  { "code": "+374", "country": "Armenia" },
  { "code": "+297", "country": "Aruba" },
  { "code": "+61", "country": "Australia" },
  { "code": "+43", "country": "Austria" },
  { "code": "+994", "country": "Azerbaijan" },
  { "code": "+1-242", "country": "Bahamas" },
  { "code": "+973", "country": "Bahrain" },
  { "code": "+880", "country": "Bangladesh" },
  { "code": "+1-246", "country": "Barbados" },
  { "code": "+375", "country": "Belarus" },
  { "code": "+32", "country": "Belgium" },
  { "code": "+501", "country": "Belize" },
  { "code": "+229", "country": "Benin" },
  { "code": "+1441", "country": "Bermuda" },
  { "code": "+975", "country": "Bhutan" },
  { "code": "+591", "country": "Bolivia" },
  { "code": "+387", "country": "Bosnia and Herzegovina" },
  { "code": "+267", "country": "Botswana" },
  { "code": "+55", "country": "Brazil" },
  { "code": "+246", "country": "British Indian Ocean Territory" },
  { "code": "+673", "country": "Brunei" },
  { "code": "+359", "country": "Bulgaria" },
  { "code": "+226", "country": "Burkina Faso" },
  { "code": "+257", "country": "Burundi" },
  { "code": "+855", "country": "Cambodia" },
  { "code": "+237", "country": "Cameroon" },
  { "code": "+1", "country": "Canada" },
  { "code": "+238", "country": "Cape Verde" },
  { "code": "+1-345", "country": "Cayman Islands" },
  { "code": "+236", "country": "Central African Republic" },
  { "code": "+235", "country": "Chad" },
  { "code": "+56", "country": "Chile" },
  { "code": "+86", "country": "China" },
  { "code": "+57", "country": "Colombia" },
  { "code": "+269", "country": "Comoros" },
  { "code": "+682", "country": "Cook Islands" },
  { "code": "+506", "country": "Costa Rica" },
  { "code": "+385", "country": "Croatia" },
  { "code": "+53", "country": "Cuba" },
  { "code": "+599", "country": "Curaçao" },
  { "code": "+357", "country": "Cyprus" },
  { "code": "+420", "country": "Czech Republic" },
  { "code": "+45", "country": "Denmark" },
  { "code": "+253", "country": "Djibouti" },
  { "code": "+1-767", "country": "Dominica" },
  { "code": "+1-809", "country": "Dominican Republic" },
  { "code": "+593", "country": "Ecuador" },
  { "code": "+20", "country": "Egypt" },
  { "code": "+503", "country": "El Salvador" },
  { "code": "+240", "country": "Equatorial Guinea" },
  { "code": "+291", "country": "Eritrea" },
  { "code": "+372", "country": "Estonia" },
  { "code": "+251", "country": "Ethiopia" },
  { "code": "+500", "country": "Falkland Islands (Malvinas)" },
  { "code": "+298", "country": "Faroe Islands" },
  { "code": "+679", "country": "Fiji" },
  { "code": "+358", "country": "Finland" },
  { "code": "+33", "country": "France" },
  { "code": "+594", "country": "French Guiana" },
  { "code": "+689", "country": "French Polynesia" },
  { "code": "+241", "country": "Gabon" },
  { "code": "+220", "country": "Gambia" },
  { "code": "+995", "country": "Georgia" },
  { "code": "+49", "country": "Germany" },
  { "code": "+233", "country": "Ghana" },
  { "code": "+350", "country": "Gibraltar" },
  { "code": "+30", "country": "Greece" },
  { "code": "+299", "country": "Greenland" },
  { "code": "+1-473", "country": "Grenada" },
  { "code": "+590", "country": "Guadeloupe" },
  { "code": "+1-671", "country": "Guam" },
  { "code": "+502", "country": "Guatemala" },
  { "code": "+224", "country": "Guinea" },
  { "code": "+245", "country": "Guinea-Bissau" },
  { "code": "+592", "country": "Guyana" },
  { "code": "+509", "country": "Haiti" },
  { "code": "+504", "country": "Honduras" },
  { "code": "+36", "country": "Hungary" },
  { "code": "+354", "country": "Iceland" },
  { "code": "+91", "country": "India" },
  { "code": "+62", "country": "Indonesia" },
  { "code": "+98", "country": "Iran (Islamic Republic of)" },
  { "code": "+964", "country": "Iraq" },
  { "code": "+353", "country": "Ireland" },
  { "code": "+972", "country": "Israel" },
  { "code": "+39", "country": "Italy" },
  { "code": "+1-876", "country": "Jamaica" },
  { "code": "+81", "country": "Japan" },
  { "code": "+44", "country": "United Kingdom" },
  { "code": "+7", "country": "Russia" },
  { "code": "+251", "country": "Ethiopia" }

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
            message: error.text || "Failed to Send Message",
          });
        }
      );
  };
return (
  <div className="contact-page">

    {/* TOP SECTION — TEXT LEFT & IMAGE RIGHT */}
    <div className="contact-container">
      <div className="contact-text">
        <h3>Contact us</h3>
        <h1>Join Together!.</h1>
        <h1>Journey Together!.</h1>
      </div>

      <div className="contact-image">
        <img src="/person4.jpg" alt="Contact Us" />
        <span className="slogans">Traveling with <br /> Dr K.P.Kosygan</span>
      </div>
    </div>

    {/* MAIN CONTAINER */}
    <div className="container">
      
      {/* OFFICE INFO SECTION */}
      <div className="office-info">
        <h1 style={{ color: "red" }}>Six Sigma Solutions</h1>
        <h2 style={{ paddingTop: "10px" }}>Our offices</h2>

        <p style={{ paddingTop: "10px" }}>
          India <br />
          Chennai, TN-600077. <br />
        </p>

        <div className="launching">
          <strong>
            <p style={{ fontWeight: "bold" }}>
              Launching soon !!!<br />
              <img src="/phonestand.png" alt="" />
            </p>
          </strong>
        </div>

        <strong>
          <p style={{ fontWeight: "bold" }}>
            Singapore, Malayasia, Australia, Dubai, London, France, Canada & USA.
          </p>
        </strong>

        <strong style={{ paddingTop: "80px" }}>Get in touch</strong>
        <h3>Email us</h3>
        <p>
          <a href="mailto:support@dmhealthy.com">support@dmhealthy.com</a><br />
          <a href="mailto:service@dmhealthy.com">service@dmhealthy.com</a>
        </p>

        <p className="social-links">
          <a href="https://x.com/dailymsghealthy">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://www.facebook.com/Daily.Message.Healthy">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/daily_message_healthy/">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </p>
      </div>

      {/* FORM SECTION */}
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
                  {country.code} {country.country}
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
            {status?.state === "sending" ? "Sending..." : "Send"}
            <i className="fas fa-angle-right" style={{ color: "white", paddingLeft: 20 }}></i>
          </button>

          {status?.state === "sent" && (
            <p style={{ color: "green", marginTop: 12 }}>
              ✅ Thank You — Your Enquiry has been Submitted Successfully!
            </p>
          )}

          {status?.state === "error" && (
            <p style={{ color: "red", marginTop: 12 }}>
              ❌ Submission failed — {status.message || "Please Try Again Later."}
            </p>
          )}
        </form>
      </div>
    </div>

    <Footer />
  </div>
);
}
