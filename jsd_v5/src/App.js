// IMPORT DE COMPOSANTS >>>
import DarkVeil from './components/Backgrounds/DarkVeil/DarkVeil';

// IMPORT DE PAGES >>>
import Home from './Pages/Home.js';


// APPEL DE BACKGROUND GLOBAL + PAGES
function App() {
  return (
    <>
      {/* Background global pour toutes les pages */}
      <DarkVeil />
      
      {/* Contenu de la page */}
      <Home />
    </>
  );
}


export default App;
