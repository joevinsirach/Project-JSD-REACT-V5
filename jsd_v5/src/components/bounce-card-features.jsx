import React from "react";
import { motion } from "framer-motion";

// Import des images
import maisonMorreale from '../ressources1/MaisonMORREALE_V7.webp';
import plan from '../ressources1/NORMAL_CHANDON_V1.webp';
import piq from '../ressources1/PIQin.1.webp';
import cam from '../ressources1/Cam1HQ.webp';

export const BouncyCardsFeatures = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 text-slate-800">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-3xl font-medium md:text-4xl lg:text-5xl">
          Vous avez une idée ?<br />
          <span className="font-ubuntu font-black bg-gradient-to-br from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
            on a le design
          </span>
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700"
        >
          Learn more
        </motion.button>
      </div>

      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Architecture</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-16 translate-y-8 rounded-t-2xl overflow-hidden transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <img src={maisonMorreale} alt="Visualisation 3D Architecture" className="w-full h-full object-cover" />
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Stand Promotionnel</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-16 translate-y-8 rounded-t-2xl overflow-hidden transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <img src={plan} alt="Stand événementiel Moet Chandon" className="w-full h-full object-cover" />
          </div>
        </BounceCard>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Product Design</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-16 translate-y-8 rounded-t-2xl overflow-hidden transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <img src={piq} alt="Visualisation produit PIQ in" className="w-full h-full object-cover" />
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Intérieur</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-16 translate-y-8 rounded-t-2xl overflow-hidden transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <img src={cam} alt="Architecture intérieur rendu 3D" className="w-full h-full object-cover" />
          </div>
        </BounceCard>
      </div>
    </section>
  );
};

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 border border-gray-200 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-2xl font-semibold">{children}</h3>
  );
};
