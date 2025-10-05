import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Visionmission.css';

const Visionmission = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Reveal animation logic remains for card-text
    const txt = document.querySelector('.dm-vsn-card-text');
    if (!txt) return;
    
    txt.style.opacity = '0';
    txt.style.transform = 'translateY(8px)';
    txt.style.transition = 'opacity 520ms ease, transform 520ms ease';
    
    const animate = () => {
      txt.style.opacity = '1';
      txt.style.transform = 'translateY(0)';
    };
    
    const timeoutId = setTimeout(animate, 10); 

    return () => clearTimeout(timeoutId);
  }, []);

  // FIX: Use React Router's useNavigate hook for internal routing to /solution
  const handleSolutionClick = () => {
    navigate('/solution'); 
  };

  return (
    <main className="dm-vsn-main-content">
      
      {/* HERO: centered rounded card with full-width image inside and left text */}
      <section className="dm-vsn-hero-card">
        <div className="dm-vsn-card-inner">
          {/* FIX: Corrected image path to use public assets */}
          <img className="dm-vsn-card-media" src="/vision1.jpg" alt="Vision" />
          <div className="dm-vsn-card-overlay">
            <div className="dm-vsn-card-text">
              <p className="dm-vsn-kicker">Our Vision</p>
              <h1>Build with intention.<br />Deliver with precision.</h1>
              <p className="dm-vsn-lead">
                Daily money is not just about spending — it’s about creating
                the foundation for a life of purpose. Our vision is to empower
                millions to achieve financial, physical, and spiritual independence.
              </p>
              <div className="dm-vsn-tagline"><strong>We are creating the future, not just waiting for it.</strong></div>
            </div>
          </div>
        </div>
      </section>

      {/* STANDARDS */}
      <section className="dm-vsn-standards">
        <div className="dm-vsn-container">
          <p className="dm-vsn-kicker dm-vsn-small">Our standards</p>
          <h2 className="dm-vsn-h2">Every Detail Matters in Daily Money</h2>
          <p className="dm-vsn-lead dm-vsn-muted">
            Consistent financial growth comes from clear standards and smart choices. With careful planning and security, daily money transforms into lasting wealth and stability.
          </p>

          <div className="dm-vsn-grid-features">
            <div className="dm-vsn-feature">
              <h4>My dreams are not limited by today; they are guided by tomorrow.</h4>
            </div>
            <div className="dm-vsn-feature">
              <h4>A clear vision turns obstacles into opportunities.</h4>
            </div>
            <div className="dm-vsn-feature">
              <h4>I walk with hope, guided by a mission for tomorrow.</h4>
            </div>
            <div className="dm-vsn-feature">
              <h4>My future is not found, it is built with vision and effort.</h4>
            </div>
            <div className="dm-vsn-feature">
              <h4>Every great change begins with a bold vision.</h4>
            </div>
            <div className="dm-vsn-feature">
              <h4>My purpose is greater than my fear; my vision is stronger than my doubt.</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="dm-vsn-action-section">
        <button id="dm-vsn-solution-btn" className="dm-vsn-animated-btn" onClick={handleSolutionClick}>
          Solution
        </button>
      </section>

      <br className="dm-vsn-spacer" />
    </main>
  );
};

export default Visionmission;
