import { motion } from "framer-motion";

interface WaveTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const WaveText = ({ text, className = "", delay = 0 }: WaveTextProps) => {
  const characters = text.split("");

  return (
    <span className={`inline-flex ${className}`}>
      {characters.map((char, i) => (
        <motion.span
          key={i}
          animate={{
            y: [0, -3, 0, 3, 0],
          }}
          transition={{
            duration: 4,
            delay: delay + i * 0.05,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="inline-block will-change-transform"
          style={{ display: char === " " ? "inline" : "inline-block", minWidth: char === " " ? "0.25em" : undefined }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

export default WaveText;
