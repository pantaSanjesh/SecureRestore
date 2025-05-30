import React from "react";
import "../style/Contact.css";
import { Helmet } from "react-helmet";

function Contact() {
  return (
    <div className="contact-banner">
      <Helmet>
        <title>
          Contact Secure Restore | Ransomware & Data Recovery Experts
        </title>
        <meta
          name="description"
          content="Need help with ransomware recovery or data restoration? Contact Secure Restore via phone or visit us in Hetauda, Nepal."
        />
        <meta
          name="keywords"
          content="Secure Restore contact, ransomware support, data recovery contact, Nepal cyber recovery"
        />
        <link
          rel="canonical"
          href="https://www.safesecurerestore.com/contact"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Secure Restore",
            "image": "https://www.safesecurerestore.com/logo.png",
            "telephone": "+977-9763481590",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Hetauda",
              "addressLocality": "Makwanpur",
              "addressCountry": "Nepal"
            },
            "url": "https://www.safesecurerestore.com/contact",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+977-9763481590",
              "contactType": "Customer Support",
              "availableLanguage": ["English", "Nepali"]
            }
          }
          `}
        </script>
      </Helmet>

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
          <p>Name: Secure Restore</p>
          <p>Phone: +977-9763481590</p>
          {/* <p>Email: support_secure_restore@gmail.com</p> */}
          <p>Address: Hetauda, Makwanpur, Nepal</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
