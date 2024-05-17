import React from "react";
import styles from "../../../styles/contact.module.css";
import Layout from "@/components/common/layout";
import LeftSide from "@/components/landing/contact/left-side";
import ContactForm from "@/components/landing/contact/contact-form";

const Contact = () => {
  return (
    <div id="contact">
      <Layout>
        <div className={styles.wrapper}>
          <LeftSide />
          <ContactForm />
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
