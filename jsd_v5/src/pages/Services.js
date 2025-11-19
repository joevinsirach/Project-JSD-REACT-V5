// src/pages/Services.js

import {
  CubeIcon,
  EyeOpenIcon,
  Pencil1Icon,
  GlobeIcon,
} from "@radix-ui/react-icons";
import { BentoGrid, BentoCard } from "../components/ui/bento-grid";
import { Gallery4 } from "../components/gallery4";


const ServicesPage = () => {
  return (
    <main className="mx-auto max-w-6xl px-4 py-20 text-slate-900">
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-medium mb-4">
          Services
        </h1>
        <p className="text-base md:text-lg text-slate-700 max-w-2xl">
          Accompagnement complet en conception 3D pour vos stands, espaces
          et produits: de l’idée au rendu final exploitable en présentation,
          marketing ou production.
        </p>
      </header>

      <BentoGrid>
        <BentoCard
          name="Stand & événementiel"
          Icon={CubeIcon}
          description="Conception et visualisation 3D de stands sur mesure pour salons, festivals et pop-up stores, pensés pour maximiser l’impact de marque et l’expérience visiteur."
          href="/work#stand"
          cta="Voir les stands"
          background={
            <div className="bg-gradient-to-br from-orange-100 via-amber-50 to-white" />
          }
          className="md:col-span-2"
        />

        <BentoCard
          name="Architecture & espaces"
          Icon={EyeOpenIcon}
          description="Rendus 3D d’architecture extérieure et d’aménagement intérieur."
          href="/work#architecture"
          cta="Voir l’architecture"
          background={
            <div className="bg-gradient-to-br from-slate-100 via-slate-50 to-white" />
          }
          className="md:col-span-1"
        />

        <BentoCard
          name="Design produit & objets"
          Icon={Pencil1Icon}
          description="Design produit, prototypage visuel et images 3D photoréalistes."
          href="/work#design"
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
          href="/contact"
          cta="Discuter d’un projet"
          background={
            <div className="bg-gradient-to-br from-neutral-100 via-white to-neutral-50" />
          }
          className="md:col-span-2"
        />
      </BentoGrid>

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
