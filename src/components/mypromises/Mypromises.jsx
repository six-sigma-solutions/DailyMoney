import React from "react";
import "./Mypromises.css"; // Import the new styling file
import Footer from '../footer/Footer';


const Mypromises = () => {
// Action from the original HTML: navigate to the external link
  const handleGetMove = (e) => {
    e.preventDefault();
    window.location.href = '/bio';
  };

  return (
    <>
      <div className="mypromises-wrapper">
        <div className="mypromises-img-card">
          <img
            className="mypromises-card-media"
            src="/rrr.jpg"
            alt="My Promises"
          />
        </div>

        {/* The button's onClick now triggers the navigation */}
        <button className="mypromises-btn" onClick={handleGetMove}>
          GET STARTED
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Mypromises;
