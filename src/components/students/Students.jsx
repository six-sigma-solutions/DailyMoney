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

    <div className="stu-bullet stu-page-animate-block">
      <span className="stu-dot">●</span>
      <span>Our future starts with today’s discipline.</span>
    </div>

    <div className="stu-bullet stu-page-animate-block">
      <span className="stu-dot">●</span>
      <span>We help turn student loans into student gains.</span>
    </div>

    <div className="stu-bullet stu-page-animate-block">
      <span className="stu-dot">●</span>
      <span>Your degree gets you a job, but your DM skills get you freedom.</span>
    </div>

    <div className="stu-bullet stu-page-animate-block">
      <span className="stu-dot">●</span>
      <span>Build wealth while you learn — don’t just chase grades, chase growth.</span>
    </div>

  </div>
</section>

<section className="stu-page-section stu-page-reverse-section">
  <div className="stu-page-image-box">
    <img src="stu.png" alt="Poster 2" />
  </div>

  <div className="stu-page-text-block">

    <div className="stu-bullet stu-page-animate-block">
      <span className="stu-dot">●</span>
      <span>Learn to earn while you still have time.</span>
    </div>

    <div className="stu-bullet stu-page-animate-block">
      <span className="stu-dot">●</span>
      <span>Our side hustle becomes your main opportunity.</span>
    </div>

    <div className="stu-bullet stu-page-animate-block">
      <span className="stu-dot">●</span>
      <span>Financial confidence is the best graduation gift.</span>
    </div>

    <div className="stu-bullet stu-page-animate-block">
      <span className="stu-dot">●</span>
      <span>
        DM delivers a blueprint for students to design their future.
      </span>
    </div>

    <div className="stu-bullet stu-page-animate-block">
      <span className="stu-dot">●</span>
      <span>We train you for real-world success.</span>
    </div>

  </div>
</section>

<section className="stu-page-section">
  <div className="stu-page-image-box">
    <img src="3002.png" alt="Poster 3" />
  </div>

  <div className="stu-page-text-block">

    <div className="stu-bullet stu-page-animate-block">
      <span className="stu-dot">●</span>
      <span>
        Achieve personal growth and financial independence.
      </span>
    </div>

    <div className="stu-bullet stu-page-animate-block">
      <span className="stu-dot">●</span>
      <span>
        Pay off student debt through your own earned income.
      </span>
    </div>

    <div className="stu-bullet stu-page-animate-block">
      <span className="stu-dot">●</span>
      <span>
        Financial independence builds confidence and self-respect.
      </span>
    </div>

  </div>
</section>

<section className="stu-page-section stu-page-reverse-section">
  <div className="stu-page-image-box">
    <img src="rf.png" alt="Poster 4" />
  </div>

  <div className="stu-page-text-block">

    <div className="stu-bullet stu-page-animate-block">
      <span className="stu-dot">●</span>
      <span>
        DM empowers you to learn with purpose and earn with confidence.
      </span>
    </div>

    <div className="stu-bullet stu-page-animate-block">
      <span className="stu-dot">●</span>
      <span>
        Earn with pride, learn with purpose.
      </span>
    </div>

    <div className="stu-bullet stu-page-animate-block">
      <span className="stu-dot">●</span>
      <span>
        Students earn and the world learns the value of determination.
      </span>
    </div>

    <div className="stu-bullet stu-page-animate-block">
      <span className="stu-dot">●</span>
      <span>
        Self-earned income builds more than wealth — it builds wisdom.
      </span>
    </div>

  </div>
</section>
</main>

<div class="btn-center">
  <a href="elder" class="view-btn">View More</a>
</div>
<Footer />
</div>
  );
}
