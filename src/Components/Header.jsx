import React, { useState } from "react";
import { FaPinterestP, FaFacebookF } from "react-icons/fa";
import {
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { BiLogoTwitter } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { logo } from "../assets";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  window.addEventListener("scroll", () => {
    const header = document.querySelector("[data-header]");
    if (window.scrollY >= 400) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });

  return (
    <header className={`header ${isNavbarOpen ? "active" : ""}`} data-header>
      <div className="overlay" data-overlay></div>

      {/* Top Header */}
      <div className="header-top">
        <div className="container">
          <ul className="header-top-list">
            <li>
              <a
                href="mailto:info@swagatenterprises.com"
                className="header-top-link"
              >
                <AiOutlineMail />
                <span>info@satish.pathak52@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="#" className="header-top-link">
                <CiLocationOn />
                <address>123, ABC Street, City Name</address>
              </a>
            </li>
          </ul>

          <div className="wrapper">
            <ul className="header-top-social-list">
              <li>
                <a href="#" className="header-top-social-link">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#" className="header-top-social-link">
                  <BiLogoTwitter />
                </a>
              </li>
              <li>
                <a href="#" className="header-top-social-link">
                  <FaPinterestP />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Header */}
      <div className="header-bottom">
        <div className="container">
          <a href="#" className="logo">
            <img
              src={logo}
              alt="Swagat Enterprises Logo"
              style={{ height: "60px", width: "60px" }}
            />
          </a>

          <nav className={`navbar ${isNavbarOpen ? "active" : ""}`} data-navbar>
            <div className="navbar-top">
              <a href="#" className="logo">
                <img src={logo} alt="Swagat Enterprises Logo" />
              </a>
              <button
                className="nav-close-btn"
                data-nav-close-btn
                aria-label="Close Menu"
                onClick={toggleNavbar}
              >
                <AiOutlineCloseCircle />
              </button>
            </div>

            <div className="navbar-bottom">
              <ul className="navbar-list">
                <li>
                  <a href="#home" className="navbar-link" data-nav-link>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="navbar-link" data-nav-link>
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="navbar-link" data-nav-link>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="navbar-link" data-nav-link>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <button
            className="header-menu-btn"
            data-nav-open-btn
            aria-label="Open Menu"
            onClick={toggleNavbar}
          >
            <AiOutlineMenu />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
