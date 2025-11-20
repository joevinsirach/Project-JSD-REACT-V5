// jsd_v5/src/pages/Work.js
import React from "react";
import AllWork from "../components/AllWork";
import TitreSimpleJSD from "../components/TitreSimpleJSD";

const WorkPage = () => {
  return (
    <main className="bg-transparent min-h-screen">
      {/* Mobile : pt-12 (48px) | Desktop : md:pt-32 */}
      <div className="pt-12 md:pt-32"> 
        <TitreSimpleJSD>Réalisations</TitreSimpleJSD>
      </div>
      
      {/* Section qui affiche toutes les catégories + mosaïques */}
      <AllWork />
    </main>
  );
};

export default WorkPage;
