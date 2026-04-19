import Image from "next/image";
import Link from "next/link";
import { mockJournals } from "@/data/mock-products";
import { FadeIn } from "@/components/ui/fade-in";
import type { JournalPost } from "@/types/product";

export const metadata = {
  title: "Journal",
  description: "制作プロセス・思想・背景・展示情報を蓄積するIAMALIARのジャーナル。",
};

const categoryLabels: Record<JournalPost["category"], string> = {
  process: "Process",
  concept: "Concept",
  archive: "Archive",
  exhibition: "Exhibition",
  note: "Note",
};

export default function JournalPage() {
  return (
    <div className="pt-24 md:pt-32 pb-20">
      <div className="container-site">
        <FadeIn>
          <div className="mb-16">
            <p className="text-xs tracking-[0.25em] uppercase text-[#555555] mb-3">IAMALIAR</p>
            <h1 className="font-serif text-4xl md:text-5xl text-[#E8E5DF] font-light">Journal</h1>
            <p className="mt-4 text-sm text-[#888888] max-w-md leading-relaxed">
              制作の記録、思想、展示の報告。ブランドの内側を継続発信する場。
            </p>
          </div>
        </FadeIn>

        {/* Featured Post */}
        {mockJournals[0] && (
          <FadeIn delay={0.1}>
            <Link href={`/journal/${mockJournals[0].slug}`} className="group block mb-16 md:mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                {mockJournals[0].coverImage && (
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#141414]">
                    <Image
                      src={mockJournals[0].coverImage}
                      alt={mockJournals[0].title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-[#555555] mb-3">
                    {categoryLabels[mockJournals[0].category]} — Featured
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl text-[#E8E5DF] font-light mb-5 group-hover:opacity-70 transition-opacity">
                    {mockJournals[0].title}
                  </h2>
                  {mockJournals[0].excerpt && (
                    <p className="text-sm text-[#888888] leading-relaxed mb-6 max-w-md">
                      {mockJournals[0].excerpt}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {mockJournals[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-[#555555] border border-[#1C1C1C] px-2 py-0.5 tracking-wide"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-[#555555] tracking-wide">
                    {new Date(mockJournals[0].publishedAt).toLocaleDateString("ja-JP", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </Link>
          </FadeIn>
        )}

        {/* Divider */}
        <div className="border-t border-[#1C1C1C] mb-16" />

        {/* Rest of Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {mockJournals.slice(1).map((post, i) => (
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
                  {categoryLabels[post.category]}
                </p>
                <h3 className="font-serif text-xl text-[#E8E5DF] font-light mb-3 group-hover:opacity-70 transition-opacity leading-snug">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-xs text-[#888888] leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                )}
                <p className="text-xs text-[#555555] tracking-wide">
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
    </div>
  );
}
