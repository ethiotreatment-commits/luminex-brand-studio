import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
  scale?: number;
}

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  direction = "up",
  distance = 40,
  once = true,
  scale,
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  const directionMap = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  const initial = {
    opacity: 0,
    ...directionMap[direction],
    ...(scale ? { scale } : {}),
  };

  const animate = {
    opacity: isInView ? 1 : 0,
    x: isInView ? 0 : directionMap[direction].x,
    y: isInView ? 0 : directionMap[direction].y,
    ...(scale ? { scale: isInView ? 1 : scale } : {}),
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
