import React from "react";
import "./Wealth.css";
import { FaChartLine, FaPiggyBank, FaShieldAlt, FaHandsHelping } from "react-icons/fa";

const Wealth = () => {
  return (
    <div className="wealth-container">
      {/* Hero Section */}
      <section className="wealth-hero">
        <div className="hero-content">
          <h1>Grow & Protect Your Wealth</h1>
          <p>
            We provide expert strategies and innovative tools to help you
            achieve financial independence, plan your future, and create lasting
            wealth.
          </p>
          <button className="hero-btn">Start Your Journey</button>
        </div>
        <div className="hero-img">
          <img
            src="https://source.unsplash.com/600x400/?finance,wealth"
            alt="Wealth Growth"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="wealth-services">
        <h2>Our Wealth Solutions</h2>
        <p className="section-sub">
          From financial planning to secure investments — everything you need in
          one place.
        </p>
        <div className="services-grid">
          <div className="service-card">
            <FaChartLine className="service-icon" />
            <h3>Investment Growth</h3>
            <p>
              Smart strategies to help your money work for you and deliver
              consistent growth.
            </p>
          </div>
          <div className="service-card">
            <FaPiggyBank className="service-icon" />
            <h3>Financial Planning</h3>
            <p>
              Build a roadmap for your future with tailored plans to reach your
              financial goals.
            </p>
          </div>
          <div className="service-card">
            <FaShieldAlt className="service-icon" />
            <h3>Risk Protection</h3>
            <p>
              Secure your assets with the right balance of insurance and
              protection plans.
            </p>
          </div>
          <div className="service-card">
            <FaHandsHelping className="service-icon" />
            <h3>Advisory Support</h3>
            <p>
              Work with our trusted advisors to make smart, informed financial
              decisions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="wealth-cta">
        <h2>Take Control of Your Financial Future</h2>
        <p>
          Your journey to financial freedom starts here. Let’s build a wealth
          strategy that works for you.
        </p>
        <button className="cta-btn">Talk to an Expert</button>
      </section>
    </div>
  );
};

export default Wealth;
