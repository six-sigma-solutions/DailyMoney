import React from "react";
import "./Entrepreneur.css";

export default function Entrepreneur() {
  return (
    <div>
      {/* Hero Section */}
      <div className="ent-section">
        <div className="ent-title">
          <h1>I'm my Own Boss</h1>
          <img src="img-1.jpg" alt="Entrepreneur" />
          <h1>Freedom and Financial Independence</h1>
        </div>
      </div>

      {/* Left Image - Right Text */}
      <div className="ent-left">
        <img src="img-3.jpg" alt="Own Boss" />
        <div className="ent-box-left">
          <h1 style={{ fontSize: "24px", fontWeight: 900 }}>
            "I Want to be my Own Boss".
          </h1>
        </div>
      </div>

      {/* Right Image - Left Text */}
      <div className="ent-right">
        <h1 style={{ fontSize: "28px", fontWeight: 900 }}>
          I'm ready to start, build, and grow something of my own".
        </h1>
        <div className="ent-box-right">
          <img src="img-4.jpg" alt="Grow Business" />
        </div>
      </div>

      {/* Left Image - Right Text */}
      <div className="ent-left">
        <img src="img-5.jpg" alt="Financial Independence" />
        <div className="ent-box-left">
          <h1
            style={{
              fontSize: "28px",
              fontWeight: 900,
              textAlign: "start",
              paddingLeft: "40px",
            }}
          >
            "Entrepreneurship is for freedom and financial independence".
          </h1>
        </div>
      </div>

      {/* Right Image - Left Text */}
      <div className="ent-right">
        <h1 style={{ fontSize: "28px", fontWeight: 900 }}>
          "I'm looking for entrepreneurship to create opportunities, not just
          take them".
        </h1>
        <div className="ent-box-right">
          <img src="img-6.jpg" alt="Opportunities" />
        </div>
      </div>

      {/* Left Image - Right Text */}
      <div className="ent-left">
        <img src="img-7.jpg" alt="Dreams" />
        <div className="ent-box-left">
          <h1 style={{ fontSize: "28px", fontWeight: 900 }}>
            "Yes, I believe in building dreams into reality".
          </h1>
        </div>
      </div>

      {/* Right Image - Left Text */}
      <div className="ent-right">
        <h1 style={{ fontSize: "28px", fontWeight: 900 }}>
          "I want to lead instead of follow".
        </h1>
        <div className="ent-box-right">
          <img src="img-8.jpg" alt="Lead Instead of Follow" />
        </div>
      </div>

      {/* Left Image - Right Text */}
      <div className="ent-left">
        <img src="img-9.jpg" alt="Risk Taking" />
        <div className="ent-box-left">
          <h1 style={{ fontSize: "28px", fontWeight: 900 }}>
            "I am ready to take risk for success".
          </h1>
        </div>
      </div>

      {/* Right Image - Left Text */}
      <div className="ent-right">
        <h1 style={{ fontSize: "28px", fontWeight: 900 }}>
          "I have dreams of financial freedom and impact".
        </h1>
        <div className="ent-box-right">
          <img src="img-10.jpg" alt="Financial Freedom" />
        </div>
      </div>
    </div>
  );
}
