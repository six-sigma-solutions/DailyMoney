import React from "react";
import "./Visionmission.css";

const Visionmission = () => {
  return (
    <main>
      {/* HERO: centered rounded card with full-width image inside and left text */}
      <section className="hero-card">
        <div className="card-inner">
          <img className="card-media" src="vision1.jpg" alt="Vision" />
          <div className="card-overlay">
            <div className="card-text">
              <p className="kicker">Our Vision</p>
              <h1>
                Build with intention.
                <br />
                Deliver with precision.
              </h1>
              <p className="lead">
                Daily money is not just about spending — it’s about creating
                value, building strength, and shaping the future.
              </p>
            </div>
          </div>

          <div className="card-features">
            <div className="col">
              <strong>
                My vision is to build something that will inspire generations.
              </strong>
            </div>
            <div className="col">
              <strong>
                We believe growth and change always carry a big vision.
              </strong>
            </div>
            <div className="col">
              <strong>
                I believe in creating the future, not just waiting for it.
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* STANDARDS */}
      <section className="standards">
        <div className="container">
          <p className="kicker small">Our standards</p>
          <h2>Every Detail Matters in Daily Money</h2>
          <p className="lead muted">
            Consistent financial growth comes from clear standards and smart
            choices. With careful planning and security, daily money transforms
            into lasting wealth and stability.
          </p>

          <div className="grid-features">
            <div className="feature">
              <h4>
                My dreams are not limited by today; they are guided by tomorrow.
              </h4>
            </div>
            <div className="feature">
              <h4>A clear vision turns obstacles into opportunities.</h4>
            </div>
            <div className="feature">
              <h4>I walk with hope, guided by a mission for tomorrow.</h4>
            </div>
            <div className="feature">
              <h4>
                My future is not found, it is built with vision and effort.
              </h4>
            </div>
            <div className="feature">
              <h4>Every great change begins with a bold vision.</h4>
            </div>
            <div className="feature">
              <h4>
                My purpose is greater than my fear; my vision is stronger than
                my doubt.
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* GRATITUDE SECTION */}
      <section className="gratitude-section">
        <button
          id="gratitudeBtn"
          className="animated-btn"
          onClick={() => (window.location.href = "solution")}
        >
          Solution
        </button>
      </section>

      <br />
      <br />
      <br />
    </main>
  );
};

export default Visionmission;
