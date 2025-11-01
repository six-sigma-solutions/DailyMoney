import React from 'react';
import './Gratitude.css';

const Gratitude = () => {

  // Action from the original HTML: navigate to the external link
  const handleGetStarted = (e) => {
    e.preventDefault();
    window.location.href = '/mypromises'; 
  };
  
  return (
    <div className="dm-grt-wrapper">
     
      {/* Hero Section */}
      <section className="dm-grt-hero" id="dm-grt-home">
        <div className="dm-grt-hero-content">
          <div className="dm-grt-content-card">
            <h1 className="dm-grt-title">THANKS TO<br/>THE UNIVERSE</h1>
            <div className="dm-grt-text-content">
              <p className="dm-grt-paragraph">
                Today, I express my gratitude to my parents, my ancestors, and to this Universe.
              </p>
              <p className="dm-grt-paragraph">
                From this moment, my family and I choose to give first priority to health and to live a joyful and prosperous life.
              </p>
              <p className="dm-grt-paragraph">
                I thank the Universe for blessing us with health, wealth, happiness, our children's future, abundant opportunities to travel, and above all, virtue (good karma).
              </p>
              <p className="dm-grt-paragraph">
                Together with the millions of people around the world benefiting, from today we too begin our journey.
              </p>
              <p className="dm-grt-highlight">
                Guided by the wisdom, discipline and spirit of the world's greatest Legends.
              </p>
            </div>
            <button id="dm-grt-get-started" className="dm-grt-button" onClick={handleGetStarted}>
              NEED MORE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gratitude;
