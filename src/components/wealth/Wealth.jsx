// Wealth.jsx
import React from "react";
import "./Wealth.css";
import Footer from '../footer/Footer';

const Wealth = () => {
  return (
    <div className="wealthy-page">
      {/* Header */}
      <header className="wealthy-header">
        <div className="wealthy-container wealthy-header-inner">
          <div className="wealth-heading">
            <span>Our Wealth</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="wealthy-container wealthy-hero-card">
          <div className="wealthy-hero-grid">
            <div className="wealthy-hero-image" aria-hidden="true">
              <div className="wealthy-portrait-card">
                <img src="wealthlogo2.jpg" alt="Portrait" />
              </div>
            </div>
          </div>
        </section>

        {/* Zigzag Section */}
        <section className="wealthy-container wealthy-zigzag">

          {/* Row 1 */}
          <div className="wealthy-row">
            <div className="wealthy-col wealthy-image-col">
              <img src="wealth85.png" alt="Wealth concept 1" />
            </div>

            <div className="wealthy-col wealthy-text-col row1">
              <div className="wealthy-bullet">
                <span className="wealthy-check" style={{color:"white"}}>✓</span>
                <p>
                  Wealth is more than numbers in a bank <span className="text1">account. </span>
                  It is the freedom to choose <span className="text1">our path,</span> the security to protect what
                  <span className="text1"> matters and</span> the power to create a <span className="text1">lasting impact.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="wealthy-row wealthy-reverse">
            <div className="wealthy-col wealthy-image-col">
              <img src="wealth99.png" alt="Wealth concept 2" />
            </div>

            <div className="wealthy-col wealthy-text-col row2">
              <div className="wealthy-bullet">
                <span className="wealthy-check" style={{color:"white"}}>✓</span>
                <p>
                  True wealth begins with discipline <span className="text1">living with intention, </span>
                  saving with <span className="text1">wisdom</span> and investing with vision.
                </p>
              </div>

              <div className="wealthy-bullet">
                <span className="wealthy-check">✓</span>
                <p>
                  It grows not only through income but <span className="text1">also through knowledge, </span>
                  relationships <span className="text1">and the</span> values we pass on to the next <span className="text1">generation.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="wealthy-row">
            <div className="wealthy-col wealthy-image-col">
              <img src="w1.jpg" alt="Wealth concept 3" />
            </div>

            <div className="wealthy-col wealthy-text-col row3">
              <div className="wealthy-bullet">
                <span className="wealthy-check" style={{color:"white"}}>✓</span>
                <p>
                  Our wealth is not just about what we <span className="text1">accumulate,</span> but about what
                  we <span className="text1">enable.</span> With it, we gain the ability to <span className="text1">support our </span>
                  families, nurture dreams, <span className="text1">create opportunities and contribute </span>
                  to <span className="text1">causes that uplift society.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Row 4 */}
          <div className="wealthy-row wealthy-reverse">
            <div className="wealthy-col wealthy-image-col">
              <img src="wealth400.png" alt="Wealth concept 4" />
            </div>

            <div className="wealthy-col wealthy-text-col row4">
              <div className="wealthy-bullet">
                <span className="wealthy-check" style={{color:"white"}}>✓</span>
                <p>
                  Wealth is not greed it is growth. It is not <span className="text1">selfishness, it is</span> stewardship.
                  When <span className="text1">guided by purpose,</span> wealth becomes a <span className="text1">force for </span>
                  freedom, impact and legacy. <span className="text1">Our wealth is our power to </span>
                  live with <span className="text1">dignity, give with generosity</span> and build <span className="text1">a future that </span>
                  outlives us.
                </p>
              </div>
            </div>
          </div>

        </section>
      </main>

      <div className="btn-center-1">
        <a href="family" className="view-btn">View More</a>
      </div>

      <div className="card-footer-bg">
        {/* START: ADDED LOGO SECTION */}
        <div className="footer-logo-container">
          <img
            src="DM-100.jpg"
            alt="DailyMoney Logo"
            className="footer-logo"
          />
        </div>

        <p className="footer-subtitle2">
          Independent for Entire Life
        </p>
      </div>
    </div>
  );
};

export default Wealth;
