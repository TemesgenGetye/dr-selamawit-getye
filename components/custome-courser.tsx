"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const cursorAnimation = useAnimation();

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const mouseDown = () => setIsClicking(true);
    const mouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
    };
  }, []);

  useEffect(() => {
    if (isClicking) {
      cursorAnimation.start({
        scale: 1.5,
        opacity: 0.5,
        transition: { duration: 0.2 },
      });
    } else {
      cursorAnimation.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 },
      });
    }
  }, [isClicking, cursorAnimation]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-50"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 300,
        restDelta: 0.001,
      }}
    >
      <motion.div
        className="h-8 w-8 rounded-full border border-gold"
        animate={cursorAnimation}
        style={{
          borderColor: "rgba(255, 215, 0, 0.5)",
          boxShadow:
            "0 0 10px rgba(0, 0, 0, 0.5), 0 0 5px rgba(221, 221, 221, 0.5)",
        }}
      />
    </motion.div>
  );
};

export default CustomCursor;
