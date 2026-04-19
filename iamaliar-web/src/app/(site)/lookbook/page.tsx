import Image from "next/image";
import Link from "next/link";
import { mockLookbooks } from "@/data/mock-products";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Lookbook",
  description: "IAMALIARのルックブック。着た時の作品性を体験する。",
};

export default function LookbookPage() {
  return (
    <div className="pt-24 md:pt-32 pb-20">
      <div className="container-site">
        <FadeIn>
          <div className="mb-16">
            <p className="text-xs tracking-[0.25em] uppercase text-[#9CA3AF] mb-3">IAMALIAR</p>
            <h1 className="font-serif text-4xl md:text-5xl text-[#111111] font-light">
              Lookbook
            </h1>
            <p className="mt-4 text-sm text-[#6B7280] max-w-md leading-relaxed">
              服を "着た時の作品性" として捉えた、編集された視覚作品群。
            </p>
          </div>
        </FadeIn>

        <div className="space-y-20 md:space-y-28">
          {mockLookbooks.map((lb, i) => (
            <FadeIn key={lb.id} delay={0.1}>
              <Link href={`/lookbook/${lb.slug}`} className="group block">
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${
                    i % 2 === 1 ? "md:grid-flow-dense" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={cn(
                      "relative overflow-hidden bg-[#EBEBEB]",
                      i % 2 === 1 ? "md:order-2" : ""
                    )}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={lb.coverImage}
                        alt={lb.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className={i % 2 === 1 ? "md:order-1" : ""}>
                    <p className="text-xs tracking-[0.25em] uppercase text-[#9CA3AF] mb-3">
                      {lb.season}
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl text-[#111111] font-light mb-5 group-hover:opacity-70 transition-opacity">
                      {lb.title}
                    </h2>
                    {lb.description && (
                      <p className="text-sm text-[#6B7280] leading-relaxed mb-8 max-w-sm">
                        {lb.description}
                      </p>
                    )}
                    {lb.theme && (
                      <p className="text-xs text-[#9CA3AF] tracking-[0.15em] mb-8">
                        Theme: {lb.theme}
                      </p>
                    )}
                    <span className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[#111111] link-underline">
                      View Lookbook
                      <ArrowRight size={12} strokeWidth={1.5} />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
