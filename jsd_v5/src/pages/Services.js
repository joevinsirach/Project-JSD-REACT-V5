import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import DisplayCards from "../components/ui/display-cards";
import { Gallery4 } from "../components/gallery4";

// Ajout de l'import du titre personnalisé
import TitreSimpleJSD from "../components/TitreSimpleJSD";

import { Design } from "../components/Design";
import { Architecture } from "../components/Architecture";
import { StandEvent } from "../components/StandEvenementiel";
import { WebDesign } from "../components/Web";

const ServicesPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <main className="mx-auto max-w-6xl px-4 pt-12 pb-20 md:pt-32 md:pb-20 text-slate-900">
      
      {/* En-tête remplacé par le composant TitreSimpleJSD */}
      <TitreSimpleJSD title="Services" />
      
      <p className="-mt-8 text-center max-w-2xl mx-auto text-lg text-slate-600">
        Cliquez sur une carte pour en savoir plus.
      </p>

      <div className="flex justify-center">
        <DisplayCards />
      </div>

      <div id="design" className="scroll-mt-32">
        <Design />
      </div>

      <div id="architecture" className="scroll-mt-32">
        <Architecture />
      </div>

      <div id="stand" className="scroll-mt-32">
        <StandEvent />
      </div>

      <div id="web" className="scroll-mt-32">
        <WebDesign />
      </div>

      <div className="-mt-6">
        <Gallery4
          title="Rejoignez nos clients satisfaits"
          description="Quelques unes de nos dernières réalisations."
        />
      </div>
    </main>
  );
};

export default ServicesPage;
