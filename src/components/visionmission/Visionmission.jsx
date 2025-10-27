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
      <div className="dm-title">DM Vision & Mission</div>
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
                Living in flow with nature — where wellness nourishes wealth and joy sustains growth.<br></br>
                Building a future where vitality, happiness, and financial independence flow as one.<br></br>
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
        <img src="vee.png" alt="Wealth concept 1" />
      </div>
      <div className="vision-col vision-text-col">
        <h2>
          <div className='vision-paragraph-container'>
          <p style={{ color: "red", marginRight: "15px" }}>✔️</p><p>  Transforming the way the world lives — healthier in body, 
          happier in heart, and richer in spirit.</p>
          </div>

          <div className='vision-paragraph-container'> 
          <p style={{ color: "red", marginRight: "15px" }}>✔️</p>  <p>To inspire a world where well-being, joy, 
          and prosperity thrive together.</p>
          </div>
        </h2>
      </div>
    </div>

          {/* Section 2: Image Right, Text Left */}
          <div className="vision-row vision-reverse">
            <div className="vision-col vision-image-col">
              <img src="life.png" alt="Wealth concept 2" />
            </div>
            <div className="vision-col vision-text-col">
              <h2>
                <div className='vision-paragraph-container'>
                  <p style={{ color: "red", marginRight: "15px" }}>✔️</p>  <p>To nurture global wellness and wealth
                    through mindful living and empowered growth.</p>
                </div>

                <div className='vision-paragraph-container'>
                  <p style={{ color: "red", marginRight: "15px" }}>✔️</p>  <p>To harmonize body, mind, and prosperity through conscious,
                    nature-powered living.</p>
                </div>

              </h2>
            </div>
          </div>





    {/* Section 3: Image Left, Text Right */}
    <div className="vision-row">
      <div className="vision-col vision-image-col">
        <img src="vision65.png" alt="Wealth concept 3" />
      </div>
      <div className="vision-col vision-text-col">
        <h2>
          <div className='vision-paragraph-container'> 
          <p style={{ color: "red", marginRight: "15px" }}>✔️</p>  <p>A world of harmony — where health, happiness, 
          and wealth coexist in balance.
</p>
          </div>
          
          <div className='vision-paragraph-container'> 
          <p style={{ color: "red", marginRight: "15px" }}>✔️</p>  <p> To redefine success by aligning health, happiness, 
          and financial growth.</p>
          </div>

              </h2>
            </div>
          </div>

    {/* Section 4: Image Right, Text Left */}
    <div className="vision-row vision-reverse">
      <div className="vision-col vision-image-col">
        <img src="veetech.png" alt="Wealth concept 4" />
      </div>
      <div className="vision-col vision-text-col">
        <h2>
          <div className='vision-paragraph-container'> 
          <p style={{ color: "red", marginRight: "15px" }}>✔️</p>  <p>To create a global movement that connects well-being 
          with wealth-building for a better tomorrow.
</p>
          </div>
          
          <div className='vision-paragraph-container'> 
          <p style={{ color: "red", marginRight: "15px" }}>✔️</p>  <p> Empower every individual to live healthier, 
          happier, and more abundant lives through balance and purpose.</p>
          </div>
        </h2>
      </div>
    </div>
  </div>



</section>

      {/* Horizontal 4-Image Section */}
      <section className="vision-gallery-section">
        <h2 className="vision-gallery-title">Core Values</h2>
        <div className="vision-gallery">
          <img src="abd.png" alt="Vision gallery 1" />
          <img src="secondu.png" alt="Vision gallery 2" />
          <img src="test3.jpg" alt="Vision gallery 3" />
          <img src="create.png" alt="Vision gallery 4" />
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
