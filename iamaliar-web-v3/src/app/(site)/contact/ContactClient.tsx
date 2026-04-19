"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { useLanguage } from "@/context/language-context";

const LINE_URL = "https://line.me/ti/p/@857usrfa";

export function ContactClient() {
  const { t } = useLanguage();
  const { label, heading, subtext, lineOpen, items } = t.contact;

  return (
    <div className="min-h-screen flex flex-col justify-center pt-24 pb-20">
      <div className="container-site">

        {/* Header */}
        <FadeIn>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.3em", color: "#555555", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            {label}
          </p>
          <h1 style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 200, fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "0.08em", color: "#E8E5DF", lineHeight: 1.4, marginBottom: "1.5rem", whiteSpace: "pre-line" }}>
            {heading}
          </h1>
          <p style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, fontSize: "0.9rem", lineHeight: 2, color: "#6b6560", maxWidth: "36rem" }}>
            {subtext}
          </p>
        </FadeIn>

        {/* Divider */}
        <div className="my-16 border-t border-[#1C1C1C]" />

        {/* LINE Block */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* Left: LINE CTA */}
            <div>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.3em", color: "#555555", textTransform: "uppercase", marginBottom: "2rem" }}>
                LINE
              </p>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-col items-start gap-1 mb-8"
              >
                <span style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontWeight: 300,
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                  letterSpacing: "0.05em",
                  color: "#e8e2d8",
                  lineHeight: 1,
                  transition: "color 0.3s",
                }}
                  className="group-hover:text-[#c4a87c]"
                >
                  @857usrfa
                </span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.25em", color: "#6b6560", textTransform: "uppercase" }}>
                  tap to open LINE →
                </span>
              </a>

              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline font-mono-label px-10 py-4 inline-block"
              >
                {lineOpen}
              </a>
            </div>

            {/* Right: Notes */}
            <div className="space-y-8">
              {items.map((item) => (
                <div key={item.label} className="border-l border-[#1C1C1C] pl-6">
                  <p style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, fontSize: "0.75rem", letterSpacing: "0.12em", color: "#e8e2d8", marginBottom: "0.5rem" }}>
                    {item.label}
                  </p>
                  <p style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, fontSize: "0.78rem", lineHeight: 1.9, color: "#6b6560" }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </FadeIn>

      </div>
    </div>
  );
}
