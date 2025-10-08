import React from "react";
import "./CoreTeam.css";
import Footer from '../footer/Footer';



const topMember = {
    name: "Dr.V.Chellapondy DSW",
    role: "Financial & Business Advisor",
    image: "sir.png",

};

const otherMembers = [
    {
        name: "R.K.Selvamani",
        role: "Film Director & Producer",
        image: "https://via.placeholder.com/120",

    },
    {
        name: "Dr. KP Kosygan",
        role: "Senior Orthopaedic Consultant",
        image: "https://via.placeholder.com/120",

    },
    {
        name: "S.Vasu",
        role: "Technocrat & Media Industry",
        image: "https://via.placeholder.com/120",

    },
   
];


export default function CoreTeam() {
  return (
    <section className="core-team-section-1">
      <h2>CORE TEAM</h2>

      {/* Top Member */}
      <div className="top-member-1">
        <div>
          <img src={topMember.image} alt={topMember.name} />
          <h3>{topMember.name}</h3>
          <p>{topMember.role}</p>
        </div>
      </div>

      {/* Other Members */}
      <div className="team-grid-1">
        {otherMembers.map((member, index) => (
          <div key={index} className="team-member-1">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>

      {/* Logo and Tagline */}
      <div className="logo-section-1">
        <img
          src="https://res.cloudinary.com/dq9zq6ubg/image/upload/v1758609670/daily-money_fbjvzk.png"
          alt="Logo"
        />
        <h1>DAILY MONEY</h1>
        <h1>INDEPENDENT FOR ENTIRE LIFE </h1>
      </div>
      <Footer />
    </section>
  );
}