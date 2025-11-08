import React from "react"; 
import "./Womenempowerment.css";
import { Link } from "react-router-dom";
import Footer from '../footer/Footer';

export default function Womenempowerment() {
  return (
    <div className="women-container">
      {/* Header */}
      <div className="women-dm-header-wrap">
        <h1 className="women-header-1">Women Empowerment <br /> A Deeper Vision</h1>
      </div>
      

      {/* Hero Section: Image Left, Text Right */}
      <section className="women-hero">
        <div className="women-image">
          <img src="women-5.jpg" alt="Empowered women" />
        </div>

        <div className="women-content">
          <h1>Empowered Women Empower Women</h1>
          <p>
            Empowered women create waves of change, inspiring others, strengthening communities and redefining leadership for a brighter tomorrow.
          </p>
        </div>
      </section>


      {/* Mission Section */}
      <section className="women-section women-mission">
        <h2>Empowered Women</h2>
        <ul className="women-points">
          <li className="red-text">
            <p>
              Women's empowerment is not just about equality, it is about
              unlocking the full potential of humanity.
            </p>
          </li>
          <li className="blue-text">
            <p>
              Women's empowerment is not a charity, it is justice, progress and
              the future.
            </p>
          </li>
          <li className="green-text">
            <p>
              Empowerment is the recognition that women are not behind, not
              ahead, but standing{" "}
              <span className="highlight-yellow">shoulder to shoulder.</span>
            </p>
          </li>
        </ul>

        <div className="women-image-row">
          <img src="women-2.jpg" alt="Women Smiling" />
          <img src="women-3.jpg" alt="Women Talking" />
          <img src="women-4.jpg" alt="Women Laughing" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="women-stats">
        <div className="stat-box">
          <h3>500K</h3>
          <p>Women Empowered</p>
        </div>
        <div className="stat-box">
          <h3>50+</h3>
          <p>Countries Reached</p>
        </div>
        <div className="stat-box">
          <h3>1K+</h3>
          <p>Local Initiatives</p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="women-section">
        <h2>Our Programs</h2>

        <div className="women-programs">
          <div className="women-program">
            <h3>Education</h3>
            <p>
              Education, career development programs and economic empowerment
              initiatives for women.
            </p>
            <img
              src="em2.jpg"
              alt="Education Program"
              onError={(e) =>
                (e.target.src =
                  "https://images.unsplash.com/photo-1603570417035-5b4e4e0d6c8d?auto=format&fit=crop&w=1000&q=60")
              }
            />
          </div>

          <div className="women-program">
            <h3>Economic Empowerment</h3>
            <p>
              Supporting women in entrepreneurship, employment and financial
              independence.
            </p>
            <img
              src="women-1.jpg"
              alt="Economic Empowerment Program"
              onError={(e) =>
                (e.target.src =
                  "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=60")
              }
            />
          </div>

          <div className="women-program">
            <h3>Advocacy</h3>
            <p>
              Promoting women's rights and gender equality through advocacy and
              community programs.
            </p>
            <img
              src="women-7.jpg"
              alt="Advocacy Program"
              onError={(e) =>
                (e.target.src =
                  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1000&q=60")
              }
            />
          </div>
        </div>
      </section>

      <div className="view-more-link-my-life">
      <Link className="view-more-link" to="/students">
        <button className="view-more" type="button">
          View More
        </button>
      </Link>
      </div>
      <Footer />
    </div>
  );
}
