"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CountUpAnimation = ({ startValue = 0, endValue }) => {
  const [currentValue, setCurrentValue] = useState(startValue);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const [shouldStartAnimation, setShouldStartAnimation] = useState(false);

  useEffect(() => {
    let intervalId;
    const step = Math.ceil((endValue - startValue) / 60); // Adjust the step value as needed

    if (startValue < endValue) {
      intervalId = setInterval(() => {
        setCurrentValue((prevValue) => {
          if (prevValue + step < endValue) {
            return prevValue + step;
          } else {
            clearInterval(intervalId);
            return endValue;
          }
        });
      }, 16); // Adjust the interval delay as needed
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [startValue, endValue, shouldStartAnimation]);

  useEffect(() => {
    if (isInView) {
      setShouldStartAnimation(!shouldStartAnimation);
      setCurrentValue(startValue);
    }
  }, [isInView]);

  return <motion.h2 ref={containerRef}>{Math.abs(currentValue)}</motion.h2>;
};

export default CountUpAnimation;
