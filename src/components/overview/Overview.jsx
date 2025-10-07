import React from "react";
import "./style.css";

const ZigzagLayout = () => {
  const getStarted = () => {
    alert("Get Started clicked!"); // Replace with your actual function
  };

  return (
    <div>
      <div className="ove">
        <span>Overview</span>
      </div>

      {/* Section 1: Image Left / Text Right */}
      <section
        className="fade-in"
        style={{ backgroundImage: "linear-gradient(45deg, blue, red)", borderRadius: "25px" }}
      >
        <img src="image-1.jpg" alt="People smiling and collaborating" />
        <div className="text">
          <h2 style={{ color: "burlywood", textAlign: "center" }}>Our Purpose</h2>
          <p>
            Daily Money exists to make the world healthier, happier, wealthier, one person, one family, and one community at a time.
          </p>
        </div>
      </section>

      {/* Section 2: Image Right / Text Left */}
      <section
        className="fade-in reverse"
        style={{ backgroundImage: "linear-gradient(45deg, red, blue)", borderRadius: "25px" }}
      >
        <img src="image-2.jpg" alt="People planning together" />
        <div className="text">
          <h2 style={{ color: "yellow", textAlign: "center" }}>Our Approach</h2>
          <ul>
            <li><strong>Clarity –</strong> Simplifying money so everyone understands it.</li>
            <li><strong>Discipline –</strong> Encouraging consistent daily habits that build lasting wealth.</li>
            <li><strong>Integration –</strong> Connecting health, wealth, and peace as parts of the same journey.</li>
            <li><strong>Generational Growth –</strong> Ensuring prosperity passes forward, sustaining families across generations.</li>
          </ul>
        </div>
      </section>

      {/* Section 3: Image Left / Text Right */}
      <section
        className="fade-in"
        style={{ backgroundImage: "linear-gradient(45deg, blue, red)", borderRadius: "25px" }}
      >
        <img src="image-3.jpg" alt="Generational family together" />
        <div className="text">
          <h2 style={{ textAlign: "center", color: "orchid" }}>Our Core Beliefs</h2>
          <ul>
            <li><strong>Wealth is Freedom –</strong> The ability to choose your path without limits.</li>
            <li><strong>Health is Wealth –</strong> Without wellness, money loses its meaning.</li>
            <li><strong>Peace is Success –</strong> A balanced life is the ultimate achievement.</li>
            <li><strong>Legacy Matters –</strong> True prosperity is measured in impact that outlives us.</li>
          </ul>
        </div>
      </section>

      {/* Section 4: Image Right / Text Left */}
      <section
        className="fade-in reverse"
        style={{ backgroundImage: "linear-gradient(45deg, red, blue)", borderRadius: "25px" }}
      >
        <img src="image-4.jpg" alt="People celebrating success together" />
        <div className="text">
          <h2 style={{ textAlign: "center", color: "cyan" }}>Our Promise</h2>
          <p>
            Daily Money is not just about income today, but about wealth for life and beyond. We help build strong foundations so every generation thrives—financially, physically, and spiritually.
          </p>
        </div>
      </section>

      {/* Button */}
      <div className="btn-container fade-in">
        <button className="btn" onClick={getStarted}>Get Started</button>
      </div>
    </div>
  );
};


export default ZigzagLayout;
