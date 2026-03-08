import { useEffect, useRef } from "react";
import waveBg from "@/assets/wave-bg.jpg";

const ScrollReactiveWave = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const offset = useRef(0);
  const speed = useRef(0.5);
  const lastScroll = useRef(0);
  const raf = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      const delta = current - lastScroll.current;
      lastScroll.current = current;

      if (delta > 0) {
        speed.current = 0.5 + Math.min(Math.abs(delta) * 0.08, 3);
      } else if (delta < 0) {
        speed.current = -0.3 - Math.min(Math.abs(delta) * 0.04, 1.5);
      }
    };

    const animate = () => {
      speed.current += (0.5 - speed.current) * 0.02;
      offset.current -= speed.current;

      if (containerRef.current) {
        const singleWidth = containerRef.current.scrollWidth / 3;
        // Seamless wrap: keep offset within one tile width
        if (offset.current <= -singleWidth) {
          offset.current += singleWidth;
        } else if (offset.current >= 0) {
          offset.current -= singleWidth;
        }
        containerRef.current.style.transform = `translateX(${offset.current}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div className="absolute bottom-0 left-0 w-full h-[400px] pointer-events-none overflow-hidden opacity-[0.18]">
      <div
        ref={containerRef}
        className="absolute bottom-0 left-0 h-full flex"
        style={{ width: "400%", willChange: "transform" }}
      >
        {[0, 1, 2, 3].map((i) => (
          <img
            key={i}
            src={waveBg}
            alt=""
            className="h-full object-cover flex-shrink-0"
            style={{ width: "25%", transform: i % 2 === 1 ? "scaleX(-1)" : undefined }}
          />
        ))}
      </div>
      {/* Edge blend overlays to hide any remaining seams */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: "linear-gradient(90deg, hsl(var(--background)) 0%, transparent 8%, transparent 92%, hsl(var(--background)) 100%)",
        }}
      />
      {/* Sparkling highlights */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 3 + Math.random() * 3,
              height: 3 + Math.random() * 3,
              left: `${10 + i * 11}%`,
              top: `${30 + Math.sin(i) * 20}%`,
              background: 'radial-gradient(circle, rgba(255,204,153,0.8) 0%, transparent 70%)',
              animation: `pulse-glow ${2 + i * 0.5}s ease-in-out ${i * 0.3}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollReactiveWave;
