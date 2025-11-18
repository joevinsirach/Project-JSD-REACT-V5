// jsd_v5/src/pages/Work.js
import React from "react";
import AllWork from "../components/AllWork";

const WorkPage = () => {
  return (
    <main className="bg-transparent min-h-screen">
      {/* Section qui affiche toutes les catégories + mosaïques */}
      <AllWork />
    </main>
  );
};

export default WorkPage;
