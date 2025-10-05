import React from "react";
import "./Income.css";

const Income = () => {
  const learnMore = () => {
    alert("Learn more about how income empowers your growth!");
  };

  return (
    <div>
      <div className="inc">
        <h1>Income: The Fuel of Growth</h1>
      </div>

      {/* Section 1 */}
      <section className="fade-in">
        <p>
          Income is more than just money earned — it is the reward of effort,
          time, and value created. Whether through wages, salaries, profits, or
          investments, income provides the foundation for stability and growth.
        </p>
        <img className="image" src="incomeimg-1.png" alt="Income concept" />
      </section>

      {/* Section 2 */}
      <section className="fade-in">
        <p>
          True income, however, is not just financial. It is about the returns
          you gain from life itself — the knowledge you acquire, the
          relationships you nurture, and the health you sustain.
        </p>
        <img
          className="image"
          src="incomeimg-2.jpg"
          alt="Personal growth and learning"
        />
      </section>

      {/* Section 3 */}
      <section className="fade-in">
        <p>At Daily Money, we believe income should empower you to:</p>
        <ul>
          <li>
            <strong>Secure your family's future</strong>
          </li>
          <li>
            <strong>Build lasting wealth and assets</strong>
          </li>
          <li>
            <strong>
              Create the freedom to travel, explore, and experience the world
            </strong>
          </li>
          <li>
            <strong>Live with peace of mind and purpose</strong>
          </li>
        </ul>
        <img className="image" src="incomeimg-3.avif" alt="Financial freedom" />
      </section>

      {/* Left + Right Section */}
      <div className="left">
        <img src="incomeimg-4.jpg" alt="Growth illustration" />
        <div className="right">
          <p className="tick">✔</p>
          <p> Income powers growth, not greed.</p>
          <br />
          <p className="tick">✔</p>
          <p> Energy creates opportunity.</p>
          <br />
          <p className="tick">✔</p>
          <p> Wealth begins with wisdom.</p>
          <br />
          <p className="tick">✔</p>
          <p> Freedom follows discipline.</p>
          <br />
          <p className="tick">✔</p>
          <p> Balance builds true success.</p>
          <br />
        </div>
      </div>

      {/* Button */}
      <div className="btn-container fade-in">
        <button className="btn" onClick={learnMore}>
          Learn More About Income
        </button>
      </div>
    </div>
  );
};

export default Income;
