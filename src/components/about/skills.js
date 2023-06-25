import React from "react";
import styles from "../../styles/about.module.css";
import { skills } from "@/contants";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className={styles.skills}>
      {skills.map((skill, id) => (
        <div className={styles.skill} key={id}>
          <span>{skill.name}</span>
          <div className={styles.percentage}>
            <motion.div
              initial={{ width: "25%" }}
              whileInView={{ width: skill.percentage + "%" }}
              transition={{ duration: 3, type: "spring" }}
              style={{
                height: "100%",
                backgroundColor: "var(--text-color)",
              }}
            />
            <motion.span
              initial={{ right: "75%" }}
              whileInView={{ right: 100 - skill.percentage + "%" }}
              transition={{ duration: 3, type: "spring" }}
              style={{
                position: "absolute",
                top: "0",
              }}
            >
              {skill.percentage}%
            </motion.span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
