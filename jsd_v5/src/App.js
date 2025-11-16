import DarkVeil from './components/backgrounds/DarkVeil/DarkVeil';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <DarkVeil 
        hueShift={200}
        speed={0.6}
        noiseIntensity={0.01}
      />
      <Header theme="light" />
      <Home />
      <Footer />
    </>
  );
}

export default App;
