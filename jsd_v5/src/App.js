import DarkVeil from './components/backgrounds/DarkVeil/DarkVeil';
import Header from './components/Header';
import Home from './pages/Home';
import { ScrollProvider } from './context/ScrollContext';

function App() {
  return (
    <ScrollProvider>
      <DarkVeil />
      <Header />
      <Home />
    </ScrollProvider>
  );
}

export default App;
