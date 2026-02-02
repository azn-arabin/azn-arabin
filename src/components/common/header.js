"use client";

import React, { useEffect, useState } from "react";
import styles from "../../styles/common.module.css";
import { Events, Link } from "react-scroll";
import {
  UilBars,
  UilBracketsCurly,
  UilMoon,
  UilSun,
  UilTimes,
} from "@iconscout/react-unicons";
import { useTheme } from "@/context/theme.context";
import Tooltip from "@/components/common/tooltip";
import Navs from "@/components/common/navs";
import { motion } from "framer-motion";
import { THEMES } from "@/constants/ui.constants";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavs, setShowNavs] = useState(false);

  const handleScroll = () => {
    const scrollOffset = window.scrollY;
    if (scrollOffset > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    setShowNavs(false);
  };

  useEffect(() => {
    handleScroll();
    Events.scrollEvent.register("begin", handleScroll);
    window.addEventListener("scroll", handleScroll);

    return () => {
      Events.scrollEvent.remove("begin", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={styles.wrapper}
      style={
        isScrolled
          ? {
              backgroundColor: "var(--header-bg)",
              borderBottom: "1px solid var(--border-color)",
            }
          : null
      }
    >
      <div
        className={`mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl ${styles.header}`}
      >
        <Link
          className={styles.brand}
          spy={true}
          to="home"
          smooth={true}
          delay={10}
          duration={200}
          offset={0}
        >
          <UilBracketsCurly color={"var(--text-color)"} size={20} />
          <span>Arabin</span>
        </Link>
        <Navs className={styles.navContainer} />
        <div className={styles.rightSide}>
          <Tooltip
            tooltip={
              theme === THEMES.DARK
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
          >
            <div className={styles.toggle} onClick={toggleTheme}>
              <UilMoon color={"var(--text-color)"} size={18} />
              <UilSun color={"var(--text-color)"} size={18} />
              <div
                className={
                  theme === THEMES.DARK
                    ? styles.tButtonDark
                    : styles.tButtonLight
                }
              />
            </div>
          </Tooltip>

          <button
            className={`${styles.headerButton} button`}
            onClick={() => {
              setShowNavs(!showNavs);
              setIsScrolled(true);
            }}
          >
            {showNavs ? (
              <UilTimes color={"var(--text-color)"} />
            ) : (
              <UilBars color={"var(--text-color)"} />
            )}
          </button>
        </div>
      </div>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          animate={showNavs ? "open" : "closed"}
          variants={{
            open: { opacity: 1, x: 0 },
            closed: { opacity: 0, x: "-100%" },
          }}
        >
          <Navs className={showNavs ? styles.showNavs : styles.hideNavs} />
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
