// UpdatedStudent.jsx
import React, { useEffect, useRef } from 'react';
import './Students.css';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';

export default function Students() {
  const animatedRef = useRef(null);

  useEffect(() => {
    // Renamed classes to be isolated
    const nodes = animatedRef.current?.querySelectorAll('.stu-page-animate-block') || [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.2 }
    );

    nodes.forEach((n) => observer.observe(n));

    // Renamed image-box class
    const imgs = animatedRef.current?.querySelectorAll('.stu-page-image-box img') || [];
    const onClick = (e) => window.open(e.currentTarget.src, '_blank');
    imgs.forEach((img) => img.addEventListener('click', onClick));

    return () => {
      nodes.forEach((n) => observer.unobserve(n));
      imgs.forEach((img) => img.removeEventListener('click', onClick));
    };
  }, []);

  return (
    <div className="stu-page-wrapper" ref={animatedRef}>
      <header className="stu-page-header">
        <h1>Daily Money – Empower Students</h1>
      </header>

      <main className="stu-page-container">
        {/* Section 1 */}
        <section className="stu-page-section">
          <div className="stu-page-image-box">
            <img src="stu1.jpg" alt="Poster 1" />
          </div>

          <div className="stu-page-text-block">
            <p className="stu-page-animate-block stu-page-tagline-text">
              <strong>
                <span className="stu-page-tick-icon">✔ </span>
                <span className="stu-page-highlight-text">Our future</span> starts with today's <span className="stu-page-highlight-text">discipline</span>.
                We help turn <span className="stu-page-highlight-text">student loans</span> into <span className="stu-page-highlight-text">student gains</span>.
                Your <span className="stu-page-highlight-text">degree</span> gets you a job; your <span className="stu-page-highlight-text"> DailyMoney skills</span> get you <span className="stu-page-highlight-text">freedom</span>.
                Build <span className="stu-page-highlight-text">wealth</span> while you <span className="stu-page-highlight-text">learn</span>.
                Don't just chase <span className="stu-page-highlight-text">grades</span>,chase <span className="stu-page-highlight-text">growth</span>.
              </strong>
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="stu-page-section stu-page-reverse-section">
          <div className="stu-page-image-box">
            <img src="stu-475.jpg" alt="Poster 2" />
          </div>

          <div className="stu-page-text-block">
            <p className="stu-page-animate-block stu-page-tagline-text">
              <strong>
                <span className="stu-page-tick-icon">✔ </span>
                <span className="stu-page-highlight-text">Learn</span> to <span className="stu-page-highlight-text">earn</span> while you still have <span className="stu-page-highlight-text">time</span>.
                Our <span className="stu-page-highlight-text">side hustle</span> is your <span className="stu-page-highlight-text">main opportunity</span>.
                Financial confidence is the best <span className="stu-page-highlight-text">graduation gift</span>.
                <span className="stu-page-highlight-text"> DailyMoney</span> provides a <span className="stu-page-highlight-text">business blueprint</span> for <span className="stu-page-highlight-text">students</span>.
                We train you for <span className="stu-page-highlight-text">real-world success</span>.
              </strong>
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="stu-page-section">
          <div className="stu-page-image-box">
            <img src="stu3.jpg" alt="Poster 3" />
          </div>

          <div className="stu-page-text-block">
            <p className="stu-page-animate-block stu-page-tagline-text">
              <strong>
                <span className="stu-page-tick-icon">✔ </span>
                Achieve <span className="stu-page-highlight-text">personal growth</span> and <span className="stu-page-highlight-text">financial freedom</span>.
                Pay off <span className="stu-page-highlight-text">student debt</span> through your own earned income.
                Financial independence that brings <span className="stu-page-highlight-text">confidence</span> and <span className="stu-page-highlight-text">self-respect</span>.
              </strong>
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="stu-page-section stu-page-reverse-section">
          <div className="stu-page-image-box">
            <img src="stu4.jpg" alt="Poster 4" />
          </div>

          <div className="stu-page-text-block">
            <p className="stu-page-animate-block stu-page-tagline-text">
              <strong>
                <span className="stu-page-tick-icon">✔ </span>
                <span className="stu-page-highlight-text">DailyMoney</span> empowered to <span className="stu-page-highlight-text">learn</span>, inspired to <span className="stu-page-highlight-text">earn</span>.
                Earn with <span className="stu-page-highlight-text">pride</span>, learn with <span className="stu-page-highlight-text">purpose</span>.
                Students <span className="stu-page-highlight-text">earn</span>, and the world learns the value of <span className="stu-page-highlight-text">determination</span>.
                Self-earned income builds more than <span className="stu-page-highlight-text">wealth</span>,it builds <span className="stu-page-highlight-text">wisdom</span>.
              </strong>
            </p>
          </div>
        </section>
      </main>

      <div className="view-more-link-my-life">
      <Link className="view-more-link" to="/elder">
        <button className="view-more" type="button">
          View More
        </button>
      </Link>
      </div>

      <Footer />
    </div>
  );
}
