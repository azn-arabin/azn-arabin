import React from "react";
import styles from "../../../styles/about.module.css";

const Title = ({ title }) => {
  return (
    <div className={styles.title}>
      <div className={styles.square} />
      <h5>{title}</h5>
    </div>
  );
};

export default Title;
