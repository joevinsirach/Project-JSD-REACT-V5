import DarkVeil from './components/backgrounds/DarkVeil/DarkVeil';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import { CarouselPartenaires } from './components/CarouselPartenaires';

function App() {
  return (
    <>
      <DarkVeil 
        hueShift={200}
        speed={1}
        noiseIntensity={0.01}
      />
      <Header theme="light" />
      <Home />
      
      {/* Intégration du carousel partenaires */}
      <CarouselPartenaires />
      
      <Footer />
    </>
  );
}

export default App;
