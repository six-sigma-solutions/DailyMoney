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
        <h2>How we work together</h2>
        <p className="subtitle">
          Get a transparent, collaborative approach that turns your ideas into
          working solutions.
        </p>

        {/* Step 1 */}
        <div className="step">
          <div className="step-img">
            <img src="/famimg1.jpeg"alt="Discover" />
          </div>
          <div className="step-content">
            <h3>
              <span>/01</span> Discover & Define
            </h3>
            <p>
              Research your business, users, and goals through collaborative
              workshops and analysis.
            </p>
            <ul>
              <li>Stakeholder interviews</li>
              <li>User research & personas</li>
              <li>Competitive analysis</li>
              <li>Technical architecture</li>
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
              <span>/02</span> Design & Develop
            </h3>
            <p>
              Build working prototypes in two-week sprints with regular
              check-ins.
            </p>
            <ul>
              <li>Interactive Prototypes</li>
              <li>UI & UX Design</li>
              <li>Frontend & Backend Development</li>
              <li>Quality Assurance</li>
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
              <span>/03</span> Deploy & Deliver
            </h3>
            <p>
              Launch your product with complete deployment handling from app
              stores to cloud infrastructure.
            </p>
            <ul>
              <li>Pre-launch Testing & Optimization</li>
              <li>App Store Deployment</li>
              <li>Documentation & Training</li>
              <li>Ongoing Support & Maintenance</li>
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
              <span>/04</span> Support & Growth
            </h3>
            <p>
              We continue working with you to scale and improve your digital
              products.
            </p>
            <ul>
              <li>Continuous Improvement</li>
              <li>Performance Optimization</li>
              <li>New Feature Development</li>
              <li>24/7 Support</li>
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
