"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product, ProductCategory } from "@/types/product";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";

const LINE_URL = "https://line.me/ti/p/@857usrfa";

const categoryLabels: Record<ProductCategory | "all", string> = {
  all: "All",
  pants: "Pants",
  jacket: "Jacket",
  shirt: "Shirt",
  other: "Other",
};

export default function CollectionClient({ products }: { products: Product[] }) {
  const [category, setCategory] = useState<ProductCategory | "all">("all");
  const [hovered, setHovered] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (category === "all") return products;
    return products.filter((p) => p.category === category);
  }, [category, products]);

  return (
    <div className="pt-24 md:pt-32 pb-20">
      <div className="container-site">

        {/* Header */}
        <FadeIn>
          <div className="mb-16">
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.3em", color: "#555555", textTransform: "uppercase", marginBottom: "1rem" }}>
              IAMALIAR
            </p>
            <h1 style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 200, fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "0.1em", color: "#E8E5DF" }}>
              Collection
            </h1>
            <p style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, fontSize: "0.85rem", color: "#888888", marginTop: "1rem", lineHeight: 1.8 }}>
              量産された服に新しい物語を与えた、一点物の作品たち。
            </p>
          </div>
        </FadeIn>

        {/* Filter */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap items-center gap-2 mb-12 pb-6 border-b border-[#1C1C1C]">
            {(Object.keys(categoryLabels) as (ProductCategory | "all")[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={cn(
                  "text-xs tracking-[0.12em] uppercase px-3 py-1.5 border transition-colors",
                  category === cat
                    ? "bg-[#E8E5DF] text-[#080808] border-[#E8E5DF]"
                    : "text-[#888888] border-[#1C1C1C] hover:border-[#E8E5DF] hover:text-[#E8E5DF]"
                )}
              >
                {categoryLabels[cat]}
              </button>
            ))}
            <span className="ml-auto" style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.2em", color: "#555555" }}>
              {filtered.length} works
            </span>
          </div>
        </FadeIn>

        {/* Gallery */}
        {filtered.length === 0 ? (
          <FadeIn delay={0.15}>
            <div className="flex flex-col items-center justify-center py-32 text-center">
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.4em", color: "#333333", textTransform: "uppercase", marginBottom: "1.5rem" }}>
                — coming soon —
              </p>
              <p style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 200, fontSize: "1.1rem", letterSpacing: "0.1em", color: "#555555", lineHeight: 2 }}>
                作品を準備中です
              </p>
            </div>
          </FadeIn>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#1e1a17]">
            {filtered.map((product, i) => (
              <FadeIn key={product.id} delay={i * 0.04}>
                <Link
                  href={`/collection/${product.slug}`}
                  className="relative bg-[#0a0908] overflow-hidden block"
                  style={{ aspectRatio: "3/4" }}
                  onMouseEnter={() => setHovered(product.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {product.featuredImage ? (
                    <Image
                      src={
                        hovered === product.id && product.gallery[1]
                          ? product.gallery[1]
                          : product.featuredImage
                      }
                      alt={product.artworkTitle ?? product.title}
                      fill
                      className="object-cover transition-all duration-700"
                      style={{
                        opacity: hovered === product.id ? 0.85 : 0.65,
                        transform: hovered === product.id ? "scale(1.03)" : "scale(1)",
                      }}
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[#111]" />
                  )}
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,9,8,0.85) 0%, transparent 55%)" }} />
                  <div className="absolute bottom-0 left-0 p-5 md:p-7">
                    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.45rem", letterSpacing: "0.3em", color: "#6b6560", marginBottom: "0.5rem" }}>
                      {String(i + 1).padStart(3, "0")}
                    </p>
                    {product.artworkTitle && (
                      <p style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, fontSize: "0.9rem", letterSpacing: "0.08em", color: "#e8e2d8", lineHeight: 1.4 }}>
                        {product.artworkTitle}
                      </p>
                    )}
                    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.45rem", letterSpacing: "0.15em", color: "#6b6560", textTransform: "uppercase", marginTop: "0.3rem" }}>
                      {product.title}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        )}

        {/* LINE CTA */}
        <FadeIn delay={0.2}>
          <div className="mt-20 pt-12 border-t border-[#1C1C1C] text-center">
            <p style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 200, fontSize: "1.2rem", letterSpacing: "0.08em", color: "#e8e2d8", marginBottom: "0.75rem" }}>
              作品についての問い合わせはLINEから
            </p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline font-mono-label px-10 py-4 inline-block mt-4"
            >
              LINE で問い合わせる
            </a>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.3em", color: "#555555", marginTop: "1rem" }}>
              @857usrfa
            </p>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
