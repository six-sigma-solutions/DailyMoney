import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Visionmission.css';
import Footer from '../footer/Footer';

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
      <div className="dm-title">Dailay Money Vision & Mission</div>
      {/* HERO: centered rounded card with full-width image inside and left text */}
      <section className="dm-vsn-hero-card">
        
        <div className="dm-vsn-card-inner">
          {/* FIX: Corrected image path to use public assets */}
          <img className="dm-vsn-card-media" src="/vision1.jpg" alt="Vision" />
          <div className="dm-vsn-card-overlay">
            <div className="dm-vsn-card-text">
              <p className="dm-vsn-kicker"> </p>
              <h1>Improving the world's health, happiness, and prosperity<br />Deliver with precision.</h1>
              <p className="dm-vsn-lead">
                A brighter world — healthy in spirit, joyful in living, and abundant in growth.<br></br>
                Living in flow with nature — where wellness nourishes wealth, and joy sustains growth.<br></br>
                Building a future where vitality, happiness, and financial freedom flow as one.<br></br>
                To enrich every life with balance, energy, and prosperity.

              </p>
              
            </div>
          </div>
        </div>
      </section>


<section className="vision-section">
  <div className="vision-container">


    {/* Section 1: Image Left, Text Right */}
    <div className="vision-row">
      <div className="vision-col vision-image-col">
        <img src="vmd-1.jpeg" alt="Wealth concept 1" />
      </div>
      <div className="vision-col vision-text-col">
        <h2>
          <span style={{ color: "red" }}>✔️</span>  Transforming the way the world lives — healthier in body, 
          happier in heart, and richer in spirit.<br></br>


          <span style={{ color: "red" }}>✔️</span>  To inspire a world where well-being, joy, 
          and prosperity thrive together.<br></br>
        </h2>
      </div>
    </div>

    {/* Section 2: Image Right, Text Left */}
    <div className="vision-row vision-reverse">
      <div className="vision-col vision-image-col">
        <img src="vmd-2.jpeg" alt="Wealth concept 2" />
      </div>
      <div className="vision-col vision-text-col">
        <h2>
          <span style={{ color: "red" }}>✔️</span>  To nurture global wellness and wealth 
          through mindful living and empowered growth.<br></br>
          
          <span style={{ color: "red" }}>✔️</span>   To harmonize body, mind, and prosperity through conscious, 
          nature-powered living.
        </h2>
      </div>
    </div>

    {/* Section 3: Image Left, Text Right */}
    <div className="vision-row">
      <div className="vision-col vision-image-col">
        <img src="vmd-3.jpeg" alt="Wealth concept 3" />
      </div>
      <div className="vision-col vision-text-col">
        <h2>
          <span style={{ color: "red" }}>✔️</span>  A world of harmony — where health, happiness, 
          and wealth coexist in balance.<br></br>
          <span style={{ color: "red" }}>✔️</span>  To redefine success by aligning health, happiness, 
          and financial growth.


        </h2>
      </div>
    </div>

    {/* Section 4: Image Right, Text Left */}
    <div className="vision-row vision-reverse">
      <div className="vision-col vision-image-col">
        <img src="vmd-4.jpeg" alt="Wealth concept 4" />
      </div>
      <div className="vision-col vision-text-col">
        <h2>
          <span style={{ color: "red" }}>✔️</span> To create a global movement that connects well-being 
          with wealth-building for a better tomorrow.<br></br>

          <span style={{ color: "red" }}>✔️</span> Empower every individual to live healthier, 
          happier, and more abundant lives through balance and purpose.
        </h2>
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
      <Footer />
    </main>
  );
};

export default Visionmission;
