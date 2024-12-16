import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"; // React Icons
import { IoArrowForwardOutline } from "react-icons/io5";

function Contact() {
  return (
    <div>
      <section className="features" id="contact">
        <div className="container">
          <p className="section-subtitle">Get In Touch</p>

          <h2 className="h2 section-title">Contact Information</h2>

          <ul className="features-list">
            {/* Phone Card */}
            <li>
              <a href="tel:+919876543210" className="features-card">
                <div className="card-icon">
                  <FiPhone />
                </div>

                <h3 className="card-title">Phone</h3>
                <p className="card-text" style={{ color: "#7b1a8b" }}>
                  +91 9637515289
                </p>

                {/* <div className="card-btn">
                  <IoArrowForwardOutline />
                </div> */}
              </a>
            </li>

            {/* Email Card */}
            <li>
              <a
                href="mailto:contact@swagatenterprises.com"
                className="features-card"
              >
                <div className="card-icon">
                  <FiMail />
                </div>

                <h3 className="card-title">Email</h3>
                <p className="card-text" style={{ color: "#7b1a8b" }}>
                  satish.pathak52@gmail.com
                </p>

                {/* <div className="card-btn">
                  <IoArrowForwardOutline />
                </div> */}
              </a>
            </li>

            {/* Location Card */}
            <li>
              <a href="#" className="features-card">
                <div className="card-icon">
                  <FiMapPin />
                </div>

                <h3 className="card-title">Location</h3>
                <p className="card-text">Nallasopara, Mumbai, Maharashtra</p>

                {/* <div className="card-btn">
                  <IoArrowForwardOutline />
                </div> */}
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Contact;
