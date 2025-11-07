import React from 'react';
import './FullFooter.css';
import { Link } from 'react-router-dom';

const FullFooter = () => {
  return (
    <div className="full-footer-root">
      <div className="full-footer-inner">
        <h2 className="english">"No need of medicine if you allow proper digestion between meals."</h2>

        <h1 className="tamil-quote">“மருந்தென வேண்டாவாம் யாக்கைக்கு அருந்தியது<br />
          <span className="car">"</span>அற்றது போற்றி உணின்.”</h1>

        <h3 className="author">- திருக்குறள்.</h3>

        <p className="desc">முன் உண்டது செரித்ததைத் தெளிவாக அறிந்து, அதன் பின்னரே உண்பானால், அவனுடைய உடலுக்கு ‘மருந்து’ வேண்டாம்.</p>

        <div className="actions">
          <Link to="/health" className="btn-link">Back to Health</Link>
        </div>
      </div>
    </div>
  );
};

export default FullFooter;
