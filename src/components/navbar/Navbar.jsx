import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // for desktop
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null); // for mobile
  const { isAuthenticated, logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    if (window.confirm("Are you sure you want to logout?")) {
      await logout();
      setMenuOpen(false);
    }
  };

  return (
    <nav id="navbar">
      <div className="nav-container">
        {/* LEFT: Logo */}
        <Link to="/" className="logo">
          <img
            src="DM-100.jpg" 
            alt="DailyMoney Logo"
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="menu desktop-menu">
          <li>
            <Link id="tab-name" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link id="tab-name" to="/health">
              Health
            </Link>
          </li>
          <li>
            <Link id="tab-name" to="/wealth">
              Wealth
            </Link>
          </li>
          <li>
            <Link id="tab-name" to="/family">
              Family
            </Link>
          </li>

          {/* Entrepreneur Dropdown */}
          <li
            onMouseEnter={() => setOpenDropdown("my-life")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <span id="tab-name" className="dropdown-label">
              My Life ▾
            </span>
            {openDropdown === "my-life" && (
              <div className="submenu">
                <Link id="tab-name" to="/entrepreneur">
                  ▾ Entrepreneur
                </Link>
                <Link id="tab-name" to="/income">
                  ▾ Income
                </Link>
                <Link id="tab-name" to="/womenempowerment">
                  ▾ Women Empowerment
                </Link>
                <Link id="tab-name" to="/students">
                  ▾ Students
                </Link>
                <Link id="tab-name" to="/elder">
                  ▾ Elders
                </Link>
              </div>
            )}
          </li>
          <li
            onMouseEnter={() => setOpenDropdown("about")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <span id="tab-name" className="dropdown-label">
              About ▾
            </span>
            {openDropdown === "about" && (
              <div className="submenu">
                <Link id="tab-name" to="/overview">
                  ▾ Overview
                </Link>
                <Link id="tab-name" to="/visionmission">
                  ▾ Vision & Mission
                </Link>
                <Link id="tab-name" to="/founders-msg">
                  ▾ Founder's Message
                </Link>
                <Link id="tab-name" to="/presidents-msg">
                  ▾ President's Message
                </Link>
                <Link id="tab-name" to="/core-team">
                  ▾ Core Team
                </Link>
              </div>
            )}
          </li>
        </ul>

        {/* RIGHT SECTION DESKTOP */}
        <div className="right-section">
          <Link to="/contact" className="contact-btn">
            Contact
          </Link>

          {/* Authentication actions hidden for public site */}
          <div className="auth-placeholder" />

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
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {/* Top bar */}
        <div className="mobile-topbar">
          <Link to="/" className="logo">
            <img
              src="DM.png"
              alt="DailyMoney Logo"
            />
          </Link>
          <div className="mobile-actions">
            <Link
              to="/contact"
              className="contact-btn"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile Authentication hidden for public site */}
            <div className="mobile-auth-placeholder" />

            <button
              type="button"
              className="mobile-close"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes />
            </button>
          </div>
        </div>

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

          <div className="mobile-dropdown">
            <span
              onClick={() =>
                setOpenMobileDropdown(
                  openMobileDropdown === "about" ? null : "about"
                )
              }
            >
              About ▾
            </span>
            {openMobileDropdown === "about" && (
              <div className="mobile-submenu">
                <Link to="/overview" onClick={() => setMenuOpen(false)}>
                  Overview
                </Link>
                <Link to="/visionmission" onClick={() => setMenuOpen(false)}>
                  Vision & Mission
                </Link>
                <Link to="/founders-msg" onClick={() => setMenuOpen(false)}>
                  Founder's Message
                </Link>
                <Link to="/presidents-msg" onClick={() => setMenuOpen(false)}>
                  President's Message
                </Link>
                <Link to="/core-team" onClick={() => setMenuOpen(false)}>
                  Core Team
                </Link>
              </div>
            )}
          </div>

          {/* Entrepreneur Dropdown (mobile) */}
          <div className="mobile-dropdown">
            <span
              onClick={() =>
                setOpenMobileDropdown(
                  openMobileDropdown === "my-life" ? null : "my-life"
                )
              }
            >
              My Life ▾
            </span>
            {openMobileDropdown === "my-life" && (
              <div className="mobile-submenu">
                <Link to="/entrepreneur" onClick={() => setMenuOpen(false)}>
                  Entrepreneur
                </Link>
                <Link to="/income" onClick={() => setMenuOpen(false)}>
                  Income
                </Link>
                <Link to="/womenempowerment" onClick={() => setMenuOpen(false)}>
                  Women Empowerment
                </Link>
                <Link to="/students" onClick={() => setMenuOpen(false)}>
                  Students
                </Link>
                <Link to="/elders" onClick={() => setMenuOpen(false)}>
                  Elder
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
