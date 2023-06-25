import React from "react";
import styles from "../../styles/about.module.css";
import { achievements } from "@/contants";
import CountUpAnimation from "@/components/about/count-up-animation";
import { motion } from "framer-motion";

const Achievement = () => {
  return (
    <div className={styles.achievements}>
      {achievements.map((achievement, id) => (
        <div className={styles.achievement} key={id}>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.05 }}
          >
            <CountUpAnimation number={achievement.amount} />
          </motion.span>
          <span>{achievement.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Achievement;
