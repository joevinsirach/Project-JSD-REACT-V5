import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import { AnimatePresence, motion } from "framer-motion";
import GlassSurface from "./GlassSurface/GlassSurface"; 

import logoMenu from "../ressources1/Logo-JSD-BlancV2.png";
import logoWork from "../ressources1/logocontact copie_blanc1.png";
import logoServices from "../ressources1/logocontact copie 2_blanc1.png";
import logoContact from "../ressources1/logocontact_blanc1.png";

const MobileNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // Hook pour la navigation manuelle

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Fonction magique : Navigue ET Scroll Top
  const handleNavigation = (path) => {
    setIsMenuOpen(false); // Ferme le menu si ouvert
    navigate(path); // Change de page
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Remonte en haut
  };

  const iconStyle = { 
    height: '22px', 
    width: 'auto', 
    objectFit: 'contain',
    filter: 'brightness(0) opacity(0.85)' 
  };

  const textStyle = "text-[9px] font-bold tracking-widest text-black/85 mt-1"; 

  return (
    <>
      {/* Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-white/95 text-black backdrop-blur-xl"
          >
            <nav className="flex flex-col gap-8 text-center">
              {/* Boutons du Menu Overlay avec Scroll Top */}
              <button onClick={() => handleNavigation('/')} className="text-4xl font-black tracking-tighter">ACCUEIL</button>
              <button onClick={() => handleNavigation('/services')} className="text-4xl font-black tracking-tighter">SERVICES</button>
              <button onClick={() => handleNavigation('/work')} className="text-4xl font-black tracking-tighter">PROJETS</button>
              <button onClick={() => handleNavigation('/contact')} className="text-4xl font-black tracking-tighter">CONTACT</button>
            </nav>
            <button 
              onClick={toggleMenu}
              className="absolute bottom-32 text-sm font-bold uppercase tracking-widest border-2 border-black px-8 py-3 rounded-full"
            >
              Fermer
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BARRE DE NAVIGATION */}
      <div className="fixed bottom-6 left-0 right-0 z-[9999] flex justify-center md:hidden pointer-events-none">
        <div className="pointer-events-auto">
            <GlassSurface
                width="92vw" 
                height={65}
                borderRadius={32}
                borderWidth={0} 
                brightness={100}
                opacity={0.65}
                blur={20}
                displace={0.075}
                backgroundOpacity={0.4}
                className="flex items-center justify-around shadow-2xl"
            >
                {/* Bouton Menu (Toggle) */}
                <button onClick={toggleMenu} className="flex flex-col items-center justify-center w-20 h-full active:scale-95 transition-transform z-20">
                    <img src={logoMenu} alt="Menu" style={iconStyle} />
                    <span className={textStyle}>MENU</span>
                </button>

                {/* Bouton Projets (Work) - Utilise handleNavigation au lieu de Link */}
                <button onClick={() => handleNavigation('/work')} className={`flex flex-col items-center justify-center w-20 h-full active:scale-95 transition-transform z-20 ${location.pathname === '/work' ? 'opacity-100' : 'opacity-70'}`}>
                    <img src={logoWork} alt="Projets" style={iconStyle} />
                    <span className={textStyle}>PROJETS</span>
                </button>

                {/* Bouton Services */}
                <button onClick={() => handleNavigation('/services')} className={`flex flex-col items-center justify-center w-20 h-full active:scale-95 transition-transform z-20 ${location.pathname === '/services' ? 'opacity-100' : 'opacity-70'}`}>
                    <img src={logoServices} alt="Services" style={iconStyle} />
                    <span className={textStyle}>SERVICES</span>
                </button>

                {/* Bouton Contact */}
                <button onClick={() => handleNavigation('/contact')} className={`flex flex-col items-center justify-center w-20 h-full active:scale-95 transition-transform z-20 ${location.pathname === '/contact' ? 'opacity-100' : 'opacity-70'}`}>
                    <img src={logoContact} alt="Contact" style={iconStyle} />
                    <span className={textStyle}>CONTACT</span>
                </button>

            </GlassSurface>
        </div>
      </div>
    </>
  );
};

export default MobileNavBar;
