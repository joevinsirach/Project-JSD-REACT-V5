import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Landing1.css';

// Importation des vidéos
import designVideo from '../ressources1/social_joeetvine_a_water_bottle_that_spins_on_itself_--ar_169_--bs_2_f0c25733-e620-472e-8a1f-fced22282eb2_0.mp4';
import architectureVideo from '../ressources1/joeetvine_httpss.mj.runtjo6wznwvI8_travelling_architecture_--_2cc319cf-066e-4d89-84fc-d024f8ee8f1f_0.mp4';
import eventsVideo from '../ressources1/social_joeetvine_httpss.mj.run7xTOcQDp9O4_--ar_169_--bs_2_--video_1__ca55382d-d51c-4b54-97cb-f30cb7437da6_0.mp4';

const Landing1 = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef(null);
  const sectionRefs = useRef([]);

  const sections = [
    {
      id: 'hero',
      title: 'JSD Global Design',
      subtitle: 'Agence de communication créative & engagée',
      description: 'Expertise 360° - Du concept à la réalisation',
      video: null,
      number: null
    },
    {
      id: 'design',
      title: 'Design d\'Objets',
      subtitle: 'Innovation & savoir-faire 3D',
      description: 'Du concept au prototype, nous créons des objets uniques qui allient esthétique et fonctionnalité.',
      video: designVideo,
      number: '01'
    },
    {
      id: 'architecture',
      title: 'Architecture & Espaces',
      subtitle: 'Créations sur-mesure',
      description: 'Concevoir des lieux qui inspirent, des espaces qui racontent votre histoire.',
      video: architectureVideo,
      number: '02'
    },
    {
      id: 'events',
      title: 'Production d\'Événements',
      subtitle: 'Expériences mémorables',
      description: 'Événementiel clés en main - De la conception à la réalisation de vos projets les plus ambitieux.',
      video: eventsVideo,
      number: '03'
    }
  ];

  useEffect(() => {
    // Simulation du chargement
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: scrollContainerRef.current,
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.indexOf(entry.target);
          setActiveSection(index);
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown' && activeSection < sections.length - 1) {
      scrollToSection(activeSection + 1);
    } else if (e.key === 'ArrowUp' && activeSection > 0) {
      scrollToSection(activeSection - 1);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeSection]);

  return (
    <div className="landing-wrapper">
      {loading && (
        <div className="loading">
          <div className="loader"></div>
        </div>
      )}

      {/* Lien vers l'accueil */}
      <Link to="/" className="home-link">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span>Aller à l'accueil</span>
      </Link>

      <div className="nav-dots">
        {sections.map((_, index) => (
          <div
            key={index}
            className={`nav-dot ${activeSection === index ? 'active' : ''}`}
            onClick={() => scrollToSection(index)}
          />
        ))}
      </div>

      <div className="scroll-container" ref={scrollContainerRef}>
        {sections.map((section, index) => (
          <section
            key={section.id}
            ref={el => sectionRefs.current[index] = el}
            className={`section ${activeSection === index ? 'active' : ''} ${section.id}`}
            data-section={index}
          >
            {section.number && (
              <div className="section-number">{section.number}</div>
            )}

            {section.video && (
              <video 
                className="section-video" 
                autoPlay 
                muted 
                loop 
                playsInline
                preload="auto"
              >
                <source src={section.video} type="video/mp4" />
              </video>
            )}

            {section.id === 'hero' && (
              <div className="hero-animation"></div>
            )}

            <div className="section-content">
              <h1 className={section.id === 'hero' ? 'hero-title' : ''}>
                {section.title}
              </h1>
              <p className="subtitle">{section.subtitle}</p>
              {section.description && (
                <p className="description">{section.description}</p>
              )}
              {section.id === 'hero' && (
                <div className="scroll-hint">
                  <span>Scroll pour découvrir</span>
                  <div className="scroll-arrow">↓</div>
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Landing1;
