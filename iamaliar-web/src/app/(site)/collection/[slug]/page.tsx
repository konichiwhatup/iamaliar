import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getProductBySlug, mockProducts, getRelatedProducts } from "@/data/mock-products";
import { formatPrice } from "@/lib/utils";
import { StatusBadge } from "@/components/ui/status-badge";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductCard } from "@/components/product/product-card";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.artworkTitle ?? product.title,
    description: product.description,
  };
}

export async function generateStaticParams() {
  return mockProducts.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const relatedProducts = getRelatedProducts(product);
  const isSold = product.status === "sold" || product.status === "archived";

  return (
    <div className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="container-site py-4 border-b border-[#E5E2DC]">
        <nav className="flex items-center gap-3 text-xs text-[#9CA3AF] tracking-wide">
          <Link href="/" className="hover:text-[#111111] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/collection" className="hover:text-[#111111] transition-colors">Collection</Link>
          <span>/</span>
          <span className="text-[#111111]">{product.title}</span>
        </nav>
      </div>

      <div className="container-site py-10 md:py-16">
        {/* Main Content - Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          {/* Left: Gallery */}
          <FadeIn>
            <ProductGallery images={product.gallery} alt={product.artworkTitle ?? product.title} />
          </FadeIn>

          {/* Right: Product Info (sticky) */}
          <FadeIn delay={0.15}>
            <div className="md:sticky md:top-28 space-y-8">
              {/* Status + Title */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <StatusBadge status={product.status} />
                  {product.category && (
                    <span className="text-xs tracking-[0.12em] uppercase text-[#9CA3AF]">
                      {product.category}
                    </span>
                  )}
                </div>

                {product.artworkTitle && (
                  <h1 className="font-serif text-3xl md:text-4xl text-[#111111] font-light leading-tight mb-2">
                    {product.artworkTitle}
                  </h1>
                )}
                <p className="text-sm text-[#6B7280] tracking-wide">{product.title}</p>

                {product.subtitle && (
                  <p className="text-xs text-[#9CA3AF] mt-1">{product.subtitle}</p>
                )}
              </div>

              {/* Price */}
              <div>
                <p className="font-serif text-2xl text-[#111111]">
                  {formatPrice(product.price)}
                </p>
                {product.madeToOrder && product.leadTime && (
                  <p className="text-xs text-[#9CA3AF] mt-1 tracking-wide">
                    納期目安: {product.leadTime}
                  </p>
                )}
              </div>

              {/* Sizes */}
              {product.sizes.length > 0 && (
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-[#111111] mb-3">
                    Size
                  </p>
                  <div className="space-y-2">
                    {product.sizes.map((size) => (
                      <div
                        key={size.label}
                        className="flex items-center justify-between py-2 border-b border-[#E5E2DC]"
                      >
                        <span className="text-sm text-[#111111]">{size.label}</span>
                        {Object.keys(size.measurements).length > 0 && (
                          <span className="text-xs text-[#9CA3AF]">
                            {size.measurements.waist
                              ? `W ${size.measurements.waist}cm`
                              : size.measurements.chest
                              ? `Chest ${size.measurements.chest}cm`
                              : ""}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="space-y-3">
                {!isSold ? (
                  <button className="w-full bg-[#111111] text-white text-xs tracking-[0.2em] uppercase py-4 hover:bg-[#1B2A4A] transition-colors duration-300 flex items-center justify-center gap-3">
                    {product.madeToOrder ? "Order Inquiry" : "Purchase"}
                    <ArrowRight size={14} strokeWidth={1.5} />
                  </button>
                ) : (
                  <div className="w-full border border-[#E5E2DC] text-[#9CA3AF] text-xs tracking-[0.2em] uppercase py-4 text-center">
                    {product.status === "archived" ? "Archive — Not for Sale" : "Sold Out"}
                  </div>
                )}
                <Link
                  href={`/contact?product=${product.slug}`}
                  className="w-full border border-[#E5E2DC] text-[#6B7280] text-xs tracking-[0.15em] uppercase py-4 hover:border-[#111111] hover:text-[#111111] transition-colors flex items-center justify-center gap-3"
                >
                  <MessageCircle size={14} strokeWidth={1.5} />
                  お問い合わせ
                </Link>
                <a
                  href="https://line.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center text-xs text-[#9CA3AF] hover:text-[#111111] transition-colors py-2 block tracking-wide"
                >
                  LINE で相談する →
                </a>
              </div>

              {/* Material */}
              {(product.baseMaterial || (product.materialDetails && product.materialDetails.length > 0)) && (
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-[#111111] mb-3">
                    Material
                  </p>
                  {product.baseMaterial && (
                    <p className="text-sm text-[#6B7280] mb-2">
                      Base: {product.baseMaterial}
                    </p>
                  )}
                  {product.materialDetails?.map((m, i) => (
                    <p key={i} className="text-xs text-[#9CA3AF]">{m}</p>
                  ))}
                </div>
              )}

              {/* Tags */}
              {product.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-[#9CA3AF] border border-[#E5E2DC] px-2 py-1 tracking-wide"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </FadeIn>
        </div>

        {/* Story / Concept */}
        {(product.description || product.story) && (
          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[#E5E2DC] pt-12">
            <FadeIn>
              <p className="text-xs tracking-[0.2em] uppercase text-[#9CA3AF] mb-4">Description</p>
              <p className="text-sm text-[#111111] leading-relaxed">{product.description}</p>
            </FadeIn>
            {product.story && (
              <FadeIn delay={0.1}>
                <p className="text-xs tracking-[0.2em] uppercase text-[#9CA3AF] mb-4">Story</p>
                <p className="font-serif text-lg text-[#111111] leading-relaxed font-light">
                  {product.story}
                </p>
              </FadeIn>
            )}
          </div>
        )}

        {/* Detail Focus */}
        {product.detailShots.length > 0 && (
          <div className="mt-16 md:mt-24 border-t border-[#E5E2DC] pt-12">
            <FadeIn>
              <p className="text-xs tracking-[0.2em] uppercase text-[#9CA3AF] mb-2">
                Detail Focus
              </p>
              <h2 className="font-serif text-2xl text-[#111111] font-light mb-10">
                素材と技術の詳細
              </h2>
            </FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {product.detailShots.map((shot, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="space-y-2">
                    <div className="relative aspect-square overflow-hidden bg-[#EBEBEB]">
                      <Image
                        src={shot.image}
                        alt={shot.caption ?? `Detail ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-[1.05]"
                        sizes="25vw"
                      />
                    </div>
                    {shot.caption && (
                      <p className="text-xs text-[#9CA3AF] leading-relaxed">{shot.caption}</p>
                    )}
                    {shot.focusType && (
                      <p className="text-[10px] text-[#D4D0C8] uppercase tracking-[0.15em]">
                        {shot.focusType}
                      </p>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        )}

        {/* Craftsmanship */}
        {product.craftsmanship && product.craftsmanship.length > 0 && (
          <div className="mt-12 md:mt-16 border-t border-[#E5E2DC] pt-10">
            <FadeIn>
              <p className="text-xs tracking-[0.2em] uppercase text-[#9CA3AF] mb-4">
                Craftsmanship
              </p>
              <div className="flex flex-wrap gap-3">
                {product.craftsmanship.map((c, i) => (
                  <span
                    key={i}
                    className="text-xs text-[#111111] border border-[#E5E2DC] px-4 py-2 tracking-wide"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        )}

        {/* Related Works */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 md:mt-28 border-t border-[#E5E2DC] pt-12">
            <FadeIn>
              <p className="text-xs tracking-[0.2em] uppercase text-[#9CA3AF] mb-2">
                Related Works
              </p>
              <h2 className="font-serif text-2xl text-[#111111] font-light mb-10">
                関連作品
              </h2>
            </FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {relatedProducts.map((p, i) => (
                <FadeIn key={p.id} delay={i * 0.1}>
                  <ProductCard product={p} />
                </FadeIn>
              ))}
            </div>
          </div>
        )}

        {/* Back Link */}
        <div className="mt-16 pt-8 border-t border-[#E5E2DC]">
          <Link
            href="/collection"
            className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[#6B7280] hover:text-[#111111] transition-colors"
          >
            <ArrowLeft size={12} strokeWidth={1.5} />
            Back to Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
