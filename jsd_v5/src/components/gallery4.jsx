import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const data = [
  {
    id: "projet-1",
    title: "Maison Contemporaine",
    description:
      "Visualisation 3D d'une maison contemporaine avec des finitions haut de gamme. Architecture moderne intégrant des matériaux nobles et des espaces lumineux.",
    href: "#",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
  },
  {
    id: "projet-2",
    title: "Rénovation d'Intérieur",
    description:
      "Design d'intérieur moderne avec une attention particulière portée aux détails et à l'harmonie des espaces.",
    href: "#",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
  },
  {
    id: "projet-3",
    title: "Stand d'Exposition",
    description:
      "Conception et visualisation 3D de stands pour salons professionnels. Designs impactants qui valorisent l'identité de marque.",
    href: "#",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
  },
  {
    id: "projet-4",
    title: "Architecture Commerciale",
    description:
      "Projets architecturaux pour espaces commerciaux. Solutions innovantes alliant esthétique et fonctionnalité.",
    href: "#",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800",
  },
  {
    id: "projet-5",
    title: "Design d'Espace",
    description:
      "Aménagement et design d'espaces de travail modernes. Création d'environnements inspirants qui favorisent la productivité.",
    href: "#",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
  },
];

const Gallery4 = ({
  title = "Nos Réalisations",
  description = "Découvrez nos projets de visualisation 3D et design architectural. Des réalisations qui allient créativité, technique et savoir-faire.",
  items = data
}) => {
  const [carouselApi, setCarouselApi] = useState();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl" style={{ color: 'rgba(0, 0, 0, 0.8)' }}>
              {title}
            </h2>
            <p className="max-w-lg" style={{ color: 'rgba(0, 0, 0, 0.8)' }}>{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto">
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}>
          <CarouselContent className="ml-0">
            {items.map((item) => (
              <CarouselItem key={item.id} className="max-w-[420px] pl-[20px] lg:max-w-[480px]">
                <a href={item.href} className="group rounded-xl block">
                  <div className="group relative overflow-hidden rounded-xl aspect-[16/9]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 h-full bg-gradient-to-b from-transparent via-black/40 to-black/80" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                      <div className="mb-2 pt-4 text-xl font-semibold md:mb-3">
                        {item.title}
                      </div>
                      <div className="mb-8 line-clamp-2 md:mb-12">
                        {item.description}
                      </div>
                      <div className="flex items-center text-sm">
                        Voir plus{" "}
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-black" : "bg-black/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Aller à la diapositive ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
