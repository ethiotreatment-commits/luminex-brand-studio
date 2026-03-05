import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollTextRevealProps {
  text: string;
  className?: string;
}

const ScrollTextReveal = ({ text, className = "" }: ScrollTextRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = text.split(" ");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <div ref={containerRef} className="relative" style={{ height: `${Math.max(200, words.length * 18)}vh` }}>
      <div className="sticky top-0 min-h-screen flex items-center justify-center">
        <p className={`max-w-4xl mx-auto text-center leading-relaxed flex flex-wrap justify-center gap-x-[0.35em] gap-y-1 px-6 ${className}`}>
          {words.map((word, i) => {
            const start = i / words.length;
            const end = (i + 1) / words.length;
            return <Word key={i} word={word} progress={scrollYProgress} range={[start, end]} />;
          })}
        </p>
      </div>
    </div>
  );
};

const Word = ({
  word,
  progress,
  range,
}: {
  word: string;
  progress: any;
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [8, 0]);
  const filter = useTransform(progress, [range[0], range[1]], ["blur(4px)", "blur(0px)"]);

  return (
    <motion.span
      style={{ opacity, y, filter }}
      className="inline-block will-change-transform"
    >
      {word}
    </motion.span>
  );
};

export default ScrollTextReveal;
