import React from "react";
import { Timeline } from "../components/ui/timeline";
import TitreSimpleJSD from "../components/TitreSimpleJSD";

// Imports des images spécifiques
import imgEconeves from "../ressources1/Econeves-Waterflush-V3_9.webp";
import imgSocreha from "../ressources1/Maxicoffee_Nouveau_Corner_H1V2.webp";
import imgPMP from "../ressources1/PMP_OneMillionButterflies_Hoodie2.webp";
import imgPMTea from "../ressources1/DSC09157.webp";
import imgPitaya from "../ressources1/CM5.webp";
import imgOleMains from "../ressources1/CM4.webp";

export default function CV() {
  // Composant pour l'affichage avec image (Grid)
  const ContentWithImage = ({ children, image }) => (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-6 items-start">
      <div className="order-2 lg:order-1">{children}</div>
      <div className="order-1 lg:order-2 w-full h-48 lg:h-40 xl:h-48 rounded-xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-800">
        <img 
          src={image} 
          alt="Illustration du projet" 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
        />
      </div>
    </div>
  );

  // Composant simple pour l'affichage sans image (Standard)
  const ContentSimple = ({ children }) => (
    <div>{children}</div>
  );

  const data = [
    {
      title: (
        <>
          Now <br /> 2021
        </>
      ),
      content: (
        <ContentSimple>
          <h4 className="text-2xl font-bold mb-2 text-slate-800 dark:text-slate-200">
            Freelance & JSD Global Design
          </h4>
          <p className="text-slate-600 dark:text-slate-400 mb-4 font-semibold">
            Designer & Développeur Web
          </p>
          <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 text-sm mb-4">
            <li>Développement de solutions web sur mesure (React, Node.js)</li>
            <li>Création d'identités visuelles et design d'interfaces (UI/UX)</li>
            <li>Gestion complète de projets clients</li>
            <li>Portfolio digital et consulting créatif</li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">React</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">Tailwind CSS</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">Figma</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">Blender</span>
          </div>
        </ContentSimple>
      ),
    },
    {
      title: (
        <>
          Now <br /> 2021
        </>
      ),
      content: (
        <ContentWithImage image={imgPMP}>
          <div>
            <h4 className="text-2xl font-bold mb-2 text-slate-800 dark:text-slate-200">
              Directeur Artistique Freelance
            </h4>
            <p className="text-slate-600 dark:text-slate-400 mb-4 font-semibold">
              Marques de Merchandising & Streetwear
            </p>
            <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 text-sm mb-4">
              <li>Collaboration avec YouTubeur/Influenceur (Tristan Defeuillet-Vang) - Marque <strong>PMP</strong></li>
              <li>Création de logos et infographies</li>
              <li>Conception de collections de vêtements par saisons</li>
              <li>Gestion des fournisseurs et échantillons</li>
              <li>Distribution en Print On Demand</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs font-bold">Illustrator</span>
              <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs font-bold">Photoshop</span>
            </div>
          </div>
        </ContentWithImage>
      ),
    },
    {
      title: (
        <>
          2023
        </>
      ),
      content: (
        <ContentWithImage image={imgEconeves}>
          <div>
            <h4 className="text-2xl font-bold mb-2 text-slate-800 dark:text-slate-200">
              Concepteur Produits - ECONEVES
            </h4>
            <p className="text-slate-600 dark:text-slate-400 mb-4 font-semibold">
              Design Ergonomique (Lyon)
            </p>
            <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 text-sm mb-4">
              <li>Création de design ergonomique pour interrupteur innovant</li>
              <li>Projet présenté au Concours Lépine</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs font-bold">Rhinoceros 3D</span>
              <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs font-bold">Keyshot</span>
            </div>
          </div>
        </ContentWithImage>
      ),
    },
    {
      title: (
        <>
          2022
        </>
      ),
      content: (
        <ContentWithImage image={imgPitaya}>
          <div>
            <h4 className="text-2xl font-bold mb-2 text-slate-800 dark:text-slate-200">
              Graphiste Indépendant - PITAYA
            </h4>
            <p className="text-slate-600 dark:text-slate-400 mb-4 font-semibold">
              Thaï Street Food (Lyon)
            </p>
            <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 text-sm mb-4">
              <li>Création de supports numériques pour réseaux sociaux (Instagram)</li>
              <li>Community management et branding</li>
            </ul>
          </div>
        </ContentWithImage>
      ),
    },
    {
      title: (
        <>
          2022 <br /> 2021
        </>
      ),
      content: (
        <ContentWithImage image={imgOleMains}>
          <div>
            <h4 className="text-2xl font-bold mb-2 text-slate-800 dark:text-slate-200">
              Graphiste Indépendant - OléMains
            </h4>
            <p className="text-slate-600 dark:text-slate-400 mb-4 font-semibold">
              Création de contenu social (Lyon)
            </p>
            <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 text-sm mb-4">
              <li>Supports numériques Instagram</li>
              <li>Community management et branding</li>
            </ul>
          </div>
        </ContentWithImage>
      ),
    },
    {
      title: (
        <>
          2021
        </>
      ),
      content: (
        <ContentSimple>
          <h4 className="text-2xl font-bold mb-2 text-slate-800 dark:text-slate-200">
            Freelance Fashion Designer - KGANG
          </h4>
          <p className="text-slate-600 dark:text-slate-400 mb-4 font-semibold">
            Marque de Merchandising (Saint-Priest)
          </p>
          <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 text-sm mb-4">
            <li>Collaboration avec YouTubeurs mondiaux (Kilian & Maël Larher)</li>
            <li>Création de logos et lignes de vêtements</li>
            <li>Design pour la communauté trottinette</li>
            <li>Distribution en Print On Demand</li>
          </ul>
        </ContentSimple>
      ),
    },
    {
      title: (
        <>
          2021
        </>
      ),
      content: (
        <ContentWithImage image={imgPMTea}>
          <div>
            <h4 className="text-2xl font-bold mb-2 text-slate-800 dark:text-slate-200">
              Graphiste Freelance - PMtea
            </h4>
            <p className="text-slate-600 dark:text-slate-400 mb-4 font-semibold">
              Marque de Thé Bio (Saint-Priest)
            </p>
            <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 text-sm mb-4">
              <li>Création complète de l'identité visuelle et charte graphique</li>
              <li>Design des sachets et packaging</li>
              <li>Supports de communication pour réseaux sociaux</li>
              <li>Préparation des fichiers d'impression (BAT)</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs font-bold">Illustrator</span>
              <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs font-bold">Photoshop</span>
            </div>
          </div>
        </ContentWithImage>
      ),
    },
    {
      title: (
        <>
          2020 <br /> 2018
        </>
      ),
      content: (
        <ContentWithImage image={imgSocreha}>
          <div>
            <h4 className="text-2xl font-bold mb-2 text-slate-800 dark:text-slate-200">
              Designer - SOCREHA
            </h4>
            <p className="text-slate-600 dark:text-slate-400 mb-4 font-semibold">
              Mobilier & Architecture (Jonage, Auvergne-Rhône-Alpes)
            </p>
            <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 text-sm mb-4">
              <li>Création de mobilier sur mesure</li>
              <li>Design de produits et accessoires</li>
              <li>Création d'espaces intérieurs complets</li>
              <li>Visuels 3D photoréalistes et visites virtuelles 360°</li>
              <li>Plans d'exécution et architecture intérieure</li>
              <li>Gestion directe client de demande à livraison</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs font-bold">3DS MAX</span>
              <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs font-bold">VRay</span>
              <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs font-bold">Rhino</span>
              <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs font-bold">Keyshot</span>
              <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs font-bold">AutoCAD</span>
            </div>
          </div>
        </ContentWithImage>
      ),
    },
    {
      title: (
        <>
          2017
        </>
      ),
      content: (
        <ContentSimple>
          <h4 className="text-2xl font-bold mb-2 text-slate-800 dark:text-slate-200">
            Designer & Graphiste - myKamie
          </h4>
          <p className="text-slate-600 dark:text-slate-400 mb-4 font-semibold">
            Freelance (Région Lyon)
          </p>
          <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 text-sm mb-4">
            <li>Amélioration de produit existant</li>
            <li>Création d'identité visuelle et charte graphique</li>
            <li>Webdesign</li>
          </ul>
        </ContentSimple>
      ),
    },
    {
      title: (
        <>
          2016
        </>
      ),
      content: (
        <ContentSimple>
          <h4 className="text-2xl font-bold mb-2 text-slate-800 dark:text-slate-200">
            Stage Designer - Groupe SEB
          </h4>
          <p className="text-slate-600 dark:text-slate-400 mb-4 font-semibold">
            Design Produit Industriel (Écully)
          </p>
          <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 text-sm mb-4">
            <li>Bureau d'étude design intégré</li>
            <li>Création de marquages pour produits industriels</li>
            <li>Études de marchés par zones géographiques</li>
            <li>Réunions avec équipes marketing</li>
            <li>Initiation au plug-in Grasshopper pour Rhino</li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs font-bold">Rhinoceros 3D</span>
            <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs font-bold">Keyshot</span>
            <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs font-bold">Grasshopper</span>
          </div>
        </ContentSimple>
      ),
    },
    {
      title: "Compétences",
      content: (
        <ContentSimple>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-bold text-lg mb-3 text-slate-800 dark:text-slate-200">3D & Rendu</h5>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm space-y-1">
                <li>Blender</li>
                <li>Rhinoceros 3D</li>
                <li>3DS Max</li>
                <li>Keyshot & VRay</li>
                <li>TwinMotion</li>
                <li>Grasshopper</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-3 text-slate-800 dark:text-slate-200">2D & Graphisme</h5>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm space-y-1">
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>InDesign</li>
                <li>Figma</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-3 text-slate-800 dark:text-slate-200">Vidéo & Animation</h5>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm space-y-1">
                <li>After Effects</li>
                <li>Final Cut Pro</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-3 text-slate-800 dark:text-slate-200">Développement Web</h5>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm space-y-1">
                <li>React.js</li>
                <li>HTML/CSS (Tailwind)</li>
                <li>JavaScript</li>
                <li>Wordpress</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-3 text-slate-800 dark:text-slate-200">DAO & Plans</h5>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm space-y-1">
                <li>AutoCAD</li>
                <li>SketchUp</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-3 text-slate-800 dark:text-slate-200">Bureautique</h5>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm space-y-1">
                <li>Excel</li>
                <li>Word</li>
              </ul>
            </div>
          </div>
        </ContentSimple>
      ),
    },
  ];

  return (
    <div className="w-full mb-40"> {/* Ajout de mb-40 ici pour l'espace avant le carrousel */}
      <div className="pt-20 pb-10">
        <TitreSimpleJSD title="Curriculum Vitae" />
        <p className="text-center text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-[-20px]">
          Joevin SIRACH — Designer 3D & Développeur Web Freelance
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <Timeline data={data} />
      </div>
      
    </div>
  );
}
