import React, { useContext } from "react";
import ThemeProvider, { ThemeContext } from "@/context/ThemeProvider";

const LayoutNoTheme = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme === "light" ? "container-fluid light" : "container-fluid dark"
      }
    >
      {children}
    </div>
  );
};
const Layout = ({ sharedTheme, children }) => {
  return (
    <ThemeProvider sharedTheme={sharedTheme}>
      <LayoutNoTheme>{children}</LayoutNoTheme>
    </ThemeProvider>
  );
};

export default Layout;
