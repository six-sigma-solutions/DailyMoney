import React from "react";
import "./Income.css";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

const Income = () => {
  return (
    <div>
      <header className="income-header">
        <h1>Income: The Fuel of Growth</h1>
      </header>

      {/* Section 1 */}
      <section className="income-section">
        <div className="income-text">

          <div className="bullet">
            <span className="dot-1">●</span>
            <span>Income is more than just money earned.</span>
          </div>

          <div className="bullet">
            <span className="dot-1">●</span>
            <span>It is the reward for effort, time and value created.</span>
          </div>

          <div className="bullet">
            <span className="dot-1">●</span>
            <span>
              Whether through wages, salaries, profits or investments, income
              provides the foundation for stability and growth.
            </span>
          </div>

        </div>

        <div className="income-image">
          <img
            className="responsive-income-img"
            src="income1st.jpg"
            alt="Income concept"
          />
        </div>
      </section>

      {/* Section 2 */}
      <section className="income-section reverse">
        <div className="income-text">

          <div className="bullet">
            <span className="dot-1">●</span>
            <span>True income, however, is not just financial.</span>
          </div>

          <div className="bullet">
            <span className="dot-1">●</span>
            <span>
              It is about the returns you gain from life itself — the knowledge
              you acquire, the relationships you nurture and the health you
              maintain.
            </span>
          </div>

        </div>

        <div className="income-image">
          <img
            className="responsive-income-img"
            src="income3rdlast.jpg"
            alt="Personal growth and learning"
          />
        </div>
      </section>

      {/* Section 3 */}
      <section className="income-section">
        <div className="income-text">

          <div className="bullet">
            <span className="dot-1">●</span>
            <span>Secure your family's future.</span>
          </div>

          <div className="bullet">
            <span className="dot-1">●</span>
            <span>Build lasting wealth and assets.</span>
          </div>

          <div className="bullet">
            <span className="dot-1">●</span>
            <span>Create the freedom to travel, explore and experience life.</span>
          </div>

          <div className="bullet">
            <span className="dot-1">●</span>
            <span>Live with peace of mind and purpose.</span>
          </div>

        </div>

        <div className="income-image">
          <img
            className="responsive-income-img"
            src="income3.png"
            alt="Financial freedom"
          />
        </div>
      </section>

      {/* Section 4 */}
      <section className="income-section reverse move-right">
        <div className="income-text">

          <div className="bullet">
            <span className="dot-1">●</span>
            <span>Income powers growth, not greed.</span>
          </div>

          <div className="bullet">
            <span className="dot-1">●</span>
            <span>Energy creates opportunity.</span>
          </div>

          <div className="bullet">
            <span className="dot-1">●</span>
            <span>Wealth begins with wisdom.</span>
          </div>

          <div className="bullet">
            <span className="dot-1">●</span>
            <span>Freedom follows discipline.</span>
          </div>

          <div className="bullet">
            <span className="dot-1">●</span>
            <span>Balance builds true success.</span>
          </div>

        </div>

        <div className="income-image">
          <img
            className="responsive-income-img"
            src="income9.png"
            alt="Growth and Balance"
          />
        </div>
      </section>

      <div className="btn-center">
        <a href="womenempowerment" className="view-btn">View More</a>
      </div>

      <Footer />
    </div>
  );
};

export default Income;
