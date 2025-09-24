import React, { useState } from "react";

export default function Home() {
  const [style, setStyle] = useState({});

  // Hover Effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    const brightness = 1 + ((e.clientY - rect.top) / rect.height) * 0.5;
    setStyle({
      transform: `rotateX(${-y}deg) rotateY(${x}deg) scale(1.05)`,
      filter: `brightness(${brightness}) saturate(1.2)`,
      transition: "transform 0.2s ease, filter 0.2s ease",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "rotateX(0deg) rotateY(0deg) scale(1)",
      filter: "brightness(1) saturate(1)",
      transition: "transform 0.3s ease, filter 0.3s ease",
    });
  };

  return (
    <section className="relative bg-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side */}
        <div className="text-center md:text-left">
          {/* Gradient Text */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-snug">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-green-500 to-lime-500">
              DAILY MONEY
            </span>
          </h1>

          <h2 className="mt-4 text-2xl md:text-4xl font-bold text-gray-900 leading-snug">
            INDEPENDENT FOR ENTIRE LIFE
          </h2>

          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
            Achieve financial freedom, improve health, and live happily.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-700 transition">
              Get Started
            </button>
            <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow hover:bg-gray-300 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side: Big Responsive Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://res.cloudinary.com/dq9zq6ubg/image/upload/v1758693691/consumerism-1644808_wwdsmf.jpg"
            alt="Interactive"
            className="w-full max-w-[600px] lg:max-w-[800px] md:h-60 rounded-xl cursor-pointer shadow-2xl"
            style={style}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </section>
  );
}
