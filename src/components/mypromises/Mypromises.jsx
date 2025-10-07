import React from "react";
import "./Mypromises.css"; // Import the new styling file


const Mypromises = () => {
// Action from the original HTML: navigate to the external link
  const handleGetStarted = (e) => {
    e.preventDefault();
    window.location.href = 'https://cpdian.goherbalife.com/Catalog/Home/Index/en-IN/';
  };

  return (
    <>
      <div className="mypromises-wrapper">
        <div className="mypromises-img-card">
          <img
            className="mypromises-card-media"
            src="/mypromises.jpeg"
            alt="My Promises"
          />
        </div>

        {/* The button's onClick now triggers the navigation */}
        <button className="mypromises-btn" onClick={handleGetStarted}>
          GET STARTED
        </button>
      </div>
    </>
  );
};

export default Mypromises;
