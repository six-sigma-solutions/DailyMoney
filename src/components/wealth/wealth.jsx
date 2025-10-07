import React from "react";
import "./Wealth.css";

const WealthPage = () => {
  

  return (
    
    <div className="wealthy-page">
      {/* Header */}
      <header className="wealthy-header">
        <div className="wealthy-container wealthy-header-inner">
          <div className="wealthy-logo" style={{ color: "#0b3550" }}>
            WEALTH
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="wealthy-container wealthy-hero-card">
          <div className="wealthy-hero-grid">
           
            <div className="wealthy-hero-image" aria-hidden="true">
              <div className="wealthy-portrait-card">
                <img src="healt-welt.jpeg" alt="Portrait" />
              </div>
            </div>
          </div>
        </section>

        {/* Zigzag Section */}
        <section className="wealthy-container wealthy-zigzag">
          <div className="wealthy-row">
            <div className="wealthy-col wealthy-image-col">
              <img src="mo.jpg" alt="Wealth concept 1" />
            </div>
            <div className="wealthy-col wealthy-text-col row1">
              <h2>
                <span style={{ color: "red" }}>✔️</span> Wealth is more than
                numbers in a bank account. It is the freedom to choose our path,
                the security to protect what matters, and the power to create a
                lasting impact.
              </h2>
            </div>
          </div>

          <div className="wealthy-row wealthy-reverse">
            <div className="wealthy-col wealthy-image-col">
              <img src="w2.jpg" alt="Wealth concept 2" />
            </div>
            <div className="wealthy-col wealthy-text-col row2">
              <h2>
                <span style={{ color: "red" }}>✔️</span> True wealth begins with
                discipline — living with intention, saving with wisdom, and
                investing with vision. It grows not only through money but also
                through knowledge, relationships, and the values we pass on to
                the next generation.
              </h2>
            </div>
          </div>

          <div className="wealthy-row">
            <div className="wealthy-col wealthy-image-col">
              <img src="w1.jpg" alt="Wealth concept 3" />
            </div>
            <div className="wealthy-col wealthy-text-col row3">
              <h2>
                <span style={{ color: "red" }}>✔️</span> Our wealth is not just
                about what we accumulate, but about what we enable. With wealth,
                we gain the ability to support our families, nurture dreams,
                create opportunities, and contribute to causes that uplift
                society.
              </h2>
            </div>
          </div>

          <div className="wealthy-row wealthy-reverse">
            <div className="wealthy-col wealthy-image-col">
              <img src="w4.jpg" alt="Wealth concept 4" />
            </div>
            <div className="wealthy-col wealthy-text-col row4">
              <h2>
                <span style={{ color: "red" }}>✔️</span> Wealth is not
                greed—it is growth. It is not selfishness—it is stewardship.
                When guided by purpose, wealth becomes a force for freedom, for
                impact, and for legacy. Our wealth is our power to live with
                dignity, give with generosity, and build a future that outlives
                us.
              </h2>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WealthPage;