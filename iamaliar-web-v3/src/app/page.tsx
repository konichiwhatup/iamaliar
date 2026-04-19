"use client";

export const runtime = "edge";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/language-context";

const LINE_URL = "https://line.me/ti/p/@857usrfa";

const sectionImages = [
  "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=900&q=90",
  "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=900&q=90",
  "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=900&q=90",
  "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=900&q=90",
  "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=900&q=90",
];

const imageRights = [true, false, true, false, true];

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function useHeroParallax() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        el.style.transform = `translateY(${y * 0.3}px)`;
        el.style.opacity = String(1 - (y / window.innerHeight) * 1.2);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return ref;
}

export default function AboutPage() {
  useReveal();
  const heroRef = useHeroParallax();
  const { t } = useLanguage();
  const { sections } = t.home;

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 60% at 20% 80%, rgba(58,74,92,0.15), transparent), radial-gradient(ellipse 60% 50% at 80% 20%, rgba(196,168,124,0.08), transparent), #0a0908"
        }} />
        <div className="floating-frame-a absolute top-[15%] left-[8%] w-48 h-64 border opacity-60" style={{ borderColor: "rgba(196,168,124,0.15)" }} />
        <div className="floating-frame-b absolute bottom-[12%] right-[10%] w-36 h-48 border opacity-60" style={{ borderColor: "rgba(196,168,124,0.15)" }} />

        <div ref={heroRef} className="relative z-10 text-center">
          <h1 style={{
            fontFamily: "var(--font-cormorant, 'Cormorant Garamond'), serif",
            fontSize: "clamp(3rem, 10vw, 9rem)",
            fontWeight: 300,
            letterSpacing: "0.08em",
            lineHeight: 0.9,
            color: "#e8e2d8",
            animation: "fadeUp 1.8s cubic-bezier(0.22,1,0.36,1) 2.2s both",
          }}>
            IAMALIAR
          </h1>
          <p style={{
            fontFamily: "var(--font-noto-serif, 'Noto Serif JP'), serif",
            fontWeight: 200,
            fontSize: "clamp(0.75rem, 1.5vw, 1.1rem)",
            letterSpacing: "0.5em",
            color: "#6b6560",
            marginTop: "2rem",
            animation: "fadeUp 1.8s cubic-bezier(0.22,1,0.36,1) 2.6s both",
          }}>
            {t.home.heroTagline}
          </p>
          <div style={{
            width: 1, height: 80,
            background: "linear-gradient(to bottom, #c4a87c, transparent)",
            margin: "3rem auto 0",
            animation: "fadeUp 1.8s cubic-bezier(0.22,1,0.36,1) 3s both",
          }} />
        </div>
        <style>{`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>

      {/* ─── BRAND STORY ─── */}
      <div className="container-site pt-32 pb-20">
        <div className="mb-20 md:mb-28 mx-auto text-center reveal">
          <p className="text-xs tracking-[0.25em] uppercase text-[#555555] mb-4">{t.home.brandStoryLabel}</p>
          <h2 style={{
            fontFamily: "'Noto Serif JP', serif",
            fontWeight: 200,
            fontSize: "clamp(0.9rem, 1.8vw, 1.4rem)",
            lineHeight: 1.7,
            letterSpacing: "0.05em",
            color: "#e8e2d8",
          }}>
            {t.home.brandStoryHeading}
          </h2>
        </div>

        <div className="space-y-20 md:space-y-32">
          {sections.map((section, i) => (
            <div key={i}>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 reveal ${imageRights[i] ? "" : "md:[&>*:first-child]:order-2"}`}>

                {/* Text side */}
                <div className={`flex flex-col justify-center py-8 ${imageRights[i] ? "md:pr-16" : "md:pl-16 md:order-2"}`}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.35em", color: "#2e2e2e", display: "block", marginBottom: "1.5rem" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 200, fontSize: "clamp(1.3rem, 2vw, 1.8rem)", letterSpacing: "0.08em", color: "#e8e2d8", marginBottom: "1.5rem", lineHeight: 1.6 }}>
                    {section.heading}
                  </h3>
                  <div className="space-y-4">
                    {section.body.split("\n\n").map((para, j) => (
                      <p key={j} style={{
                        fontFamily: "'Noto Serif JP', serif",
                        fontWeight: j === 0 ? 200 : 300,
                        fontSize: j === 0 ? "1rem" : "0.83rem",
                        lineHeight: 2.2,
                        letterSpacing: "0.04em",
                        color: j === 0 ? "#e8e2d8" : "#6b6560",
                      }}>
                        {para}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Image side */}
                <div className={`relative overflow-hidden ${imageRights[i] ? "" : "md:order-1"}`} style={{ aspectRatio: "4/5" }}>
                  <Image
                    src={sectionImages[i]}
                    alt={section.imageAlt}
                    fill
                    className="object-cover"
                    style={{ opacity: 0.55, filter: "sepia(0.2) contrast(1.05)" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,9,8,0.3) 0%, transparent 60%, rgba(10,9,8,0.4) 100%)" }} />
                </div>

              </div>
              {i < sections.length - 1 && (
                <div className="mt-20 md:mt-32 border-b border-[#1C1C1C]" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 pt-12 border-t border-[#1C1C1C] flex flex-col sm:flex-row gap-6 reveal">
          <Link
            href="/collection"
            className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase bg-[#E8E5DF] text-[#080808] px-8 py-4 hover:bg-[#C8B490] transition-colors"
          >
            {t.home.ctaCollection}
          </Link>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase border border-[#1C1C1C] text-[#E8E5DF] px-8 py-4 hover:border-[#c4a87c] hover:text-[#c4a87c] transition-colors"
          >
            {t.home.ctaLine}
          </a>
        </div>
      </div>
    </>
  );
}
