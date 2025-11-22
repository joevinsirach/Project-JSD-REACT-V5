import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Diamond } from "lucide-react";

// --- DÉFINITION DES VARIANTES (ANIMATIONS) ---
const cardVariants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.03,
    y: -5,
    boxShadow: "0px 15px 30px -5px hsl(var(--foreground) / 0.1)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

// C'est cette variable qui manquait ou était mal vue
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
    href = "/contact", // Lien par défaut vers contact
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
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      className={cn(
        "relative flex flex-col justify-between rounded-lg p-6 shadow-sm transition-shadow duration-300",
        "bg-white/70 backdrop-blur-md border border-slate-200",
        "text-slate-800",
        className
      )}
      {...props}
    >
      
      <div className="flex flex-col space-y-4">
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
              variants={imageVariants} // Utilisé ici
            />
          )}
        </div>

        <p className="text-slate-600">{description}</p>

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

      <div className="mt-6">
        <Link to={href} className="w-full block">
          <Button className="w-full">{buttonText}</Button>
        </Link>
      </div>

    </motion.div>
  );
});
PricingCard.displayName = "PricingCard";

export { PricingCard };
