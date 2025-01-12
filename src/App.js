import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import  './App.css'
import Home from './pages/Home';

function App() {
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
