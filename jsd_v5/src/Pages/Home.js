import { Gallery4 } from '../components/gallery4';

function Home() {
  return (
    <div>
      {/* Section Hero */}
      <div style={{ 
        padding: '2rem', 
        color: 'black',  // Changé en noir pour le fond blanc
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>JSD Global Design</h1>
        <p style={{ fontSize: '1.5rem' }}>Visualisation 3D & Design Architectural</p>
      </div>

      {/* Section Gallery */}
      <Gallery4 />
    </div>
  );
}

export default Home;
