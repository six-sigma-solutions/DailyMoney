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
           <span className="dot-1">● </span>Income is more than just money earned. <br />
           <span className="dot-1">● </span>It is the reward for effort,
             time and value created.<br /> 
           <span className="dot-1">● </span>Whether through wages, salaries, profits
            or investments,<br /> income provides the foundation for stability and
            growth.
          </p>
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
          <p>
           <span className="dot-1">● </span>True income, however is not just financial.<br />
           <span className="dot-1">● </span>It is about the returns
            you gain from life itself,<br /> the knowledge you acquire, the
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
              <span className="dot-1">● </span>Secure your family's future.  <br />
              <span className="dot-1">● </span>Build lasting wealth and assets.  <br />
              <span className="dot-1">● </span>Create the freedom to travel, <br /> explore and experience life. <br />
              <span className="dot-1">● </span>Live with peace of mind and purpose. <br />
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
     <span className="dot-1">● </span>Income powers growth, not greed. <br />
     <span className="dot-1">● </span>Energy creates opportunity. <br />
     <span className="dot-1">● </span>Wealth begins with wisdom. <br />
     <span className="dot-1">● </span>Freedom follows discipline. <br />
     <span className="dot-1">● </span>Balance builds true success. <br />
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
      <section className="blog">
               <div className="view-more-link-my-life">
                  <Link className="view-more-link" to="/womenempowerment">
                    <button className="view-more" type="button">View More</button>
                  </Link>
              </div>
            </section>
      <Footer />
    </div>
  );
};

export default Income;
