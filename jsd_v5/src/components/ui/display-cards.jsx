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
        "relative flex h-32 w-[18rem] md:h-40 md:w-[26rem] skew-y-[6deg] select-none flex-col " +
        "justify-center gap-3 rounded-xl border border-black/20 " +
        "bg-neutral-200/25 backdrop-blur-[10px] shadow-sm " +
        "[mask-image:linear-gradient(to_left,black_55%,transparent_100%)] " +
        "transition-all duration-500 hover:bg-neutral-100/50 hover:border-black/35 " +
        "hover:[mask-image:linear-gradient(to_left,black_75%,transparent_100%)] " +
        className
      }
    >
      <div className="flex flex-row items-center justify-center gap-3 px-4">
        <span className="relative inline-block rounded-full bg-black/5 p-2 text-neutral-900">
          {icon}
        </span>
        <p className="text-lg font-bold tracking-tight bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
          {title}
        </p>
      </div>
      
      <p className="px-4 text-center text-sm font-medium text-neutral-700/80 leading-relaxed max-w-[75%] mx-auto">
        {description}
      </p>
    </Link>
  );
}

export default function DisplayCards() {
  const cards = [
    {
      title: "Stand & événementiel",
      description: "Conception 3D de stands sur mesure pour salons.",
      icon: <CubeIcon className="size-5" />,
      href: "#stand",
      // Mobile : Hover réduit (-3rem) | Desktop : Hover fort (-4.5rem)
      className: "z-40 [grid-area:stack] translate-x-0 translate-y-0 hover:-translate-y-[3rem] md:hover:-translate-y-[4.5rem]",
    },
    {
      title: "Architecture & espaces",
      description: "Rendus 3D d'architecture et d'aménagement intérieur.",
      icon: <EyeOpenIcon className="size-5" />,
      href: "#architecture",
      // Mobile : écart augmenté (x-12, y-12) pour dégager le titre
      // Desktop : écart standard (x-16, y-16)
      className:
        "z-30 [grid-area:stack] translate-x-12 -translate-y-12 md:translate-x-16 md:-translate-y-16 " +
        "hover:translate-x-12 hover:-translate-y-[6rem] md:hover:translate-x-16 md:hover:-translate-y-[8.5rem]",
    },
    {
      title: "Design produit & objets",
      description: "Design produit et images 3D photoréalistes.",
      icon: <Pencil1Icon className="size-5" />,
      href: "#design",
      // Mobile : écart augmenté (x-24, y-24)
      className:
        "z-20 [grid-area:stack] translate-x-24 -translate-y-24 md:translate-x-32 md:-translate-y-32 " +
        "hover:translate-x-24 hover:-translate-y-[9rem] md:hover:translate-x-32 md:hover:-translate-y-[12.5rem]",
    },
    {
      title: "Web et site internet",
      description: "Sites modernes pour valoriser votre image.",
      icon: <GlobeIcon className="size-5" />,
      href: "#web",
      // Mobile : écart augmenté (x-36, y-36)
      className:
        "z-10 [grid-area:stack] translate-x-36 -translate-y-36 md:translate-x-48 md:-translate-y-48 " +
        "hover:translate-x-36 hover:-translate-y-[12rem] md:hover:translate-x-48 md:hover:-translate-y-[16.5rem]",
    },
  ];

  return (
    // Ajustement des marges : right-12 sur mobile pour compenser l'élargissement de la pile
    <div className="grid h-[32rem] md:h-[40rem] w-full place-items-center overflow-visible mt-8 md:mt-12">
      <div className="grid [grid-template-areas:'stack'] relative right-12 md:right-16 top-[2rem] md:top-[4rem]"> 
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
