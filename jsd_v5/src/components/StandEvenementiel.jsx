import { Cuboid, Tent, Users } from "lucide-react";

import { Separator } from "./ui/separator";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import standImage from "../ressources1/NORMAL_CHANDON_V1.webp"; // Image mise à jour

const StandEvent = ({
  heading = "Stands & Espaces Événementiels Impactants",
  imageSrc = standImage,
  imageAlt = "Design de stand événementiel 3D par JSD Global Design",

  features = [
    {
      icon: <Cuboid className="h-auto w-5" />,
      title: "Design Sur Mesure",
      description:
        "Conception de stands uniques qui reflètent l'identité de votre marque et captent l'attention des visiteurs.",
    },
    {
      icon: <Tent className="h-auto w-5" />,
      title: "Optimisation de l'Espace",
      description:
        "Aménagement intelligent pour maximiser la visibilité, la circulation et l'expérience utilisateur sur votre emplacement.",
    },
    {
      icon: <Users className="h-auto w-5" />,
      title: "Expérience Visiteur",
      description:
        "Création d'environnements immersifs et engageants favorisant les échanges commerciaux et la mémorisation de marque.",
    },
  ]
}) => {
  const handleScrollToTarifs = () => {
    const tarifsSection = document.getElementById('tarifs');
    if (tarifsSection) {
      tarifsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  return (
    <section className="py-32">
      <div className="container mx-auto overflow-hidden">
        <div className="mb-20 flex flex-col items-center gap-6 text-center">
          <h1 className="text-4xl font-semibold lg:text-5xl">{heading}</h1>
        </div>
        <div className="relative mx-auto max-w-screen-lg">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="aspect-video max-h-[500px] w-full rounded-xl object-cover" />
          <div
            className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          <div
            className="absolute -right-28 -top-28 -z-10 aspect-video h-72 w-96 opacity-40 [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
          <div
            className="absolute -left-28 -top-28 -z-10 aspect-video h-72 w-96 opacity-40 [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
        </div>
        <div className="mx-auto mt-10 flex max-w-screen-lg flex-col md:flex-row">
          {features.map((feature, index) => (
            <>
              {index > 0 && (
                <Separator
                  orientation="vertical"
                  className="mx-6 hidden h-auto w-[2px] bg-gradient-to-b from-muted via-transparent to-muted md:block" />
              )}
              <div
                key={index}
                className="flex grow basis-0 flex-col rounded-md bg-background p-4">
                <div
                  className="mb-6 flex size-10 items-center justify-center rounded-full bg-background drop-shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="mb-2 font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </>
          ))}
        </div>

        <div className="mx-auto mt-12 flex max-w-screen-lg justify-center gap-6 flex-wrap">
          <InteractiveHoverButton 
            text="Contact" 
            onClick={handleContactClick}
            className="w-40"
          />
          <InteractiveHoverButton 
            text="Tarifs" 
            onClick={handleScrollToTarifs}
            className="w-40"
          />
        </div>
      </div>
    </section>
  );
};

export { StandEvent };
