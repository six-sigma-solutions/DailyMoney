import React from 'react';

const OurHealth = () => {
  return (
    <div className="font-poppins text-gray-800 bg-[#f4fdfc]">
      {/* Navbar */}
      <header className="sticky top-0 z-10 bg-teal-600">
        <nav className="flex justify-between items-center py-4 px-10">
          <h2 className="text-white text-2xl font-bold">Our Health</h2>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-[130vh] bg-cover bg-center flex justify-center items-center text-white text-center px-4"
        style={{ backgroundImage: "url('img-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-teal-900/60"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Live Healthy, Live Wealthy</h1>
          <p className="text-lg md:text-xl mb-6">
            Your journey to wellness and financial freedom starts here.
          </p>
          <a
            href="#learn-more"
            className="inline-block bg-yellow-300 text-teal-900 font-semibold py-3 px-6 rounded-full hover:bg-yellow-400 transform hover:scale-105 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="learn-more" className="max-w-4xl mx-auto my-16 p-8 bg-white rounded-2xl shadow-md text-center hover:shadow-xl transition">
        <div className="flex flex-col items-center">
          <img
            src="img-3.png"
            alt="Healthy Living"
            className="h-[350px] w-[350px] rounded-lg mb-6"
          />
          <h3 className="text-xl font-semibold mb-4">
            Created by like-minded people for the economic growth and healthy living to
          </h3>
          <div className="space-y-1 text-gray-700">
            <p>• Employees</p>
            <p>• Self-Employed</p>
            <p>• Businessmen</p>
            <p>• Entrepreneurs</p>
            <p>• Professionals</p>
            <p>• Housewife</p>
            <p>• Students</p>
          </div>
        </div>
      </section>

      {/* Income Section */}
      <section className="max-w-4xl mx-auto my-16 p-8 bg-white rounded-2xl shadow-md text-center hover:shadow-xl transition">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Passive extra income with your active income...
        </h1>
        <h3 className="text-lg md:text-xl mb-2">Earn more without extra effort.</h3>
        <h3 className="text-lg md:text-xl mb-2">Let your daily work create lasting rewards.</h3>
        <h3 className="text-lg md:text-xl">Daily Money helps you build financial freedom step by step.</h3>
      </section>

      {/* Values Section */}
      <section className="max-w-4xl mx-auto my-16 p-8 bg-white rounded-2xl shadow-md text-center hover:shadow-xl transition">
        <img
          src="img-4.jpg"
          alt="Core Values"
          className="h-[350px] w-[350px] mx-auto rounded-lg mb-6"
        />
        <h2 className="text-2xl font-bold mb-2">All activities happen with values that matter.</h2>
        <h3 className="text-lg mb-1">Built on honesty, integrity, and humanity.</h3>
        <h3 className="text-lg">Always aligned with proper and legal norms.</h3>
      </section>

      {/* Footer */}
      <footer className="bg-gray-700 text-white py-10 px-4 rounded-t-xl text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <h1 className="text-green-300 text-xl">"மருந்னை வேன்டாவாம் யாக்கைகு அநந்தியது</h1>
          <h1 className="text-green-300 text-xl">அற்றது போற்றி உனின்."</h1>
          <h2>
            உன்ட உனவு செரிப்ப-தற்கான கால ஓடவெவறி தந்து, உனவு அருந்துகிற வரகள்கின் உடலுக்கு வநு முருந்தே தேவைபில்லை.
          </h2>
          <h2>
            When you allow proper time for digestion between meals and eat mindfully, the body will not require any other medicine.
          </h2>
        </div>
      </footer>
    </div>
  );
};

export default OurHealth;
