"use client";
import { useEffect, useRef, useState } from "react";

export function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const cx = useRef(0), cy = useRef(0), tx = useRef(0), ty = useRef(0);

  useEffect(() => {
    // タッチデバイスや細い画面では追跡カーソルを出さない
    const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    const isSmall = window.matchMedia("(max-width: 767px)").matches;
    if (isTouch || isSmall) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const el = cursorRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      tx.current = e.clientX - 4;
      ty.current = e.clientY - 4;
      el.style.opacity = "1";
    };

    let raf: number;
    const animate = () => {
      cx.current += (tx.current - cx.current) * 0.08;
      cy.current += (ty.current - cy.current) * 0.08;
      el.style.transform = `translate(${cx.current}px, ${cy.current}px)`;
      raf = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

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
