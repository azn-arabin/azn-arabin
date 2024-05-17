"use client";

import { Container } from "react-bootstrap";

export const AppContainer = ({ className, id, children }) => (
  <Container className={className} id={id}>
    {children}
  </Container>
);
