import React from "react";
import styles from "../../styles/common.module.css";
import { socials } from "@/contants";
import Tooltip from "@/components/common/tooltip";

const SocialMedia = () => {
  return (
    <div className={styles.socials}>
      {socials.map((social, id) => (
        <Tooltip tooltip={social.name}>
          <a
            href={social.link}
            target={"_blank"}
            rel={"noreferrer"}
            key={id}
            className={styles.social}
          >
            {social.icon}
          </a>
        </Tooltip>
      ))}
    </div>
  );
};

export default SocialMedia;
