"use client";

import Link from "next/link";
import Image from "next/image";
import type { NewsPost } from "@/types/product";
import { FadeIn } from "@/components/ui/fade-in";
import { useLanguage } from "@/context/language-context";

const categoryLabel: Record<string, { ja: string; en: string }> = {
  event:   { ja: "イベント・展示", en: "Event" },
  info:    { ja: "お知らせ", en: "Info" },
  styling: { ja: "着用紹介", en: "Styling" },
};

export default function NewsDetailClient({ post }: { post: NewsPost }) {
  const { t, locale } = useLanguage();
  const bodyParagraphs = post.body.trim().split(/\n\n+/);

  return (
    <div className="pt-12 md:pt-20 pb-24">
      <div className="container-site">

        {/* Back */}
        <FadeIn>
          <Link
            href="/news"
            style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.45rem", letterSpacing: "0.3em", color: "#555555", textTransform: "uppercase" }}
            className="hover:text-[#e8e2d8] transition-colors"
          >
            ← News
          </Link>
        </FadeIn>

        {/* Cover image */}
        {post.coverImage && (
          <FadeIn delay={0.05}>
            <div className="relative mt-10 mb-12 w-full" style={{ aspectRatio: "21/9", maxHeight: "460px" }}>
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                style={{ opacity: 0.65 }}
                sizes="100vw"
                priority
              />
            </div>
          </FadeIn>
        )}

        {/* Header */}
        <FadeIn delay={0.1}>
          <div className="max-w-2xl mb-14">
            <div className="flex items-center gap-4 mb-5">
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.45rem", letterSpacing: "0.3em", color: "#555555", textTransform: "uppercase" }}>
                {categoryLabel[post.category]?.[locale] ?? post.category}
              </span>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.45rem", letterSpacing: "0.2em", color: "#333333" }}>
                {post.publishedAt?.slice(0, 10)}
              </span>
            </div>
            <h1 style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 200, fontSize: "clamp(1.6rem, 4vw, 3rem)", letterSpacing: "0.06em", color: "#E8E5DF", lineHeight: 1.4, marginBottom: "1.25rem" }}>
              {post.title}
            </h1>
            {post.excerpt && (
              <p style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, fontSize: "0.9rem", lineHeight: 2, color: "#888888" }}>
                {post.excerpt}
              </p>
            )}
          </div>
        </FadeIn>

        <div className="border-t border-[#1C1C1C] mb-14" />

        {/* Event info */}
        {(post.venue || post.eventDate) && (
          <FadeIn delay={0.15}>
            <div className="max-w-xl mb-12 space-y-4 border border-[#1C1C1C] px-6 py-5">
              {post.eventDate && (
                <div className="flex items-start gap-6">
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.42rem", letterSpacing: "0.3em", color: "#555555", textTransform: "uppercase", flexShrink: 0, paddingTop: "0.15rem" }}>Date</span>
                  <span style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, fontSize: "0.88rem", letterSpacing: "0.06em", color: "#e8e2d8" }}>{post.eventDate}</span>
                </div>
              )}
              {post.venue && (
                <div className="flex items-start gap-6">
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.42rem", letterSpacing: "0.3em", color: "#555555", textTransform: "uppercase", flexShrink: 0, paddingTop: "0.15rem" }}>Venue</span>
                  <span style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, fontSize: "0.88rem", letterSpacing: "0.06em", color: "#e8e2d8" }}>
                    {post.venue}
                  </span>
                </div>
              )}
              {post.venueMapUrl && (
                <div className="flex items-start gap-6">
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.42rem", letterSpacing: "0.3em", color: "transparent", flexShrink: 0 }}>----</span>
                  <a
                    href={post.venueMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.45rem", letterSpacing: "0.25em", color: "#6b6560", textTransform: "uppercase" }}
                    className="hover:text-[#e8e2d8] transition-colors"
                  >
                    Google Maps で見る →
                  </a>
                </div>
              )}
            </div>
          </FadeIn>
        )}

        {/* Press link */}
        {post.externalLink && (
          <FadeIn delay={0.15}>
            <div className="max-w-xl mb-12">
              <a
                href={post.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.25em", color: "#a09890", textTransform: "uppercase" }}
                className="hover:text-[#e8e2d8] transition-colors border-b border-[#333] pb-px"
              >
                詳細を見る →
              </a>
            </div>
          </FadeIn>
        )}

        {/* Body */}
        {bodyParagraphs.some((p) => p.trim()) && (
          <FadeIn delay={0.15}>
            <div className="max-w-xl space-y-7">
              {bodyParagraphs.map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "'Noto Serif JP', serif",
                    fontWeight: 300,
                    fontSize: "0.9rem",
                    lineHeight: 2.2,
                    color: para.startsWith("　") || para.length < 20 ? "#e8e2d8" : "#a09890",
                    letterSpacing: "0.04em",
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </FadeIn>
        )}

        {/* Back to News */}
        <FadeIn delay={0.2}>
          <div className="mt-16 pt-10 border-t border-[#1C1C1C]">
            <Link
              href="/news"
              style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 200, fontSize: "0.9rem", letterSpacing: "0.1em", color: "#6b6560" }}
              className="hover:text-[#e8e2d8] transition-colors"
            >
              {t.news.backToList}
            </Link>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
