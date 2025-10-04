import React from "react";
import "./Entrepreneur.css"; 

import img1 from "../../assets/Entrepreneur/img-1.jpg"
import img2 from "../../assets/Entrepreneur/img-2.jpg"
import img3 from "../../assets/Entrepreneur/img-3.jpg"
import img4 from "../../assets/Entrepreneur/img-4.jpg"
import img5 from "../../assets/Entrepreneur/img-5.jpg"
import img6 from "../../assets/Entrepreneur/img-6.jpg"
import img7 from "../../assets/Entrepreneur/img-7.jpg"
import img8 from "../../assets/Entrepreneur/img-8.jpg"
import img9 from "../../assets/Entrepreneur/img-9.jpg"
import img10 from "../../assets/Entrepreneur/img-10.jpg"

export default function Entrepreneur() {
  return (
    <div>
      {/* Title Section */}
      <div className="title-sec">
        <div className="title">
          <h1>I'm my Own Boss</h1>
          <img src={img1} alt="Entrepreneur" />
          <h1>Freedom and Financial Independence</h1>
        </div>
      </div>

      {/* Section 1 */}
      <div className="container">
        <img src={img3} alt="Be my own boss" />
        <div className="box">
          <h1 className="text-lg">"I Want to be my Own Boss".</h1>
        </div>
      </div>

      {/* Section 2 */}
      <div className="container-1">
        <h1 className="text-xl">
          I'm ready to start, build, and grow something of my own.
        </h1>
        <div className="box-1">
          <img src={img2} alt="Start and grow" />
        </div>
      </div>

      {/* Section 3 */}
      <div className="container">
        <img src={img5} alt="Entrepreneurship freedom" />
        <div className="box">
          <h1 className="text-xl">
            "Entrepreneurship is for freedom and financial independence".
          </h1>
        </div>
      </div>

      {/* Section 4 */}
      <div className="container-1">
        <h1 className="text-xl">
          "I'm looking for entrepreneurship to create opportunities, not just
          take them".
        </h1>
        <div className="box-1">
          <img src={img6} alt="Create opportunities" />
        </div>
      </div>

      {/* Section 5 */}
      <div className="container">
        <img src={img7} alt="Dreams into reality" />
        <div className="box">
          <h1 className="text-xl">
            "Yes, I believe in building dreams into reality".
          </h1>
        </div>
      </div>

      {/* Section 6 */}
      <div className="container-1">
        <h1 className="text-xl">"I want to lead instead of follow".</h1>
        <div className="box-1">
          <img src={img8} alt="Leadership" />
        </div>
      </div>

      {/* Section 7 */}
      <div className="container">
        <img src={img9} alt="Take risks" />
        <div className="box">
          <h1 className="text-xl">"I am ready to take risk for success".</h1>
        </div>
      </div>

      {/* Section 8 */}
      <div className="container-1">
        <h1 className="text-xl">
          "I have dreams of financial freedom and impact".
        </h1>
        <div className="box-1">
          <img src={img10} alt="Financial freedom" />
        </div>
      </div>
    </div>
  );
}
