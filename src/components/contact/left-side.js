import React from "react";
import styles from "../../styles/contact.module.css";
import {
  UilCommentAltDots,
  UilOutgoingCall,
  UilWhatsapp,
} from "@iconscout/react-unicons";

const LeftSide = () => {
  return (
    <div className={styles.leftSide}>
      <h4>
        I am eager to understand your project goals. Let's schedule a discussion
        and get started!
      </h4>
      <div className={styles.suggestion}>
        <div className={styles.logo}>
          <UilCommentAltDots color={"var(--selected-color"} />
        </div>
        <div className={styles.details}>
          <span>Chat with me</span>
          <span>I'm available to answer your inquiries and emails.</span>
          <a href={"mailto:aznarabin@gmail.com"}>aznarabin@gmail.com</a>
        </div>
      </div>
      <div className={styles.suggestion}>
        <div className={styles.logo}>
          <UilWhatsapp color={"var(--selected-color"} />
        </div>
        <div className={styles.details}>
          <span>WhatsApp me</span>
          <span>
            I'll be there to provide timely and comprehensive responses.
          </span>
          <a
            href="https://wa.me/+8801794973067"
            target={"_blank"}
            rel={"noreferrer"}
          >
            Click here to WhatsApp
          </a>
        </div>
      </div>
      <div className={styles.suggestion}>
        <div className={styles.logo}>
          <UilOutgoingCall color={"var(--selected-color"} />
        </div>
        <div className={styles.details}>
          <span>Call me</span>
          <span>I'm here to answer your call.</span>
          <a href="tel:+8801794973067">Click here to Call</a>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
