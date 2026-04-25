"use client";

import Link from "next/link";
import Image from "next/image";
import type { JournalPost } from "@/types/product";
import { FadeIn } from "@/components/ui/fade-in";
import { useLanguage } from "@/context/language-context";

const categoryLabel: Record<string, string> = {
  process: "Process",
  concept: "Concept",
  archive: "Archive",
  exhibition: "Exhibition",
  note: "Note",
};

export default function JournalDetailClient({ post }: { post: JournalPost }) {
  const { t } = useLanguage();
  const bodyParagraphs = post.body.trim().split(/\n\n+/);

  return (
    <div className="pt-24 md:pt-32 pb-24">
      <div className="container-site">

        {/* Back */}
        <FadeIn>
          <Link
            href="/journal"
            style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.45rem", letterSpacing: "0.3em", color: "#555555", textTransform: "uppercase" }}
            className="hover:text-[#e8e2d8] transition-colors"
          >
            ← Journal
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
                {categoryLabel[post.category] ?? post.category}
              </span>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.45rem", letterSpacing: "0.2em", color: "#333333" }}>
                {post.publishedAt}
              </span>
              {post.author && (
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.45rem", letterSpacing: "0.2em", color: "#333333" }}>
                  {post.author}
                </span>
              )}
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

        {/* Body */}
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

        {/* Tags */}
        {post.tags.length > 0 && (
          <FadeIn delay={0.2}>
            <div className="mt-16 pt-10 border-t border-[#1C1C1C] flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.45rem", letterSpacing: "0.2em", color: "#555555", textTransform: "uppercase" }}
                  className="border border-[#1C1C1C] px-3 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>
        )}

        {/* Back to Journal */}
        <FadeIn delay={0.25}>
          <div className="mt-16 pt-10 border-t border-[#1C1C1C]">
            <Link
              href="/journal"
              style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 200, fontSize: "0.9rem", letterSpacing: "0.1em", color: "#6b6560" }}
              className="hover:text-[#e8e2d8] transition-colors"
            >
              {t.journal.backToList}
            </Link>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
