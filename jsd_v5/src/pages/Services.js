// src/pages/Services.js

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  CubeIcon,
  EyeOpenIcon,
  Pencil1Icon,
  GlobeIcon,
} from "@radix-ui/react-icons";
import { BentoGrid, BentoCard } from "../components/ui/bento-grid";
import { Gallery4 } from "../components/gallery4";

// Imports des composants de section
import { Design } from "../components/Design";
import { Architecture } from "../components/Architecture";
import { StandEvent } from "../components/StandEvenementiel";
import { WebDesign } from "../components/Web";

const ServicesPage = () => {
  // Récupération de l'ancre (#...) dans l'URL
  const { hash } = useLocation();

  // Gestion du scroll automatique lors de l'arrivée sur la page avec une ancre
  useEffect(() => {
    if (hash) {
      // Petit délai pour laisser le temps aux composants de se charger
      const timer = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
      return () => clearTimeout(timer); // Nettoyage du timer
    } else {
      // Si pas d'ancre, on remonte en haut de page
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-20 text-slate-900">
      {/* En-tête centré */}
      <header className="mb-20 flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-semibold lg:text-5xl text-[rgba(0,0,0,0.8)]">
          Services
        </h1>
      </header>

      <BentoGrid>
        <BentoCard
          name="Stand & événementiel"
          Icon={CubeIcon}
          description="Conception et visualisation 3D de stands sur mesure pour salons, festivals et pop-up stores, pensés pour maximiser l'impact de marque et l'expérience visiteur."
          href="#stand"
          cta="Voir les stands"
          background={
            <div className="bg-gradient-to-br from-orange-100 via-amber-50 to-white" />
          }
          className="md:col-span-2"
        />

        <BentoCard
          name="Architecture & espaces"
          Icon={EyeOpenIcon}
          description="Rendus 3D d'architecture extérieure et d'aménagement intérieur."
          href="#architecture"
          cta="Voir l'architecture"
          background={
            <div className="bg-gradient-to-br from-slate-100 via-slate-50 to-white" />
          }
          className="md:col-span-1"
        />

        <BentoCard
          name="Design produit & objets"
          Icon={Pencil1Icon}
          description="Design produit, prototypage visuel et images 3D photoréalistes."
          href="#design"
          cta="Voir le design"
          background={
            <div className="bg-gradient-to-br from-violet-100 via-indigo-50 to-white" />
          }
          className="md:col-span-1"
        />

        <BentoCard
          name="Web et site internet"
          Icon={GlobeIcon}
          description="Conception et développement de sites internet modernes, React ou HTML, afin de valoriser votre image de marque."
          href="#web"
          cta="Voir le web"
          background={
            <div className="bg-gradient-to-br from-neutral-100 via-white to-neutral-50" />
          }
          className="md:col-span-2"
        />
      </BentoGrid>

      {/* Sections de services avec IDs pour les ancres */}
      {/* scroll-mt-32 permet de laisser de la marge pour le header fixe lors du scroll */}
      
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

      {/* Galerie de réalisations récentes liée aux services */}
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
