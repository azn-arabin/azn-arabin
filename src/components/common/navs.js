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
      >
        Contact
      </Link>
    </div>
  );
};

export default Navs;
