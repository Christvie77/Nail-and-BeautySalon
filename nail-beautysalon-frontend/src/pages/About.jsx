import React from "react";
import backgroundImage from "../assets/backgroup.jpg";

const About = () => {
  return (
    <section
      className="about-page"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="about-overlay">
        <div className="about-content">
          <p className="about-subtitle">WHO WE ARE</p>

          <h1 className="about-title">
            Beauty Is a <span>Ritual</span>
          </h1>

          <p className="about-text">
            Founded with a vision to redefine the salon experience, our beauty
            studio is more than a destination for treatments — it is a sanctuary
            of self-care, confidence, and restoration. We believe that caring for
            yourself is not a luxury, but an essential part of living well.
          </p>

          <p className="about-text">
            Every appointment is an opportunity to pause, unwind, and leave
            feeling renewed. Our experienced professionals specialise in nails,
            facials, lashes, massages, and personalised beauty treatments using
            premium products and modern techniques that prioritise both quality
            and comfort.
          </p>

          <p className="about-text">
            Our salon is designed to be a welcoming, elegant space where every
            client feels valued, respected, and cared for. Whether you are
            visiting for a quick refresh or a full day of pampering, we are
            dedicated to creating an experience that is relaxing, professional,
            and unforgettable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;