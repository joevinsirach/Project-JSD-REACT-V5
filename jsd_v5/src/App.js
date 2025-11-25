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

// --- IMPORT DE LA PAGE CV ---
import CV from "./pages/CV"; 

// --- IMPORT DE LA LANDING PAGE ---
import Landing1 from "./pages/Landing1";

import GradualBlur from "./components/Animations/GradualBlur/GradualBlur";
import MobileNavBar from "./components/MobileNavBar";
import MobileHeader from "./components/MobileHeader";
import { CarouselPartenaires } from "./components/CarouselPartenaires";

// --- IMPORT DE LA PAGE 404 ---
import NotFound from "./pages/NotFound";

// --- COMPOSANT INTERNE : SCROLL TO TOP ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- COMPOSANT INTERNE : SITE PROTECTION ---
const SiteProtection = () => {
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    
    const handleDragStart = (e) => {
      if (e.target.tagName === 'IMG') e.preventDefault();
    };

    const handleKeyDown = (e) => {
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

// --- COMPOSANT DE CONTENU (POUR GÉRER LA LOGIQUE D'AFFICHAGE) ---
const AppContent = () => {
  const location = useLocation();
  
  // Détection si on est sur la landing page
  const isLandingPage = location.pathname === '/demo' || location.pathname === '/presentation';

  return (
    <>
      <ScrollToTop />
      <SiteProtection />
      
      {/* --- ÉLÉMENTS MASQUÉS SUR LA LANDING PAGE --- */}
      {!isLandingPage && (
        <>
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
        </>
      )}

      {/* --- ROUTING ET PAGES --- */}
      {/* Si on est sur la landing page, on enlève le padding et le z-index standard */}
      <div className={!isLandingPage ? "relative z-10 pb-32 md:pb-0" : ""}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/services" element={<Services />} />
          
          {/* ROUTE CV */}
          <Route path="/cv" element={<CV />} />

          {/* ROUTES LANDING PAGE (DEMO) */}
          <Route path="/demo" element={<Landing1 />} />
          <Route path="/presentation" element={<Landing1 />} />

          {/* ROUTE 404 - TOUJOURS EN DERNIER */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* --- FOOTER ET CAROUSEL (MASQUÉS SUR LANDING PAGE) --- */}
      {!isLandingPage && (
        <>
          <div className="relative z-20">
              <CarouselPartenaires />
          </div>

          <div className="relative z-20 md:z-40 md:bg-white pb-24 md:pb-0">
              <Footer />
          </div>

          <MobileNavBar />
        </>
      )}
    </>
  );
};

// --- COMPOSANT RACINE ---
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
