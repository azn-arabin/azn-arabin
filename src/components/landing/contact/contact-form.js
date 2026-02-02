"use client";

import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import styles from "@/styles/contact.module.css";

const ContactForm = () => {
  const [prevMail, setPrevMail] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleOnChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const toastHandler = (message, type) => {
    toast(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
      theme: "colored",
      type,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      toastHandler(
        "Web3Forms key is missing. Please set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.",
        "error",
      );
      setLoading(false);
      return;
    }

    // Basic client-side validation (native required fields + a small guard)
    if (!data.name || !data.email || !data.subject || !data.message) {
      toastHandler("Please fill in all required fields.", "warning");
      setLoading(false);
      return;
    }

    if (data.email === prevMail) {
      toastHandler(
        "Message received! Please try again later or use a different email if needed.",
        "warning",
      );
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: data.name,
          email: data.email,
          subject: `From Portfolio - ${data.subject}`,
          message: data.message,
          replyto: data.email,
          botcheck: "",
        }),
      });

      const payload = await response.json().catch(() => ({}));

      if (response.ok && payload?.success) {
        toastHandler(payload?.message || "Message sent!", "success");
        setPrevMail(data.email);
        setData({ name: "", email: "", subject: "", message: "" });
      } else {
        toastHandler(
          payload?.message || "Something went wrong! Please try again later.",
          "error",
        );
      }
    } catch (e) {
      toastHandler("Something went wrong! Please try again later.", "error");
    }

    setLoading(false);
  };

  return (
    <div className={styles.rightSide}>
      <h4>Have a vision? I've got the expertise. Let's collaborate.</h4>
      <span>
        I'd love to hear more about who you are and the exciting concepts you're
        pondering.
      </span>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputContainer}>
          <div className={styles.field}>
            <label htmlFor="name">Name*</label>
            <input
              id="name"
              required
              type="text"
              name="name"
              value={data.name}
              onChange={handleOnChange}
              placeholder="Your name..."
              maxLength={30}
              autoComplete="name"
              disabled={loading}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="email">Email*</label>
            <input
              id="email"
              required
              type="email"
              name="email"
              value={data.email}
              onChange={handleOnChange}
              placeholder="Your email..."
              autoComplete="email"
              disabled={loading}
            />
          </div>
        </div>
        <div className={styles.field}>
          <label htmlFor="subject">Subject*</label>
          <input
            id="subject"
            required
            type="text"
            name="subject"
            value={data.subject}
            onChange={handleOnChange}
            placeholder="Subject..."
            maxLength={80}
            autoComplete="off"
            disabled={loading}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="message">Message*</label>
          <textarea
            id="message"
            name="message"
            value={data.message}
            onChange={handleOnChange}
            placeholder="Leave a message here..."
            required
            maxLength={600}
            disabled={loading}
          />
        </div>
        <button
          type={"submit"}
          style={{
            padding: "15px",
            marginTop: "5px",
          }}
          className={`button ${styles.submitButton}`}
          disabled={loading}
          aria-busy={loading}
        >
          <span className={styles.buttonInner}>
            {loading && <span className={styles.spinner} aria-hidden />}
            <span>{loading ? "Sending..." : "Send Message"}</span>
          </span>
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default ContactForm;
