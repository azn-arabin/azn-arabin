import React from "react";
import Layout from "@/components/common/layout";
import Title from "@/components/about/title";
import styles from "../styles/about.module.css";
import Achievement from "@/components/about/achievement";
import Experience from "@/components/about/experience";
import Skills from "@/components/about/skills";
import Education from "@/components/about/education";

const About = () => {
  return (
    <div className={styles.wrapper} id={"about"}>
      <Layout>
        <div className={styles.about}>
          <div className={styles.leftSide}>
            <Title title={"About me"} />
            <h4>I specialize in full stack development.</h4>
            <p>
              I am committed to delivering high-quality work with
              well-documented code. Your satisfaction is my top priority, and I
              am always dedicated and passionate about my work. I believe in
              continuous learning and staying up-to-date with the latest
              technologies to provide the best solutions for your projects.
            </p>
            <Achievement />
            <hr className={styles.divider} />
            <Title title={"Experience"} />
            <Experience />
          </div>
          <div className={styles.rightSide}>
            <hr className={`${styles.divider} ${styles.responsiveDivider}`} />
            <Title title={"Education"} />
            <Education />
            <hr className={styles.divider} />
            <Title title={"Skills"} />
            <Skills />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default About;
