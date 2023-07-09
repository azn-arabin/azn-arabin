import React from "react";
import styles from "../../styles/common.module.css";
import SocialMedia from "@/components/common/social-media";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.imgContainer}>
        <img src={"./images/me.jpg"} alt={"me"} />
      </div>
      <span>Md. Asaduzzaman (Arabin)</span>
      <SocialMedia />
      <span>© 2023 copyright all right reserved</span>
    </div>
  );
};

export default Footer;
