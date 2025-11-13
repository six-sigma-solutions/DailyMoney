import React from "react";
import "./Income.css";
import { Link } from "react-router-dom";
import Footer from '../footer/Footer';

const Income = () => {
  return (
    <div>
      <header className="income-header">
        <h1>Income: The Fuel of Growth</h1>
      </header>

      {/* Section 1 */}
      <section className="income-section">
        <div className="income-text">
          <p>
            Income is more than just money earned, it is the reward for effort,
            time and value created. Whether through wages, salaries, profits
            or investments, income provides the foundation for stability and
            growth.
          </p>
        </div>
        <div className="income-image">
          <img
            className="responsive-income-img"
            src="incomepls.png"
            alt="Income concept"
          />
        </div>
      </section>

      {/* Section 2 */}
      <section className="income-section reverse">
        <div className="income-text">
          <p>
            True income, however is not just financial. It is about the returns
            you gain from life itself, the knowledge you acquire, the
            relationships you nurture and the health you maintain.
          </p>
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
          
          <ul>
            <p>
              Secure your family's future.
              Build lasting wealth and assets.
              Create the freedom to travel, explore and experience life.
              Live with peace of mind and purpose.
            </p>
          </ul>
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
    <p>
      Income powers growth, not greed.
      Energy creates opportunity.
      Wealth begins with wisdom.
      Freedom follows discipline.
      Balance builds true success.
    </p>
  </div>
  <div className="income-image">
    <img
      className="responsive-income-img"
      src="income9.png"
      alt="Growth and Balance"
    />
  </div>
</section>

      <div className="view-more-link-my-life">
      <Link className="view-more-link" to="/womenempowerment">
        <button className="view-more" type="button">
          View More
        </button>
      </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Income;
