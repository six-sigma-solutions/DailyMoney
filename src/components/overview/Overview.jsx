import React from "react";
import "./Overview.css"; // Import the renamed styling file

const Overview = () => {
  const getStarted = () => {
    alert("Welcome to Daily Money! Let's get started 🚀");
  };

  return (
    // Top-level container to apply base styles (RENAMED from div)
    <div className="overview-page-container">
      
      {/* Heading 1 (RENAMED from h1) */}
      <h1 className="overview-h1">Overview</h1>

      {/* Our Purpose (RENAMED from section) */}
      <section className="overview-section fade-in">
        <h2 className="overview-h2">Our Purpose</h2>
        <p className="overview-p">
          Daily Money exists to make the world healthier, happier, and
          wealthier—one person, one family, and one community at a time. We
          believe health and wealth are inseparable foundations of a fulfilling
          life.
        </p>
        <img
          className="overview-image"
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
          alt="People smiling and collaborating with joy"
        />
      </section>

      {/* Our Approach (RENAMED from section) */}
      <section className="overview-section fade-in">
        <h2 className="overview-h2">Our Approach</h2>
        <ul className="overview-ul">
          <li className="overview-ul li">
            <strong>Clarity –</strong> Simplifying money so everyone understands
            it.
          </li>
          <li className="overview-ul li">
            <strong>Discipline –</strong> Encouraging consistent daily habits
            that build lasting wealth.
          </li>
          <li className="overview-ul li">
            <strong>Integration –</strong> Connecting health, wealth, and peace
            as parts of the same journey.
          </li>
          <li className="overview-ul li">
            <strong>Health is Wealth –</strong> Without wellness, money loses
            its meaning.
          </li>
          <li className="overview-ul li">
            <strong>Peace is Success –</strong> A balanced life is the ultimate
            achievement.
          </li>
          <li className="overview-ul li">
            <strong>Legacy Matters –</strong> True prosperity is measured in
            impact that outlives us.
          </li>
        </ul>
        <img
          className="overview-image"
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"
          alt="Generational family together symbolizing legacy"
        />
      </section>

      {/* Get Started Button (RENAMED from .btn-container, .btn) */}
      <div className="overview-btn-container fade-in">
        <button className="overview-btn" onClick={getStarted}>
          Get Started
        </button>
      </div>

      {/* Our Promise (RENAMED from .promise) */}
      <section className="overview-promise overview-section fade-in">
        <h2 className="overview-h2">Our Promise</h2>
        <p className="overview-p">
          Daily Money is not just about income today, but about wealth for life
          and beyond. We help build strong foundations so every generation
          thrives—financially, physically, and spiritually.
        </p>
        <img
          className="overview-image"
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&"
          alt="Two people shaking hands over a business deal"
        />
      </section>
    </div>
  );
};

export default Overview;