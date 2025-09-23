import React from "react";


export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20 px-5 md:px-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to DailyMoney
          </h1>
          <p className="text-lg mb-6">
            Your guide for Health, Wealth, Family & Life solutions. Explore and grow with us!
          </p>
          <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="https://via.placeholder.com/500x350"
            alt="Hero"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-5 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Health</h2>
          <p>Tips and guides to improve your daily health and wellbeing.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Wealth</h2>
          <p>Financial tips and strategies for growth and security.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Family</h2>
          <p>Guidance and ideas to strengthen family bonds and happiness.</p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-green-600 text-white text-center py-16 px-5 md:px-20 rounded-lg mx-5 md:mx-20 my-10">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Life?</h2>
        <p className="mb-6">Join us today and explore amazing solutions.</p>
        <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition">
          Join Now
        </button>
      </section>
    </div>
  );
};

