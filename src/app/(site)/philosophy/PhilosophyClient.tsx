"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { useLanguage } from "@/context/language-context";

export default function PhilosophyClient() {
  const { t } = useLanguage();
  const { eyebrow, title, subtitle, closing, qa } = t.philosophy;

  return (
    <div className="pt-12 md:pt-20 pb-32">
      <div className="container-site">

        {/* Header */}
        <FadeIn>
          <div className="mb-20 md:mb-28 border-b border-[#1C1C1C] pb-12 text-center">
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.3em", color: "#555555", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              {eyebrow}
            </p>
            <h1 style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 200, fontSize: "clamp(1.1rem, 2vw, 1.6rem)", letterSpacing: "0.12em", color: "#e8e2d8", lineHeight: 1.6, marginBottom: "0.75rem" }}>
              {title}
            </h1>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.18em", color: "#555555" }}>
              {subtitle}
            </p>
          </div>
        </FadeIn>

        {/* Q&A */}
        <div className="space-y-20 md:space-y-28 max-w-2xl mx-auto">
          {qa.map((item, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="text-center">
                {/* Question */}
                <div className="mb-8">
                  <p style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, fontSize: "0.82rem", letterSpacing: "0.06em", color: "#c4a87c", lineHeight: 1.8, marginBottom: item.en ? "0.4rem" : "0" }}>
                    {item.q}
                  </p>
                  {item.en && (
                    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.15em", color: "#3a3530" }}>
                      {item.en}
                    </p>
                  )}
                </div>

                {/* Divider */}
                <div className="mb-8 w-8 border-t border-[#2a2520] mx-auto" />

                {/* Answer */}
                <div className="space-y-5">
                  {item.a.split("\n\n").map((para, j) => (
                    <p key={j} style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, fontSize: "0.82rem", lineHeight: 2.4, letterSpacing: "0.04em", color: "#6b6560" }}>
                      {para.split("\n").map((line, k, arr) => (
                        <span key={k}>
                          {line}
                          {k < arr.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Closing */}
        <FadeIn delay={0.3}>
          <div className="mt-24 pt-16 border-t border-[#1C1C1C] text-center">
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(1.4rem, 3vw, 2.2rem)", letterSpacing: "0.1em", color: "#e8e2d8" }}>
              {closing}
            </p>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
