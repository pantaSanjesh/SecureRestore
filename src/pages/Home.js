import React from "react";
import "../style/Home.css";
import { useNavigate } from "react-router-dom";
import malwareProtectionImage from "../assets/img/malware-protection.png";
import dataRecovery from "../assets/img/data-recovery.jpg";
import { Helmet } from "react-helmet";
function Home() {
  const navigate = useNavigate();
  const goToAbout = () => {
    navigate("/about");
  };
  const goToContact = () => {
    navigate("/contact");
  };
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Secure Restore",
  "url": "https://www.safesecurerestore.com",
  "description": "Secure Restore provides professional ransomware data recovery and protection services.",
  "sameAs": [
    "https://www.facebook.com/securerestore",
    "https://www.linkedin.com/company/securerestore"
  ]
}
`}
        </script>

        <title>Secure Restore | Ransomware Data Recovery & Protection</title>
        <meta
          name="description"
          content="Secure Restore offers expert ransomware data recovery and malware protection services. Recover encrypted files fast and securely."
        />
        <meta
          name="keywords"
          content="ransomware recovery, data recovery, encrypted files, malware protection, Secure Restore"
        />
        <link rel="canonical" href="https://www.safesecurerestore.com/" />
      </Helmet>
      <div className="home">
        {/* Hero Section */}
        <section className="hero">
          <h1>Ransomware Recovery & Data Protection Services</h1>
          <p>Your trusted partner in ransomware and data recovery solutions.</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={goToAbout}>
              Learn More
            </button>
            <button className="btn-primary" onClick={goToContact}>
              Contact Us
            </button>
          </div>
        </section>

        {/* Services Overview */}
        <section className="services-overview">
          <h2>Our Key Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <img
                src={dataRecovery}
                alt="Encrypted file data recovery service"
              />
              <h3>Data Recovery</h3>
              <p>Recover your critical data with our expert solutions.</p>
            </div>
            <div className="service-card">
              <img
                src={malwareProtectionImage}
                alt="Ransomware protection tools and services"
              />
              <h3>Ransomware Protection</h3>
              <p>Prevent ransomware attacks with our advanced tools.</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose-us">
          <h2>Why Choose Us?</h2>
          <p>
            At Secure Restore, we combine expertise with innovation to deliver
            exceptional data recovery and security solutions. Here's why our
            clients trust us:
          </p>
          <ul>
            <li>✅ Proven track record in data recovery</li>
            <li>✅ State-of-the-art tools and technology</li>
            <li>
              ✅ Support from experienced professionals(7:00 AM to 12:00 AM)
            </li>
          </ul>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
          <h2>What Our Clients Say</h2>
          <div className="testimonial">
            <p>
              Secure Restore saved our data from a major ransomware attack.
              Highly recommend!"
            </p>
            <span>- Shrijana Bhattarai, Banker</span>
          </div>
          <div className="testimonial">
            <p>
              "Excellent service! Recovered all my critical files within 24
              hours."
            </p>
            <span>- Samjhana Bhattarai, Architect</span>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
