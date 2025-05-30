import React from "react";
import "../style/Service.css";
import dataRecoveryIcon from "../assets/slider/data-recovery.jpg";
import ransomeIcon from "../assets/slider/ransomeware-solution.jpg";
import endtoend from "../assets/slider/end-to-end.jpg";
import Carousel from "react-bootstrap/Carousel";
import { Helmet } from "react-helmet";

function Services() {
  return (
    <div className="services-banner">
      <Helmet>
        <title>
          Our Services | Secure Restore Data Recovery & Ransomware Protection
        </title>
        <meta
          name="description"
          content="Explore our expert services in ransomware recovery, data restoration, and end-to-end security solutions tailored for businesses and individuals."
        />
        <meta
          name="keywords"
          content="data recovery services, ransomware solutions, Secure Restore services, end-to-end data recovery, cyber protection"
        />
        <link
          rel="canonical"
          href="https://www.safesecurerestore.com/services"
        />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Ransomware Data Recovery",
            "provider": {
              "@type": "Organization",
              "name": "Secure Restore",
              "url": "https://www.safesecurerestore.com"
            },
            "areaServed": "Worldwide",
            "description": "Secure Restore offers professional ransomware recovery, data restoration, and end-to-end protection solutions for organizations and individuals."
          }
          `}
        </script>
      </Helmet>

      <div className="services">
        <div className="content">
          <h1>Our Services</h1>
          <div className="service-cards">
            {/* Carousel */}
            <Carousel>
              {/* First Slide */}
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={dataRecoveryIcon}
                  alt="Data Recovery Service - Restore corrupted or lost files"
                />
                <Carousel.Caption>
                  <h5>Data Recovery</h5>
                  <p>Recover lost or corrupted data quickly.</p>
                </Carousel.Caption>
              </Carousel.Item>

              {/* Second Slide */}
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ransomeIcon}
                  alt="Ransomware Protection Solution"
                />
                <Carousel.Caption>
                  <h5>Ransomware Solution</h5>
                  <p>
                    Restore your systems and recover from ransomware attacks
                    effectively.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              {/* Third Slide */}
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={endtoend}
                  alt="Complete End-to-End Recovery Solutions"
                />
                <Carousel.Caption>
                  <h5>End-to-End Solutions</h5>
                  <p>We provide comprehensive data recovery services.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
