import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    // Changement ici : 'justify-center' retiré, 'pt-32' ou 'pt-40' ajouté pour gérer la hauteur
    <div className="flex flex-col items-center min-h-screen text-center px-4 relative z-50 pt-40 md:pt-80">
      
      <h1 className="text-8xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
        404
      </h1>
      
      <h2 className="text-3xl font-semibold mb-6 text-neutral-800">
        Page introuvable
      </h2>
      
      <p className="mb-8 text-gray-600 max-w-md text-lg">
        Désolé, la page que vous cherchez semble avoir disparu dans le métavers ou n'a jamais existé.
      </p>
      
      <Link 
        to="/" 
        className="px-8 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-700 transition-all transform hover:scale-105 shadow-lg z-10"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFound;
