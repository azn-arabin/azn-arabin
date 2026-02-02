"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import styles from "../../../styles/portfolio.module.css";
import {
  UilCheck,
  UilComment,
  UilCube,
  UilEye,
  UilAngleLeft,
  UilAngleRight,
  UilFileAlt,
  UilGithub,
  UilTimes,
} from "@iconscout/react-unicons";
import Tooltip from "@/components/common/tooltip";

const Details = ({ show, setShow, project }) => {
  const [index, setIndex] = useState(0);

  const screenshots = useMemo(() => project?.screenshots || [], [project]);

  const close = () => setShow(false);
  const prev = () =>
    setIndex((v) => (v - 1 + screenshots.length) % screenshots.length);
  const next = () => setIndex((v) => (v + 1) % screenshots.length);

  useEffect(() => {
    if (!show) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [show]);

  useEffect(() => {
    if (!show) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
      if (
        screenshots.length > 1 &&
        (e.key === "ArrowLeft" || e.key === "ArrowRight")
      ) {
        e.preventDefault();
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [show, screenshots.length]);

  useEffect(() => {
    // Reset to first slide when opening a new project
    if (show) setIndex(0);
  }, [show, project?.name]);

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Project details"
      onClick={close}
      className={styles.modalOverlay}
    >
      <div
        className={`${styles.pModal} ${styles.modalCard}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          <button className={"button"} onClick={close} aria-label="Close">
            <UilTimes size={26} />
          </button>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.modalLeft}>
            {screenshots.length > 0 ? (
              <div className={styles.carousel}>
                <div className={styles.carouselStage}>
                  <Image
                    src={screenshots[index]}
                    alt={project?.name || "Project screenshot"}
                    width={1400}
                    height={900}
                    className={styles.screenshot}
                    quality={80}
                    priority
                  />
                  {screenshots.length > 1 ? (
                    <div className={styles.carouselNav}>
                      <button
                        type="button"
                        className={styles.navButton}
                        onClick={prev}
                        aria-label="Previous screenshot"
                      >
                        <UilAngleLeft />
                      </button>
                      <button
                        type="button"
                        className={styles.navButton}
                        onClick={next}
                        aria-label="Next screenshot"
                      >
                        <UilAngleRight />
                      </button>
                    </div>
                  ) : null}
                  <div className={styles.counter}>
                    {Math.min(index + 1, screenshots.length)}/
                    {screenshots.length}
                  </div>
                </div>

                {screenshots.length > 1 ? (
                  <div
                    className={styles.thumbs}
                    aria-label="Screenshot thumbnails"
                  >
                    {screenshots.map((src, i) => (
                      <button
                        key={src + i}
                        type="button"
                        className={`${styles.thumb} ${
                          i === index ? styles.thumbActive : ""
                        }`}
                        onClick={() => setIndex(i)}
                        aria-label={`Go to screenshot ${i + 1}`}
                      >
                        <Image
                          src={src}
                          alt=""
                          width={168}
                          height={112}
                          quality={60}
                        />
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <div style={{ padding: 12 }}>No screenshots available.</div>
            )}
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
    </div>
  );
};

export default Details;
