import React from "react";
import { motion } from "framer-motion";

// Import des images
import maisonMorreale from '../ressources1/MaisonMORREALE_V7.webp';
import plan from '../ressources1/NORMAL_CHANDON_V1.webp';
import piq from '../ressources1/PIQin.1.webp';
import cam from '../ressources1/Cam1HQ.webp';

export const BouncyCardsFeatures = () => {
  // Fonction pour rediriger le bouton "Tout voir"
  const handleSeeAll = () => {
    window.location.href = "/services";
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-32">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between md:mb-14 lg:mb-16">
          <div className="max-w-lg text-left flex flex-col gap-4">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">
              Vous avez une idée ?<br />
              <span className="font-ubuntu font-black bg-gradient-to-br from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
                on a le design
              </span>
            </h2>
          </div>
          <motion.button
            onClick={handleSeeAll}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg bg-slate-900 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700 mt-4 self-start max-w-max cursor-pointer"
          >
            Tout voir
          </motion.button>
        </div>

        <div className="mb-4 grid grid-cols-12 gap-4">
          {/* Carte Architecture -> #architecture */}
          <BounceCard className="col-span-12 md:col-span-4" href="/services#architecture">
            <CardTitle>Architecture</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-16 translate-y-8 rounded-t-2xl overflow-hidden transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <img src={maisonMorreale} alt="Visualisation 3D Architecture" className="w-full h-full object-cover" />
            </div>
          </BounceCard>
          
          {/* Carte Stand -> #stand */}
          <BounceCard className="col-span-12 md:col-span-8" href="/services#stand">
            <CardTitle>Stand Promotionnel</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-16 translate-y-8 rounded-t-2xl overflow-hidden transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <img src={plan} alt="Stand événementiel Moet Chandon" className="w-full h-full object-cover" />
            </div>
          </BounceCard>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {/* Carte Product Design -> #design */}
          <BounceCard className="col-span-12 md:col-span-8" href="/services#design">
            <CardTitle>Product Design</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-16 translate-y-8 rounded-t-2xl overflow-hidden transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <img src={piq} alt="Visualisation produit PIQ in" className="w-full h-full object-cover" />
            </div>
          </BounceCard>
          
          {/* Carte Intérieur (souvent lié à architecture ou design) -> #architecture */}
          <BounceCard className="col-span-12 md:col-span-4" href="/services#architecture">
            <CardTitle>Intérieur</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-16 translate-y-8 rounded-t-2xl overflow-hidden transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <img src={cam} alt="Architecture intérieur rendu 3D" className="w-full h-full object-cover" />
            </div>
          </BounceCard>
        </div>
      </div>
    </section>
  );
};

// Modification du composant BounceCard pour accepter href et agir comme un lien
const BounceCard = ({ className, children, href }) => {
  return (
    <motion.a
      href={href} // Lien vers l'ancre
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 border border-gray-200 block ${className}`} // block ajouté pour le comportement de lien
    >
      {children}
    </motion.a>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-2xl font-semibold">{children}</h3>
  );
};
