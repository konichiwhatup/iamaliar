"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { useLanguage } from "@/context/language-context";

const LINE_URL = "https://line.me/ti/p/@857usrfa";

export default function ProductDetailClient({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const { t } = useLanguage();
  const statusLabel = t.product.status as Record<string, string>;

  return (
    <div className="pt-24 md:pt-32 pb-24">
      <div className="container-site">

        {/* Back */}
        <Link
          href="/collection"
          style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.25em", color: "#555555", textTransform: "uppercase" }}
          className="hover:text-[#e8e2d8] transition-colors"
        >
          {t.product.backToCollection}
        </Link>

        {/* Main layout */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

          {/* Left: Images */}
          <div className="space-y-2">
            {/* Featured */}
            <div className="relative overflow-hidden bg-[#0a0908]" style={{ aspectRatio: "3/4" }}>
              {product.featuredImage ? (
                <Image
                  src={product.featuredImage}
                  alt={product.title}
                  fill
                  className="object-cover"
                  style={{ opacity: 0.85 }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              ) : (
                <div className="absolute inset-0 bg-[#111]" />
              )}
            </div>

            {/* Gallery thumbnails */}
            {product.gallery.length > 0 && (
              <div className="grid grid-cols-4 gap-1">
                {product.gallery.map((img, i) => (
                  <div key={i} className="relative overflow-hidden bg-[#0a0908]" style={{ aspectRatio: "3/4" }}>
                    <Image src={img} alt={`gallery ${i + 1}`} fill className="object-cover" style={{ opacity: 0.75 }} sizes="25vw" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Info */}
          <div className="space-y-8">
            {/* Status */}
            <div>
              <span
                style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.25em", textTransform: "uppercase" }}
                className={product.status === "sold" ? "text-[#555]" : "text-[#c4a87c]"}
              >
                {statusLabel[product.status] ?? product.status}
              </span>
            </div>

            {/* Title */}
            <div>
              <h1 style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 200, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", letterSpacing: "0.06em", color: "#e8e2d8", lineHeight: 1.4 }}>
                {product.title}
              </h1>
            </div>

            {/* Price */}
            <div className="border-t border-b border-[#1C1C1C] py-5">
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.1rem", letterSpacing: "0.1em", color: "#e8e2d8" }}>
                ¥{product.price.toLocaleString()}
                <span style={{ fontSize: "0.5rem", color: "#555555", marginLeft: "0.5rem" }}>{t.product.taxNote}</span>
              </p>
            </div>

            {/* Description */}
            <div>
              <p style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, fontSize: "0.85rem", lineHeight: 2.2, letterSpacing: "0.04em", color: "#aaa8a2", whiteSpace: "pre-wrap" }}>
                {product.description}
              </p>
            </div>

            {/* Sizes */}
            {product.sizes.length > 0 && (
              <div>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.3em", color: "#555555", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  {t.product.sizeLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((label, i) => (
                    <div key={i} className="border border-[#1C1C1C] px-3 py-2">
                      <p style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, fontSize: "0.78rem", letterSpacing: "0.04em", color: "#e8e2d8" }}>
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Story */}
            {product.story && (
              <div className="pt-4 border-t border-[#1C1C1C]">
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.3em", color: "#555555", textTransform: "uppercase", marginBottom: "1rem" }}>
                  {t.product.story}
                </p>
                <p style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, fontSize: "0.82rem", lineHeight: 2.4, letterSpacing: "0.04em", color: "#6b6560", whiteSpace: "pre-wrap" }}>
                  {product.story}
                </p>
              </div>
            )}

            {/* Material */}
            {product.material && (
              <div className="border-t border-[#1C1C1C] pt-6">
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.3em", color: "#555555", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  {t.product.material}
                </p>
                <p style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, fontSize: "0.8rem", lineHeight: 1.9, color: "#6b6560", whiteSpace: "pre-wrap" }}>
                  {product.material}
                </p>
              </div>
            )}

            {/* CTA */}
            <div className="pt-6 border-t border-[#1C1C1C]">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center border border-[#c4a87c] text-[#c4a87c] py-4 text-xs tracking-[0.25em] uppercase hover:bg-[#c4a87c] hover:text-[#080808] transition-colors"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {t.product.ctaLine}
              </a>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-24 pt-12 border-t border-[#1C1C1C]">
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.3em", color: "#555555", textTransform: "uppercase", marginBottom: "2rem" }}>
              {t.product.relatedWorks}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#1e1a17]">
              {related.map((r) => (
                <Link key={r.id} href={`/collection/${r.slug}`} className="relative bg-[#0a0908] overflow-hidden block" style={{ aspectRatio: "3/4" }}>
                  {r.featuredImage ? (
                    <Image src={r.featuredImage} alt={r.title} fill className="object-cover" style={{ opacity: 0.65 }} sizes="33vw" />
                  ) : (
                    <div className="absolute inset-0 bg-[#111]" />
                  )}
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,9,8,0.85) 0%, transparent 55%)" }} />
                  <div className="absolute bottom-0 left-0 p-5">
                    <p style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, fontSize: "0.85rem", color: "#e8e2d8" }}>{r.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
