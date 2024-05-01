import React from "react";
import styles from "../../styles/about.module.css";
import { achievements } from "src/constants";

const Achievement = () => {
  return (
    <div className={styles.achievements}>
      {achievements.map((achievement, id) => (
        <div className={styles.achievement} key={id}>
          <span>{achievement.amount}+</span>
          <span>{achievement.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Achievement;
