import React from 'react';
import GlassSurface from './GlassSurface/GlassSurface';
import './Header.css';
import logo from '../ressources1/Logo-JSD-BlancV2.png';

const Header = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';
  
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
                  filter: isDark ? 'none' : 'brightness(0) opacity(0.85)',
                  transition: 'filter 0.3s ease'
                }}
              />
            </a>
            <ul className="nav-links">
              <li>
                <a 
                  href="/work"
                  style={{ 
                    color: isDark ? 'white' : 'rgba(0, 0, 0, 0.85)',
                    transition: 'color 0.3s ease'
                  }}
                >
                  Réalisations
                </a>
              </li>
              <li>
                <a 
                  href="/services"
                  style={{ 
                    color: isDark ? 'white' : 'rgba(0, 0, 0, 0.85)',
                    transition: 'color 0.3s ease'
                  }}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="/contact"
                  style={{ 
                    color: isDark ? 'white' : 'rgba(0, 0, 0, 0.85)',
                    transition: 'color 0.3s ease'
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
