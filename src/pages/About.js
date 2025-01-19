import React from 'react';
import '../style/About.css';
import aboutImg from '../assets/img/hero-banner.jpg';

function About() {
  return (
    <div className="about-banner">
      <div className="content">
        <h1>About Us</h1>
        <p>
          We are industry leaders in ransomware and data recovery solutions. With years of
          experience, we help individuals and businesses recover critical data and prevent
          cyber threats.
        </p>
      </div>
      <div className="about-details">
        
        <p className="about-text">
          Our team of professionals has helped countless clients achieve peace of mind by
          ensuring their data remains safe and secure. From large enterprises to small
          businesses, we offer tailored recovery solutions to meet diverse needs.
        </p>
      </div>
    </div>
  );
}

export default About;
