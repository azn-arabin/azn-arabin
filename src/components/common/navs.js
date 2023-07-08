import React from "react";
import styles from "../../styles/common.module.css";
import { Link } from "react-scroll";

const Navs = ({ className }) => {
  return (
    <div className={className}>
      <Link
        spy={true}
        to="home"
        smooth={true}
        delay={10}
        duration={200}
        activeClass={styles.active}
        className={styles.option}
        offset={0}
      >
        Home
      </Link>
      <Link
        spy={true}
        to="about"
        smooth={true}
        delay={10}
        duration={200}
        activeClass={styles.active}
        className={styles.option}
        offset={0}
      >
        About
      </Link>
      <Link
        spy={true}
        to="services"
        smooth={true}
        delay={10}
        duration={200}
        activeClass={styles.active}
        className={styles.option}
        offset={0}
      >
        Services
      </Link>
      <Link
        spy={true}
        to="portfolio"
        smooth={true}
        delay={10}
        duration={200}
        activeClass={styles.active}
        className={styles.option}
        offset={0}
      >
        Portfolio
      </Link>
      <Link
        spy={true}
        to="contact"
        smooth={true}
        delay={10}
        duration={200}
        activeClass={styles.active}
        className={styles.option}
        offset={0}
      >
        Contact
      </Link>
    </div>
  );
};

export default Navs;
