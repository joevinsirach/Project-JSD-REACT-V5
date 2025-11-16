import { createContext, useContext, useState } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  return (
    <ScrollContext.Provider value={{ scrollProgress, setScrollProgress }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => useContext(ScrollContext);
