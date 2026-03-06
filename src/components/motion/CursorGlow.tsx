import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const CursorGlow = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const mouse = useRef({ x: -100, y: -100 });
  const pos = useRef({ x: -100, y: -100 });
  const trail = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (isMobile) return;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    let raf: number;
    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;
      trail.current.x += (mouse.current.x - trail.current.x) * 0.08;
      trail.current.y += (mouse.current.y - trail.current.y) * 0.08;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 12}px, ${pos.current.y - 12}px)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trail.current.x - 20}px, ${trail.current.y - 20}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div
        ref={trailRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,153,0,0.25) 0%, transparent 70%)",
          willChange: "transform",
        }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: 24,
          height: 24,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,153,0,0.4) 0%, rgba(255,153,0,0.15) 40%, transparent 70%)",
          willChange: "transform",
        }}
      />
    </>
  );
};

export default CursorGlow;
