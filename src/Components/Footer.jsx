// Updated Footer.jsx
import { CiLocationOn, CiMail, CiTwitter } from "react-icons/ci";
import { MdCall } from "react-icons/md";
import { BsLinkedin, BsYoutube } from "react-icons/bs";
import { logo2 } from "../assets";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src={logo2} alt="Swagat Enterprises logo" />
            </a>

            <p className="section-text">
              Swagat Enterprises, owned by Satish Pathak, is a leading real
              estate firm based in Nallasopara, Mumbai. Contact us for the best
              deals on your dream home.
            </p>

            <ul className="contact-list">
              <li>
                <a href="#" className="contact-link">
                  <CiLocationOn />
                  <address>Nallasopara, Mumbai, Maharashtra</address>
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="contact-link">
                  <MdCall />
                  <span>+91 98765 43210</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@swagatenterprises.com"
                  className="contact-link"
                >
                  <CiMail />
                  <span>contact@swagatenterprises.com</span>
                </a>
              </li>
            </ul>

            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <CiTwitter />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <BsLinkedin />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <BsYoutube />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-link-box">
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Quick Links</p>
              </li>
              <li>
                <a href="#about" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#properties" className="footer-link">
                  Properties
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2024 Swagat Enterprises. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
