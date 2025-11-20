// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "instant" est plus fiable que "smooth" pour un changement de page complet
    window.scrollTo({ top: 0, behavior: "instant" }); 
  }, [pathname]);

  return null;
}
