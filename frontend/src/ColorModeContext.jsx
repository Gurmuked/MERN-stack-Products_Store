import React, { createContext, useState, useContext } from "react";

const ColorModeContext = createContext();

export const useColorMode = () => useContext(ColorModeContext);

export const ColorModeProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState(false);
  const toggleColorMode = () => setColorMode((prev) => !prev);

  return (
    <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};
