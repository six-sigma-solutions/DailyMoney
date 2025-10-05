
import React, { useEffect, useRef } from 'react';
import './Students.css';

export default function Students() {
  const animatedRef = useRef(null);

  useEffect(() => {
    const nodes = animatedRef.current?.querySelectorAll('.animate-block') || [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.2 }
    );

    nodes.forEach((n) => observer.observe(n));

    const imgs = animatedRef.current?.querySelectorAll('.image-box img') || [];
    const onClick = (e) => window.open(e.currentTarget.src, '_blank');
    imgs.forEach((img) => img.addEventListener('click', onClick));

    return () => {
      nodes.forEach((n) => observer.unobserve(n));
      imgs.forEach((img) => img.removeEventListener('click', onClick));
    };
  }, []);

  return (
    <div className="student-wrapper" ref={animatedRef}>
      <header className="student-header">
        <h1>Daily Money – Empower Students</h1>
      </header>

      <main className="student-container">
        {/* Section 1 */}
        <section className="student-section">
          <div className="image-box">
            <img src="stu1.jpg" alt="Poster 1" />
          </div>

          <div className="text-block">
            <p className="animate-block tagline-text">
              <strong>
                <span className="tick-icon">✔</span>
                <span className="highlight-text">Learn</span> smart. <span className="highlight-text">Earn</span> steady. <span className="highlight-text">Grow</span> with DailyMoney.
                Study with <span className="highlight-text">purpose</span>. Earn with <span className="highlight-text">confidence</span>.
                Balance <span className="highlight-text">learning</span> and <span className="highlight-text">income</span> — the DailyMoney way.
              </strong>
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="student-section reverse-section">
          <div className="image-box">
            <img src="stu2.jpg" alt="Poster 2" />
          </div>

          <div className="text-block">
            <p className="animate-block tagline-text">
              <strong>
                <span className="tick-icon">✔</span>
                Education gives <span className="highlight-text">knowledge</span> — DailyMoney gives <span className="highlight-text">financial power</span>.
                DailyMoney helps you build strong <span className="highlight-text">habits</span> of saving, investing, and earning while you learn.
                Turn your <span className="highlight-text">daily efforts</span> into <span className="highlight-text">daily income</span> — and your dreams into reality with <span className="highlight-text">DailyMoney</span>.
                <span className="highlight-text">DailyMoney</span> — a smart start for a <span className="highlight-text">limitless life</span>.
              </strong>
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="student-section">
          <div className="image-box">
            <img src="stu3.jpg" alt="Poster 3" />
          </div>

          <div className="text-block">
            <p className="animate-block tagline-text">
              <strong>
                <span className="tick-icon">✔</span>
                <span className="highlight-text">DailyMoney</span> — Empowering every student to achieve <span className="highlight-text">financial freedom</span>.
                Study with <span className="highlight-text">independence</span> through your own earned income.
                Financial independence that brings <span className="highlight-text">confidence</span> and <span className="highlight-text">self-respect</span>.
              </strong>
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="student-section reverse-section">
          <div className="image-box">
            <img src="stu4.jpg" alt="Poster 4" />
          </div>

          <div className="text-block">
            <p className="animate-block tagline-text">
              <strong>
                <span className="tick-icon">✔</span>
                <span className="highlight-text">DailyMoney</span> — Empowered to <span className="highlight-text">learn</span>, inspired to <span className="highlight-text">earn</span>.
                Earn with <span className="highlight-text">pride</span>, learn with <span className="highlight-text">purpose</span>.
                Students <span className="highlight-text">earn</span>, and the world learns the value of <span className="highlight-text">determination</span>.
                Self-earned income builds more than <span className="highlight-text">wealth</span> — it builds <span className="highlight-text">wisdom</span>.
              </strong>
            </p>
          </div>
        </section>
      </main>

      <footer className="student-footer">© 2023 DailyMoney</footer>
    </div>
  );
}
