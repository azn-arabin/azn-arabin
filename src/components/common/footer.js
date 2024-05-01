"use client";

import React from "react";
import styles from "../../styles/common.module.css";
import SocialMedia from "@/components/common/social-media";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.imgContainer}>
        <img src={"./images/me.png"} alt={"me"} />
      </div>
      <span>Md. Asaduzzman (Arabin)</span>
      <SocialMedia />
      <span>© 2024 copyright all right reserved</span>
    </div>
  );
};

export default Footer;
