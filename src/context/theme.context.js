"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { THEME_KEY, THEMES } from "@/constants/ui.constants";

// Define a type for theme
const ThemeContext = createContext({
  theme: THEMES.LIGHT,
  toggleTheme: () => {},
});

// Define the context
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEMES.LIGHT);

  // Load initial theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_KEY);
    if (
      storedTheme &&
      (storedTheme === THEMES.LIGHT || storedTheme === THEMES.DARK)
    ) {
      setTheme(storedTheme);
    } else {
      // Set initial theme based on system preference
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDarkMode ? THEMES.DARK : THEMES.LIGHT);
    }
  }, []);

  // Function to toggle theme
  const toggleTheme = () => {
    const newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to consume the theme context
const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
