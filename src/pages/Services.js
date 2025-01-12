import React from "react";
import "../style/Service.css";
import dataRecoveryIcon from "../assets/slider/data-recovery.jpg";
import ransomeIcon from "../assets/slider/ransomeware-solution.jpg";
import endtoend from "../assets/slider/end-to-end.jpg"

// Import Bootstrap Carousel
import Carousel from "react-bootstrap/Carousel";

function Services() {
  return (
    <div className="services-banner">
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
                  alt="First slide"
                  
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
                  alt="Second slide"
                   
                />
                <Carousel.Caption>
                  <h5>Ransomware Protection</h5>
                  <p>Secure your systems from ransomware attacks.</p>
                </Carousel.Caption>
              </Carousel.Item>

              {/* Third Slide */}
              <Carousel.Item>
                <img className="d-block w-100" src={endtoend} alt="Third slide"   />
                <Carousel.Caption>
                  <h5>Our  Motive</h5>
                  <p>We provide end-to-end data recovery solutions.</p>
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
