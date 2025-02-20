import { motion, useTransform, useSpring, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CountUpNumber = ({ value, delay }: { value: number; delay: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    const animationDuration = 3000; // 2 seconds
    const increment = value / (animationDuration / 16);

    let start = 0;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16); // 60 FPS

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      ref={ref}
      whileInView={{ opacity: 1 }}
      transition={{ delay, duration: 1 }}
      viewport={{ once: true }}
      className="text-3xl font-light"
    >
      {count}
    </motion.div>
  );
};

export default CountUpNumber;
