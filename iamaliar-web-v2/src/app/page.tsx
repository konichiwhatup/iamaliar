import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { ProductCard } from "@/components/product/product-card";
import { mockProducts, mockLookbooks, mockJournals } from "@/data/mock-products";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  const featuredProducts = mockProducts.filter(
    (p) => p.status === "active" || p.status === "made_to_order"
  ).slice(0, 4);

  const latestLookbook = mockLookbooks[0];
  const latestJournals = mockJournals.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-end pb-16 overflow-hidden bg-[#020202]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=85"
            alt="IAMALIAR Hero"
            fill
            className="object-cover opacity-60"
            priority
            sizes="100vw"
          />
          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202]/80 via-transparent to-transparent" />
        </div>

        <div className="container-site relative z-10 pb-8 md:pb-16">
              <FadeIn duration={1.2}>
              <p className="text-xs tracking-[0.3em] uppercase text-[#2E2E2E] mb-6">
                SS 2025
              </p>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light leading-none mb-6 max-w-3xl">
                服と作品の<br />あいだ
              </h1>
              <p className="text-sm text-[#2E2E2E] tracking-wide mb-12 max-w-sm leading-relaxed">
                量産された衣服に対して新たな物語を与え、<br />
                服と作品の境界を曖昧にするブランド。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/collection"
                  className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase border border-white text-white px-8 py-4 hover:bg-white hover:text-[#E8E5DF] transition-all duration-300"
                >
                  View Collection
                  <ArrowRight size={14} strokeWidth={1.5} />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#2E2E2E] px-8 py-4 hover:text-white transition-colors duration-300"
                >
                  Explore Story
                </Link>
              </div>
            </FadeIn>
        </div>
      </section>

      {/* Concept Statement */}
      <section className="py-24 md:py-32 border-b border-[#1C1C1C]">
        <div className="container-site max-w-3xl">
          <FadeIn>
            <p className="text-xs tracking-[0.25em] uppercase text-[#555555] mb-8">
              Brand Philosophy
            </p>
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#E8E5DF] font-light leading-relaxed">
              "作品を売るEC" ではなく、<br />
              "作品世界に触れた結果として<br className="hidden md:block" />
              購入・問い合わせに進むサイト"
            </blockquote>
            <div className="mt-8 h-px w-16 bg-[#C8B490]" />
          </FadeIn>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <FadeIn>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-[#555555] mb-2">
                  Featured Works
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-[#E8E5DF] font-light">
                  作品一覧
                </h2>
              </div>
              <Link
                href="/collection"
                className="hidden md:flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[#888888] hover:text-[#E8E5DF] transition-colors link-underline"
              >
                All Works
                <ArrowRight size={12} strokeWidth={1.5} />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map((product, i) => (
              <FadeIn key={product.id} delay={i * 0.1}>
                <ProductCard product={product} />
              </FadeIn>
            ))}
          </div>

          <div className="mt-10 md:hidden text-center">
            <Link
              href="/collection"
              className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[#888888] hover:text-[#E8E5DF] transition-colors"
            >
              All Works
              <ArrowRight size={12} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* LOOKBOOK Preview */}
      {latestLookbook && (
        <section className="py-20 md:py-28 bg-[#020202]">
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              <FadeIn>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={latestLookbook.coverImage}
                    alt={latestLookbook.title}
                    fill
                    className="object-cover image-hover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-xs tracking-[0.25em] uppercase text-[#888888] mb-4">
                  {latestLookbook.season}
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-white font-light mb-6 leading-tight">
                  {latestLookbook.title}
                </h2>
                <p className="text-sm text-[#555555] leading-relaxed mb-10 max-w-sm">
                  {latestLookbook.description}
                </p>
                <Link
                  href={`/lookbook/${latestLookbook.slug}`}
                  className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase border border-[#2A2A2A] text-[#888888] px-8 py-4 hover:border-[#E8E5DF] hover:text-[#E8E5DF] transition-all duration-300"
                >
                  View Lookbook
                  <ArrowRight size={14} strokeWidth={1.5} />
                </Link>
              </FadeIn>
            </div>
          </div>
        </section>
      )}

      {/* Journal Preview */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <FadeIn>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-[#555555] mb-2">
                  Journal
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-[#E8E5DF] font-light">
                  制作の記録
                </h2>
              </div>
              <Link
                href="/journal"
                className="hidden md:flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[#888888] hover:text-[#E8E5DF] transition-colors link-underline"
              >
                All Journal
                <ArrowRight size={12} strokeWidth={1.5} />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {latestJournals.map((post, i) => (
              <FadeIn key={post.id} delay={i * 0.1}>
                <Link href={`/journal/${post.slug}`} className="group block">
                  {post.coverImage && (
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#141414] mb-5">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  )}
                  <p className="text-xs tracking-[0.15em] uppercase text-[#555555] mb-2">
                    {post.category}
                  </p>
                  <h3 className="font-serif text-lg text-[#E8E5DF] font-light leading-snug mb-3 group-hover:opacity-70 transition-opacity">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-xs text-[#888888] leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  )}
                  <p className="text-xs text-[#555555] mt-3 tracking-wide">
                    {new Date(post.publishedAt).toLocaleDateString("ja-JP", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="py-20 md:py-28 border-t border-[#1C1C1C]">
        <div className="container-site text-center max-w-2xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.25em] uppercase text-[#555555] mb-6">
              Order / Contact
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#E8E5DF] font-light mb-6">
              オーダー・お問い合わせ
            </h2>
            <p className="text-sm text-[#888888] leading-relaxed mb-10">
              作品のオーダー相談、スタイリング、展示・コラボレーションのご相談はこちらから。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 text-xs tracking-[0.2em] uppercase bg-[#E8E5DF] text-[#080808] px-10 py-4 hover:bg-[#C8B490] transition-colors duration-300"
              >
                Contact Form
                <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
              <a
                href="https://line.me"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 text-xs tracking-[0.2em] uppercase border border-[#1C1C1C] text-[#E8E5DF] px-10 py-4 hover:border-[#E8E5DF] transition-colors duration-300"
              >
                LINE で相談
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
