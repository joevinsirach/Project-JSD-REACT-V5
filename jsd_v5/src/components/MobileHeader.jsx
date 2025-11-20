import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../ressources1/Logo-JSD-BlancV2.png';

const MobileHeader = () => {
  return (
    // z-[20000] : Supérieur au menu déroulant (z-[10000]) pour rester toujours visible
    <header className="fixed top-0 left-0 right-0 z-[20000] flex justify-center items-center h-24 md:hidden pointer-events-none">
      
      {/* Logo cliquable */}
      <Link to="/" className="relative pointer-events-auto">
        <img 
          src={logo} 
          alt="JSD Logo" 
          style={{ 
            height: '35px', 
            width: 'auto', 
            objectFit: 'contain',
            // Noir 85%
            filter: 'brightness(0) opacity(0.85)' 
          }}
        />
      </Link>
    </header>
  );
};

export default MobileHeader;
