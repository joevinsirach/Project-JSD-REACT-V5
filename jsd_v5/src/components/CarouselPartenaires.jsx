import React from 'react';

import decodavenir from '../ressources1/decodavenir_blanc1@2x.png';
import edf from '../ressources1/edf_blanc1@2x.png';
import kgg from '../ressources1/kgg_blanc1@2x.png';
import kinder from '../ressources1/kinder_blanc1.png';
import moet from '../ressources1/moet_blanc1.png';
import mykamie from '../ressources1/mykamie_blanc1@2x.png';
import olemains from '../ressources1/olemains_blanc1@2x.png';
import pitaya from '../ressources1/pitaya_blanc1@2x.png';
import seb from '../ressources1/seb_blanc1@2x.png';
import sephora from '../ressources1/sephora_blanc1.png';
import velo from '../ressources1/velo_blanc1.png';
import vendingtradition from '../ressources1/vendingtradition_blanc1@2x.png';
import villedelyon from '../ressources1/villedelyon_blanc1@2x.png';
import vuse from '../ressources1/vuse_blanc1.png';

const logos = [
  { src: decodavenir, alt: 'Logo Decodavenir' },
  { src: edf, alt: 'Logo EDF' },
  { src: kgg, alt: 'Logo KGG' },
  { src: kinder, alt: 'Logo Kinder' },
  { src: moet, alt: 'Logo Moët' },
  { src: mykamie, alt: 'Logo Mykamie' },
  { src: olemains, alt: 'Logo Olemains' },
  { src: pitaya, alt: 'Logo Pitaya' },
  { src: seb, alt: 'Logo Seb' },
  { src: sephora, alt: 'Logo Sephora' },
  { src: velo, alt: 'Logo Vélo' },
  { src: vendingtradition, alt: 'Logo Vending Tradition' },
  { src: villedelyon, alt: 'Logo Ville de Lyon' },
  { src: vuse, alt: 'Logo Vuse' },
];

const logosExtended = [...logos, ...logos, ...logos];

export function CarouselPartenaires() {
  return (
    <section className="carousel-section" id="partenaires">
      <div
        className="carousel"
        style={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          height: '200px',
          background: 'rgba(255, 255, 255, 0.3)',
          border: 'none',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
          boxShadow: 'none',
          padding: '1rem',
        }}
      >
        <h2
          className="carousel-title"
          style={{
            position: 'absolute',
            left: '50%',
            top: '5px',
            transform: 'translateX(-50%)',
            zIndex: 4,
            padding: '0.5rem 3vw',
            fontSize: '1.5rem',
            borderRadius: '50px',
            pointerEvents: 'none',
            maxWidth: '96%',
            boxSizing: 'border-box',
            textAlign: 'center',
            fontWeight: 300,
            letterSpacing: '1px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          Ils nous ont fait confiance... Et vous ?
        </h2>

        <div
          className="carousel-track"
          style={{
            display: 'flex',
            width: 'max-content',
            animation: 'scroll 60s linear infinite',
            alignItems: 'center',
            height: '100%',
            marginTop: '1.5rem',
          }}
        >
          {logosExtended.map((logo, idx) => (
            <div
              className="carousel-item"
              key={idx}
              style={{
                minWidth: '180px',
                height: '120px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
                boxShadow: 'none',
                borderRadius: '50px',
                padding: 0,
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  maxHeight: '70px',
                  maxWidth: '140px',
                  filter: 'brightness(0) saturate(100%) opacity(0.75)',
                  transition: 'filter 0.4s, transform 0.4s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'brightness(0) saturate(100%) opacity(0.9)';
                  e.currentTarget.style.transform = 'scale(1.13)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'brightness(0) saturate(100%) opacity(0.75)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          @media (max-width: 900px) {
            .carousel-title {
              font-size: 1.2rem !important;
            }
          }
          @media (max-width: 600px) {
            .carousel-title {
              font-size: 1rem !important;
              padding: 0.5rem 2vw !important;
            }
          }
          @media (max-width: 400px) {
            .carousel-title {
              font-size: 0.85rem !important;
              padding: 0.4rem 1.5vw !important;
            }
          }
        `}</style>
    </section>
  );
}
