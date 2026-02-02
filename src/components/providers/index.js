"use client";

import React, { useEffect } from "react";
import { ThemeProvider } from "@/context/theme.context";

// Lazy load Firebase Analytics only when needed
export let analytics;

export const getAnalyticsInstance = async () => {
  if (typeof window !== "undefined" && !analytics) {
    const { initializeApp } = await import("firebase/app");
    const { getAnalytics } = await import("firebase/analytics");
    const { firebaseConfig } = await import("@/config/firebase.config");

    const app = initializeApp(firebaseConfig);
    analytics = getAnalytics(app);
  }
  return analytics;
};

const Provider = ({ children }) => {
  useEffect(() => {
    // Initialize analytics lazily after mount
    getAnalyticsInstance();
  }, []);

  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Provider;
