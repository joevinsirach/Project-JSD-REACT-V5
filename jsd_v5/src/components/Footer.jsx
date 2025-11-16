import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h3>À propos</h3>
          <p>
            Studio créatif spécialisé en design et visualisation 3D, nous
            donnons vie à vos idées avec des rendus et animations sur-mesure.
          </p>
        </div>
        <div className="footer-section">
          <h3>Liens Rapides</h3>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/services">Tarifs</a></li>
            <li><a href="/work">Réalisations</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>Email : joevinsirach@gmail.com</li>
            <li>Phone : +33 7 69 59 62 00</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 JSD Global Design. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
