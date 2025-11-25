import React, { useEffect, useRef } from 'react';
import './Elder.css';
import Footer from '../footer/Footer';

export default function Elder() {
  const animatedRef = useRef(null);

  useEffect(() => {
    const imgs = animatedRef.current?.querySelectorAll('.dm-eldr-poster img') || [];
    const onClick = (e) => {
      e.preventDefault();
      window.open(e.currentTarget.src, '_blank');
    };
    imgs.forEach((img) => img.addEventListener('click', onClick));

    const animatedText = animatedRef.current?.querySelectorAll('.dm-eldr-animate') || [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.2 }
    );

    animatedText.forEach((el) => observer.observe(el));

    return () => {
      imgs.forEach((img) => img.removeEventListener('click', onClick));
      animatedText.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="dm-eldr-wrapper" ref={animatedRef}>
      <header className="dm-eldr-header">
        <h1>DM – Empower Elders</h1>
      </header>

      <main className="dm-eldr-container">

        {/* Row 1 */}
        <section className="dm-eldr-row">
          <div className="dm-eldr-poster">
            <img src="/elder36.png" alt="Poster 1" />
          </div>

          <div className="dm-eldr-content dm-eldr-animate">

            <div className="dm-eldr-bullet">
              <span className="dot">●</span>
              <span className="text">
                DM represents a <span className="dm-eldr-highlight">rebirth</span> – a movement where elders become independent,
                <span className="dm-eldr-highlight"> earn daily</span>, share wisdom and feel valuable again.
              </span>
            </div>

            <div className="dm-eldr-bullet">
              <span className="dot">●</span>
              <span className="text">Live with <span className="dm-eldr-highlight">financial confidence</span>.</span>
            </div>

            <div className="dm-eldr-bullet">
              <span className="dot">●</span>
              <span className="text">Feel <span className="dm-eldr-highlight">valued</span> and <span className="dm-eldr-highlight">included</span>.</span>
            </div>

            <div className="dm-eldr-bullet">
              <span className="dot">●</span>
              <span className="text">Share your <span className="dm-eldr-highlight">wisdom</span>, not your worries.</span>
            </div>

            <div className="dm-eldr-bullet">
              <span className="dot">●</span>
              <span className="text">
                Enjoy peace, purpose and pride in your <span className="dm-eldr-highlight">DM life</span>.
              </span>
            </div>

          </div>
        </section>

        {/* Row 2 */}
        <section className="dm-eldr-row reverse">
          <div className="dm-eldr-poster">
            <img src="/elders10.png" alt="Poster 2" />
          </div>

          <div className="dm-eldr-content dm-eldr-animate">

            <div className="dm-eldr-bullet">
              <span className="dot">●</span>
              <span className="text">Empowerment begins with a <span className="dm-eldr-highlight">choice</span>.</span>
            </div>

            <div className="dm-eldr-bullet">
              <span className="dot">●</span>
              <span className="text">Choose to live with <span className="dm-eldr-highlight">abundance</span>, not dependence.</span>
            </div>

            <div className="dm-eldr-bullet">
              <span className="dot">●</span>
              <span className="text">
                Your experience is your greatest asset — we help you turn it into <span className="dm-eldr-highlight">income</span>.
              </span>
            </div>

            <div className="dm-eldr-bullet">
              <span className="dot">●</span>
              <span className="text">
                Invest in your <span className="dm-eldr-highlight">health</span>, reclaim wealth and cherish
                your <span className="dm-eldr-highlight">family</span>.
              </span>
            </div>

            <div className="dm-eldr-bullet">
              <span className="dot">●</span>
              <span className="text">That’s the <span className="dm-eldr-highlight">DM way</span>.</span>
            </div>

          </div>
        </section>

        {/* Row 3 */}
        <section className="dm-eldr-row">
          <div className="dm-eldr-poster">
            <img src="/9001.jpg" alt="Poster 3" />
          </div>

          <div className="dm-eldr-content dm-eldr-animate">

            <div className="dm-eldr-bullet">
              <span className="dot">●</span>
              <span className="text">
                Retirement means enjoying inner <span className="dm-eldr-highlight">peace</span> on your own terms.
              </span>
            </div>

            <div className="dm-eldr-bullet">
              <span className="dot">●</span>
              <span className="text">
                It’s not the end — it is the start of living life on your own <span className="dm-eldr-highlight">schedule</span>.
              </span>
            </div>

            <div className="dm-eldr-bullet">
              <span className="dot">●</span>
              <span className="text">That’s the <span className="dm-eldr-highlight">DM way</span>.</span>
            </div>

            <div className="dm-eldr-bullet">
              <span className="dot">●</span>
              <span className="text">
                Freedom with <span className="dm-eldr-highlight">purpose</span> and dignity at every stage of life.
              </span>
            </div>

          </div>
        </section>

        {/* Row 4 */}
        <section className="dm-eldr-row reverse">
          <div className="dm-eldr-poster">
            <img src="/elder200.png" alt="Poster 4" />
          </div>

          <div className="dm-eldr-content dm-eldr-animate">

            <div className="dm-eldr-bullet">
              <span className="dot">●</span>
              <span className="text">
                When elders thrive, families become stronger.
              </span>
            </div>

            <div className="dm-eldr-bullet">
              <span className="dot">●</span>
              <span className="text">
                When their voices are valued, communities become wiser.
              </span>
            </div>

            <div className="dm-eldr-bullet">
              <span className="dot">●</span>
              <span className="text">
                When they live confidently, society grows richer in humanity.
              </span>
            </div>

            <div className="dm-eldr-bullet">
              <span className="dot">●</span>
              <span className="text">
                That’s the <span className="dm-eldr-highlight">DM way</span> — where every generation learns and lives with purpose.
              </span>
            </div>

          </div>
        </section>

      </main>

      <div className="btn-center">
        <a href="overview" className="view-btn">View More</a>
      </div>

      <Footer />
    </div>
  );
}
