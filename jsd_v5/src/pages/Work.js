// jsd_v5/src/pages/Work.js
import React from "react";
import AllWork from "../components/AllWork";
import TitreSimpleJSD from "../components/TitreSimpleJSD";

const WorkPage = () => {
  return (
    <main className="bg-transparent min-h-screen">
      <div className="pt-20"> {/* Ajout de padding-top pour espacer du header si besoin */}
        <TitreSimpleJSD>Réalisations</TitreSimpleJSD>
      </div>
      
      {/* Section qui affiche toutes les catégories + mosaïques */}
      <AllWork />
    </main>
  );
};

export default WorkPage;
