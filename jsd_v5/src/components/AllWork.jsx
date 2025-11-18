// jsd_v5/src/components/AllWork.jsx
import React from "react";

// STAND
import imgBuenoFaceflag from "../ressources1/BuenoV3_FACEFLAG.webp";
import imgChandonV1 from "../ressources1/NORMAL_CHANDON_V1.webp";
import imgSephora from "../ressources1/MiseEnSituationSephoraV8.webp";
import imgVuseVelo1 from "../ressources1/PP_RenduZoomVenteV1.webp";
import imgVuseVelo2 from "../ressources1/RenderPP_Left_StandBAT_Photocall_V5.2_Sarah072024.webp";
import imgVuseVelo3 from "../ressources1/Stand2_V5.webp";
import imgJBL from "../ressources1/PostProd5.webp";
import imgChandonPlan from "../ressources1/plan_01_V2_PP.webp";
import imgBuenoBasket from "../ressources1/face-basket.webp";

// ARCHITECTURE
import imgArchMaison from "../ressources1/MaisonMORREALE_V7.webp";
import imgArchCasalini from "../ressources1/CasaliniRenderV3.webp";
import imgArchInterior from "../ressources1/Cam1HQ.webp";

// DESIGN
import imgEconeves from "../ressources1/Econeves-Waterflush-V3_9.webp";
import imgMaxicoffee from "../ressources1/Maxicoffee_Nouveau_Corner_H1V2.webp";
import imgStephSushi from "../ressources1/Rendu Chaises x Steph le Sushi.2pp.webp";
import imgPiqin from "../ressources1/PIQin.1.webp";
import imgVuseProduct from "../ressources1/V4-Products_1GLORIFIER.webp";
import imgLampe from "../ressources1/Lampe3.webp";

const categories = [
  {
    id: "stand",
    title: "Stand",
    items: [
      { src: imgBuenoFaceflag, alt: "Design de Stand Kinder Bueno pour evenement", label: "Kinder Bueno" },
      { src: imgChandonV1, alt: "Design de Stand Moet / Chandon pour evenement", label: "Moet / Chandon" },
      { src: imgSephora, alt: "Design de Stand Sephora pour festival Lolapalooza à Paris", label: "Sephora" },
      { src: imgVuseVelo1, alt: "Stand Vuse / Velo pour evenement", label: "Vuse / Velo" },
      { src: imgVuseVelo2, alt: "Stand Vuse / Velo", label: "Vuse / Velo" },
      { src: imgVuseVelo3, alt: "Design de Stand Vuse / Velo", label: "Vuse / Velo" },
      { src: imgJBL, alt: "Design de Stand JBL pour festival", label: "JBL" },
      { src: imgChandonPlan, alt: "Stand Moet / Chandon pour festival", label: "Moet / Chandon" },
      { src: imgBuenoBasket, alt: "Stand Kinder Bueno pour evenement", label: "Kinder Bueno" },
    ],
  },
  {
    id: "architecture",
    title: "Architecture",
    items: [
      { src: imgArchMaison, alt: "Rendu 3D d'architecture et d'intérieur", label: "Architecture" },
      { src: imgArchCasalini, alt: "Rendu 3D d'architecture", label: "Architecture" },
      { src: imgArchInterior, alt: "Rendu 3D Interior Design", label: "Architecture" },
    ],
  },
  {
    id: "design",
    title: "Design",
    items: [
      { src: imgEconeves, alt: "Rendu 3D Rhino pour Econeves", label: "Water Flush by Eco Neves" },
      { src: imgMaxicoffee, alt: "Rendu 3DSMAX et Vray pour Maxicoffee", label: "Maxicoffee" },
      { src: imgStephSushi, alt: "Rendu 3D Keyshot", label: "Product Design" },
      { src: imgPiqin, alt: "Rendu 3D Blender", label: "Product Design" },
      { src: imgVuseProduct, alt: "Design 3D pour Vuse / Velo", label: "Vuse / Velo" },
      { src: imgLampe, alt: "Design 3D avec Grasshopper", label: "Product Design" },
    ],
  },
];

const AllWork = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 text-slate-900">
      {categories.map((category) => (
        <div key={category.id} className="mb-16">
          {/* Titre de catégorie */}
          <h2 className="text-2xl md:text-3xl font-medium mb-8">
            {category.title}
          </h2>

          {/* Grille d'images */}
          <div
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              lg:grid-cols-3 
              gap-4
              md:gap-[2%]
            "
          >
            {category.items.map((item, index) => (
              <div
                key={index}
                className="
                  relative 
                  overflow-hidden 
                  rounded-[25px]
                  shadow-[0_6px_18px_rgba(0,0,0,0.13)]
                  group
                  cursor-pointer
                "
              >
                {/* Image couleur, floutée au hover */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="
                    w-full 
                    aspect-[3/2] 
                    object-cover 
                    block 
                    transition 
                    duration-300 
                    ease-out
                    group-hover:blur-sm
                    group-hover:scale-105
                    rounded-[25px]
                  "
                />

                
                {/* Overlay titre centré, avec fond sombre au hover */}
                <div
                className="
                    absolute 
                    inset-0 
                    flex 
                    items-center 
                    justify-center 
                    bg-black/0
                    group-hover:bg-black/35
                    transition 
                    duration-300 
                    ease-out
                "
                >
                <span
                    className="
                    opacity-0 
                    group-hover:opacity-100
                    text-white 
                    text-sm 
                    md:text-base 
                    font-medium 
                    tracking-[0.05em]
                    uppercase
                    text-center
                    "
                >
                    {item.label}
                </span>
                </div>


              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default AllWork;
