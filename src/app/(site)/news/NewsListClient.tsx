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

export default function NewsListClient({ posts }: { posts: NewsPost[] }) {
  const { t, locale } = useLanguage();

  return (
    <div className="pt-12 md:pt-20 pb-20">
      <div className="container-site">

        {/* Header */}
        <FadeIn>
          <div className="mb-16">
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", letterSpacing: "0.05em", color: "#555555", textTransform: "uppercase", marginBottom: "1rem" }}>
              I AM A LIAR
            </p>
            <h1 style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 200, fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "0.1em", color: "#E8E5DF" }}>
              News
            </h1>
            <p style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, fontSize: "0.85rem", color: "#888888", marginTop: "1rem", lineHeight: 1.8 }}>
              {t.news.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="border-t border-[#1C1C1C] mb-12" />

        {/* News list */}
        {posts.length === 0 ? (
          <FadeIn delay={0.15}>
            <div className="flex flex-col items-center justify-center py-32 text-center">
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.4em", color: "#333333", textTransform: "uppercase", marginBottom: "1.5rem" }}>
                — coming soon —
              </p>
              <p style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 200, fontSize: "1.1rem", letterSpacing: "0.1em", color: "#555555", lineHeight: 2 }}>
                {t.news.comingSoonText}
              </p>
            </div>
          </FadeIn>
        ) : (
          <div className="space-y-0">
            {posts.map((post, i) => (
              <FadeIn key={post.id} delay={i * 0.06}>
                <Link
                  href={`/news/${post.slug}`}
                  className="group grid grid-cols-1 md:grid-cols-[auto_1fr] gap-0 border-b border-[#1C1C1C] py-8 md:py-10 transition-colors hover:bg-[#0f0d0b]"
                >
                  {/* Left: thumbnail (optional) */}
                  {post.coverImage && (
                    <div className="relative mb-5 md:mb-0 md:mr-10 w-full md:w-44 flex-shrink-0" style={{ aspectRatio: "4/3" }}>
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                        style={{ opacity: 0.75 }}
                        sizes="(max-width: 768px) 100vw, 176px"
                      />
                    </div>
                  )}

                  {/* Right: content */}
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-3">
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.45rem", letterSpacing: "0.3em", color: "#555555", textTransform: "uppercase" }}>
                        {categoryLabel[post.category]?.[locale] ?? post.category}
                      </span>
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.45rem", letterSpacing: "0.2em", color: "#333333" }}>
                        {post.publishedAt?.slice(0, 10)}
                      </span>
                    </div>

                    <h2
                      style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 200, fontSize: "clamp(1rem, 2vw, 1.4rem)", letterSpacing: "0.06em", color: "#e8e2d8", lineHeight: 1.5, marginBottom: "0.5rem" }}
                      className="transition-colors duration-300 group-hover:text-[#c4a87c]"
                    >
                      {post.title}
                    </h2>

                    {post.excerpt && (
                      <p style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, fontSize: "0.82rem", lineHeight: 1.9, color: "#6b6560", maxWidth: "38rem" }}>
                        {post.excerpt}
                      </p>
                    )}

                    <div className="mt-5">
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.45rem", letterSpacing: "0.25em", color: "#555555", textTransform: "uppercase" }}>
                        {t.news.readMore}
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
