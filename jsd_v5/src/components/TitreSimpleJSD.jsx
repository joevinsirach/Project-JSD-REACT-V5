import React from "react";

const TitreSimpleJSD = ({ children, title }) => {
  // Utilise 'children' s'il existe, sinon 'title', sinon une valeur par défaut
  const content = children || title || "Titre par défaut";

  return (
    <div className="mb-12 flex flex-col items-center gap-6 text-center">
      <h1 className="text-4xl font-semibold lg:text-5xl text-[rgba(0,0,0,0.8)]">
        {content}
      </h1>
    </div>
  );
};

export default TitreSimpleJSD;
