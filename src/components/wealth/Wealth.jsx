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
                Wealth is more than numbers in a bank <span className="text">account.</span> It is the freedom
                to choose <span className="text">our path,</span> the security to protect what <span className="text">matters and</span>
                the power to create a <span className="text">lasting impact.</span>
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
                True wealth begins with discipline <span className="text">living with intention,</span>
                saving with <span className="text">wisdom and investing with vision.</span> <br /><span className="wealthy-check">  ✓  </span> It grows not only
                through income but <span className="text">also through knowledge,</span> relationships <span className="text">and the</span>
                values we pass on to the next <span className="text">generation.</span>
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
                Our wealth is not just about what we <span className="text">accumulate,</span> but about what
                we <span className="text">enable.</span> With it, we gain the ability to <span className="text">support our</span>
                families, nurture dreams, <span className="text">create opportunities and contribute</span>
                to <span className="text">causes that uplift society.</span>
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
                Wealth is not greed it is growth. It is not <span className="text">selfishness, it is</span>
                stewardship. When <span className="text">guided by purpose,</span> wealth becomes a <span className="text">force for</span>
                freedom, impact and legacy. <span className="text">Our wealth is our power to</span>
                live with <span className="text">dignity, give with generosity</span> and build <span className="text">a future that</span>
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
