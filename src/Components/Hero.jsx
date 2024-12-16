// Updated Hero.jsx
import { FaHome } from "react-icons/fa";
import { herobanner } from "../assets";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">
            <FaHome />
            <span>Swagat Enterprises</span>
          </p>

          <h2 className="h1 hero-title">
            Find Your Dream Home in Nallasopara, Mumbai
          </h2>

          <p className="hero-text">
            Explore our exclusive range of 1BHK, 2BHK, 3BHK apartments, and RK
            options. Your perfect home is just a click away.
          </p>

          <a href="#contact">
            {" "}
            <button className="btn">Make an Enquiry</button>
          </a>
        </div>

        <figure className="hero-banner">
          <img
            src={herobanner}
            alt="Modern house model"
            className="w-100 animated-fadeIn"
          />
        </figure>
      </div>
    </section>
  );
}

export default Hero;
