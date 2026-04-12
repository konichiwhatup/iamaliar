"use client";

export const runtime = "edge";

import Link from "next/link";
import { useEffect, useRef } from "react";

const LINE_URL = "https://line.me/ti/p/@857usrfa";

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

const sections = [
  {
    number: "01",
    heading: "IAMALIARとは",
    body: `"I AM A LIAR"——「私は嘘つきです」\n\nその一言から、全ての矛盾は始まる。IAMALIARは、そんな矛盾を洋服で表現します。`,
  },
  {
    number: "02",
    heading: "「衝撃を、纏う。」",
    body: `アートに突き動かされた衝動を、服として再構築する。\n\nあの作品を観た時の、あの衝撃。身体に残ったその感情の欠片を繋ぎ合わせ、服として具現化する。`,
  },
  {
    number: "03",
    heading: "額縁に飾れる服作り",
    body: `壁に掛ければ芸術になり、身に纏えば日常になる。\n\n飾るためなのか、それとも着るためのものなのか、その解釈はあなたに委ねます。`,
  },
  {
    number: "04",
    heading: "既製品を物語のある一点ものに変換する",
    body: `新しい生命を吹き込む。\n\n既製品として生まれ、誰かに消費され、いつか忘れ去られたもの。いつしか呼吸を止めた「かつての服」。私たちはその静止した時間に新しい物語を書き加える。`,
  },
  {
    number: "05",
    heading: "「刺し子」",
    body: `同じものは、二度と縫えない。\n\nかつて、大切な布を長く、強く使うために生まれた「刺し子」。私たちは、その伝統を受け継ぎ、ひと針ひと針に想いを込めて縫い上げます。均一ではない、あなただけの一点もの。`,
  },
];

export default function AboutPage() {
  useReveal();
  const heroRef = useHeroParallax();

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
            解釈はあなたが決めてください。
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
        <div className="mb-20 md:mb-28 max-w-2xl reveal">
          <p className="text-xs tracking-[0.25em] uppercase text-[#555555] mb-4">Brand Story</p>
          <h2 style={{
            fontFamily: "'Noto Serif JP', serif",
            fontWeight: 200,
            fontSize: "clamp(1.6rem, 3vw, 2.8rem)",
            lineHeight: 1.7,
            letterSpacing: "0.05em",
            color: "#e8e2d8",
          }}>
            「アートに食らった感情を服に変換する。」
          </h2>
        </div>

        <div className="space-y-20 md:space-y-28">
          {sections.map((section, i) => (
            <div key={section.number}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 reveal">
                <div className="md:col-span-2">
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.3em", color: "#2e2e2e" }}>
                    {section.number}
                  </span>
                </div>
                <div className="md:col-span-10 md:max-w-2xl">
                  <h3 style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 200, fontSize: "clamp(1.4rem, 2vw, 2rem)", letterSpacing: "0.08em", color: "#e8e2d8", marginBottom: "1.5rem" }}>
                    {section.heading}
                  </h3>
                  <div className="space-y-4">
                    {section.body.split("\n\n").map((para, j) => (
                      <p key={j} style={{
                        fontFamily: "'Noto Serif JP', serif",
                        fontWeight: j === 0 ? 200 : 300,
                        fontSize: j === 0 ? "1.1rem" : "0.85rem",
                        lineHeight: 2.2,
                        letterSpacing: "0.04em",
                        color: j === 0 ? "#e8e2d8" : "#6b6560",
                      }}>
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              {i < sections.length - 1 && (
                <div className="mt-20 md:mt-28 border-b border-[#1C1C1C]" />
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
            Collection を見る
          </Link>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase border border-[#1C1C1C] text-[#E8E5DF] px-8 py-4 hover:border-[#c4a87c] hover:text-[#c4a87c] transition-colors"
          >
            LINE で問い合わせる
          </a>
        </div>
      </div>
    </>
  );
}
