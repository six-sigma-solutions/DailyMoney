import React from "react";
import "./Health.css";

const OurHealth = () => {
  return (
    <div>
      <section className="solutions-cards">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Our Health
        </h1>
      </section>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="color-healthy">Live Healthy, </span>
            <span className="color-wealthy">Live Wealthy</span>
          </h1>
          <p>Your journey to wellness and financial freedom starts here.</p>
          <a href="#learn-more" className="btn-primary">Learn More</a>
        </div>
      </section>

      {/* Health Header Section */}
      <section className="health-section">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          My health is my greatest wealth. 😊
        </h1>
      </section>

      {/* Health Cards Section */}
      <section className="health-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto my-16 px-6">
        <div className="health-card flex flex-col items-center text-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
          <div className="health-card-title font-semibold text-lg">
            Health and fitness are lifelong goals, not temporary pursuits.
          </div>
        </div>

        <div className="health-card flex flex-col items-center text-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
          <div className="health-card-title font-semibold text-lg">
            I am committed to wellness and lifelong well-being.
          </div>
        </div>

        <div className="health-card flex flex-col items-center text-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
          <div className="health-card-title font-semibold text-lg">
            I strive to be fit, strong, and energetic throughout my life.
          </div>
        </div>
      </section>

      {/* Title */}
      <section className="solutions-cards">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Created by like-minded people to promote economic growth and healthy living.
        </h1>
      </section>
      {/* Solutions / Target Audience */}
      <section className="solutions-cards">
        <div className="solution-card">
          <img className="solution-card-img" src="https://i.imgur.com/8QfQF8F.png" alt="Custom Apps" />
          <div className="solution-card-title">Employees</div>
          <div className="solution-card-desc">
            Individuals working in companies for financial stability and growth
          </div>
        </div>

        <div className="solution-card">
          <img className="solution-card-img" src="https://i.imgur.com/8QfQF8F.png" alt="Design Systems" />
          <div className="solution-card-title">Self-Employed</div>
          <div className="solution-card-desc">
            Build recognition with cohesive identity and design systems across touchpoints.
          </div>
        </div>

        <div className="solution-card">
          <img className="solution-card-img" src="https://i.imgur.com/8QfQF8F.png" alt="AI Tools" />
          <div className="solution-card-title">Businessmen</div>
          <div className="solution-card-desc">
            Streamline operations and enhance user experience with intelligent automation.
          </div>
        </div>

        <div className="solution-card">
          <img className="solution-card-img" src="https://i.imgur.com/8QfQF8F.png" alt="Custom Apps" />
          <div className="solution-card-title">Entrepreneurs</div>
          <div className="solution-card-desc">
            Scale your business with reliable mobile and web apps built for performance and growth.
          </div>
        </div>

        <div className="solution-card">
          <img className="solution-card-img" src="https://i.imgur.com/8QfQF8F.png" alt="Design Systems" />
          <div className="solution-card-title">Professional</div>
          <div className="solution-card-desc">
            Build recognition with cohesive identity and design systems across touchpoints.
          </div>
        </div>

        <div className="solution-card">
          <img className="solution-card-img" src="https://i.imgur.com/8QfQF8F.png" alt="AI Tools" />
          <div className="solution-card-title">Housewives</div>
          <div className="solution-card-desc">
            Streamline operations and enhance user experience with intelligent automation.
          </div>
        </div>

        <div className="solution-card">
          <img className="solution-card-img" src="https://i.imgur.com/8QfQF8F.png" alt="AI Tools" />
          <div className="solution-card-title">Students</div>
          <div className="solution-card-desc">
            Streamline operations and enhance user experience with intelligent automation.
          </div>
        </div>
      </section>


      {/* Income Section */}
      {/* JSX */}
      <section className="income-card">
  {/* Title */}
  <h2 className="income-card-title">Passive Extra Income</h2>

  {/* Intro Content */}
  <div className="income-card-content">
    <div className="solution-card-desc">
           
          
    <p>Earn more without extra effort.</p>
    <p>Let your daily work create lasting rewards.</p>
    <p>Daily Money helps you build financial freedom step by step.</p>
    </div>
  </div>

  {/* Values Section */}
  <div className="income-content">
    <h2 className="income-card-title">All activities are guided by values that matter.</h2>
    <div className="income-card-content">
      <div className="solution-card-desc">
      
    <p>Built on honesty, integrity, and humanity.</p>
    <p>Always aligned with proper and legal norms.</p>
    <p>Daily Money empowers you to achieve financial freedom, step by step.</p>
    </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer>
        <section className="footer">
        <h1>"மருந்னை வேன்டாவாம் யாக்கைகு அநந்தியது</h1>
        <h1>அற்றது போற்றி உனின்."</h1>
        <h2 >
          உன்ட உனவு செரிப்ப-தற்கான கால ஓடவெவறி தந்து, உனவு அருந்துகிற
          வரகள்கின் உடலுக்கு வநு முருந்தே தேவைபில்லை.
        </h2>
        <h2>
          When you allow proper time for digestion between meals and eat
          mindfully, the body will not require any other medicine.
        </h2>
        </section>
      </footer>
    </div>
  );
};

export default OurHealth;
