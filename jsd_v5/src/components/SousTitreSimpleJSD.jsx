// jsd_v5/src/components/SousTitreSimpleJSD.jsx
import React from "react";

const SousTitreSimpleJSD = ({ children, text }) => {
  const content = children || text || "Sous-titre par défaut";

  return (
    <div className="flex justify-center px-4 text-center">
      <p className="text-base md:text-lg text-slate-700 max-w-2xl">
        {content}
      </p>
    </div>
  );
};

export default SousTitreSimpleJSD;
