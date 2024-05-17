"use client";

import React, { useState } from "react";
import Details from "@/components/landing/portfolio/details";

export const DetailsButton = ({ children, projectProps }) => {
  const [details, setDetails] = useState(false);
  const [project, setProject] = useState({});

  return (
    <>
      <button
        className={"button"}
        onClick={() => {
          setDetails(true);
          setProject(projectProps);
        }}
      >
        {children}
      </button>
      <Details show={details} setShow={setDetails} project={project} />
    </>
  );
};
