"use client";

import { motion, useCycle } from "framer-motion";
import React from "react";
import { UilDownloadAlt } from "@iconscout/react-unicons";
import { logEvent } from "firebase/analytics";
import { getAnalyticsInstance } from "@/components/providers";

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

export const TypewriterEffect = ({ texts }) => {
  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [reverse, setReverse] = React.useState(false);
  const [blink, setBlink] = React.useState(true);

  // Blinking cursor
  React.useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // Typing logic
  React.useEffect(() => {
    if (index >= texts.length) {
      setIndex(0); // Reset to first word
      return;
    }

    const currentText = texts[index];
    const speed = reverse ? 40 : 120; // Type slower (120), delete faster (40)

    // If we finished typing the word
    if (subIndex === currentText.length + 1 && !reverse) {
      const timeout = setTimeout(() => {
        setReverse(true);
      }, 2000); // Wait 2s before deleting
      return () => clearTimeout(timeout);
    }

    // If we finished deleting the word
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 25 : speed, parseInt(Math.random() * 50))); // variance

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);

  return (
    <span style={{ display: "inline-flex", whiteSpace: "nowrap" }}>
      {texts[index].substring(0, subIndex)}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        style={{
          display: "inline-block",
          width: "2px",
          height: "1.2em",
          background: "currentColor",
          marginLeft: "2px",
          verticalAlign: "bottom",
        }}
      />
    </span>
  );
};

export const DownloadCVButton = ({ children }) => {
  const handleDownload = () => {
    const url = process.env.NEXT_PUBLIC_CV_LINK;
    const newTab = window.open(url, "_blank");
    if (newTab) {
      newTab.focus(); // Focus on the new tab if it was successfully opened
    }

    getAnalyticsInstance()
      .then((a) => {
        if (a) logEvent(a, "resume_downloaded");
      })
      .catch(() => {
        // ignore analytics failures
      });
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
