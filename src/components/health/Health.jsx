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
            <span className="color-happy">Live Happy, </span>
            <span className="color-wealthy">Live Wealthy</span>
          </h1>
          <p>Your journey to wellness and financial freedom starts here.</p>
          <a href="#learn-more" className="btn-primary">
            Learn More
          </a>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <img src="health1.jpg" alt="Styled" className="styled-img" />
          </div>
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

      {/* Solutions / Target Audience */}
      <section className="solutions-cards">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Created by like-minded people to promote economic growth and healthy living.
        </h1>
      </section>

      <section className="solutions-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="solution-card">
          <video
            className="solution-card-video"
            src="Employees.mp4"
            autoPlay
            muted
            loop
          />
          <div className="solution-card-title">
            <h1>Employees</h1>
          </div>
          <div className="solution-card-desc">
            <div className="student-list">
              <ul>
                <li>Grow Earnings with rewards on nutrition-based purchases. </li>
                <li>Balance Health & Wealth in one simple app.</li>
                <li>Track Finances easily with daily insights.</li>
                <li>Empower Your Lifestyle for work and wellness.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="solution-card">
          <video
            className="solution-card-video"
            src="Self-Employed.mp4"
            autoPlay
            muted
            loop
          />
          <div className="solution-card-title">
            <h1>Self-Employed</h1>
          </div>
          <div className="solution-card-desc">
            <div className="student-list">
              <ul>
                <li>Boost Income by turning daily efforts into smart earnings.</li>
                <li>Stay Healthy & Wealthy with nutrition-based rewards.</li>
                <li>Track Growth with simple financial and wellness insights.</li>
                <li>Work Independently, Live Confidently with Daily Money.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="solution-card">
          <video
            className="solution-card-video"
            src="Businessman.mp4"
            autoPlay
            muted
            loop
          />
          <div className="solution-card-title">
            <h1>Businessmen
            </h1>
          </div>
          <div className="solution-card-desc">
            <div className="student-list">
              <ul>
                <li>I am fully committed, motivated, and dedicated in my efforts to grow and succeed.</li>
                <li>I am driven, determined, and enthusiastic about building my income, skills, and values.</li>
                <li>I am passionate about achieving the financial success I deserve and staying debt-free.</li>
                <li>I have no liabilities such as loans or credit card dues, ensuring financial freedom.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="solution-card">
          <video
            className="solution-card-video"
            src="Enterpreneurs.mp4"
            autoPlay
            muted
            loop
          />
          <div className="solution-card-title">
            <h1>Entrepreneurs
            </h1>
          </div>
          <div className="solution-card-desc">
            <div className="student-list">
              <ul>
                <li>I want to be my own boss and build something of my own for freedom and financial independence.</li>
                <li>I aim to create opportunities through entrepreneurship, turning dreams into reality.</li>
                <li>I am ready to lead, take risks, and grow for success and impact.</li>
                <li>I am committed to achieving financial freedom and becoming an entrepreneur.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="solution-card">
          <video
            className="solution-card-video"
            src="professional.mp4"
            autoPlay
            muted
            loop
          />
          <div className="solution-card-title">
            <h1>Professional
            </h1>
          </div>
          <div className="solution-card-desc">
            <div className="student-list">
              <ul>
                <li>Maximize Productivity with smart money and health management.</li>
                <li>Secure Finances through effortless tracking and rewards.</li>
                <li>Balance Work & Wellness in one integrated platform.</li>
                <li>Achieve Growth with tools tailored for modern professionals.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="solution-card">
          <video
            className="solution-card-video"
            src="housewife.mp4"
            autoPlay
            muted
            loop
          />
          <div className="solution-card-title top">
            <h1>Housewives</h1>
          </div>
          <div className="solution-card-desc">
            <div className="student-list">
              <ul>
                <li>Save Smartly by tracking daily expenses with ease.</li>
                <li>Earn Rewards on nutrition and household purchases.</li>
                <li>Care for Family & Finances in one simple app.</li>
                <li>Build Security with healthy living and smart money habits.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="solution-card">
          <video
            className="solution-card-video"
            src="students.mp4"
            autoPlay
            muted
            loop
          />
          <div className="solution-card-title">
            <h1>Students</h1>
          </div>
          <div className="solution-card-desc">
            <div className="student-list">
              <ul>
                <li>Studying with their own income. </li>
                <li>Study with self-earned money. </li>
                <li>Study using personal earnings. </li>
                <li>Study funded by their own income. </li>
                <li>Study with independently earned income. </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Income Section */}
      <section className="solutions-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Image Card */}
        <div className="income-image">
          <img src="Health.jpg" alt="Styled" className="styled-img" />
        </div>

        {/* Income Card */}
        <div className="income-card">

          {/* First Subsection */}
          <h2 className="income-card-title">Passive Extra Income</h2>
          <div className="income-card-content flex flex-col items-center text-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="solution-card-desc health-card-title font-semibold text-lg">
              <h3 className="subpoint">Earn more without extra effort.</h3>
              <h3 className="subpoint">Let your daily work create lasting rewards.</h3>
              <h3 className="subpoint">Daily Money helps you build financial freedom step by step.</h3>
            </div>
          </div>

          {/* Second Subsection */}
          <div className="income-content">
            <h2 className="income-card-title">
              All activities are guided by values that matter.
            </h2>
            <div className="income-card-content flex flex-col items-center text-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
              <div className="solution-card-desc health-card-title font-semibold text-lg">
                <h3 className="subpoint">Built on honesty, integrity, and humanity.</h3>
                <h3 className="subpoint">Always aligned with proper and legal norms.</h3>
                <h3 className="subpoint">Daily Money empowers you to achieve financial freedom, step by step.</h3>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="footer">
        <h1>“மருந்தென வேண்டாவாம் யாக்கைக்கு அருந்தியது</h1>
        <h1>அற்றது போற்றி உணின்.”</h1>
        <h2>
          முன் உண்டது செரித்ததைத் தெளிவாக அறிந்து, அதன் பின்னரே உண்பானானால்,
          அவனுடைய உடலுக்கு ‘மருந்து’ என்னும் எதுவுமே வேண்டாம்.
        </h2>
        <h2>
          "When you allow proper time for digestion between meals and eat mindfully,
          your body will not require any other medicine."
        </h2>
      </footer>
    </div>
  );
};

export default OurHealth;
