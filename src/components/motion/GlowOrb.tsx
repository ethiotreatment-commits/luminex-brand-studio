import { motion } from "framer-motion";

interface GlowOrbProps {
  className?: string;
  size?: number;
  color?: string;
  delay?: number;
}

const GlowOrb = ({ className = "", size = 300, color = "primary", delay = 0 }: GlowOrbProps) => {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none blur-[100px] bg-${color}/10 ${className}`}
      style={{ width: size, height: size }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default GlowOrb;
