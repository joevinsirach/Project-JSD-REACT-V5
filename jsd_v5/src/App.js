// jsd_v5/src/App.js

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// --- IMPORTS DES COMPOSANTS ---
import DarkVeil from "./components/backgrounds/DarkVeil/DarkVeil";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import WorkPage from "./pages/Work";
import Services from "./pages/Services";
import GradualBlur from "./components/Animations/GradualBlur/GradualBlur";
import MobileNavBar from "./components/MobileNavBar";
import MobileHeader from "./components/MobileHeader";
import { CarouselPartenaires } from "./components/CarouselPartenaires";

// --- COMPOSANT INTERNE : SCROLL TO TOP ---
// On le définit ici pour éviter les erreurs d'import de fichier
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      {/* Active le scroll vers le haut */}
      <ScrollToTop />

      <DarkVeil hueShift={200} speed={1} noiseIntensity={0.01} />

      {/* Z-Index 1 pour les flous (au lieu de 10) */}
      <GradualBlur
        position="top"
        target="page"
        height="3.5rem"
        strength={0.5}
        opacity={0.9}
        divCount={4}
        curve="smooth"
        animated={false}
        zIndex={1}
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0) 100%)",
        }}
      />

      <GradualBlur
        position="bottom"
        target="page"
        height="3.5rem"
        strength={0.25}
        opacity={0.9}
        divCount={4}
        curve="smooth"
        animated={false}
        zIndex={1}
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0) 100%)",
        }}
      />

      {/* HEADER MOBILE */}
      <MobileHeader />
      
      {/* HEADER DESKTOP */}
      <div className="hidden md:block relative">
        <Header theme="light" />
      </div>

      {/* CONTENU */}
      <div className="relative z-10 pb-32 md:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/services" element={<Services />} />
        </Routes>

        <CarouselPartenaires />
        <Footer />
      </div>

      {/* BARRE NAVIGATION MOBILE */}
      <MobileNavBar />
      
    </Router>
  );
}

export default App;
