import React from 'react';
import "./Solution.css"; // Import the new styling file
import { useNavigate } from 'react-router-dom'; // Step 1: Import the hook
import Footer from '../footer/Footer';


const Solution = () => {
  const navigate = useNavigate(); // Step 2: Initialize the navigate function

  // Step 3: Create a handler function to call navigate
  const handleCtaClick = () => {
    navigate('/gratitude');
  };

  return (
    <>
      <div className="dm-sol-wrapper">
      <div className="dm-sol-img-card">
          <img
            className="dm-sol-card-media"
            src="/WM.png"
            alt="Solution"
          />
         
        </div>

      <div className="dm-sol-img-card">
          <img
            className="dm-sol-card-media"
            src="/set2.png"
            alt="Solution"
          />
         
        </div>

          <div className="dm-sol-img-card">
          <img
            className="dm-sol-card-media"
            src="/bill.png"
            alt="Solution"
          />
         
        </div>

        <div className="dm-sol-img-card">
          <img
            className="dm-sol-card-media"
            src="/set4.png"
            alt="Solution"
          />
         
        </div>

        {/* The button's onClick now triggers the navigation */}
        <button className="dm-sol-cta-button" onClick={handleCtaClick}>
          Click to Transform Your Life
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Solution;
