import React from "react";
import styles from "../../styles/about.module.css";
import { experiences } from "src/constants";
import { UilBag } from "@iconscout/react-unicons";

const Experience = () => {
  return (
    <div className={styles.exEduContainer}>
      {experiences.map((experience, id) => (
        <div className={styles.exEdu} key={id}>
          <div className={styles.eLogo}>
            <UilBag size={22} color={"var(--logo-color)"} />
          </div>
          <div className={styles.eContent}>
            <span>{experience.duration}</span>
            <h5>
              {experience.position} - {experience.company}
            </h5>
            <span>{experience.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
