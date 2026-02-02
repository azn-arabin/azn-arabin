import React from "react";
import styles from "../../styles/common.module.css";
import { socials } from "src/constants";
import Tooltip from "@/components/common/tooltip";

const SocialMedia = () => {
  return (
    <div
      className={styles.socials}
      role="navigation"
      aria-label="Social media links"
    >
      {socials.map((social, id) => (
        <Tooltip tooltip={social.name} key={id}>
          <a
            href={social.link}
            target={"_blank"}
            rel={"noreferrer noopener"}
            aria-label={`Visit my ${social.name} profile`}
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
