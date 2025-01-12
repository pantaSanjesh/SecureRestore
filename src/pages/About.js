import React from 'react';
import '../style/About.css';
import aboutImg from '../assets/img/hero-banner.jpg'
function About() {
  return (
    <div className="about">
      <div className="about-banner">
      <div className="content">
        <h1>About Us</h1>
        <p>
          We are industry leaders in ransomware  and data recovery solutions. With years of
          experience, we help individuals and businesses recover critical data and prevent
          cyber threats.
        </p>
        {/* <img src= {aboutImg}alt="Our Team" className="about-image" /> */}
      </div>
      </div>
    </div>
  );
}

export default About;
