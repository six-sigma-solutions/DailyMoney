import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu
  const [openDropdown, setOpenDropdown] = useState(null); // desktop dropdown
  const [openSubDropdown, setOpenSubDropdown] = useState(null); // nested submenu

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
                {/* Nested Women Empowerment */}
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

          {/* My Life Dropdown for Mobile */}
          <div className="mobile-dropdown">
            <span onClick={() => setOpenDropdown(openDropdown === "life" ? null : "life")}>
              My Life ▾
            </span>
            {openDropdown === "life" && (
              <div className="submenu">
                <div>
                  <span
                    onClick={() =>
                      setOpenSubDropdown(openSubDropdown === "women" ? null : "women")
                    }
                  >
                    ▾ Women Empowerment
                  </span>
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
          </div>

          {/* My Job/Business Dropdown for Mobile */}
          <div className="mobile-dropdown">
            <span onClick={() => setOpenDropdown(openDropdown === "job" ? null : "job")}>
              My Job/Business ▾
            </span>
            {openDropdown === "job" && (
              <div className="submenu">
                <Link to="/income">▾ My Income</Link>
                <Link to="/entrepreneur">▾ Entrepreneur</Link>
              </div>
            )}
          </div>

          <Link to="/vision">Vision</Link>
          <button className="contact-btn full">Contact</button>
        </div>
      )}
    </nav>
  );
}
