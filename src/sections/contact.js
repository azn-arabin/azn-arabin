"use client";
import React, { useState } from "react";
import styles from "../styles/contact.module.css";
import Layout from "@/components/common/layout";
import { Form, InputGroup, Spinner } from "react-bootstrap";
import LeftSide from "@/components/contact/left-side";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const [validated, setValidated] = useState(false);
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

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      if (data.email === prevMail) {
        toastHandler(
          "Message received! Please try again later or use a different email if needed.",
          "warning"
        );
      } else {
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
            console.log(result);
            toastHandler(result.message, "success");
            setPrevMail(data.email);
          } else {
            toastHandler(
              "Something went wrong! Please try again later.",
              "error"
            );
          }
        } catch (e) {
          toastHandler(
            "Something went wrong! Please try again later.",
            "error"
          );
        }
      }
    }

    setValidated(true);
    setLoading(false);
  };

  return (
    <div id="contact">
      <Layout>
        <div className={styles.wrapper}>
          <LeftSide />
          <div className={styles.rightSide}>
            <h4>Have a vision? I've got the expertise. Let's collaborate.</h4>
            <span>
              I'd love to hear more about who you are and the exciting concepts
              you're pondering.
            </span>
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className={styles.form}
            >
              <div className={styles.inputContainer}>
                <Form.Group controlId="validationCustom01">
                  <Form.Label>Name*</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handleOnChange}
                    placeholder="Your name..."
                    maxLength="30"
                  />
                  <Form.Control.Feedback type={"invalid"}>
                    Please enter your name.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationCustom02">
                  <Form.Label>Email*</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleOnChange}
                    placeholder="Your email..."
                  />
                  <Form.Control.Feedback type={"invalid"}>
                    Please enter a valid email.
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
              <Form.Group controlId="validationCustom01">
                <Form.Label>Subject*</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="subject"
                  value={data.subject}
                  onChange={handleOnChange}
                  placeholder="Subject..."
                  maxLength="80"
                />
                <Form.Control.Feedback type={"invalid"}>
                  Please enter subject.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="validationCustom01">
                <Form.Label>Message*</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={data.message}
                    onChange={handleOnChange}
                    placeholder="Leave a message here..."
                    style={{ height: "90px" }}
                    required
                    maxLength="600"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please write your message...
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <button
                type={"submit"}
                style={{
                  padding: "15px",
                  marginTop: "5px",
                }}
                className={"button"}
                disabled={loading}
              >
                Send Message{" "}
                {loading && <Spinner animation={"border"} size={"sm"} />}
              </button>
              <ToastContainer />
            </Form>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
