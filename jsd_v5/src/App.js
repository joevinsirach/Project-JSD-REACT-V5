import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DarkVeil from './components/backgrounds/DarkVeil/DarkVeil';
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { CarouselPartenaires } from './components/CarouselPartenaires';

function App() {
  return (
    <Router>
      <DarkVeil hueShift={200} speed={1} noiseIntensity={0.01} />
      <Header theme="light" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <CarouselPartenaires />
      <Footer />
    </Router>
  );
}

export default App;