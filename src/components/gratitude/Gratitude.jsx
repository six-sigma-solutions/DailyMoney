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
          <img 
            src="/thanksunivers.jpg" 
            alt="Thanks to the Universe" 
            className="dm-grt-universe-image"
          />
          <button id="dm-grt-get-started" className="dm-grt-button" onClick={handleGetStarted}>
            NEED MORE
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gratitude;
