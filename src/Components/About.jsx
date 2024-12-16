// Updated About.jsx
import { FaHome } from "react-icons/fa";
import { BiLeaf, BiWine, BiCheckShield } from "react-icons/bi";
import { aboutbanner1, aboutbanner2 } from "../assets";

function About() {
  return (
    <div>
      <section className="about" id="about">
        <div className="container">
          <figure className="about-banner">
            <img src={aboutbanner1} alt="House interior" />
            <img src={aboutbanner2} alt="House interior" className="abs-img" />
          </figure>

          <div className="about-content">
            <p className="section-subtitle">About Swagat Enterprises</p>
            <h2 className="h2 section-title">
              Your Trusted Real Estate Partner in Nallasopara, Mumbai
            </h2>
            <p className="about-text">
              Swagat Enterprises, owned by Satish Pathak, is your go-to
              destination for finding your dream home. With a wide selection of
              1BHK, 2BHK, 3BHK apartments, and RK options, we are committed to
              delivering exceptional living spaces tailored to your needs.
            </p>

            <ul className="about-list">
              <li className="about-item">
                <div className="about-item-icon">
                  <FaHome />
                </div>
                <p className="about-item-text">Modern and Smart Home Designs</p>
              </li>
              <li className="about-item">
                <div className="about-item-icon">
                  <BiLeaf />
                </div>
                <p className="about-item-text">Beautiful, Green Surroundings</p>
              </li>
              <li className="about-item">
                <div className="about-item-icon">
                  <BiWine />
                </div>
                <p className="about-item-text">Luxury and Comfort Lifestyle</p>
              </li>
              <li className="about-item">
                <div className="about-item-icon">
                  <BiCheckShield />
                </div>
                <p className="about-item-text">24/7 Secure Living</p>
              </li>
            </ul>

            <blockquote className="testimonial">
              "Swagat Enterprises made our dream of owning a home come true!
              Highly recommend their services."
              <footer>- A Happy Client</footer>
            </blockquote>

            <a href="#contact" className="btn">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
