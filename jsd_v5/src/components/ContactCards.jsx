// jsd_v5/src/components/ContactCards.jsx
import React from "react";
import GlassSurface from "./GlassSurface/GlassSurface";
import "./ContactCards.css";

import behanceLogo from "../ressources1/Behance_blanc_blanc1.png";
import instagramLogo from "../ressources1/Instagram_blanc_blanc1.png";
import phoneLogo from "../ressources1/Mail_blanc copie_blanc1.png";
import mailLogo from "../ressources1/Mail_blanc_blanc1.png";

const ContactCards = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="contact-cards-grid grid grid-cols-4 gap-4 place-items-center">
        
        {/* Behance */}
        <a href="https://www.behance.net/joevin" target="_blank" rel="noopener noreferrer" className="card-hover no-underline block">
          <GlassSurface width={220} height={160} borderRadius={24}>
            <div className="flex flex-col items-center justify-center text-center w-full h-full cursor-pointer relative z-10">
              <div className="flex flex-row items-center justify-center gap-2 mb-2">
                <img src={behanceLogo} alt="Behance" className="w-7 h-7 filter invert brightness-90 opacity-80" />
                <span className="text-base font-medium text-slate-900">Behance</span>
              </div>
              <p className="text-xs text-gray-600">behance.net/joevin</p>
            </div>
          </GlassSurface>
        </a>

        {/* Instagram */}
        <a href="https://www.instagram.com/jsdglobaldesign?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="card-hover no-underline block">
          <GlassSurface width={220} height={160} borderRadius={24}>
            <div className="flex flex-col items-center justify-center text-center w-full h-full cursor-pointer relative z-10">
              <div className="flex flex-row items-center justify-center gap-2 mb-2">
                <img src={instagramLogo} alt="Instagram" className="w-7 h-7 filter invert brightness-90 opacity-80" />
                <span className="text-base font-medium text-slate-900">Instagram</span>
              </div>
              <p className="text-xs text-gray-600">@jsdglobaldesign</p>
            </div>
          </GlassSurface>
        </a>

        {/* Téléphone */}
        <a href="tel:+33769596200" className="card-hover no-underline block">
          <GlassSurface width={220} height={160} borderRadius={24}>
            <div className="flex flex-col items-center justify-center text-center w-full h-full cursor-pointer relative z-10">
              <div className="flex flex-row items-center justify-center gap-2 mb-2">
                <img src={phoneLogo} alt="Téléphone" className="w-7 h-7 filter invert brightness-90 opacity-80" />
                <span className="text-base font-medium text-slate-900">Téléphone</span>
              </div>
              <p className="text-xs text-gray-600">+33 (0)7 69 59 62 00</p>
            </div>
          </GlassSurface>
        </a>

        {/* Mail */}
        <a href="mailto:joevinsirach@gmail.com" className="card-hover no-underline block">
          <GlassSurface width={220} height={160} borderRadius={24}>
            <div className="flex flex-col items-center justify-center text-center w-full h-full cursor-pointer relative z-10">
              <div className="flex flex-row items-center justify-center gap-2 mb-2">
                <img src={mailLogo} alt="Mail" className="w-7 h-7 filter invert brightness-90 opacity-80" />
                <span className="text-base font-medium text-slate-900">Mail</span>
              </div>
              <p className="text-xs text-gray-600">joevinsirach@gmail.com</p>
            </div>
          </GlassSurface>
        </a>

      </div>
    </div>
  );
};

export default ContactCards;
