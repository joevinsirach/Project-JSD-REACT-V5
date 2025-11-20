"use client";

import { Link } from "react-router-dom";
import {
  CubeIcon,
  EyeOpenIcon,
  Pencil1Icon,
  GlobeIcon,
} from "@radix-ui/react-icons";

function DisplayCard({ className = "", icon, title, description, href }) {
  return (
    <Link
      to={href}
      className={
        // Layout & Forme
        "relative flex h-40 w-[26rem] skew-y-[6deg] select-none flex-col " +
        "justify-center gap-3 rounded-xl border border-black/10 " +
        
        // Style "Light & Clean"
        "bg-neutral-100/80 backdrop-blur-[5px] shadow-sm " +
        
        // Typographie
        "text-neutral-900/85 " +

        // Masque (Fade Out Droite)
        "[mask-image:linear-gradient(to_right,black_55%,transparent_100%)] " +
        
        // Interactions
        "transition-all duration-500 hover:bg-neutral-100/40 hover:border-black/10 " +
        "hover:[mask-image:linear-gradient(to_right,black_75%,transparent_100%)] " +
        className
      }
    >
      {/* Header: Logo + Titre sur la même ligne, centrés horizontalement */}
      <div className="flex flex-row items-center justify-center gap-3 px-4">
        <span className="relative inline-block rounded-full bg-black/5 p-2 text-neutral-900">
          {icon}
        </span>
        <p className="text-lg font-bold tracking-tight">
          {title}
        </p>
      </div>
      
      {/* Description centrée */}
      <p className="px-4 text-center text-sm font-medium text-neutral-700/80 leading-relaxed max-w-[70%] mx-auto">
        {description}
      </p>
    </Link>
  );
}

export default function DisplayCards() {
  // CALCUL DU MOUVEMENT HOVER x2.5
  // Ancien mouvement : 1rem (4 unités)
  // Nouveau mouvement : 2.5rem
  
  // Carte 0 : Base 0rem -> Hover -2.5rem
  // Carte 1 : Base -4rem (-16) -> Hover -6.5rem (-4 - 2.5)
  // Carte 2 : Base -8rem (-32) -> Hover -10.5rem (-8 - 2.5)
  // Carte 3 : Base -12rem (-48) -> Hover -14.5rem (-12 - 2.5)

  const cards = [
    {
      title: "Stand & événementiel",
      description: "Conception 3D de stands sur mesure pour salons.",
      icon: <CubeIcon className="size-5" />,
      href: "#stand",
      // Position 0
      className: "z-40 [grid-area:stack] translate-x-0 translate-y-0 hover:-translate-y-[2.5rem]",
    },
    {
      title: "Architecture & espaces",
      description: "Rendus 3D d'architecture et d'aménagement intérieur.",
      icon: <EyeOpenIcon className="size-5" />,
      href: "#architecture",
      // Position 1
      className:
        "z-30 [grid-area:stack] translate-x-16 -translate-y-16 " +
        "hover:translate-x-16 hover:-translate-y-[6.5rem]",
    },
    {
      title: "Design produit & objets",
      description: "Design produit et images 3D photoréalistes.",
      icon: <Pencil1Icon className="size-5" />,
      href: "#design",
      // Position 2
      className:
        "z-20 [grid-area:stack] translate-x-32 -translate-y-32 " +
        "hover:translate-x-32 hover:-translate-y-[10.5rem]",
    },
    {
      title: "Web et site internet",
      description: "Sites modernes pour valoriser votre image.",
      icon: <GlobeIcon className="size-5" />,
      href: "#web",
      // Position 3
      className:
        "z-10 [grid-area:stack] translate-x-48 -translate-y-48 " +
        "hover:translate-x-48 hover:-translate-y-[14.5rem]",
    },
  ];

  return (
    <div className="grid h-[40rem] w-full place-items-center overflow-visible mt-20">
      <div className="grid [grid-template-areas:'stack'] relative right-16 top-[10rem]"> 
        {cards.map((card, index) => (
          <DisplayCard
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
            href={card.href}
            className={card.className}
          />
        ))}
      </div>
    </div>
  );
}
