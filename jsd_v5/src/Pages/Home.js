import React from 'react';
import { Gallery4 } from '../components/gallery4';
import { Typewriter } from '../components/ui/typewriter';
import { BouncyCardsFeatures } from '../components/bounce-card-features';

function Home() {
  return (
    <div>
      {/* Section Hero avec Typewriter */}
      {/* padding réduit sur mobile (pt-32) pour éviter le vide trop grand */}
      <div className="flex flex-col justify-start items-center text-center gap-4 md:gap-8 p-4 pt-32 md:pt-60 mb-32 md:mb-72 overflow-hidden">
        
        {/* Modif: gap-6 pour plus d'espace */}
        <div className="flex flex-col items-center gap-6 md:gap-8 w-full">
          
          {/* TITRE FIXE : "we are" / "here to" */}
          <h1 className="font-ubuntu font-bold leading-tight text-black/80 m-0 flex flex-col md:block">
            {/* Modif: text-6xl (mobile) / text-8xl (desktop) pour grossir */}
            <span className="block md:inline text-6xl md:text-8xl">we are</span>
            <span className="block md:inline text-6xl md:text-8xl md:ml-6">here to</span>
          </h1>

          {/* MOT CHANGEANT (Typewriter) */}
          <div className="font-ubuntu font-black bg-gradient-to-br from-[#667eea] to-[#764ba2] bg-clip-text text-transparent flex items-center justify-center min-h-[4rem] md:min-h-[6rem]">
            <div className="text-6xl md:text-8xl">
              <Typewriter
                text={["DESIGN", "IMAGINE", "CREATE", "CONCEIVE", "INNOVATE", "VISUALIZE"]}
                speed={100}
                deleteSpeed={60}
                waitTime={2000}
                loop={true}
                showCursor={true}
                cursorChar="|"
              />
            </div>
          </div>

        </div>
        
        {/* Modif: text-sm (plus petit) et ajout du <br /> */}
        <p className="font-ubuntu text-sm md:text-lg text-black/60 mt-4 md:mt-6 font-light max-w-[80%]">
          <span className="font-medium text-black/70">JSD Global Design</span>
          <br className="md:hidden" /> {/* Saut de ligne visible sur mobile */}
          <span className="hidden md:inline"> - </span> {/* Tiret sur desktop */}
          Visualisation 3D & Design Architectural
        </p>
      </div>

      {/* Section Bounce Cards Features */}
      <BouncyCardsFeatures />

      {/* Section Gallery */}
      <Gallery4 />
    </div>
  );
}

export default Home;
