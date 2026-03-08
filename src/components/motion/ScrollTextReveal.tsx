import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollTextRevealProps {
  text: string;
  className?: string;
  highlightPhrases?: string[];
}

const ScrollTextReveal = ({ text, className = "", highlightPhrases = [] }: ScrollTextRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = text.split(" ");

  // Build a map of which word indices belong to highlighted phrases
  const highlightMap = new Map<number, boolean>();
  const lowerText = text.toLowerCase();
  highlightPhrases.forEach((phrase) => {
    const phraseWords = phrase.toLowerCase().split(" ");
    let searchFrom = 0;
    while (true) {
      const idx = lowerText.indexOf(phrase.toLowerCase(), searchFrom);
      if (idx === -1) break;
      // Count words before this index
      const before = text.slice(0, idx);
      const wordOffset = before ? before.split(" ").length - (before.endsWith(" ") ? 0 : 0) : 0;
      const startWord = before.trimEnd().split(/\s+/).filter(Boolean).length;
      for (let w = 0; w < phraseWords.length; w++) {
        highlightMap.set(startWord + w, true);
      }
      searchFrom = idx + phrase.length;
    }
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Taller scroll distance so the entire text has room to fully reveal
  const scrollHeight = Math.max(250, words.length * 8);

  return (
    <div ref={containerRef} className="relative" style={{ height: `${scrollHeight}vh` }}>
      <div className="sticky top-0 min-h-screen flex items-center justify-center">
        <p className={`max-w-5xl mx-auto text-center leading-snug flex flex-wrap justify-center gap-x-[0.3em] gap-y-2 px-6 ${className}`}>
          {words.map((word, i) => {
            // Map each word so the LAST word fully resolves by 95% scroll
            const start = (i / words.length) * 0.9;
            const end = ((i + 1) / words.length) * 0.9;
            const isHighlighted = highlightMap.has(i);
            return (
              <Word
                key={i}
                word={word}
                progress={scrollYProgress}
                range={[start, end]}
                highlighted={isHighlighted}
              />
            );
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
  highlighted,
}: {
  word: string;
  progress: any;
  range: [number, number];
  highlighted: boolean;
}) => {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const y = useTransform(progress, range, [6, 0]);
  const filter = useTransform(progress, [range[0], range[1]], ["blur(3px)", "blur(0px)"]);
  const scale = useTransform(progress, range, highlighted ? [0.95, 1.05] : [0.98, 1]);

  return (
    <motion.span
      style={{ opacity, y, filter, scale }}
      className={`inline-block will-change-transform ${
        highlighted
          ? "font-extrabold text-primary glow-text"
          : ""
      }`}
    >
      {word}
    </motion.span>
  );
};

export default ScrollTextReveal;
