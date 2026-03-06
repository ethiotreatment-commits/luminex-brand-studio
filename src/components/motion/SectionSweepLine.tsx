import { useEffect, useRef } from "react";

interface SectionSweepLineProps {
  children: React.ReactNode;
  className?: string;
}

const SectionSweepLine = ({ children, className }: SectionSweepLineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const hasFired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasFired.current) {
          hasFired.current = true;
          if (lineRef.current) {
            lineRef.current.style.animation = "sweep-line 1.2s ease-out forwards";
          }
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} style={{ position: "relative" }}>
      <div
        ref={lineRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "2px",
          background: "linear-gradient(90deg, transparent, hsl(36 100% 50% / 0.7), hsl(36 100% 50% / 0.9), hsl(36 100% 50% / 0.7), transparent)",
          transform: "scaleX(0)",
          transformOrigin: "left",
          opacity: 0,
          zIndex: 10,
          pointerEvents: "none",
        }}
      />
      {children}
    </div>
  );
};

export default SectionSweepLine;
