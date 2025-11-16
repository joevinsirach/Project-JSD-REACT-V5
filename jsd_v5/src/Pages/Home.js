import { Gallery4 } from '../components/gallery4';
import { Typewriter } from '../components/ui/typewriter';

function Home() {
  return (
    <div>
      {/* Section Hero avec Typewriter */}
      <div style={{
        padding: '2rem',
        color: 'rgba(0,0,0,0.8)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        gap: '2rem'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <h1 style={{
            fontSize: '4.5rem',
            fontWeight: '700',
            margin: '0',
            lineHeight: '1.2'
          }}>
            WE ARE HERE TO
          </h1>
          <div style={{
            fontSize: '5.5rem',
            fontWeight: '900',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            minHeight: '6rem',
            display: 'flex',
            alignItems: 'center'
          }}>
            <Typewriter
              text={[
                "DESIGN",
                "IMAGINE",
                "CREATE",
                "CONCEIVE",
                "INNOVATE",
                "VISUALIZE"
              ]}
              speed={100}
              deleteSpeed={60}
              waitTime={2000}
              loop={true}
              showCursor={true}
              cursorChar="|"
            />
          </div>
        </div>

        <p style={{
          fontSize: '1.8rem',
          color: 'rgba(0,0,0,0.6)',
          marginTop: '1rem',
          fontWeight: '300'
        }}>
          JSD Global Design - Visualisation 3D & Design Architectural
        </p>
      </div>

      {/* Section Gallery */}
      <Gallery4 />
    </div>
  );
}

export default Home;
