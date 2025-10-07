import React from 'react';
import "./Solution.css"; // Import the new styling file
import { useNavigate } from 'react-router-dom'; // Step 1: Import the hook


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
            src="/solution2.jpeg"
            alt="Solution"
          />
         
        </div>

        {/* The button's onClick now triggers the navigation */}
        <button className="dm-sol-cta-button" onClick={handleCtaClick}>
          Click to Transform Your Life
        </button>
      </div>
    </>
  );
};

export default Solution;
