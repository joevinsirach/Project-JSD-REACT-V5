import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";        // Chemins relatifs corrects
import { Button } from "./ui/button";     // Chemins relatifs corrects
import { Diamond } from "lucide-react";

// --- ANIMATIONS D'ORIGINE ---
const cardVariants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.03,
    y: -5,
    boxShadow: "0px 15px 30px -5px hsl(var(--foreground) / 0.1)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const imageVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.1,
    rotate: -5,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const PricingCard = React.forwardRef((
  {
    className,
    title,
    price,
    priceDescription,
    description,
    features,
    buttonText,
    imageSrc,
    imageAlt,
    isUnique = false,
    ...props
  },
  ref
) => {
  return (
    <motion.div
      ref={ref}
      variants={cardVariants} // Utilisation des animations d'origine
      initial="initial"
      whileHover="hover"
      className={cn(
        // --- STYLE ---
        "relative flex flex-col justify-between rounded-lg p-6 shadow-sm transition-shadow duration-300",
        // Le Glassmorphism (Fond + Flou) que tu voulais garder :
        "bg-white/70 backdrop-blur-md border border-white/40",
        // Couleur de texte adaptée pour rester lisible sur le fond blanc
        "text-slate-800",
        className
      )}
      {...props}>
      
      <div className="flex flex-col space-y-4">
        {/* Header avec image optionnelle */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            {price && (
              <div className="mt-2">
                <span className="text-4xl font-bold">{price}</span>
                <p className="text-sm text-slate-500">
                  {priceDescription}
                </p>
              </div>
            )}
          </div>
          {imageSrc && (
            <motion.img
              src={imageSrc}
              alt={imageAlt || title}
              width={80}
              height={80}
              className="select-none"
              variants={imageVariants} />
          )}
        </div>

        {/* Description */}
        <p className="text-slate-600">{description}</p>

        {/* Liste des features */}
        {features && (
          <ul className="space-y-2 pt-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <Diamond className="h-4 w-4 text-blue-600" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Bouton */}
      <div className="mt-6">
        <Button className="w-full">{buttonText}</Button>
      </div>
    </motion.div>
  );
});
PricingCard.displayName = "PricingCard";

export { PricingCard };
