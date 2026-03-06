import { useEffect, useRef } from "react";
import waveBg from "@/assets/wave-bg.jpg";

const ScrollReactiveWave = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const offset = useRef(0);
  const speed = useRef(0.5); // base px/frame
  const lastScroll = useRef(0);
  const raf = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      const delta = current - lastScroll.current;
      lastScroll.current = current;

      if (delta > 0) {
        // Scrolling down → faster rightward
        speed.current = 0.5 + Math.min(Math.abs(delta) * 0.08, 3);
      } else if (delta < 0) {
        // Scrolling up → slow reverse
        speed.current = -0.3 - Math.min(Math.abs(delta) * 0.04, 1.5);
      }
    };

    const animate = () => {
      // Decay speed toward base
      speed.current += (0.5 - speed.current) * 0.02;
      offset.current -= speed.current;

      if (containerRef.current) {
        const w = containerRef.current.scrollWidth / 2;
        if (Math.abs(offset.current) >= w) {
          offset.current = offset.current % w;
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
    <div className="absolute bottom-0 left-0 w-full h-[200px] pointer-events-none overflow-hidden opacity-20">
      <div
        ref={containerRef}
        className="absolute bottom-0 left-0 h-full"
        style={{ width: "200%", willChange: "transform" }}
      >
        <img src={waveBg} alt="" className="h-full w-1/2 object-cover inline-block" />
        <img src={waveBg} alt="" className="h-full w-1/2 object-cover inline-block" />
      </div>
    </div>
  );
};

export default ScrollReactiveWave;
