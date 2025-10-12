import React from "react";
// Import the newly named CSS file
import "./Overview.css";
import { Link } from "react-router-dom";
import Footer from '../footer/Footer';

// Renamed the component for clarity
const Overview = () => {
  return (
    <div className="overview-page-container">
      <div className="overview-header-title">
        <span>Overview</span>
      </div>

      {/* Section 1 */}
      <section className="zigzag-layout-section">
        <div className="zigzag-image-container">
          <img src="image-1.jpg" alt="People smiling and collaborating" />
        </div>
        <div className="zigzag-text-content">
          <h2 style={{ color: "#80EF80" }}>Our Purpose</h2>
          <p>
            Daily Money exists to make the world healthier, happier, wealthier -
            one person, one family, and one community at a time.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="zigzag-layout-section reverse-layout">
        <div className="zigzag-image-container">
          <img src="image-2.jpeg" alt="People planning together" />
        </div>
        <div className="zigzag-text-content">
          <h2 style={{ color: "yellow" }}>Our Approach</h2>
          <ul>
            <li>
              <strong>Clarity –</strong> Simplifying money so everyone can
              understand it.
            </li>
            <li>
              <strong>Discipline –</strong> Encouraging consistent daily habits
              that build lasting wealth.
            </li>
            <li>
              <strong>Integration –</strong> Connecting health, wealth, and
              peace as part of the same journey.
            </li>
            <li>
              <strong>Generational Growth –</strong> Ensuring prosperity passes
              forward, sustaining families across generations.
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
          <h2 style={{ color: "#89BFF8" }}>Our Core Beliefs</h2>
          <ul>
            <li>
              <strong>Wealth is Freedom –</strong> The ability to choose your
              path without limits.
            </li>
            <li>
              <strong>Health is Wealth –</strong> Without wellness, money loses
              its meaning.
            </li>
            <li>
              <strong>Peace is Success –</strong> A balanced life is the
              ultimate achievement.
            </li>
            <li>
              <strong>Legacy Matters –</strong> True prosperity is measured in
              impact that outlives us.
            </li>
          </ul>
        </div>
      </section>

      {/* Section 4 */}
      <section className="zigzag-layout-section reverse-layout">
        <div className="zigzag-image-container">
          <img src="image-4.jpg" alt="People celebrating success together" />
        </div>
        <div className="zigzag-text-content">
          <h2 style={{ color: "cyan" }}>Our Promise</h2>
          <p>
            Daily Money is not about just today's income, but about wealth for
            life and beyond. We help build strong foundations so every
            generation thrives—financially, physically, and spiritually.
          </p>
        </div>
      </section>

      {/* Button */}
      <div className="overview-button-wrapper">
        <Link className="view-more-link" to="/founders-msg">
          <button className="view-more" type="button">
            View More
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Overview;
