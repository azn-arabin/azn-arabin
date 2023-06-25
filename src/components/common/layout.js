import React from "react";
import styles from "../../styles/common.module.css";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
  return <Container className={styles.layout}>{children}</Container>;
};
export default Layout;
