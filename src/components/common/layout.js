import React from "react";
import styles from "../../styles/common.module.css";
import { AppContainer } from "@/components/common/client-components";

const Layout = ({ children }) => {
  return <AppContainer className={styles.layout}>{children}</AppContainer>;
};
export default Layout;
