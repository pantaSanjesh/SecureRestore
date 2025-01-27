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

  useEffect(() => {
    //fetchLocation();
}, []);

const fetchLocation = async () => {
  const API_KEY = process.env.REACT_APP_OPENCAGE_API_KEY;
  console.log("key",API_KEY);
    try {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;
                
                // Fetch city and country using ip-api.com
                const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`);
                const data = await response.json();

                // Prepare payload
                const locationData = {
                    latitude,
                    longitude,
                    city: data.results[0].components._normalized_city +  data.results[0].components.city_district,
                    country: data.results[0].components.country
                };

                // Send data to the backend
                await fetch("https://localhost:7136/api/location", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(locationData),
                });

                console.log("Location saved:", locationData);
            });
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
