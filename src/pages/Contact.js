import React from "react";
import "../style/Contact.css";

function Contact() {
  return (
    <div className="contact-banner">
      <div className="contact">
        {/* Contact Heading */}
        <div className="contact-heading">
          <h1>Contact Us</h1>
          <p>
            We’re here to help! Get in touch with us
            <span className="force-new-line">for any queries or support.</span>
          </p>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <p>Name: Sagar Bhattarai</p>
          <p>Phone: 839399883</p>
          <p>Email: support_secure_restore@gmail.com</p>
          <p>
            Address: Hupra Chour, Hetauda-4, MakwanPur, Bagmati Province, Nepal
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
