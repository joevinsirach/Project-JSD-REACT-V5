"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      // On calcule la hauteur totale du contenu de la timeline
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // MODIF IMPORTANTE : On track du début du container jusqu'à sa fin complète
    offset: ["start 10%", "end 90%"], 
  });

  // Transformation de la hauteur de la barre colorée (0 -> Hauteur totale)
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      
      {/* Marge du haut pour le titre (optionnel) */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10"></div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            
            {/* Colonne Gauche (Date + Rond) */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              
              {/* MODIF : Ronds plus petits (h-6 w-6 au lieu de h-10 w-10) */}
              <div className="h-6 absolute left-6 md:left-6 w-6 rounded-full bg-white dark:bg-black flex items-center justify-center border border-neutral-300 shadow-sm">
                {/* Petit point intérieur */}
                <div className="h-2 w-2 rounded-full bg-neutral-400 dark:bg-neutral-600" />
              </div>

              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            {/* Colonne Droite (Contenu) */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* --- BARRE DE PROGRESSION --- */}
        <div
          style={{
            height: height + "px",
          }}
          // MODIF : Positionnement ajusté (left-9 pour s'aligner avec le centre des ronds de 24px/6 tailwind)
          // Le calcul est : left-6 (parent) + w-6/2 (demi-largeur) = centre
          className="absolute md:left-[2.20rem] left-[2.20rem] top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform, // Applique la transformation calculée
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
