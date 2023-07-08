import React from "react";
import styles from "../styles/servies.module.css";
import Layout from "@/components/common/layout";
import Title from "@/components/common/title";
import { services } from "@/contants";

const Services = () => {
  return (
    <div id={"services"}>
      <Layout>
        <div className={styles.wrapper}>
          <Title>My Services</Title>
          <div className={styles.services}>
            {services.map((service, id) => (
              <div className={styles.serviceContainer} key={id}>
                <div className={styles.serviceBack} />
                <div className={styles.service}>
                  <div className={styles.sLogoContainer}>
                    <div className={styles.sLogoBack} />
                    <div className={styles.sLogo}>{service.icon}</div>
                  </div>
                  <span>{service.name}</span>
                  <span>{service.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Services;
