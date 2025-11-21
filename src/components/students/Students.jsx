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
        <h1>DM – Empower Students</h1>
      </header>

      <main className="stu-page-container">
        {/* Section 1 */}
        <section className="stu-page-section">
          <div className="stu-page-image-box">
            <img src="student12.png" alt="Poster 1" />
          </div>

          <div className="stu-page-text-block">
            <p className="stu-page-animate-block stu-page-tagline-text">
              <strong>
                <span className="stu-page-highlight-text">
                  ● Our future starts with today's discipline.<br /> ● We help turn student loans into student gains.<br /> 
                  ● Your degree gets you a job. <br /> 
                  ● Your DM skills get you freedom.<br />
                  ● Build wealth while you learn. Don't just chase grades, chase growth.
</span>
              </strong>
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="stu-page-section stu-page-reverse-section">
          <div className="stu-page-image-box">
            <img src="stu.png" alt="Poster 2" />
          </div>

          <div className="stu-page-text-block">
            <p className="stu-page-animate-block stu-page-tagline-text">
              <strong>
                <span className="stu-page-tick-icon">●</span>
                <span className="stu-page-highlight-text"> Learn</span> to <span className="stu-page-highlight-text">earn</span> while you still have <span className="stu-page-highlight-text">time.<br />
                </span> ● Our <span className="stu-page-highlight-text">side hustle</span> is your <span className="stu-page-highlight-text">main opportunity.<br /></span>
                ● Financial confidence is the best <span className="stu-page-highlight-text">graduation gift.<br /> </span><span className="stu-page-highlight-text"> 
                ● DM</span> delivers a <span className="stu-page-highlight-text"> blueprint</span> for <span className="stu-page-highlight-text">students to design their future.</span> We train you for <span className="stu-page-highlight-text">real-world success</span>.
              </strong>
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="stu-page-section">
          <div className="stu-page-image-box">
            <img src="3002.png" alt="Poster 3" />
          </div>

          <div className="stu-page-text-block">
            <p className="stu-page-animate-block stu-page-tagline-text">
              <strong>
                <span className="stu-page-tick-icon">● </span>
                Achieve <span className="stu-page-highlight-text">personal growth</span> and <span className="stu-page-highlight-text">financial independence</span>.<br />
                ● Pay off <span className="stu-page-highlight-text">student debt</span> through your own earned income.<br />
                ● Financial independence that brings <span className="stu-page-highlight-text">confidence</span> and <span className="stu-page-highlight-text">self-respect</span>.
              </strong>
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="stu-page-section stu-page-reverse-section">
          <div className="stu-page-image-box">
            <img src="rf.png" alt="Poster 4" />
          </div>

          <div className="stu-page-text-block">
            <p className="stu-page-animate-block stu-page-tagline-text">
              <strong>
                <span className="stu-page-tick-icon">● </span>
                <span className="stu-page-highlight-text">DM</span> empowered to <span className="stu-page-highlight-text">learn</span>, inspired to <span className="stu-page-highlight-text">earn</span>.<br />
                ● Earn with <span className="stu-page-highlight-text">pride</span>, learn with <span className="stu-page-highlight-text">purpose</span>.<br />
                ● Students <span className="stu-page-highlight-text">earn</span> and the world learns the value of <span className="stu-page-highlight-text">determination</span>.<br />
                ● Self-earned income builds more than <span className="stu-page-highlight-text">wealth</span>, it builds <span className="stu-page-highlight-text">wisdom</span>.
              </strong>
            </p>
          </div>
        </section>
      </main>

            <section className="blog">
              <div className="view-more-link-my-life">
                <Link className="view-more-link" to="/elder">
                    <button className="view-more" type="button">
                      View More
                    </button>
                </Link>
            </div>
            </section>

      <Footer />
    </div>
  );
}
