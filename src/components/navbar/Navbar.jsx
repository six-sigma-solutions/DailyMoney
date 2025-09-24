import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);

  const toggleSubmenu = (name) => {
    setSubmenuOpen(submenuOpen === name ? null : name);
  };

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="w-full flex justify-between items-center h-16 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://res.cloudinary.com/dq9zq6ubg/image/upload/v1758609670/daily-money_fbjvzk.png"
              alt="DailyMoney Logo"
              className="h-15 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
            <li>
              <Link to="/" className="hover:text-green-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/core-team" className="hover:text-green-600">
                Core Team
              </Link>
            </li>
            <li>
              <Link to="/health" className="hover:text-green-600">
                Health
              </Link>
            </li>
            <li>
              <Link to="/wealth" className="hover:text-green-600">
                Wealth
              </Link>
            </li>
            <li>
              <Link to="/family" className="hover:text-green-600">
                Family
              </Link>
            </li>

            {/* My Life */}
            <li className="relative group">
              <button className="hover:text-green-600">My Life ▾</button>
              <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg p-2 w-48">
                <li>
                  <Link
                    to="/students"
                    className="block px-4 py-2 hover:bg-green-100"
                  >
                    Students
                  </Link>
                </li>
                <li>
                  <Link
                    to="/elder"
                    className="block px-4 py-2 hover:bg-green-100"
                  >
                    Elder
                  </Link>
                </li>
                <li>
                  <Link
                    to="/women"
                    className="block px-4 py-2 hover:bg-green-100"
                  >
                    Women Empowerment
                  </Link>
                </li>
              </ul>
            </li>

            {/* My Job/Business */}
            <li className="relative group">
              <button className="hover:text-green-600">
                My Job/Business ▾
              </button>
              <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg p-2 w-56">
                <li>
                  <Link
                    to="/income"
                    className="block px-4 py-2 hover:bg-green-100"
                  >
                    My Income
                  </Link>
                </li>
                <li>
                  <Link
                    to="/entrepreneur"
                    className="block px-4 py-2 hover:bg-green-100"
                  >
                    Entrepreneur
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solution"
                    className="block px-4 py-2 hover:bg-green-100"
                  >
                    Solution
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gratitude"
                    className="block px-4 py-2 hover:bg-green-100"
                  >
                    Gratitude
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/vision" className="hover:text-green-600">
                Vision
              </Link>
            </li>
          </ul>

          {/* Contact Button */}
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 hidden md:block contact"
            onClick={() => setContactOpen(true)}
          >
            Contact
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Contact Modal */}
      {contactOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm z-50"
          onClick={() => setContactOpen(false)} // click outside closes
        >
          <div
            className="bg-white rounded-lg w-11/12 max-w-lg p-6 relative shadow-lg"
            onClick={(e) => e.stopPropagation()} // stop close inside
          >
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-gray-700 text-2xl font-bold"
              onClick={() => setContactOpen(false)}
            >
              ×
            </button>

            {/* Header */}
            <h2 className="text-2xl font-bold mb-2 text-center text-gray-800">
              How can we help you?
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Choose a way to connect with DailyMoney Support.
            </p>

            {/* Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Chat Support */}
              <div className="border rounded-lg p-4 text-center hover:shadow-md cursor-pointer transition">
                <i className="fas fa-comments text-green-600 text-3xl mb-2"></i>
                <h3 className="font-semibold text-gray-800">Chat with us</h3>
                <p className="text-sm text-gray-500">Instant help via chat</p>
              </div>

              {/* Email Support */}
              <div className="border rounded-lg p-4 text-center hover:shadow-md cursor-pointer transition">
                <i className="fas fa-envelope text-blue-600 text-3xl mb-2"></i>
                <h3 className="font-semibold text-gray-800">Email us</h3>
                <p className="text-sm text-gray-500">Reply within 24 hours</p>
              </div>

              {/* Call Support */}
              <div className="border rounded-lg p-4 text-center hover:shadow-md cursor-pointer transition">
                <i className="fas fa-phone-alt text-red-600 text-3xl mb-2"></i>
                <h3 className="font-semibold text-gray-800">Call support</h3>
                <p className="text-sm text-gray-500">Available 9AM - 6PM</p>
              </div>

              {/* Social Media */}
              <div className="border rounded-lg p-4 text-center hover:shadow-md cursor-pointer transition">
                <i className="fab fa-instagram text-pink-500 text-3xl mb-2"></i>
                <h3 className="font-semibold text-gray-800">Social Media</h3>
                <p className="text-sm text-gray-500">Connect on Insta / X</p>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 text-center text-sm text-gray-600">
              <p>
                Email:{" "}
                <a
                  href="mailto:contact@dailymoney.com"
                  className="text-green-600 hover:underline"
                >
                  contact@dailymoney.com
                </a>
              </p>
              <p>Phone: +91 98765 43210</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
