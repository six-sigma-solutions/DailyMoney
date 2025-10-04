import React from "react";
import "./Gratitude.css"; // Keep your CSS here

const Gratitude = () => {
  const handleGetStarted = () => {
    window.location.href =
      "https://cpdian.goherbalife.com/Catalog/Home/Index/en-in";
  };

  return (
    <div className="grat-app">
      {/* Navbar */}
      <header className="grat-header fixed top-0 left-0 w-full flex justify-between items-center p-5 z-10">
        <div className="grat-logo text-white font-bold text-lg tracking-wider">
          Gratitude
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="grat-hero h-screen flex items-center justify-center text-center px-5"
      >
        <div className="grat-hero-content max-w-4xl text-white">
          <h1 className="grat-hero-title text-5xl font-extrabold mb-6">
            THANKS FOR UNIVERSE
          </h1>
          <p className="grat-hero-desc text-lg mb-8 leading-relaxed text-gray-300">
            Today, with a grateful heart, I honor my parents, my ancestors, and the Universe that guides us all.
            <br />
            From this moment forward, my family and I choose to make health our highest priority, for health is the foundation of a joyful, abundant, and prosperous life.
            <br />
            I thank the Universe for blessing us with strength, vitality, wealth, happiness, and endless opportunities—for our children’s bright future, for abundance in every area of life, for the freedom to explore this beautiful world, and above all, for the gift of virtue and good karma.
            <br />
            Together with millions of people across the globe who are already experiencing these blessings, we too now step forward on this journey—to live healthier, love deeper, and prosper greater.
          </p>
          <button
            onClick={handleGetStarted}
            className="grat-cta bg-red-800 hover:bg-purple-900 text-white py-3 px-7 rounded transition-colors duration-300"
          >
            GET STARTED
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gratitude;
