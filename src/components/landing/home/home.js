import React from "react";
import styles from "../../../styles/home.module.css";
import SocialMedia from "@/components/common/social-media";
import {
  DownloadCVButton,
  TypewriterEffect,
} from "@/components/landing/home/client-components";
import { AppContainer } from "@/components/common/client-components";

const Home = () => {
  return (
    <AppContainer className={styles.wrapper} id={"home"}>
      <div className={styles.contentSection}>
        <div className={styles.badge}>
          <span className={styles.badgePulse}></span>
          Available for new projects
        </div>

        <h1 className={styles.heading}>
          Hello, I&apos;m <span className={styles.highlight}>Arabin.</span>
          <br />
          <span className={styles.subHeading}>
            <TypewriterEffect
              texts={[
                "Full Stack Developer",
                "MERN Stack Developer",
                "Next.js Developer",
                "Laravel Developer",
                "React Native Developer",
              ]}
            />
          </span>
        </h1>

        <div className={styles.description}>
          <p>
            I build accessible, pixel-perfect, and performant web experiences.
            Specializing in <strong>MERN stack</strong>,{" "}
            <strong>Next.js</strong>, <strong>Laravel</strong>, and{" "}
            <strong>React Native</strong>. I help businesses turn ideas into
            shipping products.
          </p>
        </div>

        <div className={styles.actions}>
          <DownloadCVButton>Download CV</DownloadCVButton>
          <a href="#portfolio" className={styles.outlineButton}>
            View Portfolio
          </a>
        </div>

        <div className={styles.socialsWrapper}>
          <SocialMedia />
        </div>

        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>3+</span>
            <span className={styles.statLabel}>Years Exp.</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>20+</span>
            <span className={styles.statLabel}>Projects</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>100%</span>
            <span className={styles.statLabel}>Commitment</span>
          </div>
        </div>
      </div>

      <div className={styles.visualSection}>
        <div className={styles.glowEffect}></div>
        <div className={styles.codeWindow}>
          <div className={styles.windowHeader}>
            <div className={styles.dot} style={{ background: "#ff5f56" }}></div>
            <div className={styles.dot} style={{ background: "#ffbd2e" }}></div>
            <div className={styles.dot} style={{ background: "#27c93f" }}></div>
            <span className={styles.headerTitle}>developer.config.js</span>
          </div>
          <div className={styles.windowBody}>
            <div className={styles.codeLine}>
              <span className={styles.lineNumber}>1</span>
              <span className={styles.codeText}>
                <span className={styles.kwd} style={{ marginRight: "8px" }}>
                  const
                </span>
                <span className={styles.var}>profile</span> ={" "}
                <span className={styles.bracket}>{`{`}</span>
              </span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNumber}>2</span>
              <span className={`${styles.codeText} ${styles.indent1}`}>
                <span className={styles.prop}>name</span>:{" "}
                <span className={styles.str}>"Md. Asaduzzman"</span>,
              </span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNumber}>3</span>
              <span className={`${styles.codeText} ${styles.indent1}`}>
                <span className={styles.prop}>role</span>:{" "}
                <span className={styles.str}>"Full Stack Developer"</span>,
              </span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNumber}>4</span>
              <span className={`${styles.codeText} ${styles.indent1}`}>
                <span className={styles.prop}>stack</span>:{" "}
                <span className={styles.bracket}>[</span>
              </span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNumber}>5</span>
              <span className={`${styles.codeText} ${styles.indent2}`}>
                <span className={styles.str}>"Next.js"</span>,{" "}
                <span className={styles.str}>"React Native"</span>,{" "}
                <span className={styles.str}>"Laravel"</span>
              </span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNumber}>6</span>
              <span className={`${styles.codeText} ${styles.indent1}`}>
                <span className={styles.bracket}>]</span>,
              </span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNumber}>7</span>
              <span className={`${styles.codeText} ${styles.indent1}`}>
                <span className={styles.prop}>hardWorker</span>:{" "}
                <span className={styles.bool}>true</span>,
              </span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNumber}>8</span>
              <span className={`${styles.codeText} ${styles.indent1}`}>
                <span className={styles.fn}>init</span>:{" "}
                <span className={styles.kwd}>function</span>() {"{"}
              </span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNumber}>9</span>
              <span className={`${styles.codeText} ${styles.indent2}`}>
                <span className={styles.kwd}>return</span>{" "}
                <span className={styles.str}>
                  "Let's build something amazing!"
                </span>
                ;
              </span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNumber}>10</span>
              <span className={`${styles.codeText} ${styles.indent1}`}>
                {"}"}
              </span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNumber}>11</span>
              <span className={styles.codeText}>
                <span className={styles.bracket}>{`}`}</span>;
              </span>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  );
};

export default Home;
