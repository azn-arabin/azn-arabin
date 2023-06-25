"use client";
import React, { useEffect, useState } from "react";
import styles from "../../styles/common.module.css";
import { Container } from "react-bootstrap";
import { Events, Link } from "react-scroll";
import {
  UilBars,
  UilBracketsCurly,
  UilMoon,
  UilSun,
  UilTimes,
} from "@iconscout/react-unicons";
import { useContext } from "react";
import { themeContext } from "@/context/context";
import Tooltip from "@/components/common/tooltip";
import Navs from "@/components/common/navs";
import { motion } from "framer-motion";

const Header = () => {
  const theme = useContext(themeContext);
  const lightTheme = theme.state.lightTheme;
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavs, setShowNavs] = useState(false);

  const handleClick = () => {
    theme.dispatch({ type: "THEME_CHANGED" });
  };

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
      <Container className={styles.header}>
        <Link
          className={styles.brand}
          spy={true}
          to="home"
          smooth={true}
          delay={10}
          duration={200}
        >
          <UilBracketsCurly color={"var(--text-color)"} size={20} />
          <span>Arabin</span>
        </Link>
        <Navs className={styles.navContainer} />
        <div className={styles.rightSide}>
          <Tooltip
            tooltip={
              lightTheme ? "Switch to dark theme" : "Switch to light theme"
            }
          >
            <div className={styles.toggle} onClick={handleClick}>
              <UilMoon color={"var(--text-color)"} size={18} />
              <UilSun color={"var(--text-color)"} size={18} />
              <div
                className={
                  lightTheme ? styles.tButtonLight : styles.tButtonDark
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
      </Container>
      <Container>
        <motion.div
          animate={showNavs ? "open" : "closed"}
          variants={{
            open: { opacity: 1, x: 0 },
            closed: { opacity: 0, x: "-100%" },
          }}
        >
          <Navs className={showNavs ? styles.showNavs : styles.hideNavs} />
        </motion.div>
      </Container>
    </div>
  );
};

export default Header;
