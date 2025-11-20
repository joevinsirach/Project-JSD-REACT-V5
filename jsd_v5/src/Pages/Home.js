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
        
        <div className="flex flex-col items-center gap-2 md:gap-4 w-full">
          
          {/* TITRE FIXE : "we are" / "here to" */}
          <h1 className="font-ubuntu font-bold leading-tight text-black/80 m-0 flex flex-col md:block">
            {/* Mobile : text-5xl | Desktop : text-7xl */}
            {/* Sur mobile, 'block' force le saut de ligne. Sur Desktop, 'inline' les met à la suite */}
            <span className="block md:inline text-5xl md:text-7xl">we are</span>
            <span className="block md:inline text-5xl md:text-7xl md:ml-4">here to</span>
          </h1>

          {/* MOT CHANGEANT (Typewriter) */}
          {/* Hauteur minime fixée (min-h) pour éviter que ça saute quand le mot change */}
          <div className="font-ubuntu font-black bg-gradient-to-br from-[#667eea] to-[#764ba2] bg-clip-text text-transparent flex items-center justify-center min-h-[4rem] md:min-h-[6rem]">
            
            {/* Mobile : text-6xl (pour que VISUALIZE tienne sur une ligne) | Desktop : text-8xl */}
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
        
        <p className="font-ubuntu text-base md:text-xl text-black/60 mt-2 md:mt-4 font-light max-w-[80%]">
          JSD Global Design - Visualisation 3D & Design Architectural
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
