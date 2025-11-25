import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  // Détection Mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // --- CONFIGURATION DES STYLES MOBILE (NOIR) ---
  
  // Conteneur : Transparent sur mobile
  const containerStyle = isMobile ? {
    backgroundColor: 'transparent',
    background: 'transparent',
    border: 'none',
    boxShadow: 'none',
    paddingTop: '20px'
  } : {};

  // Textes courants : NOIR (0,0,0) avec opacité 85%
  const textStyle = isMobile ? {
    color: 'rgba(0, 0, 0, 0.85)', 
    fontSize: '0.95rem',
    fontWeight: '500' 
  } : {};

  // Titres : NOIR PUR
  const titleStyle = isMobile ? {
    color: '#000000', 
    marginBottom: '1rem',
    fontWeight: '700'
  } : {};

  // Liens : NOIR 85%
  const linkStyle = isMobile ? {
      color: 'rgba(0, 0, 0, 0.85)',
      textDecoration: 'none',
      fontWeight: '500'
  } : {};

  return (
    <footer id="contact" style={containerStyle}>
      <div className="footer-content" style={containerStyle}>
        
        <div className="footer-section">
          <h3 style={titleStyle}>À propos</h3>
          <p style={textStyle}>
            Studio créatif spécialisé en design et visualisation 3D, nous
            donnons vie à vos idées avec des rendus et animations sur-mesure.
          </p>
        </div>
        
        <div className="footer-section">
          <h3 style={titleStyle}>Liens Rapides</h3>
          <ul>
            <li><Link to="/" style={linkStyle}>Accueil</Link></li>
            <li><Link to="/services" style={linkStyle}>Services</Link></li>
            <li><Link to="/services#tarifs" style={linkStyle}>Tarifs</Link></li>
            <li><Link to="/work" style={linkStyle}>Réalisations</Link></li>
            <li><Link to="/cv" style={linkStyle}>CV</Link></li>
            {/* AJOUT DU LIEN DEMO */}
            <li><Link to="/demo" style={linkStyle}>Présentation</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 style={titleStyle}>Contact</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={textStyle}>Email : joevinsirach@gmail.com</li>
            <li style={textStyle}>Phone : +33 7 69 59 62 00</li>
          </ul>
        </div>
        
      </div>
      
      {/* Ligne de séparation noire légère sur mobile */}
      <div className="footer-bottom" style={{ 
          ...containerStyle, 
          borderTop: isMobile ? '1px solid rgba(0,0,0,0.1)' : undefined,
          marginTop: isMobile ? '20px' : undefined
        }}>
        <p style={textStyle}>© 2025 JSD Global Design. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
