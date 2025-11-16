import React from 'react';
import GlassSurface from './GlassSurface/GlassSurface';
import './Header.css';
import logo from '../ressources1/Logo-JSD-BlancV2.png';
import { useScrollContext } from '../context/ScrollContext';

const Header = () => {
  const { scrollProgress } = useScrollContext();
  
  // Transition progressive de blanc (0) à noir (1)
  // Interpolation RGB : blanc (255,255,255) -> noir (0,0,0)
  const colorValue = Math.round(255 * (1 - scrollProgress));
  const textColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
  
  // Filtre pour le logo : de brightness(1) à brightness(0)
  const logoFilter = `brightness(${1 - scrollProgress})`;

  return (
    <header className="header-wrapper">
      <div className="header-container">
        <GlassSurface
          width="100%"
          height={80}
          borderRadius={40}
          borderWidth={0.05}
          brightness={60}
          opacity={0.85}
          blur={15}
          className="header-glass"
        >
          <nav className="nav-content">
            <a href="/" className="logo">
              <img 
                src={logo} 
                alt="Logo JSD"
                style={{
                  filter: logoFilter,
                  transition: 'filter 0.1s linear'
                }}
              />
            </a>
            <ul className="nav-links">
              <li>
                <a 
                  href="/work"
                  style={{ 
                    color: textColor, 
                    transition: 'color 0.1s linear' 
                  }}
                >
                  Réalisations
                </a>
              </li>
              <li>
                <a 
                  href="/services"
                  style={{ 
                    color: textColor, 
                    transition: 'color 0.1s linear' 
                  }}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="/contact"
                  style={{ 
                    color: textColor, 
                    transition: 'color 0.1s linear' 
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </GlassSurface>
      </div>
    </header>
  );
};

export default Header;
