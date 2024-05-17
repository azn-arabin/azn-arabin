"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { Container } from "react-bootstrap";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.log("error - ", error);
  }, [error]);

  return (
    <Container className="py-10">
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </Container>
  );
}
