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
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- COMPOSANT INTERNE : SITE PROTECTION ---
// Bloque le clic droit, le drag d'image et certains raccourcis
const SiteProtection = () => {
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    
    const handleDragStart = (e) => {
      if (e.target.tagName === 'IMG') e.preventDefault();
    };

    const handleKeyDown = (e) => {
      // Bloquer F12 et Ctrl+Shift+I
      if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SiteProtection />
      <DarkVeil hueShift={200} speed={1} noiseIntensity={0.01} />

      {/* FLOU TOP */}
      <GradualBlur
        position="top"
        target="page"
        height="3.5rem"
        strength={0.5}
        opacity={0.9}
        divCount={4}
        curve="smooth"
        animated={false}
        zIndex={30}
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0) 100%)",
        }}
      />

      {/* FLOU BOTTOM */}
      <GradualBlur
        position="bottom"
        target="page"
        height="3.5rem"
        strength={0.25}
        opacity={0.9}
        divCount={4}
        curve="smooth"
        animated={false}
        zIndex={30}
        style={{
          backgroundImage: "linear-gradient(to top, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0) 100%)",
        }}
      />

      <MobileHeader />
      
      <div className="hidden md:block relative z-50">
        <Header theme="light" />
      </div>

      {/* CONTENU PRINCIPAL */}
      <div className="relative z-10 pb-32 md:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>

      {/* CAROUSEL */}
      <div className="relative z-40">
          <CarouselPartenaires />
      </div>

      {/* FOOTER */}
      {/* Mobile : z-20 (sous le flou z-30) + padding-bottom 24 (pour la navbar) */}
      {/* Desktop : z-40 (sur le flou z-30) + bg-white (cache le flou) + pas de padding */}
      <div className="relative z-20 md:z-40 md:bg-white pb-24 md:pb-0">
          <Footer />
      </div>

      <MobileNavBar />
      
    </Router>
  );
}

export default App;
