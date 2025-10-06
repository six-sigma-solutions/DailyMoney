import React from "react";
// !! IMPORTANT: Make sure these paths are correct for your project !!
import img1 from "/Enter1.jpeg";
import img3 from "/img-3.jpg";
import img4 from "/img-4.jpg";
import img5 from "/img-5.jpg";
import img6 from "/img-6.jpg";
import img7 from "/img-7.jpg";
import img8 from "/img-8.jpg";
import img9 from "/img-9.jpg";
import img10 from "/img-10.jpg";

// Import your regular CSS file
import "./Entrepreneur.css";

const Entrepreneur = () => {
  return (
    // This parent div with a unique class name isolates all the styles within it
    <div className="entrepreneur-container">
      <div className="ent-section">
        <span>Entrepreneur </span>
        <div className="ent-title">
          <img src={img1} alt="Entrepreneur" />
        </div>
      </div>

      <div className="ent-left">
        <img src={img3} alt="Left" />
        <div className="ent-box-left">
          <h1>
            "I want to be my own boss".<br />
            "Freedom is my first goal, purpose is my next".<br />
            "Self-leadership is my success story".<br />
            "I want to build a life that reflects my values".
          </h1>
        </div>
      </div>

      <div className="ent-right">
        <h1>
          "I'm ready to start, build, and grow something of my own".<br />
          "I’m ready to take my first step toward independence".<br />
          "I’m ready to shape my own success".<br />
        </h1>
        <div className="ent-box-right">
          <img src={img4} alt="Right" />
        </div>
      </div>

      <div className="ent-left">
        <img src={img5} alt="Left" />
        <div className="ent-box-left">
          <h1>
            "Entrepreneurship is for freedom and financial independence".<br />
            "I choose independence over comfort".<br />
            "I’m ready to create my own future".<br />
            "I’m ready to launch my own vision".<br />
          </h1>
        </div>
      </div>

      <div className="ent-right">
        <h1>
          "I'm looking for entrepreneurship to create opportunities, not just take them".<br />
          "I’m drawn to entrepreneurship to make opportunities, not just grab them".<br />
          "I choose entrepreneurship to shape opportunities, not just follow them".<br />
        </h1>
        <div className="ent-box-right">
          <img src={img6} alt="Right" />
        </div>
      </div>

      <div className="ent-left">
        <img src={img7} alt="Left" />
        <div className="ent-box-left">
          <h1>
            "Yes, I believe in building dreams into reality".<br />
            "I believe in making dreams come true through action".<br />
            "I’m committed to turning vision into reality".<br />
            "I believe that dreams are meant to be built, not just imagined".<br />
          </h1>
        </div>
      </div>

      <div className="ent-right">
        <h1>
          "I want to lead instead of follow".<br />
          "I choose to lead rather than follow".<br />
          "I aim to set the direction, not just follow it".<br />
          "Leadership is my choice, not conformity".
        </h1>
        <div className="ent-box-right">
          <img src={img8} alt="Right" />
        </div>
      </div>

      <div className="ent-left">
        <img src={img9} alt="Left" />
        <div className="ent-box-left">
          <h1>
            "I am ready to take risk for success".<br />
            "I’m willing to take chances for success".<br />
            "I’m ready to embrace challenges".<br />
            "I’m not afraid to take bold steps toward my goals".
          </h1>
        </div>
      </div>

      <div className="ent-right">
        <h1>
          "I have dreams of financial freedom and impact".<br />
          "I dream of creating wealth and making a difference".<br />
          "My goal is to build financial freedom and inspire change".<br />
          "My vision combines financial success with social impact".
        </h1>
        <div className="ent-box-right">
          <img src={img10} alt="Right" />
        </div>
      </div>
    </div>
  );
};

export default Entrepreneur;