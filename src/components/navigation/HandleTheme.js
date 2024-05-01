"use client";

import React from "react";
import { useTheme } from "@/context/theme.context";
import { THEMES } from "@/constants/ui.constants";

const HandleTheme = ({ children }) => {
  const { theme } = useTheme();

  return (
    <body
      className={theme === THEMES.LIGHT ? "" : "theme-dark"}
      style={{
        backgroundColor: "var(--main-bg)",
        color: "var(--text-color)",
      }}
    >
      {children}
    </body>
  );
};

export default HandleTheme;
