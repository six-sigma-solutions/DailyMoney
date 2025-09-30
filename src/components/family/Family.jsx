/* eslint-disable no-irregular-whitespace */
import React, { useEffect } from "react";
import "./Family.css";

const Family = () => {
  useEffect(() => {
    const handleScroll = () => {
      const steps = document.querySelectorAll(".step");
      steps.forEach((step) => {
        const rect = step.getBoundingClientRect();
        if (rect.top < window.innerHeight - 120) {
          step.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="family-page">

      <section className="solutions-cards">
        <h2 className="text-2xl font-semibold mb-6 text-center">Family</h2>
      </section>

      {/* Process Section */}
      <section className="process">
        <h2>Daily Money Gives Family</h2>
        <p className="subtitle">
          How Daily Money Works Together to make Happy Family.
        </p>

        {/* Step 1 */}
        <div className="step">
          <div className="step-img">
            <img src="/famimg1.jpeg" alt="Discover" />
          </div>
          <div className="step-content">
            <h3>
              <span>/01</span> Stronger Everyday With Daily Money...
            </h3>
            <ul>
              <li>Every family looks for something that brings them closer.
              </li>
              <li>A little habit, a simple step, that quietly strengthens the bond.
              </li>
              <li>It doesn’t feel like a task—it becomes part of life.
              </li>
              <li>And once it begins, everyone feels the difference together.</li>
              <li>Something that fits into mornings, evenings, and everything in between.
              </li>
              <li>It’s more than a routine; it’s a shared experience.
              </li>
            </ul>
          </div>
        </div>

        {/* Step 2 */}
        <div className="step reverse">
          <div className="step-img">
            <img src="/famimg2.jpeg" alt="Develop" />
          </div>
          <div className="step-content">
            <h3>
              <span>/02</span> Daily Spark for Students...
            </h3>
            <ul>
              <li>Plan monthly budget as a family – small savings, big dreams.</li>
              <li>Teaching kids about money today = wealthy future tomorrow.</li>
              <li>it feels small, but the change it brings is powerful.</li>
              <li>It doesn’t demand attention, yet it’s always there for you.
              </li>
            </ul>
          </div>
        </div>

        {/* Step 3 */}
        <div className="step">
          <div className="step-img">
            <img src="/famimg3.jpeg" alt="Deliver" />
          </div>
          <div className="step-content">
            <h3>
              <span>/03</span> Business Mind, Big Grind...
            </h3>
            <ul>
              <li>Great businesses are built on small consistent efforts</li>
              <li>Think big, start small, scale fast.</li>
              <li>Failures are the stepping stones to successful ventures.</li>
              <li>A businessman sees opportunity where others see obstacles.</li>
            </ul>
          </div>
        </div>

        {/* Step 4 */}
        <div className="step reverse">
          <div className="step-img">
            <img src="/famimg4.jpeg" alt="Support" />
          </div>
          <div className="step-content">
            <h3>
              <span>/04</span> Support Today, Success Tomorrow...
            </h3>
            <ul>
              <li>Support from others makes you stronger, but self-belief makes you unstoppable.</li>
              <li>Growth is not about speed, it’s about direction.</li>
              <li>The best way to grow is to keep moving forward, even if it’s small steps.</li>
              <li>Uplifting each other turns small efforts into big results</li>
              <li>Facing challenges together strengthens resilience</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog">
        <h2>From the blog</h2>
        <p>
          <strong>August 15, 2025</strong> - Model Context Protocol: The
          Infrastructure Layer for AI Agent Ecosystems
        </p>
        <a href="#">Read more →</a>
      </section>

      {/* Footer */}
      <footer>
        <h3>Tell us about your project</h3>
        <button className="btn">Say Hello</button>
        <div className="footer-links">
          <p>© 2025 Archetype. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Family;