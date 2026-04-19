import { mockProducts } from "@/data/mock-products";
import { ProductCard } from "@/components/product/product-card";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata = {
  title: "Archive",
  description: "IAMALIARの過去作品・Sold作品のアーカイブ。",
};

export default function ArchivePage() {
  const archivedProducts = mockProducts.filter(
    (p) => p.status === "sold" || p.status === "archived"
  );

  return (
    <div className="pt-24 md:pt-32 pb-20">
      <div className="container-site">
        <FadeIn>
          <div className="mb-16">
            <p className="text-xs tracking-[0.25em] uppercase text-[#9CA3AF] mb-3">IAMALIAR</p>
            <h1 className="font-serif text-4xl md:text-5xl text-[#111111] font-light">Archive</h1>
            <p className="mt-4 text-sm text-[#6B7280] max-w-md leading-relaxed">
              Soldになった作品もブランドの歴史。一点物は売れてからも、世界観の一部であり続ける。
            </p>
          </div>
        </FadeIn>

        {archivedProducts.length === 0 ? (
          <div className="py-20 text-center text-[#9CA3AF] text-sm">
            アーカイブ作品はまだありません。
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {archivedProducts.map((product, i) => (
              <FadeIn key={product.id} delay={i * 0.05}>
                <ProductCard product={product} />
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
