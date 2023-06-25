import React from "react";
import styles from "../../styles/about.module.css";
import { educations } from "@/contants";
import { UilGraduationCap } from "@iconscout/react-unicons";

const Education = () => {
  return (
    <div className={styles.exEduContainer}>
      {educations.map((education, id) => (
        <div className={styles.exEdu} key={id}>
          <div className={styles.eLogo}>
            <UilGraduationCap color={"var(--logo-color"} />
          </div>
          <div className={styles.eContent}>
            <span>{education.duration}</span>
            <p>{education.institution}</p>
            <h5>{education.degree}</h5>
            <span>{education.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
