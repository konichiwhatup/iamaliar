import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getJournalBySlug, mockJournals, getProductBySlug } from "@/data/mock-products";
import { ProductCard } from "@/components/product/product-card";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getJournalBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export async function generateStaticParams() {
  return mockJournals.map((j) => ({ slug: j.slug }));
}

export default async function JournalDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getJournalBySlug(slug);
  if (!post) notFound();

  const relatedProducts = post.relatedProducts
    ?.map((id) => getProductBySlug(id))
    .filter(Boolean);

  const categoryLabels: Record<string, string> = {
    process: "Process",
    concept: "Concept",
    archive: "Archive",
    exhibition: "Exhibition",
    note: "Note",
  };

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      {post.coverImage && (
        <div className="relative aspect-[16/7] overflow-hidden bg-[#141414]">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover opacity-80"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 to-transparent" />
        </div>
      )}

      <div className="container-site py-12 md:py-20 max-w-3xl">
        {/* Meta */}
        <FadeIn>
          <div className="mb-8">
            <p className="text-xs tracking-[0.2em] uppercase text-[#555555] mb-4">
              {categoryLabels[post.category]}
            </p>
            <h1 className="font-serif text-3xl md:text-5xl text-[#E8E5DF] font-light leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-xs text-[#555555]">
              {post.author && <span>{post.author}</span>}
              <span>
                {new Date(post.publishedAt).toLocaleDateString("ja-JP", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Excerpt */}
        {post.excerpt && (
          <FadeIn delay={0.1}>
            <p className="font-serif text-xl text-[#E8E5DF] font-light leading-relaxed mb-12 pb-12 border-b border-[#1C1C1C]">
              {post.excerpt}
            </p>
          </FadeIn>
        )}

        {/* Body */}
        <FadeIn delay={0.15}>
          <div className="prose-custom space-y-6">
            {post.body.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-sm md:text-base text-[#E8E5DF] leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </FadeIn>

        {/* Tags */}
        {post.tags.length > 0 && (
          <FadeIn delay={0.2}>
            <div className="mt-12 pt-8 border-t border-[#1C1C1C] flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-[#555555] border border-[#1C1C1C] px-3 py-1 tracking-wide"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </FadeIn>
        )}
      </div>

      {/* Related Products */}
      {relatedProducts && relatedProducts.length > 0 && (
        <div className="border-t border-[#1C1C1C]">
          <div className="container-site py-16 md:py-20">
            <FadeIn>
              <p className="text-xs tracking-[0.2em] uppercase text-[#555555] mb-2">
                Related Works
              </p>
              <h2 className="font-serif text-2xl text-[#E8E5DF] font-light mb-10">
                記事で触れた作品
              </h2>
            </FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {relatedProducts.map(
                (p, i) =>
                  p && (
                    <FadeIn key={p.id} delay={i * 0.1}>
                      <ProductCard product={p} />
                    </FadeIn>
                  )
              )}
            </div>
          </div>
        </div>
      )}

      {/* Back */}
      <div className="container-site pb-12">
        <Link
          href="/journal"
          className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[#888888] hover:text-[#E8E5DF] transition-colors"
        >
          <ArrowLeft size={12} strokeWidth={1.5} />
          Back to Journal
        </Link>
      </div>
    </div>
  );
}
