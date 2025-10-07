import React, { useEffect, useRef } from 'react';
import './Elder.css';

export default function Elder() {
  const animatedRef = useRef(null);

  useEffect(() => {
    // 1. Image Click Logic (Opens image in new tab)
    const imgs = animatedRef.current?.querySelectorAll('.dm-eldr-poster img') || [];
    const onClick = (e) => {
      // Prevents the animation from interfering with the navigation
      e.preventDefault(); 
      window.open(e.currentTarget.src, '_blank');
    };
    imgs.forEach((img) => img.addEventListener('click', onClick));

    // 2. Scroll Animation Logic (IntersectionObserver)
    const animatedText = animatedRef.current?.querySelectorAll('.dm-eldr-animate') || [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Add 'visible' class when the element enters the viewport
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 } // Triggers when 20% of the element is visible
    );

    animatedText.forEach((el) => observer.observe(el));

    // Cleanup function runs when the component unmounts
    return () => {
      imgs.forEach((img) => img.removeEventListener('click', onClick));
      animatedText.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    // Top-level container with unique wrapper class and ref for animation
    <div className="dm-eldr-wrapper" ref={animatedRef}>
      <header className="dm-eldr-header">
        <h1>Daily Money – Empower Elders</h1>
      </header>

      <main className="dm-eldr-container">

        {/* Row 1 */}
        <section className="dm-eldr-row">
          <div className="dm-eldr-poster">
            <img src="/ef1.jpg" alt="Poster 1" />
          </div>
          <div className="dm-eldr-content">
            <p className="dm-eldr-animate dm-eldr-tagline">
              <strong>
                <span className="dm-eldr-tick">✔</span>
                <span className="dm-eldr-highlight">DailyMoney</span> represents a <span className="dm-eldr-highlight">rebirth</span> — 
                a movement where elders <span className="dm-eldr-highlight">earn daily</span>, 
                <span className="dm-eldr-highlight">share wisdom</span>, and feel <span className="dm-eldr-highlight">valuable</span> again. 
                Live with <span className="dm-eldr-highlight">financial confidence</span>. 
                Feel <span className="dm-eldr-highlight">valued</span> and <span className="dm-eldr-highlight">included</span>. 
                Share your <span className="dm-eldr-highlight">wisdom</span>, not your worries. 
                Enjoy <span className="dm-eldr-highlight">peace</span>, <span className="dm-eldr-highlight">purpose</span>, 
                and <span className="dm-eldr-highlight">pride</span> in your <span className="dm-eldr-highlight">DailyMoney</span> life.
              </strong>
            </p>
          </div>
        </section>

        {/* Row 2 */}
        <section className="dm-eldr-row reverse">
          <div className="dm-eldr-poster">
            <img src="/e1.jpg" alt="Poster 2" />
          </div>
          <div className="dm-eldr-content">
            <p className="dm-eldr-animate dm-eldr-tagline">
              <strong>
                <span className="dm-eldr-tick">✔</span>
                <span className="dm-eldr-highlight">Empowerment</span> begins with a <span className="dm-eldr-highlight">choice</span>. 
                Choose to live with <span className="dm-eldr-highlight">abundance</span>, not dependence. 
                Your <span className="dm-eldr-highlight">experience</span> is your greatest asset; 
                we help you turn it into <span className="dm-eldr-highlight">income</span>. 
                It's time to invest in your <span className="dm-eldr-highlight">health</span>, 
                reclaim your <span className="dm-eldr-highlight">wealth</span>, and cherish your <span className="dm-eldr-highlight">family</span>. 
                That's the <span className="dm-eldr-highlight">DailyMoney</span> way.
              </strong>
            </p>
          </div>
        </section>

        {/* Row 3 */}
        <section className="dm-eldr-row">
          <div className="dm-eldr-poster">
            <img src="/e3.jpg" alt="Poster 3" />
          </div>
          <div className="dm-eldr-content">
            <p className="dm-eldr-animate dm-eldr-tagline">
              <strong>
                <span className="dm-eldr-tick">✔</span>
                Retirement means living life on your own <span className="dm-eldr-highlight">schedule</span> and enjoying inner <span className="dm-eldr-highlight">peace</span>. 
                It’s not the end of <span className="dm-eldr-highlight">possibilities</span> — 
                it’s the start of living life on your own <span className="dm-eldr-highlight">terms</span>. 
                That’s the <span className="dm-eldr-highlight">DailyMoney</span> way — 
                freedom with <span className="dm-eldr-highlight">purpose</span> and dignity in every stage of life.
              </strong>
            </p>
          </div>
        </section>

        {/* Row 4 */}
        <section className="dm-eldr-row reverse">
          <div className="dm-eldr-poster">
            <img src="/e4.jpg" alt="Poster 4" />
          </div>
          <div className="dm-eldr-content">
            <p className="dm-eldr-animate dm-eldr-tagline">
              <strong>
                <span className="dm-eldr-tick">✔</span>
                When <span className="dm-eldr-highlight">elders</span> thrive, <span className="dm-eldr-highlight">families</span> become stronger. 
                When their <span className="dm-eldr-highlight">voices</span> are valued, <span className="dm-eldr-highlight">communities</span> become wiser. 
                When they live <span className="dm-eldr-highlight">freely</span> and <span className="dm-eldr-highlight">confidently</span>, 
                the whole <span className="dm-eldr-highlight">society</span> grows richer — 
                in <span className="dm-eldr-highlight">humanity</span>, not just <span className="dm-eldr-highlight">wealth</span>. 
                That’s the <span className="dm-eldr-highlight">DailyMoney</span> way — where every generation 
                learns, earns, and lives with <span className="dm-eldr-highlight">purpose</span>.
              </strong>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
