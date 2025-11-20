import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

// --- IMPORTS DES IMAGES ---
import buenoFlag from '../ressources1/BuenoV3_FACEFLAG.webp';
import cam1 from '../ressources1/Cam1HQ.webp';
import casalini from '../ressources1/CasaliniRenderV3.webp';
import faceBasket from '../ressources1/face-basket.webp';
import lampe from '../ressources1/Lampe3.webp';
import maisonMorreale from '../ressources1/MaisonMORREALE_V7.webp';
import maxicoffee from '../ressources1/Maxicoffee_Nouveau_Corner_H1V2.webp';
import sephora from '../ressources1/MiseEnSituationSephoraV8.webp';
import chandon from '../ressources1/NORMAL_CHANDON_V1.webp';
import piq from '../ressources1/PIQin.1.webp';
import plan from '../ressources1/plan_01_V2_PP.webp';
import postProd from '../ressources1/PostProd5.webp';
import ppRendu from '../ressources1/PP_RenduZoomVenteV1.webp';
import standBat from '../ressources1/RenderPP_Left_StandBAT_Photocall_V5.2_Sarah072024.webp';
import chaises from '../ressources1/Rendu Chaises x Steph le Sushi.2pp.webp';
import stand2 from '../ressources1/Stand2_V5.webp';
import v3Jour from '../ressources1/V3_jour.webp';
import glorifier from '../ressources1/V4-Products_1GLORIFIER.webp';

// --- DONNÉES ---
const data = [
  {
    id: "projet-1",
    title: "Sephora",
    description: "Intégration réaliste de produits cosmétiques Sephora dans un environnement lifestyle élégant.",
    href: "/work",
    image: sephora,
  },
  {
    id: "projet-2",
    title: "Visualisation 3D Archi",
    description: "Visualisation 3D pour un cabinet d'architecture pour particulier.",
    href: "/work",
    image: casalini,
  },
  {
    id: "projet-3",
    title: "Design Produit",
    description: "Rendu de mobilier design.",
    href: "/work",
    image: chaises,
  },
  {
    id: "projet-4",
    title: "Moet / Chandon",
    description: "Conception 3D d'un stand événementiel pour Moet / Chandon",
    href: "/work",
    image: plan,
  },
  {
    id: "projet-5",
    title: "Maxicoffee",
    description: "Aménagement d'un corner café moderne pour point de vente. Design fonctionnel et attractif.",
    href: "/work",
    image: maxicoffee,
  },
  {
    id: "projet-6",
    title: "VUSE / VELO",
    description: "Conception 3D d'un stand événementiel pour VUSE / VELO",
    href: "/work",
    image: stand2,
  },
  {
    id: "projet-7",
    title: "Design Produit",
    description: "Modélisation et rendu 3D pour un industriel chinois.",
    href: "/work",
    image: lampe,
  },
  {
    id: "projet-8",
    title: "Visualisation 3D Intérieur",
    description: "Architecture intérieur et Rendu 3D.",
    href: "/work",
    image: cam1,
  },
  {
    id: "projet-9",
    title: "VUSE / VELO",
    description: "Mise en scène publicitaire de produits avec éclairage intégré.",
    href: "/work",
    image: glorifier,
  },
  {
    id: "projet-10",
    title: "Kinder Bueno",
    description: "Conception 3D d'un stand événementiel pour Kinder.",
    href: "/work",
    image: faceBasket,
  },
  {
    id: "projet-11",
    title: "Visualisation 3D Archi",
    description: "Visualisation architecturale extérieure d'une maison individuelle contemporaine avec environnement paysager.",
    href: "/work",
    image: maisonMorreale,
  },
  {
    id: "projet-12",
    title: "VUSE / VELO",
    description: "Conception 3D d'un stand événementiel pour VUSE / VELO",
    href: "/work",
    image: standBat,
  },
  {
    id: "projet-13",
    title: "PIQ in",
    description: "Visualisation 3D publicitaires pour produit destiné au marché japonais.",
    href: "/work",
    image: piq,
  },
  {
    id: "projet-14",
    title: "JBL",
    description: "Conception 3D d'un stand événementiel pour JBL.",
    href: "/work",
    image: postProd,
  },
  {
    id: "projet-15",
    title: "Moet / Chandon",
    description: "Conception 3D d'un stand événementiel pour Moet / Chandon",
    href: "/work",
    image: v3Jour,
  },
  {
    id: "projet-16",
    title: "Kinder Bueno",
    description: "Conception 3D d'un stand événementiel pour Kinder.",
    href: "/work",
    image: buenoFlag,
  },
  {
    id: "projet-17",
    title: "VUSE / VELO",
    description: "Visualisation détaillée pour support de vente immobilier avec mise en valeur des espaces.",
    href: "/work",
    image: ppRendu,
  },
  {
    id: "projet-18",
    title: "Moet / Chandon",
    description: "Conception 3D d'un stand événementiel pour Moet / Chandon",
    href: "/work",
    image: chandon,
  },
];

const Gallery4 = ({
  title = "Réalisations Récentes",
  description = "Découvrez nos projets de visualisation 3D et design architectural. Des réalisations qui allient créativité, technique et savoir-faire.",
  items = data
}) => {
  const [carouselApi, setCarouselApi] = useState();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) return;
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-32">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between md:mb-14 lg:mb-16">
          <div className="max-w-lg text-left flex flex-col gap-4">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl" style={{ color: 'rgba(0, 0, 0, 0.8)' }}>
              {title}
            </h2>
            <p style={{ color: 'rgba(0, 0, 0, 0.8)' }}>{description}</p>
          </div>
          <div className="hidden md:flex gap-2 shrink-0">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
            >
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            // OPTION DU CAROUSEL: CENTRAGE + LOOP
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {items.map((item) => (
              <CarouselItem 
                key={item.id} 
                // CLASSE RESPONSIVE : 
                // basis-[85%] sur mobile -> 85% de largeur, centré, laisse voir les bords.
                // md:basis-1/2 -> 50% sur tablette
                // lg:basis-1/3 -> 33% sur desktop
                className="pl-4 basis-[85%] md:basis-1/2 lg:basis-1/3 max-w-[480px]"
              >
                <a href={item.href} className="group rounded-xl block h-full">
                  <div className="group relative overflow-hidden rounded-xl aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/9]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 h-full bg-gradient-to-b from-transparent via-black/40 to-black/80" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                      <div className="mb-2 pt-4 text-xl font-semibold md:mb-3">
                        {item.title}
                      </div>
                      <div className="mb-8 line-clamp-2 md:mb-12">
                        {item.description}
                      </div>
                      <div className="flex items-center text-sm font-medium text-white/90 hover:text-white">
                        Voir plus
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { Gallery4 };
