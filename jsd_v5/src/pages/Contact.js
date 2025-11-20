import React from "react";
import HolographicCard from "../components/holographic-card";
import ContactCards from "../components/ContactCards";
import TitreSimpleJSD from "../components/TitreSimpleJSD";
import SousTitreSimpleJSD from "../components/SousTitreSimpleJSD";

const ContactSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 text-slate-800">
      {/* Groupe Titre + Sous-titre */}
      <div className="mt-12 mb-16">
        <TitreSimpleJSD>Contactez-nous</TitreSimpleJSD>
        
        <div className="mt-8">
          <SousTitreSimpleJSD>
            Notre équipe est disponible et à votre écoute pour discuter de vos projets de design, visualisation 3D, stands d'exposition et architecture.
            <br /><br />
            Nous établissons des devis rapides et gratuits adaptés à vos besoins.
            <br />
            A très vite.
          </SousTitreSimpleJSD>
        </div>
      </div>

      {/* Nouveau composant ContactCards avec espacement */}
      <div className="mt-8 mb-16">
        <ContactCards />
      </div>

      {/* Composant HolographicCard */}
      <div className="max-w-lg mx-auto mb-12">
        <HolographicCard />
      </div>
    </section>
  );
};

export default ContactSection;
