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
      const response = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          ...data,
          subject: `From Portfolio - ${data.subject}`,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SENDGRID_AUTHENTICATION_KEY}`,
        },
        method: "POST",
      });

      if (response.status === 200) {
        const result = await response.json();
        toastHandler(result.message, "success");
        setPrevMail(data.email);
      } else {
        toastHandler("Something went wrong! Please try again later.", "error");
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
          />
        </div>
        <button
          type={"submit"}
          style={{
            padding: "15px",
            marginTop: "5px",
          }}
          className={"button"}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default ContactForm;
