import { motion } from "framer-motion";

interface GlowOrbProps {
  className?: string;
  size?: number;
  color?: string;
  delay?: number;
}

const GlowOrb = ({ className = "", size = 300, color = "primary", delay = 0 }: GlowOrbProps) => {
  return (
    <div
      className={`absolute rounded-full pointer-events-none blur-[120px] bg-${color}/3 ${className}`}
      style={{ width: size, height: size, opacity: 0.05 }}
    />
  );
};

export default GlowOrb;
