import DarkVeil from './components/backgrounds/DarkVeil/DarkVeil';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <>
      <DarkVeil 
        hueShift={200}    // 200 = bleu clair, 270 = garder violet
        speed={0.3}
        noiseIntensity={0.01}
      />
      <Header theme="light" />
      <Home />
    </>
  );
}

export default App;
