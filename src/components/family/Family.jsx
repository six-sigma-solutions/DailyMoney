import React, { useEffect } from "react";
import "./Family.css"; // Your CSS file
import { Link } from "react-router-dom";
import Footer from '../footer/Footer';

const Family = () => {
  useEffect(() => {
    const handleScroll = () => {
      const steps = document.querySelectorAll(".step");
      steps.forEach((step) => {
        // Skip the first step since it's already visible
        if (step.classList.contains("visible")) {
          return;
        }
        const rect = step.getBoundingClientRect();
        if (rect.top < window.innerHeight - 120) {
          step.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="family-page">
      {/* Process Section */}
      <section className="process">
        <h2 style={{ color: "#d40000" }}>
           Our Family
        </h2>
        <h2 style={{ color: "#d40000" }}>
          “Protect. Grow. Prosper.”
        </h2>
        <p className="subtitle">
          True prosperity comes from both good health and financial security.
          With our transparent, collaborative approach, we bring your vision to
          life. Guided by our three-phase methodology, we consistently deliver
          value and adapt to change—building the best world:{" "}
          <span
            style={{
              backgroundColor: "#d4edda",
              color: "green",
              borderRadius: "8px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Healthier, Happier, and Wealthier
          </span>
        </p>

        {/* Step 1 - Now visible by default */}
        <div className="step visible">
          <div className="step-img">
            <img src="fam1.png" alt="Discover" />
          </div>
          <div className="step-content">
            <h3 className="highlight-text">
              <i>
                "I have secured my family's health, education, and finances, and
                aim to ensure long-term security, growth, and happiness for
                future generations."
              </i>
            </h3>
          </div>
        </div>

        {/* Step 2 */}
        <div className="step reverse">
          <div className="step-img">
            <img src="fam2.png" alt="Develop" />
          </div>
          <div className="step-content">
            <h3 className="highlight-text">
              <i>
                "I've secured my family's well-being and plan to expand their
                opportunities, investing in their safety, education, and
                lifestyle."
              </i>
            </h3>
          </div>
        </div>

        {/* Step 3 */}
        <div className="step">
          <div className="step-img">
            <img src="family3.png" alt="Deliver" />
          </div>
          <div className="step-content">
            <h3 className="highlight-text">
              <i>
                "I've secured my children's future with education, savings, and
                guidance, aiming for long-term financial freedom."
              </i>
            </h3>
          </div>
        </div>

        {/* Step 4 */}
        <div className="step reverse">
          <div className="step-img">
            <img
              src="family401.png"
              alt="Support"
            />
          </div>
          <div className="step-content">
            <h3 className="highlight-text">
              <i>
                "I prioritize my family, ensuring their financial security and
                emotional support for the long term."
              </i>
            </h3>
          </div>
        </div>
      </section>
      <section className="blog">
        <div className="view-more-link-my-life">
        <Link className="view-more-link" to="/entrepreneur">
        <button className="view-more" type="button">View More</button>
        </Link> 
        </div>
      </section>
      <Footer />
    </div>
      

 
  );
};

export default Family;
