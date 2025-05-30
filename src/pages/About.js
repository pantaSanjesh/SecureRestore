import React from "react";
import "../style/About.css";
import { Helmet } from "react-helmet";
function About() {
  return (
    <div className="about-banner">
      <Helmet>
        <title>About Secure Restore | Ransomware & Data Recovery Experts</title>
        <meta
          name="description"
          content="Learn about Secure Restore – leaders in ransomware removal and data recovery services. We help businesses and individuals recover encrypted files and stay secure."
        />
        <meta
          name="keywords"
          content="About Secure Restore, ransomware experts, data recovery company, cybersecurity, encrypted file recovery"
        />
        <link rel="canonical" href="https://www.safesecurerestore.com/about" />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Secure Restore",
            "url": "https://www.safesecurerestore.com",
            "description": "We help individuals and companies recover data encrypted by ransomware and protect against cyber threats.",
            "sameAs": [
              "https://www.linkedin.com/company/securerestore",
              "https://www.facebook.com/securerestore"
            ]
          }
          `}
        </script>
      </Helmet>

      <div className="content">
        <h1>About Us</h1>
        <p>
          We are industry leaders in ransomware and data recovery solutions.
          With years of experience, we help individuals and businesses recover
          critical data and prevent cyber threats.
        </p>
      </div>
      <div className="about-details">
        <p className="about-text">
          Our team of professionals has helped countless clients achieve peace
          of mind by ensuring their data remains safe and secure. From large
          enterprises to small businesses, we offer tailored recovery solutions
          to meet diverse needs.
        </p>
      </div>
    </div>
  );
}

export default About;
