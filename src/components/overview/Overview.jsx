import React from "react";
import "./Overview.css";

const Overview = () => {
  const getStarted = () => {
    alert("Welcome to Daily Money! Let's get started 🚀");
  };

  return (
    <div>
      <h1>Overview</h1>

      {/* Our Purpose */}
      <section className="fade-in">
        <h2>Our Purpose</h2>
        <p>
          Daily Money exists to make the world healthier, happier, and
          wealthier—one person, one family, and one community at a time. We
          believe health and wealth are inseparable foundations of a fulfilling
          life.
        </p>
        <img
          className="image"
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
          alt="People smiling and collaborating with joy"
        />
      </section>

      {/* Our Approach */}
      <section className="fade-in">
        <h2>Our Approach</h2>
        <ul>
          <li>
            <strong>Clarity –</strong> Simplifying money so everyone understands
            it.
          </li>
          <li>
            <strong>Discipline –</strong> Encouraging consistent daily habits
            that build lasting wealth.
          </li>
          <li>
            <strong>Integration –</strong> Connecting health, wealth, and peace
            as parts of the same journey.
          </li>
          <li>
            <strong>Generational Growth –</strong> Ensuring prosperity passes
            forward, sustaining families across generations.
          </li>
        </ul>
        <img
          className="image"
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80"
          alt="People planning together for growth"
        />
      </section>

      {/* Our Core Beliefs */}
      <section className="fade-in">
        <h2>Our Core Beliefs</h2>
        <ul>
          <li>
            <strong>Wealth is Freedom –</strong> The ability to choose your path
            without limits.
          </li>
          <li>
            <strong>Health is Wealth –</strong> Without wellness, money loses
            its meaning.
          </li>
          <li>
            <strong>Peace is Success –</strong> A balanced life is the ultimate
            achievement.
          </li>
          <li>
            <strong>Legacy Matters –</strong> True prosperity is measured in
            impact that outlives us.
          </li>
        </ul>
        <img
          className="image"
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"
          alt="Generational family together symbolizing legacy"
        />
      </section>

      {/* Get Started Button */}
      <div className="btn-container fade-in">
        <button className="btn" onClick={getStarted}>
          Get Started
        </button>
      </div>

      {/* Our Promise */}
      <section className="promise fade-in">
        <h2>Our Promise</h2>
        <p>
          Daily Money is not just about income today, but about wealth for life
          and beyond. We help build strong foundations so every generation
          thrives—financially, physically, and spiritually.
        </p>
        <img
          className="image"
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80"
          alt="People celebrating success together"
        />
      </section>
    </div>
  );
};

export default Overview;
