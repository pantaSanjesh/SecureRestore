import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center text-lg-start py-3 mt-4">
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-lg-6 text-lg-start mb-2">
            <p>&copy; {new Date().getFullYear()} Recovery Experts. All Rights Reserved.</p>
          </div>

          {/* Right Section */}
          <div className="col-lg-6 text-lg-end">
            <a href="/privacy-policy" className="text-white me-3">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
