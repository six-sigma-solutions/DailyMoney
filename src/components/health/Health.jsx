import React from "react";
import "./Health.css";
import { Link } from "react-router-dom";
import Footer from '../footer/Footer';


const Health = () => {
  return (
    <div className="health-page">
      <h1 className="health-heading">
        Our Health
      </h1>
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="color-healthy">Live Healthy, </span>
            <span className="color-happy">Live Happy, </span>
            <span className="color-wealthy">Live Wealthy</span>
          </h1>

          <p>Your journey to wellness and financial freedom starts here.</p>
          <p>

            Our health is our true wealth.
            It gives us energy, focus, and freedom to live fully.
            Every choice what we eat, how we move, how we rest shapes our future.
            When we care for our health, we care for our dreams, our families, and our world.
            Strong bodies. Clear minds. Happy hearts.
            Together, we build a healthier tomorrow.
            Our health, our strength, our future.</p>

          <a href="#footer" className="btn-primary">
            Learn More
          </a>
        </div>
        <div className="hero-image">
          <div className="image-health-container">
            <img src="health1.jpg" alt="Styled" className="styled-img" />
          </div>
        </div>
      </section>
      {/* Health Section Header */}
      <section className="health-section">
        <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          My health is my greatest wealth. 😊
        </h1>
      </section>

      {/* Container Sections */}

      <div className="container-1 right-image">
        <img src="image1.jpeg" alt="Styled" className="styled-img" />
        <div className="box color1">
          <h1>“Health and fitness are not temporary they are my lifetime goal.”</h1>
          <h1>“Health is not a destination — it’s a lifelong evolution.”</h1>
          <h1>“Fitness is the art I practice for life.”</h1>
        </div>
      </div>

      <div className="container left-image">
        <img src="image11.jpeg" alt="Styled" className="styled-img " />
        <div className="box-1 color2">
          <h1>“I am committed to wellness for life.”</h1>
          <h1>“Wellness is not a season — it’s my soul’s commitment.”</h1>
          <h1>“Wellness isn’t a goal — it’s my lifestyle.”</h1>
        </div>
      </div>

            <div className="container-1 right-image full-screen">
              <img src="image3.jpeg" alt="Styled" className="styled-img" />
              <div className="box color3">
                <h1>“I need lifelong health and fitness.”</h1>
                <h1>“I’m powered by purpose — strong for life.”</h1>
                <h1>“Wellness is not a goal — it’s my lifetime mission.”</h1>
              </div>
            </div>

    

      <div className="container left-image">
        <img src="image4.jpeg" alt="Styled" className="styled-img" />
        <div className="box-1 color4">
          <h1>“I want to be fit, strong, and energetic for my entire life.”</h1>
          <h1>“Forever active, forever alive, forever me.”</h1>
          <h1>“I live strong. I stay fit. I grow limitless.”</h1>
        </div>
      </div>


      {/* Footer */}
      <footer id="footer" className="footer">
        <h2 className="english">
          "No need of medicine if you allow proper digestion between meals."
        </h2>
        <h1>“மருந்தென வேண்டாவாம் யாக்கைக்கு அருந்தியது<br></br>
          <span className="car">"</span>அற்றது போற்றி உணின்.”</h1>
        <h3 className="author">- திருக்குறள்.</h3>
        <h2>
          முன் உண்டது செரித்ததைத் தெளிவாக அறிந்து, அதன் பின்னரே உண்பானால்,
          அவனுடைய உடலுக்கு ‘மருந்து’ வேண்டாம்.
        </h2>
        <Link className="view-more-link" to="/wealth">
          <button className="view-more" type="button">View More</button>
        </Link>
      </footer>
      <Footer />
    </div>
  );
};

export default Health;
