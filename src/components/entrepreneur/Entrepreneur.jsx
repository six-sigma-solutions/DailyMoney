import React from "react";
import img1 from "/support.png";
import img3 from "/entp1.jpg";
import img4 from "/entp2.jpg";
import img5 from "/img-5.jpg";
import img670 from "/img-670.jpg";
import img7 from "/entp5.jpg";
import img8 from "/entp6.jpg";
import img9 from "/img-9.jpg";
import img10 from "/tree.png";

import "./Entrepreneur.css";
import Footer from "../footer/Footer";

export default function Entrepreneur() {
  return (
    <div className="entrepreneur-container">

      {/* TITLE SECTION */}
      <div className="ent-section">
        <h1 className="entre-title">Empowering You to Lead, Build and Grow</h1>
        <div className="ent-title">
          <img src={img1} alt="Entrepreneur" />
        </div>
      </div>

      {/* LEFT 1 */}
      <div className="ent-left">
        <img src={img3} alt="Left" />
        <div className="ent-box-left">

          <div className="ent-line"><span className="dot">●</span><span className="text">I want to be my own boss.</span></div>
          <div className="ent-line"><span className="dot">●</span><span className="text">Freedom is my first goal, purpose is my next.</span></div>
          <div className="ent-line"><span className="dot">●</span><span className="text">Self-leadership is my success story.</span></div>
          <div className="ent-line"><span className="dot">●</span><span className="text">I want to build a life that reflects my values.</span></div>

        </div>
      </div>

      {/* RIGHT 1 */}
      <div className="ent-right">

        <div className="ent-box-right-text">
          <div className="ent-line"><span className="dot">●</span><span className="text">I'm ready to start, build and grow something of my <span className="word">own.</span></span></div>
          <div className="ent-line"><span className="dot">●</span><span className="text">I'm ready to take my first step towards <span className="word">independence.</span></span></div>
          <div className="ent-line"><span className="dot">●</span><span className="text">I'm ready to shape my own success.</span></div>
        </div>

        <div className="ent-box-right">
          <img src={img4} alt="Right" />
        </div>

      </div>

      {/* LEFT 2 */}
      <div className="ent-left">
        <img src={img670} alt="Left" />

        <div className="ent-box-left">
          <div className="ent-line"><span className="dot">●</span><span className="text">Entrepreneurship is for freedom and financial <span className="word">independence.</span></span></div>
          <div className="ent-line"><span className="dot">●</span><span className="text">I choose independence over comfort.</span></div>
          <div className="ent-line"><span className="dot">●</span><span className="text">I'm ready to create my own future.</span></div>
          <div className="ent-line"><span className="dot">●</span><span className="text">I'm ready to launch my own vision.</span></div>
        </div>
      </div>

      {/* RIGHT 2 */}
      <div className="ent-right">

        <div className="ent-box-right-text">
          <div className="ent-line"><span className="dot">●</span><span className="text">I'm looking into entrepreneurship to create <span className="word">independence.</span></span></div>
          <div className="ent-line"><span className="dot">●</span><span className="text">I'm drawn to entrepreneurship to make <span className="word">opportunities.</span></span></div>
          <div className="ent-line"><span className="dot">●</span><span className="text">I choose entrepreneurship to shape opportunities.</span></div>
        </div>

        <div className="ent-box-right">
          <img src={img5} alt="Right" />
        </div>

      </div>

      {/* LEFT 3 */}
      <div className="ent-left">
        <img src={img7} alt="Left" />

        <div className="ent-box-left">
          <div className="ent-line"><span className="dot">●</span><span className="text">Yes, I believe in building dreams into reality.</span></div>
          <div className="ent-line"><span className="dot">●</span><span className="text">I turn dreams into reality through my actions.</span></div>
          <div className="ent-line"><span className="dot">●</span><span className="text">I'm committed to turning vision into reality.</span></div>
          <div className="ent-line"><span className="dot">●</span><span className="text">Dreams are meant to be built, not just dreamed.</span></div>
        </div>
      </div>

      {/* RIGHT 3 */}
      <div className="ent-right">

        <div className="ent-box-right-text">
          <div className="ent-line"><span className="dot">●</span><span className="text">I want to lead instead of follow.</span></div>
          <div className="ent-line"><span className="dot">●</span><span className="text">I choose to lead rather than follow.</span></div>
          <div className="ent-line"><span className="dot">●</span><span className="text">I aim to set the direction, not just follow it.</span></div>
          <div className="ent-line"><span className="dot">●</span><span className="text">Leadership is my choice, not conformity.</span></div>
        </div>

        <div className="ent-box-right">
          <img src={img8} alt="Right" />
        </div>

      </div>

      {/* LEFT 4 */}
      <div className="ent-left">
        <img src={img9} alt="Left" />

        <div className="ent-box-left">
          <div className="ent-line"><span className="dot">●</span><span className="text">I am ready to take a risk for success.</span></div>
          <div className="ent-line"><span className="dot">●</span><span className="text">I'm willing to take chances for success.</span></div>
          <div className="ent-line"><span className="dot">●</span><span className="text">I'm ready to embrace challenges.</span></div>
          <div className="ent-line"><span className="dot">●</span><span className="text">I'm not afraid to take bold steps towards my goal.</span></div>
        </div>
      </div>

      {/* RIGHT 4 */}
      <div className="ent-right">

        <div className="ent-box-right-text">
          <div className="ent-line"><span className="dot">●</span><span className="text">I have dreams of financial independence and impact.</span></div>
          <div className="ent-line"><span className="dot">●</span><span className="text">I dream of creating wealth and making a difference.</span></div>
          <div className="ent-line"><span className="dot">●</span><span className="text">My goal is to build economic freedom and inspire <span className="word">change.</span></span></div>
          <div className="ent-line"><span className="dot">●</span><span className="text">My vision combines financial success with social <span className="word">impact.</span></span></div>
        </div>

        <div className="ent-box-right">
          <img src={img10} alt="Right" />
        </div>

      </div>

      <div className="btn-center">
        <a href="income" className="view-btn">View More</a>
      </div>

      <Footer />
    </div>
  );
}
