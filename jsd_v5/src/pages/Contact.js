import React from "react";
import HolographicCard from "../components/holographic-card";
import ContactCards from "../components/ContactCards";

const ContactSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 text-slate-800">
      {/* Titre avec marges et tailles actuelles */}
      <h2 className="max-w-lg text-3xl font-medium md:text-4xl lg:text-5xl mt-12 mb-20">
        Contactez-nous
      </h2>

      {/* Texte descriptif au-dessus avec marge inférieure */}
      <div className="max-w-2xl mx-auto mt-8 mb-16 text-center text-gray-700 text-lg md:text-xl leading-relaxed">
        <p>
          Notre équipe est disponible et à votre écoute pour discuter de vos projets de design, visualisation 3D, stands d'exposition et architecture.
          <br />
          <br />Nous établissons des devis rapides et gratuits adaptés à vos besoins.
          <br />A très vite.
        </p>
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
