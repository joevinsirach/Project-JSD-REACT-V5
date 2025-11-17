import { Gallery4 } from '../components/gallery4';
import { Typewriter } from '../components/ui/typewriter';

function Home() {
  return (
    <div>
      {/* Section Hero avec Typewriter */}
      <div className="flex flex-col justify-start items-center text-center gap-8 p-8 pt-24 md:pt-60 mb-40">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-ubuntu text-7xl font-bold leading-tight text-black/80 m-0">
            we are here to
          </h1>
          <div className="font-ubuntu text-8xl font-black bg-gradient-to-br from-[#667eea] to-[#764ba2] bg-clip-text text-transparent min-h-[6rem] flex items-center">
            <Typewriter
              text={["DESIGN", "IMAGINE", "CREATE", "CONCEIVE", "INNOVATE", "VISUALIZE"]}
              speed={100}
              deleteSpeed={60}
              waitTime={2000}
              loop={true}
              showCursor={true}
              cursorChar="|"
            />
          </div>
        </div>
        
        <p className="font-ubuntu text-xl text-black/60 mt-4 font-light">
          JSD Global Design - Visualisation 3D & Design Architectural
        </p>
      </div>

      {/* Section Gallery */}
      <Gallery4 />
    </div>
  );
}

export default Home;
