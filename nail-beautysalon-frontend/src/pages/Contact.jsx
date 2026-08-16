import React from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <p className="contact-subtitle">REACH OUT</p>
          <h2 className="contact-title">We'd Love to Hear From You</h2>

          <div className="info-item">
            <div className="icon-circle">
              <FaPhoneAlt />
            </div>
            <div>
              <span className="label">PHONE</span>
              <p>+2712(011) 345 6789</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-circle">
              <FaWhatsapp />
            </div>
            <div>
              <span className="label">WHATSAPP</span>
              <p>Chat with us directly</p>
              <p>+27 76 123 4567</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-circle">
              <FaEnvelope />
            </div>
            <div>
              <span className="label">EMAIL</span>
              <p>info@nailbeautysalon.co.za</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-circle">
              <FaMapMarkerAlt />
            </div>
            <div>
              <span className="label">LOCATION</span>
              <p>123 Beauty Avenue, Cape Town, South Africa</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-circle">
              <FaClock />
            </div>
            <div>
              <span className="label">HOURS</span>
              <p>Mon – Fri: 10am – 6pm</p>
              <p>Sat: 8am – 4pm | Sun: Closed</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-form-wrapper">
          <h3>Send a Message</h3>

          <form className="contact-form">
            <label>NAME</label>
            <input type="text" placeholder="Your full name" />

            <label>EMAIL</label>
            <input type="email" placeholder="your@email.com" />

            <label>PHONE</label>
            <input type="tel" placeholder="+27 ..." />

            <label>MESSAGE</label>
            <textarea rows="6" placeholder="How can we help you?"></textarea>

            <button type="submit" className="submit-btn">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;