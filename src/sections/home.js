"use client";
import React from "react";
import styles from "../styles/home.module.css";
import { Container } from "react-bootstrap";
import SocialMedia from "@/components/common/social-media";
import { motion, useCycle } from "framer-motion";
import { homeContent } from "@/contants";
import { UilDownloadAlt } from "@iconscout/react-unicons";
import { analytics } from "@/app/page";
import { logEvent } from "firebase/analytics";

const Home = () => {
  const [currentLine, cycleLines] = useCycle(...homeContent);

  const handleDownload = () => {
    window.location.href = "./files/Md. Asaduzzman.pdf";
    logEvent(analytics, "resume_downloaded");
  };

  return (
    <Container className={styles.wrapper} id={"home"}>
      <div className={styles.blur1} />
      <div className={styles.blur2} />
      <div className={styles.leftSide}>
        <div className={styles.content}>
          <h4>Hello, I am</h4>
          <h3>Md. Asaduzzman (Arabin)</h3>
          <div className={styles.animation}>
            <motion.h4
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              I am a
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
          </div>{" "}
          <span>
            I collaborate with professionals and leaders who aspire to develop
            careers that provide intellectual and financial fulfillment.
          </span>
        </div>
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
            Download CV
          </span>
          <UilDownloadAlt color={"var(--text-color)"} size={18} />
        </button>
        <SocialMedia />
      </div>
      <div className={styles.rightSide}>
        <div className={styles.shape}>
          <img
            src={"./images/laptop.png"}
            alt={"laptop"}
            className={styles.image}
          />
        </div>
      </div>
    </Container>
  );
};

export default Home;
