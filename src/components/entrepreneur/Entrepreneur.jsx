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
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

export default function Entrepreneur() {
  return (
    <div className="entrepreneur-container">
      <div className="ent-section">
        <h1 className="entre-title">Empowering You to Lead, Build and Grow</h1>
        <div className="ent-title">
          <img src={img1} alt="Entrepreneur" />
        </div>
      </div>

      {/* LEFT SECTION */}
      <div className="ent-left">
        <img src={img3} alt="Left" />
        <div className="ent-box-left">
          <h1>
            <span className="dot">●</span> I want to be my own boss.<br />
            <span className="dot">●</span> Freedom is my first goal, purpose is my next.<br />
            <span className="dot">●</span> Self-leadership is my success story.<br />
            <span className="dot">●</span> I want to build a life that reflects my values.
          </h1>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="ent-right">
        <h1>
          <span className="dot">●</span> I'm ready to start, build and grow something of my own.<br />
          <span className="dot">●</span> I'm ready to take my first step towards independence.<br />
          <span className="dot">●</span> I'm ready to shape my own success.<br />
        </h1>
        <div className="ent-box-right">
          <img src={img4} alt="Right" />
        </div>
      </div>

      {/* LEFT */}
      <div className="ent-left">
        <img src={img670} alt="Left" />
        <div className="ent-box-left">
          <h1>
            <span className="dot">●</span> Entrepreneurship is for freedom and financial independence.<br />
            <span className="dot">●</span> I choose independence over comfort.<br />
            <span className="dot">●</span> I'm ready to create my own future.<br />
            <span className="dot">●</span> I'm ready to launch my own vision.<br />
          </h1>
        </div>
      </div>

      {/* RIGHT */}
      <div className="ent-right">
        <h1>
          <span className="dot">●</span> I'm looking into entrepreneurship to create opportunities.<br />
          <span className="dot">●</span> I'm drawn to entrepreneurship to make opportunities.<br />
          <span className="dot">●</span> I choose entrepreneurship to shape opportunities.<br />
        </h1>
        <div className="ent-box-right">
          <img src={img5} alt="Right" />
        </div>
      </div>

      {/* LEFT */}
      <div className="ent-left">
        <img src={img7} alt="Left" />
        <div className="ent-box-left">
          <h1>
            <span className="dot">●</span> Yes, I believe in building dreams into reality.<br />
            <span className="dot">●</span> Yes, I turn dreams into reality through my actions.<br />
            <span className="dot">●</span> I'm committed to turning vision into reality.<br />
            <span className="dot">●</span> Dreams are meant to be built, not just dreamed.<br />
          </h1>
        </div>
      </div>

      {/* RIGHT */}
      <div className="ent-right">
        <h1>
          <span className="dot">●</span> I want to lead instead of follow.<br />
          <span className="dot">●</span> I choose to lead rather than follow.<br />
          <span className="dot">●</span> I aim to set the direction, not just follow it.<br />
          <span className="dot">●</span> Leadership is my choice, not conformity.
        </h1>
        <div className="ent-box-right">
          <img src={img8} alt="Right" />
        </div>
      </div>

      {/* LEFT */}
      <div className="ent-left">
        <img src={img9} alt="Left" />
        <div className="ent-box-left">
          <h1>
            <span className="dot">●</span> I am ready to take a risk for success.<br />
            <span className="dot">●</span> I'm willing to take chances for success.<br />
            <span className="dot">●</span> I'm ready to embrace challenges.<br />
            <span className="dot">●</span> I'm not afraid to take bold steps towards my goal.
          </h1>
        </div>
      </div>

      {/* RIGHT */}
      <div className="ent-right">
        <h1>
          <span className="dot">●</span> I have dreams of financial independence and impact.<br />
          <span className="dot">●</span> I dream of creating wealth and making a difference.<br />
          <span className="dot">●</span> My goal is to build economic freedom and inspire change.<br />
          <span className="dot">●</span> My vision combines financial success with social impact.
        </h1>
        <div className="ent-box-right">
          <img src={img10} alt="Right" />
        </div>
      </div>

<section className="blog">
  <div className="view-more-link-my-life">
    <Link className="view-more-link" to="/income">
      <button className="view-more" type="button">View More</button>
    </Link>
  </div>
</section>
<Footer />
  </div>
  );
};
