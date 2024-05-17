import React from "react";
import styles from "../../../styles/about.module.css";
import { achievements } from "@/constants";
import CountUpAnimation from "@/components/common/animations/count-up-animation";

const Achievement = () => {
  return (
    <div className={styles.achievements}>
      {achievements.map((achievement, id) => (
        <div className={styles.achievement} key={id}>
          <div className="flex flex-row gap-1 font-bold text-4xl">
            <CountUpAnimation startValue={-100} endValue={achievement.amount} />
            <span>+</span>
          </div>
          <span className="font-normal text-sm">{achievement.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Achievement;
