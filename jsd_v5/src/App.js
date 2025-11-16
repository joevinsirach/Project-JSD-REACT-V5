// IMPORT DE COMPOSANTS >>>
import DarkVeil from './components/Backgrounds/DarkVeil/DarkVeil';

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

// APPEL DE HEADER.JSX
import Header from './components/Header';
import Home from './Pages/Home';
import Work from './Pages/Work';
import Services from './Pages/Services';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
      <Header />  {/* Toujours visible sur toutes les pages */}
      <Home />    {/* Ou ton système de routing */}
    </>
  );
}


export default App;