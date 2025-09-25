import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* LEFT: Logo */}
        <Link to="/" className="logo">
          <img
            src="https://res.cloudinary.com/dq9zq6ubg/image/upload/v1758609670/daily-money_fbjvzk.png"
            alt="DailyMoney Logo"
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="menu desktop-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/health">Health</Link>
          </li>
          <li>
            <Link to="/wealth">Wealth</Link>
          </li>
          <li>
            <Link to="/family">Family</Link>
          </li>

          <li>
            <details>
              <summary>My Life ▾</summary>
              <div className="submenu">
                <Link to="/women">▾ Women Empowerment</Link>
                <Link to="/students">▾ Students</Link>
                <Link to="/elder">▾ Elder</Link>
              </div>
            </details>
          </li>

          <li>
            <details>
              <summary>My Job/Business ▾</summary>
              <div className="submenu">
                <Link to="/income">▾ My Income</Link>
                <Link to="/entrepreneur">▾ Entrepreneur</Link>
              </div>
            </details>
          </li>

          <li>
            <Link to="/vision">Vision</Link>
          </li>
        </ul>

        {/* RIGHT SECTION DESKTOP */}
        <div className="right-section desktop-only">
          <button className="contact-btn">Contact</button>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars className="menu-bar" />
          </button>
        </div>

        {/* MOBILE ICON */}
        <button
          className="menu-btn mobile-only"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars className="menu-bar" />
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/">Home</Link>
          <Link to="/health">Health</Link>
          <Link to="/wealth">Wealth</Link>
          <Link to="/family">Family</Link>

          <details>
            <summary>My Life ▾</summary>
            <div className="submenu">
              <Link to="/women">▾ Women Empowerment</Link>
              <Link to="/students">▾ Students</Link>
              <Link to="/elder">▾ Elder</Link>
            </div>
          </details>

          <details>
            <summary>My Job/Business ▾</summary>
            <div className="submenu">
              <Link to="/income">▾ My Income</Link>
              <Link to="/entrepreneur">▾ Entrepreneur</Link>
            </div>
          </details>

          <Link to="/vision">Vision</Link>
          <button className="contact-btn full">Contact</button>
        </div>
      )}
    </nav>
  );
}
