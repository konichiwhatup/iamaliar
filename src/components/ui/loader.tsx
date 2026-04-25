"use client";
import { useEffect, useState } from "react";

export function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 2200);
    return () => clearTimeout(t);
  }, []);

  if (hidden) return null;

  return (
    <div
      style={{
        position: "fixed", inset: 0,
        background: "#0a0908",
        zIndex: 10000,
        display: "flex", alignItems: "center", justifyContent: "center",
        flexDirection: "column", gap: "2rem",
        transition: "opacity 1.2s ease, visibility 1.2s ease",
        opacity: hidden ? 0 : 1,
        visibility: hidden ? "hidden" : "visible",
      }}
    >
      <p style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.65rem",
        letterSpacing: "0.3em",
        color: "#6b6560",
        textTransform: "uppercase",
      }}>
        iamaliar — loading
      </p>
      <div style={{ width: 120, height: 1, background: "#6b6560", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", left: 0, top: 0,
          width: "100%", height: "100%",
          background: "#c4a87c",
          animation: "loaderSlide 2s ease-in-out forwards",
        }} />
      </div>
      <style>{`@keyframes loaderSlide { from { transform: translateX(-100%); } to { transform: translateX(0); } }`}</style>
    </div>
  );
}
