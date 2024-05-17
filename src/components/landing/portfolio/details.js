import React, { useState } from "react";
import styles from "../../../styles/portfolio.module.css";
import { Carousel, Modal } from "react-bootstrap";
import {
  UilCheck,
  UilComment,
  UilCube,
  UilEye,
  UilFileAlt,
  UilGithub,
  UilTimes,
} from "@iconscout/react-unicons";
import Tooltip from "@/components/common/tooltip";

const Details = ({ show, setShow, project }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      size={"xl"}
      fullscreen={"xl-down"}
      centered
      aria-labelledby="example-custom-modal-styling-title"
    >
      <div className={styles.pModal}>
        <div className={styles.modalHeader}>
          <button className={"button"} onClick={() => setShow(false)}>
            <UilTimes size={26} />
          </button>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.modalLeft}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              {project.screenshots?.map((screenshot, id) => (
                <Carousel.Item key={id}>
                  <img
                    src={screenshot}
                    alt={""}
                    className={styles.screenshot}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className={styles.modalRight}>
            <h4>{project.name}</h4>
            <div className={styles.pTopic}>
              <h5>
                <UilFileAlt /> Type
              </h5>
              <span className={styles.pContent}>{project.type}</span>
            </div>
            <div className={styles.pTopic}>
              <h5>
                <UilCube /> Technologies
              </h5>
              <ul>
                {project.tech?.map((te, id) => (
                  <li key={id}>{te}</li>
                ))}
              </ul>
            </div>
            <div className={styles.pTopic}>
              <h5>
                <UilCheck /> Completed At
              </h5>
              <span className={styles.pContent}>{project.completedAt}</span>
            </div>
            <div className={styles.pTopic}>
              <h5>
                <UilComment /> Description
              </h5>
              <span className={styles.pContent}>{project.description}</span>
            </div>
            <div className={styles.pLinks}>
              <Tooltip tooltip={"Source Code"}>
                <a
                  href={project.source}
                  rel={"noopener noreferrer"}
                  target={"_blank"}
                >
                  <button className={"button"}>
                    <UilGithub color={"var(--text-color"} />
                  </button>
                </a>
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
      </div>
    </Modal>
  );
};

export default Details;
