import useTheme from "@/hooks/useTheme";
import React, { createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ sharedTheme, children }) => {
  const {theme, setTheme} = useTheme(sharedTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
