import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import DisplayCards from "../components/ui/display-cards";
import { Gallery4 } from "../components/gallery4";
import TitreSimpleJSD from "../components/TitreSimpleJSD";

import { Design } from "../components/Design";
import { Architecture } from "../components/Architecture";
import { StandEvent } from "../components/StandEvenementiel";
import { WebDesign } from "../components/Web";

// Import nommé (avec les accolades) pour éviter l'erreur "export default not found"
import { PricingCard } from "../components/pricing-card-1";
import { CarouselPartenaires } from "../components/CarouselPartenaires";

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

  const pricingCards = [
    {
      title: "Basic",
      price: "€99",
      priceDescription: "par mois",
      description: "Pour les projets simples et efficaces.",
      features: ["Design épuré", "Hébergement gratuit", "Support par email"],
      buttonText: "Choisir Basic",
    },
    {
      title: "Pro",
      price: "€199",
      priceDescription: "par mois",
      description: "Parfait pour les petites entreprises.",
      features: ["Design personnalisé", "SEO optimisé", "Support 24/7"],
      buttonText: "Choisir Pro",
    },
    {
      title: "Enterprise",
      price: "Sur devis",
      description: "Solutions sur-mesure pour grands comptes.",
      features: ["Consulting dédié", "Hébergement premium", "Formation"],
      buttonText: "Contactez-nous",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 pt-12 pb-20 md:pt-32 md:pb-20 text-slate-900">

      {/* En-tête */}
      <TitreSimpleJSD title="Services" />
      <p className="-mt-8 text-center max-w-2xl mx-auto text-lg text-slate-600">
        Scrollez pour explorer nos services ou cliquez sur une carte pour en savoir plus.
      </p>

      {/* Display Cards 3D */}
      <div className="flex justify-center">
        <DisplayCards />
      </div>

      {/* Sections de Services */}
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

      {/* --- SECTION PRICING CARDS --- */}
      {/* J'ai réduit les marges (mt-8 et md:mt-0) pour remonter les cartes */}
      <section className="grid h-[32rem] md:h-[40rem] w-full place-items-center overflow-visible mt-8 md:mt-0">
        <div className="grid [grid-template-areas:'stack'] relative right-12 md:right-16 top-[2rem] md:top-[4rem] gap-6 md:grid-cols-3">
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

      {/* Galerie Clients */}
      <div className="-mt-6">
        <Gallery4
          title="Rejoignez nos clients satisfaits"
          description="Quelques unes de nos dernières réalisations."
        />
      </div>

      {/* Carousel Partenaires */}
      <div className="relative z-40 mt-16">
        <CarouselPartenaires />
      </div>

    </main>
  );
};

export default ServicesPage;
