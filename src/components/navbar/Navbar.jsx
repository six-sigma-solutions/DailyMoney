import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu
  const [openDropdown, setOpenDropdown] = useState(null); // desktop dropdown
  const [openSubDropdown, setOpenSubDropdown] = useState(null); // nested submenu

  // Prevent background scroll while menu is open
  

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

        {/* DESKTOP MENU (unchanged) */}
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

          {/* My Life Dropdown */}
          <li
            onMouseEnter={() => setOpenDropdown("life")}
            onMouseLeave={() => {
              setOpenDropdown(null);
              setOpenSubDropdown(null);
            }}
          >
            <span className="dropdown-label">My Life ▾</span>
            {openDropdown === "life" && (
              <div className="submenu">
                <div
                  className="submenu-item"
                  onMouseEnter={() => setOpenSubDropdown("women")}
                  onMouseLeave={() => setOpenSubDropdown(null)}
                >
                  <span>▾ Women Empowerment</span>
                  {openSubDropdown === "women" && (
                    <div className="submenu nested">
                      <Link to="/income">My Income</Link>
                      <Link to="/entrepreneur">Entrepreneur</Link>
                    </div>
                  )}
                </div>

                <Link to="/students">▾ Students</Link>
                <Link to="/elder">▾ Elder</Link>
              </div>
            )}
          </li>

          {/* My Job/Business Dropdown */}
          <li
            onMouseEnter={() => setOpenDropdown("job")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <span className="dropdown-label">My Job/Business ▾</span>
            {openDropdown === "job" && (
              <div className="submenu">
                <Link to="/income">▾ My Income</Link>
                <Link to="/entrepreneur">▾ Entrepreneur</Link>
              </div>
            )}
          </li>

          <li>
            <Link to="/vision">Vision</Link>
          </li>
        </ul>

        {/* RIGHT SECTION DESKTOP */}
        <div className="right-section desktop-only">
          <button className="contact-btn">Contact</button>
          <button
            className="menu-btn"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <FaTimes className="menu-bar" />
            ) : (
              <FaBars className="menu-bar" />
            )}
          </button>
        </div>

        {/* MOBILE ICON */}
        <button
          className="menu-btn mobile-only"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <FaTimes className="menu-bar" />
          ) : (
            <FaBars className="menu-bar" />
          )}
        </button>
      </div>

      {/* MOBILE MENU - always rendered; open class toggles slide */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {/* Top bar */}
        <div className="mobile-topbar">
          <Link to="/" className="logo">
            <img
              src="https://res.cloudinary.com/dq9zq6ubg/image/upload/v1758609670/daily-money_fbjvzk.png"
              alt="DailyMoney Logo"
            />
          </Link>
          <div className="mobile-actions">
            <button className="contact-btn">Contact</button>
            <button className="mobile-close" onClick={() => setMenuOpen(false)}>
              <FaTimes />
            </button>
          </div>
        </div>

        {/* Center grid menu */}
        <div className="mobile-grid">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/health" onClick={() => setMenuOpen(false)}>
            Health
          </Link>
          <Link to="/wealth" onClick={() => setMenuOpen(false)}>
            Wealth
          </Link>
          <Link to="/family" onClick={() => setMenuOpen(false)}>
            Family
          </Link>
          <Link to="/vision" onClick={() => setMenuOpen(false)}>
            Vision
          </Link>

          {/* My Life dropdown */}
          <div className="mobile-dropdown">
            <span
              onClick={() =>
                setOpenDropdown(openDropdown === "life" ? null : "life")
              }
            >
              My Life ▾
            </span>
            {openDropdown === "life" && (
              <div
                className={`mobile-submenu ${
                  openDropdown === "life" ? "open" : ""
                }`}
              >
                {/* Nested Women Empowerment */}
                <div>
                  <span
                    onClick={() =>
                      setOpenSubDropdown(
                        openSubDropdown === "women" ? null : "women"
                      )
                    }
                  >
                    ▾ Women Empowerment
                  </span>
                  {openSubDropdown === "women" && (
                    <div
                      className={`mobile-submenu nested ${
                        openSubDropdown === "women" ? "open" : ""
                      }`}
                    >
                      <Link to="/income" onClick={() => setMenuOpen(false)}>
                       ▾ My Income
                      </Link>
                      <Link
                        to="/entrepreneur"
                        onClick={() => setMenuOpen(false)}
                      >
                       ▾ Entrepreneur
                      </Link>
                    </div>
                  )}
                </div>

                <Link to="/students" onClick={() => setMenuOpen(false)}>
                 ▾ Students
                </Link>
                <Link to="/elder" onClick={() => setMenuOpen(false)}>
                 ▾ Elder
                </Link>
              </div>
            )}
          </div>

          {/* My Job/Business dropdown */}
          <div className="mobile-dropdown">
            <span
              onClick={() =>
                setOpenDropdown(openDropdown === "job" ? null : "job")
              }
            >
              My Job/Business ▾
            </span>
            {openDropdown === "job" && (
              <div className="mobile-submenu">
                <Link to="/income" onClick={() => setMenuOpen(false)}>
                  ▾ My Income
                </Link>
                <Link to="/entrepreneur" onClick={() => setMenuOpen(false)}>
                  ▾ Entrepreneur
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mobile-footer">
          <div>
            <p className="footer-heading">Our offices</p>
            <p>
              <b>India</b>
            </p>
            <p>Salem, Tamil Nadu</p>
          </div>
          <div>
            <p className="footer-heading">Get in touch</p>
            <div className="footer-icons">
              <span>✉</span>
              <span>📞</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
