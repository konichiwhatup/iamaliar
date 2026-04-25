"use client";
import { useEffect, useRef } from "react";

export function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  let cx = 0, cy = 0, tx = 0, ty = 0;
  let raf: number;

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX - 4;
      ty = e.clientY - 4;
      el.style.opacity = "1";
    };

    const animate = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      if (el) el.style.transform = `translate(${cx}px, ${cy}px)`;
      raf = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0, left: 0,
        width: 8, height: 8,
        borderRadius: "50%",
        border: "1px solid #c4a87c",
        pointerEvents: "none",
        zIndex: 9998,
        opacity: 0,
        willChange: "transform",
      }}
    />
  );
}
