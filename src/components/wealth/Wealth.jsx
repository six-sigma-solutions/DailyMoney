import React from "react";
import "./Wealth.css";

const Wealth = () =>{
  return (
    <div>
      <div className="title">
        <h1>Smart Wealth</h1>
        <img className="firstimg" src="img-1.jpg" alt="Smart Wealth" />
        <h1>Smart Life</h1>
      </div>

      <div className="container">
        <div className="text-box">
          <h1>Wealth</h1>
          <p>
            Wealth is the accumulation of valuable economic assets and
            resources, such as money, property, stocks, and other valuable
            possessions, minus any outstanding debts, which collectively
            represent a person's or entity's net worth.
          </p>

          <h1>Key Aspects of Wealth</h1>
          <p>
            <strong>Assets and Liabilities:</strong> Wealth is calculated as the
            market value of all assets (real estate, investments, cash) owned,
            minus all liabilities or debts.
          </p>
          <p>
            <strong>Stock vs. Flow:</strong> Wealth is a snapshot of what is
            owned at a given moment (a stock), while income is a continuous
            stream of money received over time (a flow).
          </p>

          <h1>How Wealth is Built</h1>
          <p>
            <strong>Saving and Investing:</strong> Wealth is built by saving a
            portion of one's income and investing it over time in assets like
            stocks, bonds, and real estate.
          </p>
          <p>
            <strong>Compounding:</strong> Investing early and allowing
            investments to grow through compound interest is a key strategy for
            wealth creation.
          </p>

          <h1>Importance of Wealth</h1>
          <p>
            <strong>Financial Stability:</strong> Wealth provides financial
            security and stability, allowing for greater independence in
            lifestyle and career choices.
          </p>
          <p>
            <strong>Opportunities:</strong> It creates opportunities for future
            generations by providing a stronger foundation and access to
            resources.
          </p>
        </div>

        <div>
          <img className="img" src="img.jpg" alt="Wealth" />
        </div>
      </div>

      <div>
        <img className="secondimg" src="img-2.jpg" alt="Smart Life" />
      </div>

      <div className="footer">
        <div className="footer-container">
          <h1>"செல்வத்துள் செல்வம் செவிச்செல்வம் அச்செல்வம்</h1>
          <h1>செல்வத்துள் எல்லாம் தலை"</h1>
          <p>
            Wealth is the total value of an individual's or society's
            possessions and resources, including money, property, and
            investments, after accounting for liabilities. It is often measured
            as net worth and represents accumulated assets that can be exchanged
            for money, goods, or services. Wealth provides security, allows for
            desired lifestyles, and enhances quality of life, though its meaning
            can extend beyond financial resources to include concepts like time
            and social connections.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wealth;