import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    let raf: number;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const animate = () => {
      cx += (x - cx) * 0.055;
      cy += (y - cy) * 0.055;
      el.style.transform = `translate(${cx - 500}px, ${cy - 500}px)`;
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-0"
      style={{
        width: 1000,
        height: 1000,
        background:
          "radial-gradient(circle at center, rgba(198,167,92,0.055) 0%, rgba(198,167,92,0.022) 28%, rgba(198,167,92,0.006) 55%, transparent 72%)",
        filter: "blur(24px)",
        willChange: "transform",
      }}
    />
  );
}
