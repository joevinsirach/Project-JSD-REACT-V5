import React, { useRef } from "react";
import logo from "../ressources1/Logo-JSD-Blanc.png"; // chemin vers ton logo
import "./holographic-card.css";

const HolographicCard = () => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
    card.style.setProperty("--bg-x", `${(x / rect.width) * 100}%`);
    card.style.setProperty("--bg-y", `${(y / rect.height) * 100}%`);
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    card.style.setProperty("--x", `50%`);
    card.style.setProperty("--y", `50%`);
    card.style.setProperty("--bg-x", "50%");
    card.style.setProperty("--bg-y", "50%");
  };

  return (
    <div
      className="component-card holographic-card flex items-center gap-8"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Logo à gauche */}
      <div className="logo-container flex-shrink-0">
        <img src={logo} alt="Logo JSD" className="h-28 w-auto object-contain" />
      </div>

      {/* Contenu texte à droite, justifié */}
      <div className="holo-content flex-1 text-right">
        <h3 className="component-title">
          JSD Global Design
        </h3>
        <p className="component-description">
          Studio créatif spécialisé en design et visualisation 3D.
        </p>

        <div className="contact-info mt-6 text-white text-sm">
          <div>07 69 59 62 00</div>
          <div>joevinsirach@gmail.com</div>
        </div>
      </div>

      {/* Effet lumineux */}
      <div className="holo-glow"></div>
    </div>
  );
};

export default HolographicCard;