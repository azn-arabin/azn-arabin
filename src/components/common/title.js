import React from "react";
import styles from "../../styles/common.module.css";

const Title = ({ children }) => {
  return (
    <div className={styles.title}>
      <h2>{children}</h2>
      <div />
    </div>
  );
};

export default Title;
