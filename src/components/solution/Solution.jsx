import React from 'react';
import { useNavigate } from 'react-router-dom'; // Step 1: Import the hook

const Solution = () => {
  const navigate = useNavigate(); // Step 2: Initialize the navigate function

  // Step 3: Create a handler function to call navigate
  const handleCtaClick = () => {
    navigate('/gratitude');
  };

  return (
    <>
      <style>{`
        /* --- All your CSS from before goes here --- */
        /* Scoped Reset & Body Styles */
        .dm-sol-wrapper * { margin: 0; padding: 0; box-sizing: border-box; }
        .dm-sol-wrapper { min-height: 100vh; font-family: 'Montserrat', sans-serif; background: #d6dadd; color: #eee; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 1rem; }
        /* Card Styling */
        .dm-sol-img-card { width: 70vw; max-width: 900px; aspect-ratio: 16 / 9; background: #222; border-radius: 16px; box-shadow: 0 2px 20px rgba(0, 0, 0, 0.21); overflow: hidden; position: relative; display: flex; justify-content: center; align-items: center; transition: box-shadow 0.35s ease; margin-bottom: 2rem; }
        /* Card Hover Effect */
        .dm-sol-img-card:hover { box-shadow: 0 0 20px #c92a2a, 0 0 40px #c92a2a, 0 0 60px #c92a2a; }
        .dm-sol-card-media { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.55; }
        .dm-sol-card-info { position: relative; z-index: 2; width: 100%; height: 100%; padding: 40px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; background: rgba(0, 0, 0, 0.4); }
        .dm-sol-h1 { font-size: 2.5rem; color: #fff; font-weight: 700; margin-bottom: 15px; }
        .dm-sol-lead { font-size: 1.2rem; color: #ccc; margin-bottom: 30px; max-width: 80%; }
        /* Button Styling */
        .dm-sol-cta-button { background: #fffb00; color: #000; text-decoration: none; font-weight: 700; border: none; padding: 14px 28px; font-size: 19px; border-radius: 8px; cursor: pointer; box-shadow: 0 6px 12px rgba(0,0,0,0.2); transition: transform 120ms ease, box-shadow 120ms ease; }
        .dm-sol-cta-button:hover, .dm-sol-cta-button:focus { transform: translateY(-2px); box-shadow: 0 10px 18px rgba(0,0,0,0.28); outline: none; }
        /* Responsive Media Queries */
        @media (max-width: 600px) { .dm-sol-img-card { width: 90vw; } .dm-sol-h1 { font-size: 1.8rem; } .dm-sol-lead { font-size: 1rem; } .dm-sol-cta-button { padding: 10px 20px; font-size: 16px; } }
      `}</style>
      <div className="dm-sol-wrapper">
        <div className="dm-sol-img-card">
          <img
            className="dm-sol-card-media"
            src="/solution.jpg"
            alt="Solution"
          />
          <div className="dm-sol-card-info">
            <h1 className="dm-sol-h1">The Solution: Daily Money</h1>
            <p className="dm-sol-lead">
              Unlocking financial, physical, and spiritual independence through a proven daily system.
            </p>
          </div>
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
