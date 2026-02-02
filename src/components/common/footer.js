import React from "react";
import Image from "next/image";
import styles from "../../styles/common.module.css";
import SocialMedia from "@/components/common/social-media";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.imgContainer}>
        <Image
          src="/images/me.png"
          alt="me"
          width={120}
          height={120}
          quality={85}
        />
      </div>
      <span>Md. Asaduzzman (Arabin)</span>
      <SocialMedia />
      <span>© {new Date().getFullYear()} copyright all right reserved</span>
    </div>
  );
};

export default Footer;
