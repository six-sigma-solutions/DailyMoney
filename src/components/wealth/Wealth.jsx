import React from "react";
import "./Wealth.css";
import { Link } from "react-router-dom";
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
        <section className="wealthy-container wealthy-zigzag" >
          {/* Row 1 */}
          <div className="wealthy-row" >
            <div className="wealthy-col wealthy-image-col" >
              <img src="wealth85.png" alt="Wealth concept 1" />
            </div> 
            <div className="wealthy-col wealthy-text-col row1">
              <h2>
                <span className="wealthy-check" >  ✓  </span>
                Wealth is more than numbers in a bank account. It is the freedom
                to choose our path, the security to protect what matters and
                the power to create a lasting impact.
              </h2>
            </div>
          </div>

          {/* Row 2 */}
          <div className="wealthy-row wealthy-reverse">
            <div className="wealthy-col wealthy-image-col" >
              <img src="wealth99.png" alt="Wealth concept 2" />
            </div>
            <div className="wealthy-col wealthy-text-col row2" >
              <h2>
                <span className="wealthy-check">  ✓  </span>
                True wealth begins with discipline living with intention,
                saving with wisdom and investing with vision. <br /><span className="wealthy-check">  ✓  </span> It grows not only
                through income but also through knowledge, relationships and the
                values we pass on to the next generation.
              </h2>
            </div>
          </div>

          {/* Row 3 */}
          <div className="wealthy-row" >
            <div className="wealthy-col wealthy-image-col">
              <img src="w1.jpg" alt="Wealth concept 3" />
            </div>
            <div className="wealthy-col wealthy-text-col row3">
              <h2>
                <span className="wealthy-check">  ✓  </span>
                Our wealth is not just about what we accumulate, but about what
                we enable. With it, we gain the ability to support our
                families, nurture dreams, create opportunities and contribute
                to causes that uplift society.
              </h2>
            </div>
          </div>

          {/* Row 4 */}
          <div className="wealthy-row wealthy-reverse">
            <div className="wealthy-col wealthy-image-col">
              <img src="wealth44.png" alt="Wealth concept 4" />
            </div>
            <div className="wealthy-col wealthy-text-col row4">
              <h2>
                <span className="wealthy-check">  ✓  </span>
                Wealth is not greed it is growth. It is not selfishness, it is
                stewardship. When guided by purpose, wealth becomes a force for
                freedom, impact and legacy. Our wealth is our power to
                live with dignity, give with generosity and build a future that
                outlives us.
              </h2>
            </div>
          </div>
        </section>
      </main>

    <div class="btn-center-1">
        <a href="family" class="view-btn">View More</a>
      </div>
     
      <div className="card-footer-bg">
                    {/* START: ADDED LOGO SECTION */}
                    <div className="footer-logo-container">
                        <img
                            // This logo URL is consistent with your Navbar.jsx
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
