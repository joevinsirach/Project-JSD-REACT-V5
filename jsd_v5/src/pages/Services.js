import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import DisplayCards from "../components/ui/display-cards";
import { Gallery4 } from "../components/gallery4";
import TitreSimpleJSD from "../components/TitreSimpleJSD";

import { Design } from "../components/Design";
import { Architecture } from "../components/Architecture";
import { StandEvent } from "../components/StandEvenementiel";
import { WebDesign } from "../components/Web";

import { PricingCard } from "../components/pricing-card-1";
import { CarouselPartenaires } from "../components/CarouselPartenaires";

const ServicesPage = () => {
  const { hash } = useLocation();

  // Ce code gère déjà le scroll automatique vers #tarifs
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

  // --- MISES A JOUR DES CARTES ICI ---
  const pricingCards = [
    {
      title: "Rendu 3D & Design",
      price: "350€",
      priceDescription: "à partir de / image",
      description: "Images photoréalistes pour produits ou architecture.",
      features: ["Modélisation 3D", "Texturing & Éclairage", "Rendu haute définition 4K", "Retouches incluses"],
      buttonText: "Demander un devis",
    },
    {
      title: "Site Web",
      price: "1200€",
      priceDescription: "à partir de",
      description: "Création de site vitrine ou landing page moderne.",
      features: ["Design responsive", "Développement React/Next.js", "Optimisation SEO de base", "Hébergement & Noms de domaine"],
      buttonText: "Lancer mon projet",
    },
    {
      title: "Projet Sur Mesure",
      price: "Sur devis",
      priceDescription: "Étude personnalisée",
      description: "Pour les projets complexes nécessitant une expertise globale.",
      features: ["Direction artistique complète", "Applications web complexes", "Animation 3D & Vidéo", "Suivi de projet dédié"],
      buttonText: "Contactez-nous",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 pt-12 pb-20 md:pt-32 md:pb-20 text-slate-900">

      <TitreSimpleJSD title="Services" />
      <p className="-mt-8 text-center max-w-2xl mx-auto text-lg text-slate-600">
        Scrollez pour explorer nos services ou cliquez sur une carte pour en savoir plus.
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

      {/* --- SECTION PRICING CARDS AVEC ID --- */}
      <div id="tarifs" className="scroll-mt-32 mt-16"> 
        <section className="flex justify-center w-full overflow-visible">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {pricingCards.map((card, index) => (
              <PricingCard
                key={index}
                className="skew-y-[6deg]"
                title={card.title}
                price={card.price}
                priceDescription={card.priceDescription}
                description={card.description}
                features={card.features}
                buttonText={card.buttonText}
              />
            ))}
          </div>
        </section>
      </div>

      <div className="-mt-6">
        <Gallery4
          title="Rejoignez nos clients satisfaits"
          description="Quelques unes de nos dernières réalisations."
        />
      </div>

      <div className="relative z-40 mt-16">
        <CarouselPartenaires />
      </div>

    </main>
  );
};

export default ServicesPage;
