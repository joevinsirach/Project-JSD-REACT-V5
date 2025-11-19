// jsd_v5/src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DarkVeil from "./components/backgrounds/DarkVeil/DarkVeil";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { CarouselPartenaires } from "./components/CarouselPartenaires";
import WorkPage from "./pages/Work";
import Services from "./pages/Services";
import GradualBlur from "./components/Animations/GradualBlur/GradualBlur";

function App() {
  return (
    <Router>
      <DarkVeil hueShift={200} speed={1} noiseIntensity={0.01} />

      {/* Blur top progressif + overlay blanc */}
      <GradualBlur
        position="top"
        target="page"
        height="3.5rem"
        strength={0.5}
        opacity={0.9}
        divCount={4}
        curve="smooth"
        animated={false}
        zIndex={10}
        style={{
          // blanc opaque au bord, qui disparaît progressivement vers le contenu
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0) 100%)",
        }}
      />

      {/* Blur bas progressif + overlay blanc */}
      <GradualBlur
        position="bottom"
        target="page"
        height="3.5rem"
        strength={0.25}
        opacity={0.9}
        divCount={4}
        curve="smooth"
        animated={false}
        zIndex={10}
        style={{
          // blanc opaque au bord bas, qui remonte vers transparent
          backgroundImage:
            "linear-gradient(to top, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0) 100%)",
        }}
      />

      {/* Header au-dessus du blur */}
      <Header theme="light" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <CarouselPartenaires />
      <Footer />
    </Router>
  );
}

export default App;
