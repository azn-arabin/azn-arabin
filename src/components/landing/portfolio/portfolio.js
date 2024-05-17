import React from "react";
import styles from "../../../styles/portfolio.module.css";
import Layout from "@/components/common/layout";
import Title from "@/components/common/title";
import { projects } from "@/constants";
import { UilEye, UilInfoCircle } from "@iconscout/react-unicons";
import Tooltip from "@/components/common/tooltip";
import { DetailsButton } from "@/components/landing/portfolio/client-components";

const Portfolio = () => {
  return (
    <div id="portfolio" className={styles.wrapper}>
      <Layout>
        <div className={styles.portfolio}>
          <Title>My Portfolio</Title>
          <div className={styles.projects}>
            {projects.map((project, id) => (
              <div key={id} className={styles.project}>
                <div className={styles.container}>
                  <div className={styles.imgContainer}>
                    <img src={project.thumb} alt={project.name} />
                  </div>
                  <div className={styles.hoverOn}>
                    <Tooltip tooltip={"Info"}>
                      <DetailsButton projectProps={project}>
                        <UilInfoCircle color={"var(--text-color)"} />
                      </DetailsButton>
                    </Tooltip>
                    <Tooltip tooltip={"Live preview"}>
                      <a
                        href={project.visit}
                        rel={"noopener noreferrer"}
                        target={"_blank"}
                      >
                        <button className={"button"}>
                          <UilEye color={"var(--text-color"} />
                        </button>
                      </a>
                    </Tooltip>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Portfolio;
