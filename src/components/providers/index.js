"use client";

import React from "react";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/config/firebase.config";
import { ThemeProvider } from "@/context/theme.context";

const app = initializeApp(firebaseConfig);

export let analytics;

if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

const Provider = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Provider;
