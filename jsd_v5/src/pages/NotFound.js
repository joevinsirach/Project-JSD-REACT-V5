import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-950 text-white text-center px-4 relative z-50">
      {/* Petit effet de fond (optionnel) */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />
      
      <h1 className="text-8xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
        404
      </h1>
      <h2 className="text-3xl font-semibold mb-6">Page introuvable</h2>
      <p className="mb-8 text-gray-400 max-w-md text-lg">
        Désolé, la page que vous cherchez semble avoir disparu dans le métavers ou n'a jamais existé.
      </p>
      
      <Link 
        to="/" 
        className="px-8 py-3 bg-white text-neutral-900 rounded-full font-medium hover:bg-gray-200 transition-all transform hover:scale-105 shadow-lg z-10"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFound;
