import React from 'react';
import GlassSurface from './GlassSurface';
import './Header.css';

const Header = () => {
  return (
    <header className="header-wrapper">
      <GlassSurface
        width="100%"
        height={80}
        borderRadius={0}
        borderWidth={0.05}
        brightness={60}
        opacity={0.85}
        blur={15}
        className="header-glass"
      >
        <nav className="nav-content">
          <a href="/" className="logo">
            <img src="ressources1/Logo-JSD-BlancV2.png" alt="Logo JSD" />
          </a>
          <ul className="nav-links">
            <li><a href="/work">Réalisations</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </GlassSurface>
    </header>
  );
};

export default Header;
