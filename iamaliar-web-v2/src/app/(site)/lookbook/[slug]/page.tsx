import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getLookbookBySlug, mockLookbooks, getProductBySlug } from "@/data/mock-products";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const lb = getLookbookBySlug(slug);
  if (!lb) return {};
  return { title: lb.title, description: lb.description };
}

export async function generateStaticParams() {
  return mockLookbooks.map((lb) => ({ slug: lb.slug }));
}

export default async function LookbookDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const lb = getLookbookBySlug(slug);
  if (!lb) notFound();

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <div className="relative min-h-[60vh] flex items-end bg-[#020202] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={lb.coverImage}
            alt={lb.title}
            fill
            className="object-cover opacity-50"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202]/90 via-transparent" />
        </div>
        <div className="container-site relative z-10 pb-12 md:pb-20">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-[#555555] mb-4">{lb.season}</p>
            <h1 className="font-serif text-4xl md:text-6xl text-white font-light leading-tight mb-4">
              {lb.title}
            </h1>
            {lb.theme && (
              <p className="text-sm text-[#555555]">{lb.theme}</p>
            )}
          </FadeIn>
        </div>
      </div>

      <div className="container-site py-16 md:py-24">
        {/* Description */}
        {lb.description && (
          <FadeIn>
            <div className="max-w-2xl mb-16 md:mb-24">
              <p className="font-serif text-xl md:text-2xl text-[#E8E5DF] font-light leading-relaxed">
                {lb.description}
              </p>
            </div>
          </FadeIn>
        )}

        {/* Images */}
        <div className="space-y-6 md:space-y-10">
          {lb.images.map((item, i) => {
            const linkedProducts = item.linkedProducts
              ?.map((pid) => getProductBySlug(pid))
              .filter(Boolean);

            return (
              <FadeIn key={i} delay={0.05 * (i % 4)}>
                <div
                  className={`grid gap-4 ${
                    i % 3 === 0
                      ? "grid-cols-1"
                      : i % 3 === 1
                      ? "grid-cols-1 md:grid-cols-2"
                      : "grid-cols-1"
                  }`}
                >
                  <div className={`relative overflow-hidden bg-[#141414] ${i % 3 === 0 ? "aspect-[16/10]" : "aspect-[3/4]"}`}>
                    <Image
                      src={item.image}
                      alt={item.caption ?? `Look ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes={i % 3 === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                    />
                  </div>

                  {/* Caption + linked products */}
                  {(item.caption || (linkedProducts && linkedProducts.length > 0)) && (
                    <div className="flex items-end justify-between py-3">
                      {item.caption && (
                        <p className="text-xs text-[#555555] italic">{item.caption}</p>
                      )}
                      {linkedProducts && linkedProducts.length > 0 && (
                        <div className="flex items-center gap-4">
                          <span className="text-[10px] tracking-[0.15em] uppercase text-[#555555]">
                            Worn:
                          </span>
                          {linkedProducts.map(
                            (p) =>
                              p && (
                                <Link
                                  key={p.id}
                                  href={`/collection/${p.slug}`}
                                  className="text-xs text-[#E8E5DF] hover:opacity-60 transition-opacity link-underline"
                                >
                                  {p.artworkTitle ?? p.title}
                                </Link>
                              )
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Back */}
        <div className="mt-16 pt-8 border-t border-[#1C1C1C]">
          <Link
            href="/lookbook"
            className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[#888888] hover:text-[#E8E5DF] transition-colors"
          >
            <ArrowLeft size={12} strokeWidth={1.5} />
            Back to Lookbook
          </Link>
        </div>
      </div>
    </div>
  );
}
