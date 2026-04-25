"use client";

import Link from "next/link";
import Image from "next/image";
import { mockJournals } from "@/data/mock-products";
import { FadeIn } from "@/components/ui/fade-in";
import { useLanguage } from "@/context/language-context";

const categoryLabel: Record<string, string> = {
  process: "Process",
  concept: "Concept",
  archive: "Archive",
  exhibition: "Exhibition",
  note: "Note",
};

export default function JournalListClient() {
  const { t } = useLanguage();
  const journals = mockJournals;

  return (
    <div className="pt-24 md:pt-32 pb-20">
      <div className="container-site">

        {/* Header */}
        <FadeIn>
          <div className="mb-16">
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", letterSpacing: "0.05em", color: "#555555", textTransform: "uppercase", marginBottom: "1rem" }}>
              I AM A LIAR
            </p>
            <h1 style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 200, fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "0.1em", color: "#E8E5DF" }}>
              Journal
            </h1>
            <p style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, fontSize: "0.85rem", color: "#888888", marginTop: "1rem", lineHeight: 1.8 }}>
              {t.journal.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="border-t border-[#1C1C1C] mb-12" />

        {/* Journal list */}
        <div className="space-y-0">
          {journals.map((post, i) => (
            <FadeIn key={post.id} delay={i * 0.06}>
              <Link
                href={`/journal/${post.slug}`}
                className="group grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-0 border-b border-[#1C1C1C] py-10 md:py-12 transition-colors hover:bg-[#0f0d0b]"
              >
                {/* Left: Image */}
                <div className="relative mb-6 md:mb-0 md:pr-10" style={{ aspectRatio: "16/9" }}>
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      style={{ opacity: 0.7 }}
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[#111]" />
                  )}
                </div>

                {/* Right: Content */}
                <div className="flex flex-col justify-center md:pl-2">
                  <div className="flex items-center gap-4 mb-4">
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.45rem", letterSpacing: "0.3em", color: "#555555", textTransform: "uppercase" }}>
                      {categoryLabel[post.category] ?? post.category}
                    </span>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.45rem", letterSpacing: "0.2em", color: "#333333" }}>
                      {post.publishedAt}
                    </span>
                  </div>

                  <h2 style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 200, fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)", letterSpacing: "0.06em", color: "#e8e2d8", lineHeight: 1.5, marginBottom: "0.75rem" }}
                    className="transition-colors duration-300 group-hover:text-[#c4a87c]"
                  >
                    {post.title}
                  </h2>

                  {post.excerpt && (
                    <p style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, fontSize: "0.82rem", lineHeight: 1.9, color: "#6b6560", maxWidth: "40rem" }}>
                      {post.excerpt}
                    </p>
                  )}

                  <div className="mt-6 flex items-center gap-2">
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.45rem", letterSpacing: "0.25em", color: "#555555", textTransform: "uppercase" }}>
                      {t.journal.readMore}
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

      </div>
    </div>
  );
}
