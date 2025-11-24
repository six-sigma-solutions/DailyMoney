import React from "react";
import "./Overview.css";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

const Overview = () => {
  return (
    <div className="overview-page-container">

      {/* Title */}
      <div className="overview-header-title">
        <span>Overview</span>
      </div>

      {/* Section 1 */}
      <section className="zigzag-layout-section">
        <div className="zigzag-image-container">
          <img src="8000.jpg" alt="People smiling and collaborating" />
        </div>

        <div className="zigzag-text-content">
          <h2 style={{ color: "#80ef80" }}>Our Purpose</h2>
          <p>
            DM exists to make the world healthier, happier, wealthier—one
            person, one family and one community at a time.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="zigzag-layout-section reverse-layout">
        <div className="zigzag-image-container">
          <img src="8001.jpg" alt="People planning together" />
        </div>

        <div className="zigzag-text-content">
          <h2 style={{ color: "ffff00" }}>Our Approach</h2>
          <ul>
            <li>
              <strong>Clarity –</strong> Simplifying finance so everyone feels confident.
            </li>
            <li>
              <strong>Discipline –</strong> Encouraging consistent daily habits that build lasting wealth.
            </li>
            <li>
              <strong>Integration –</strong> Connecting health, wealth and peace as part of the same journey.
            </li>
            <li>
              <strong>Generational Growth –</strong> Ensuring prosperity passes
              forward across generations.
            </li>
          </ul>
        </div>
      </section>

      {/* Section 3 */}
      <section className="zigzag-layout-section">
        <div className="zigzag-image-container">
          <img src="image-3.jpg" alt="Generational family together" />
        </div>

        <div className="zigzag-text-content">
          <h2 style={{ color: "#89bFFb" }}>Our Core Beliefs</h2>
          <ul>
            <li>
              <strong>Health is Wealth –</strong> Without wellness, income loses meaning.
            </li>
            <li>
              <strong>Wealth is Freedom –</strong> The ability to choose your own path.
            </li>
            <li>
              <strong>Legacy Matters –</strong> True prosperity impacts future generations.
            </li>
            <li>
              <strong>Peace is Success –</strong> A balanced life is the ultimate achievement.
            </li>
          </ul>
        </div>
      </section>

      {/* Section 4 */}
      <section className="zigzag-layout-section reverse-layout">
        <div className="zigzag-image-container">
          <img style={{ width: "800px" }} src="image-4.jpg" alt="People celebrating success" />
        </div>

        <div className="zigzag-text-content">
          <h2 style={{ color: "00ffff" }}>Our Promise</h2>
          <p>
            DM stands for more than health—it represents lifelong prosperity.
            We help create strong foundations for generations to flourish in
            wealth, wellness and spirit.
          </p>
        </div>
      </section>

      {/* Button */}
            <div class="btn-center">
        <a href="founders-msg" class="view-btn">View More</a>
      </div>
      <Footer />
    </div>
  );
};

export default Overview;
