"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { useLanguage } from "@/context/language-context";
import { ProductGallery } from "@/components/product/product-gallery";

const LINE_URL = "https://lin.ee/o94I6DM";

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
    <div className="pt-12 md:pt-20 pb-24">
      <div className="container-site">

        {/* Back */}
        <Link
          href="/gallery"
          style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.25em", color: "#555555", textTransform: "uppercase" }}
          className="hover:text-[#e8e2d8] transition-colors"
        >
          {t.product.backToGallery}
        </Link>

        {/* Main layout */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

          {/* Left: Images */}
          <ProductGallery
            images={[
              ...(product.featuredImage ? [product.featuredImage] : []),
              ...product.gallery,
            ]}
            alt={product.title}
          />

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
            <div className="pt-6 border-t border-[#1C1C1C] space-y-3">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.2em", color: "#c4a87c", textTransform: "uppercase", display: "block", textDecoration: "underline", textUnderlineOffset: "3px" }}
                className="hover:opacity-70 transition-opacity"
              >
                {t.product.inquireLine}
              </a>
              <p style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, fontSize: "0.72rem", color: "#6b6560", letterSpacing: "0.04em" }}>
                {t.product.priceNote}
              </p>
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
                <Link key={r.id} href={`/gallery/${r.slug}`} className="relative bg-[#0a0908] overflow-hidden block" style={{ aspectRatio: "3/4" }}>
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
