import React from "react";
import "./Income.css"; 
// Renamed the import to the standard file path if you are moving the CSS file.

const Income = () => {
  // Switched alert to console.log for safe execution in Canvas environment
  const learnMore = () => {
    console.log("Learn more about how income empowers your growth!");
  };

  return (
    // Top-level container with unique class
    <div className="inc-dm-page-container">
      
      <div className="inc-dm-header-wrap">
        <h1 className="inc-dm-h1">Income: The Fuel of Growth</h1>
      </div>

      {/* Section 1 - Income definition */}
      <section className="inc-dm-section inc-dm-fade-in">
        <p className="inc-dm-p">
          Income is more than just money earned — it is the reward of effort,
          time, and value created. Whether through wages, salaries, profits, or
          investments, **income provides the foundation for stability and growth.**
        </p>
        <img className="inc-dm-image" src="img-1.png" alt="Income concept" />
      </section>

      {/* Section 2 - Holistic income */}
      <section className="inc-dm-section inc-dm-fade-in">
        <p className="inc-dm-p">
          True income, however, is not just financial. It is about the returns
          you gain from life itself — **the knowledge you acquire, the
          relationships you nurture, and the health you sustain.**
        </p>
        <img
          className="inc-dm-image"
          src="img-2.jpg"
          alt="Personal growth and learning"
        />
      </section>

      {/* Section 3 - Empowerment goals */}
      <section className="inc-dm-section inc-dm-fade-in">
        <p className="inc-dm-p">At Daily Money, we believe income should empower you to:</p>
        <ul className="inc-dm-ul">
          <li className="inc-dm-li">
            <strong>Secure your family's future</strong>
          </li>
          <li className="inc-dm-li">
            <strong>Build lasting wealth and assets</strong>
          </li>
          <li className="inc-dm-li">
            <strong>
              Create the freedom to travel, explore, and experience the world
            </strong>
          </li>
          <li className="inc-dm-li">
            <strong>Live with peace of mind and purpose</strong>
          </li>
        </ul>
        <img className="inc-dm-image" src="img-3.avif" alt="Financial freedom" />
      </section>

      {/* Left + Right Section - Benefits List */}
      <div className="inc-dm-info-flex">
        <img className="inc-dm-info-image" src="img-4.jpg" alt="Growth illustration" />
        <div className="inc-dm-info-list">
          <p className="inc-dm-list-row">
            <span className="inc-dm-tick">✔</span>
            <span className="inc-dm-list-item"> Income powers growth, not greed.</span>
          </p>
          <p className="inc-dm-list-row">
            <span className="inc-dm-tick">✔</span>
            <span className="inc-dm-list-item"> Energy creates opportunity.</span>
          </p>
          <p className="inc-dm-list-row">
            <span className="inc-dm-tick">✔</span>
            <span className="inc-dm-list-item"> Wealth begins with wisdom.</span>
          </p>
          <p className="inc-dm-list-row">
            <span className="inc-dm-tick">✔</span>
            <span className="inc-dm-list-item"> Freedom follows discipline.</span>
          </p>
          <p className="inc-dm-list-row">
            <span className="inc-dm-tick">✔</span>
            <span className="inc-dm-list-item"> Balance builds true success.</span>
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="inc-dm-btn-container inc-dm-fade-in">
        <button className="inc-dm-btn" onClick={learnMore}>
          Learn More About Income
        </button>
      </div>
    </div>
  );
};

export default Income;