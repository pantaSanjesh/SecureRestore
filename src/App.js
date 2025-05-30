import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import  './App.css'
import Home from './pages/Home';
import { useEffect } from 'react';

function App() {
  const API_KEY = process.env.REACT_APP_OPENCAGE_API_KEY;
  useEffect(() => {
    fetchLocation();
}, []);

const fetchLocation = async () => {
  try {
      if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(
              async (position) => {
                  const { latitude, longitude } = position.coords;

                  // Fetch city & country using OpenCage API
                  const geoResponse = await fetch(
                      `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`
                  );
                  const geoData = await geoResponse.json();

                  let city = geoData.results[0]?.components.city || "Unknown";
                  let country = geoData.results[0]?.components.country || "Unknown";

                  console.log("User Location:", { latitude, longitude, city, country });
              },
              (error) => {
                  console.error("Geolocation error:", error.message);
              },
              { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
          );
      } else {
          console.log("Geolocation not supported.");
      }
  } catch (error) {
      console.error("Error fetching location:", error);
  }
};

  
  return (
    <div className="d-flex flex-column vh-100">
      <Header />
      <main className="flex-grow-1 d-flex justify-content-center align-items-center">
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
