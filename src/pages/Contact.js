

import React from 'react';
import '../style/Contact.css';

function Contact() {
  return (
    <div className="contact-banner">
    <div className="contact">
      {/* Banner Section */}
      <div className='contact-heading'>
        <h1>Contact Us</h1>
        <p>We’re here to help! Get in touch with us for any queries or support.</p>
     
        </div>
      {/* Contact Form Section */}
      {/* <div className="contact-form-container">
        <h2>Get in Touch</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </div> */}

      {/* Contact Info Section */}
      <div className="contact-info">
      <p>Name: Sagar Bhattarai</p>
      <p>Phone: 839399883</p>
      <p>Email: support_secure_restore@gmail.com</p>
      <p>Address: Hupra Chour, Hetauda-4,MakwanPur ,Bagmati Province, Nepal</p>
      </div>
    </div>
    </div>
  );
}

export default Contact;
