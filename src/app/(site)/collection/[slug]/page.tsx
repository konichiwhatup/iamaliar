export const runtime = "edge";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductBySlug, getRelatedProducts } from "@/lib/queries";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const related = await getRelatedProducts(product);

  const statusLabel: Record<string, string> = {
    active: "販売中",
    sold: "Sold",
    made_to_order: "受注制作",
    archived: "アーカイブ",
  };

  return (
    <div className="pt-24 md:pt-32 pb-24">
      <div className="container-site">

        {/* Back */}
        <Link
          href="/collection"
          style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.25em", color: "#555555", textTransform: "uppercase" }}
          className="hover:text-[#e8e2d8] transition-colors"
        >
          ← Collection
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
                  alt={product.artworkTitle ?? product.title}
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
            {product.gallery.length > 1 && (
              <div className="grid grid-cols-4 gap-1">
                {product.gallery.slice(1).map((img, i) => (
                  <div key={i} className="relative overflow-hidden bg-[#0a0908]" style={{ aspectRatio: "3/4" }}>
                    <Image src={img} alt={`gallery ${i + 2}`} fill className="object-cover" style={{ opacity: 0.75 }} sizes="25vw" />
                  </div>
                ))}
              </div>
            )}

            {/* Detail shots */}
            {product.detailShots.length > 0 && (
              <div className="grid grid-cols-2 gap-2 pt-4">
                {product.detailShots.map((d, i) => (
                  <div key={i} className="space-y-1">
                    <div className="relative overflow-hidden bg-[#0a0908]" style={{ aspectRatio: "1/1" }}>
                      {d.image && <Image src={d.image} alt={d.caption ?? "detail"} fill className="object-cover" style={{ opacity: 0.8 }} sizes="25vw" />}
                    </div>
                    {d.caption && (
                      <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.45rem", letterSpacing: "0.15em", color: "#555555" }}>
                        {d.caption}
                      </p>
                    )}
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
              {product.artworkTitle && (
                <h1 style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 200, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", letterSpacing: "0.06em", color: "#e8e2d8", lineHeight: 1.4 }}>
                  {product.artworkTitle}
                </h1>
              )}
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.2em", color: "#555555", textTransform: "uppercase", marginTop: "0.5rem" }}>
                {product.title}
              </p>
              {product.subtitle && (
                <p style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, fontSize: "0.8rem", color: "#6b6560", marginTop: "0.5rem" }}>
                  {product.subtitle}
                </p>
              )}
            </div>

            {/* Price */}
            <div className="border-t border-b border-[#1C1C1C] py-5">
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.1rem", letterSpacing: "0.1em", color: "#e8e2d8" }}>
                ¥{product.price.toLocaleString()}
                <span style={{ fontSize: "0.5rem", color: "#555555", marginLeft: "0.5rem" }}>JPY (税込)</span>
              </p>
              {product.madeToOrder && product.leadTime && (
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.45rem", letterSpacing: "0.2em", color: "#6b6560", marginTop: "0.4rem" }}>
                  リードタイム: {product.leadTime}
                </p>
              )}
            </div>

            {/* Description */}
            <div>
              <p style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, fontSize: "0.85rem", lineHeight: 2.2, letterSpacing: "0.04em", color: "#aaa8a2" }}>
                {product.description}
              </p>
            </div>

            {/* Sizes */}
            {product.sizes.length > 0 && (
              <div>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.3em", color: "#555555", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  Size
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <div
                      key={s.label}
                      className="border border-[#1C1C1C] px-3 py-2"
                      style={{ opacity: s.stock === 0 ? 0.3 : 1 }}
                    >
                      <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.1em", color: "#e8e2d8" }}>
                        {s.label}
                      </p>
                      {s.stock === 0 && (
                        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.4rem", color: "#555", marginTop: "0.2rem" }}>sold out</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="pt-2">
              <a
                href="https://line.me/ti/p/@857usrfa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center border border-[#c4a87c] text-[#c4a87c] py-4 text-xs tracking-[0.25em] uppercase hover:bg-[#c4a87c] hover:text-[#080808] transition-colors"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                LINE で問い合わせる
              </a>
            </div>

            {/* Story */}
            {product.story && (
              <div className="pt-4 border-t border-[#1C1C1C]">
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.3em", color: "#555555", textTransform: "uppercase", marginBottom: "1rem" }}>
                  Story
                </p>
                <p style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, fontSize: "0.82rem", lineHeight: 2.4, letterSpacing: "0.04em", color: "#6b6560" }}>
                  {product.story}
                </p>
              </div>
            )}

            {/* Material */}
            {(product.baseMaterial || product.materialDetails?.length) && (
              <div className="border-t border-[#1C1C1C] pt-6 space-y-3">
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.3em", color: "#555555", textTransform: "uppercase" }}>
                  Material
                </p>
                {product.baseMaterial && (
                  <p style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, fontSize: "0.8rem", color: "#6b6560" }}>
                    {product.baseMaterial}
                  </p>
                )}
                {product.materialDetails?.map((m, i) => (
                  <p key={i} style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.48rem", letterSpacing: "0.1em", color: "#444" }}>
                    {m}
                  </p>
                ))}
              </div>
            )}

            {/* Craftsmanship */}
            {(product.craftsmanship?.length ?? 0) > 0 && (
              <div className="border-t border-[#1C1C1C] pt-6">
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.3em", color: "#555555", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  Craftsmanship
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.craftsmanship!.map((c, i) => (
                    <span key={i} style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.45rem", letterSpacing: "0.1em", color: "#555555", border: "1px solid #1C1C1C", padding: "0.2rem 0.6rem" }}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-24 pt-12 border-t border-[#1C1C1C]">
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.3em", color: "#555555", textTransform: "uppercase", marginBottom: "2rem" }}>
              Related Works
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#1e1a17]">
              {related.map((r) => (
                <Link key={r.id} href={`/collection/${r.slug}`} className="relative bg-[#0a0908] overflow-hidden block" style={{ aspectRatio: "3/4" }}>
                  {r.featuredImage ? (
                    <Image src={r.featuredImage} alt={r.artworkTitle ?? r.title} fill className="object-cover" style={{ opacity: 0.65 }} sizes="33vw" />
                  ) : (
                    <div className="absolute inset-0 bg-[#111]" />
                  )}
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,9,8,0.85) 0%, transparent 55%)" }} />
                  <div className="absolute bottom-0 left-0 p-5">
                    {r.artworkTitle && (
                      <p style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300, fontSize: "0.85rem", color: "#e8e2d8" }}>{r.artworkTitle}</p>
                    )}
                    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.45rem", letterSpacing: "0.15em", color: "#6b6560", textTransform: "uppercase", marginTop: "0.3rem" }}>{r.title}</p>
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
