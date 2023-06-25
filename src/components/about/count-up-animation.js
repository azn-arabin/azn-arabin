import React from "react";
import { motion } from "framer-motion";

const CountUpAnimation = ({ number }) => {
  const [count, setCount] = React.useState(-200);

  React.useEffect(() => {
    if (count < number) {
      const timeout = setTimeout(() => {
        setCount((prevCount) => prevCount + 1);
      }, 3);

      return () => clearTimeout(timeout);
    }
  }, [count]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.05 }}
    >
      {Math.abs(count)}+
    </motion.span>
  );
};

export default CountUpAnimation;
