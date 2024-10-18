"use client";

import { motion, useCycle } from "framer-motion";
import React from "react";
import { UilDownloadAlt } from "@iconscout/react-unicons";
import { logEvent } from "firebase/analytics";
import { analytics } from "@/components/providers";

export const StackAnimation = ({ children, content }) => {
  const [currentLine, cycleLines] = useCycle(...content);

  return (
    <>
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        {children}
      </motion.h4>
      <motion.h4
        key={currentLine}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        onAnimationComplete={cycleLines}
        transition={{ duration: 2, type: "spring" }}
      >
        {currentLine}
      </motion.h4>
    </>
  );
};

export const DownloadCVButton = ({ children }) => {
  const handleDownload = () => {
    const url =
      "https://drive.google.com/file/d/1dlL_VBzSb_GbfvGhsRcyIfgjhvudreiG/view?usp=sharing";
    const newTab = window.open(url, "_blank");
    if (newTab) {
      newTab.focus(); // Focus on the new tab if it was successfully opened
    }

    logEvent(analytics, "resume_downloaded");
  };

  return (
    <button
      style={{
        marginBottom: "4px",
      }}
      className={"button"}
      onClick={handleDownload}
    >
      <span
        style={{
          marginRight: "6px",
        }}
      >
        {children}
      </span>
      <UilDownloadAlt color={"var(--text-color)"} size={18} />
    </button>
  );
};
