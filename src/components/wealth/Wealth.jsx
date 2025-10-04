import React from "react";
import "./Wealth.css";

const WealthPage = () => {
  const handleGetStarted = () => {
    alert("Welcome to Wealth Management — Let's begin your journey!");
  };

  return (
    <div className="wealth-page">
      {/* Header */}
      <header className="site-header">
        <div className="container header-inner">
          <div className="logo" style={{ color: "#0b3550" }}>
            WEALTH
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="container hero-card">
          <div className="hero-grid">
            <div className="hero-text">
              <h1>
                Wealth
                <br />
                <span className="accent">Management</span>
              </h1>
              <p className="lead">
                Personalized strategies to grow and manage your wealth.
              </p>
              <button id="getStarted" className="btn" onClick={handleGetStarted}>
                Get Started
              </button>
            </div>

            <div className="hero-image-wrap" aria-hidden="true">
              <div className="portrait-card">
                <img src="./images/wome.jpg" alt="Portrait" />
              </div>
            </div>
          </div>
        </section>

        {/* Zigzag Section */}
        <section className="container zigzag">
          <div className="row">
            <div className="col image-col">
              <img src="./images/mo.jpg" alt="Wealth concept 1" />
            </div>
            <div className="col text-col">
              <h2>
                <span style={{ color: "red" }}>✔️</span> Wealth is more than
                numbers in a bank account. It is the freedom to choose our path,
                the security to protect what matters, and the power to create a
                lasting impact.
              </h2>
            </div>
          </div>

          <div className="row reverse">
            <div className="col image-col">
              <img src="./images/w2.jpg" alt="Wealth concept 2" />
            </div>
            <div className="col text-col">
              <h2>
                <span style={{ color: "red" }}>✔️</span> True wealth begins with
                discipline — living with intention, saving with wisdom, and
                investing with vision. It grows not only through money but also
                through knowledge, relationships, and the values we pass on to
                the next generation.
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col image-col">
              <img src="./images/w1.jpg" alt="Wealth concept 3" />
            </div>
            <div className="col text-col">
              <h2>
                <span style={{ color: "red" }}>✔️</span> Our wealth is not just
                about what we accumulate, but about what we enable. With wealth,
                we gain the ability to support our families, nurture dreams,
                create opportunities, and contribute to causes that uplift
                society.
              </h2>
            </div>
          </div>

          <div className="row reverse">
            <div className="col image-col">
              <img src="./images/w4.jpg" alt="Wealth concept 4" />
            </div>
            <div className="col text-col">
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
