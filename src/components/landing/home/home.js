import React from "react";
import Image from "next/image";
import styles from "../../../styles/home.module.css";
import SocialMedia from "@/components/common/social-media";
import { homeContent } from "@/constants";
import {
  DownloadCVButton,
  StackAnimation,
} from "@/components/landing/home/client-components";
import { AppContainer } from "@/components/common/client-components";

const Home = () => {
  return (
    <AppContainer className={styles.wrapper} id={"home"}>
      <div className={styles.blur1} />
      <div className={styles.blur2} />
      <div className={styles.leftSide}>
        <div className={styles.content}>
          <h4>Hello, I am</h4>
          <h3>Md. Asaduzzman (Arabin)</h3>
          <div className={styles.animation}>
            <StackAnimation content={homeContent}>I am a</StackAnimation>
          </div>
          <span>
            I collaborate with professionals and leaders who aspire to develop
            careers that provide intellectual and financial fulfillment.
          </span>
        </div>
        <a
          href="https://leetcode.com/azn-arabin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.shields.io/badge/dynamic/json?style=flat-square&amp;labelColor=black&amp;color=%23ffa116&amp;label=Solved&amp;query=solvedOverTotal&amp;url=https%3A%2F%2Fleetcode-badge.vercel.app%2Fapi%2Fusers%2Fazn-arabin&amp;logo=leetcode&amp;logoColor=yellow"
            alt="LeetCode user azn-arabin"
          />
        </a>
        <DownloadCVButton>Download CV</DownloadCVButton>
        <SocialMedia />
      </div>
      <div className={styles.rightSide}>
        <div className={styles.shape}>
          <Image
            src="/images/laptop.png"
            alt="laptop"
            className={styles.image}
            width={600}
            height={500}
            priority
            quality={90}
          />
        </div>
      </div>
    </AppContainer>
  );
};

export default Home;
