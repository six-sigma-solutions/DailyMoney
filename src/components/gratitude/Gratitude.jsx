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
      <header className="dm-grt-header">
        <div className="dm-grt-logo">
          Daily Money
        </div>
        {/* Navbar is provided by the parent App.jsx, but the original HTML had a simplified header */}
      </header>

      {/* Hero Section */}
      <section className="dm-grt-hero" id="dm-grt-home">
        <div className="dm-grt-hero-content">
          <h1 className="dm-grt-h1">THANKS FOR UNIVERSE</h1>
          <p className="dm-grt-p-content">
            Today, with a grateful heart, I honor my parents, my ancestors, and the Universe that guides us all.
            
            From this moment forward, my family and I choose to make health our highest priority, for health is the foundation of a joyful, abundant, and prosperous life.
            
            I thank the Universe for blessing us with strength, vitality, wealth, happiness, and endless opportunities—for our children’s bright future, for abundance in every area of life, for the freedom to explore this beautiful world, and above all, for the gift of virtue and good karma.
            
            Together with millions of people across the globe who are already experiencing these blessings, we too now step forward on this journey—to live healthier, love deeper, and prosper greater.
          </p>
          <button id="dm-grt-get-started" className="dm-grt-button" onClick={handleGetStarted}>
            NEED MORE
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gratitude;
