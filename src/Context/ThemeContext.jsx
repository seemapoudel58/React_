import React, { createContext, useState, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
    // Add your logic to apply dark theme styles
  };

  const lightTheme = () => {
    setThemeMode("light");
    // Add your logic to apply light theme styles
  };

  const value = { themeMode, darkTheme, lightTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
