"use client";

import { useState, useMemo } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { ProductCard } from "@/components/product/product-card";
import { mockProducts } from "@/data/mock-products";
import type { ProductCategory, ProductStatus } from "@/types/product";
import { LayoutGrid, AlignJustify } from "lucide-react";
import { cn } from "@/lib/utils";

type FilterState = {
  category: ProductCategory | "all";
  availability: ProductStatus | "all";
};

const categoryLabels: Record<ProductCategory | "all", string> = {
  all: "All",
  pants: "Pants",
  jacket: "Jacket",
  shirt: "Shirt",
  other: "Other",
};

const availabilityLabels: Record<ProductStatus | "all", string> = {
  all: "All",
  active: "In Stock",
  sold: "Sold",
  archived: "Archive",
  made_to_order: "Made to Order",
};

export default function CollectionPage() {
  const [view, setView] = useState<"grid" | "editorial">("grid");
  const [filters, setFilters] = useState<FilterState>({
    category: "all",
    availability: "all",
  });
  const [sort, setSort] = useState<"newest" | "price_high" | "price_low">("newest");

  const filteredProducts = useMemo(() => {
    let result = [...mockProducts];

    if (filters.category !== "all") {
      result = result.filter((p) => p.category === filters.category);
    }
    if (filters.availability !== "all") {
      result = result.filter((p) => p.status === filters.availability);
    }

    if (sort === "price_high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === "price_low") {
      result.sort((a, b) => a.price - b.price);
    } else {
      result.sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    }

    return result;
  }, [filters, sort]);

  return (
    <div className="pt-24 md:pt-32 pb-20">
      <div className="container-site">
        {/* Header */}
        <FadeIn>
          <div className="mb-12 md:mb-16">
            <p className="text-xs tracking-[0.25em] uppercase text-[#9CA3AF] mb-3">
              IAMALIAR
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-[#111111] font-light">
              Collection
            </h1>
            <p className="mt-4 text-sm text-[#6B7280] max-w-md leading-relaxed">
              量産された服に新しい物語を与えた、一点物の作品たち。
            </p>
          </div>
        </FadeIn>

        {/* Filters + View Toggle */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-[#E5E2DC]">
            <div className="flex flex-wrap items-center gap-4">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {(Object.keys(categoryLabels) as (ProductCategory | "all")[]).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilters((f) => ({ ...f, category: cat }))}
                    className={cn(
                      "text-xs tracking-[0.12em] uppercase px-3 py-1.5 border transition-colors",
                      filters.category === cat
                        ? "bg-[#111111] text-white border-[#111111]"
                        : "text-[#6B7280] border-[#E5E2DC] hover:border-[#111111] hover:text-[#111111]"
                    )}
                  >
                    {categoryLabels[cat]}
                  </button>
                ))}
              </div>

              {/* Availability */}
              <select
                value={filters.availability}
                onChange={(e) =>
                  setFilters((f) => ({
                    ...f,
                    availability: e.target.value as ProductStatus | "all",
                  }))
                }
                className="text-xs tracking-[0.1em] text-[#6B7280] bg-transparent border border-[#E5E2DC] px-3 py-1.5 hover:border-[#111111] transition-colors outline-none cursor-pointer"
              >
                {(Object.keys(availabilityLabels) as (ProductStatus | "all")[]).map((av) => (
                  <option key={av} value={av}>
                    {availabilityLabels[av]}
                  </option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as typeof sort)}
                className="text-xs tracking-[0.1em] text-[#6B7280] bg-transparent border border-[#E5E2DC] px-3 py-1.5 hover:border-[#111111] transition-colors outline-none cursor-pointer"
              >
                <option value="newest">Newest</option>
                <option value="price_high">Price: High to Low</option>
                <option value="price_low">Price: Low to High</option>
              </select>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#9CA3AF] mr-2">{filteredProducts.length} works</span>
              <button
                onClick={() => setView("grid")}
                className={cn(
                  "p-2 transition-colors",
                  view === "grid" ? "text-[#111111]" : "text-[#D4D0C8] hover:text-[#6B7280]"
                )}
                aria-label="Grid view"
              >
                <LayoutGrid size={16} strokeWidth={1.5} />
              </button>
              <button
                onClick={() => setView("editorial")}
                className={cn(
                  "p-2 transition-colors",
                  view === "editorial" ? "text-[#111111]" : "text-[#D4D0C8] hover:text-[#6B7280]"
                )}
                aria-label="Editorial view"
              >
                <AlignJustify size={16} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center text-[#9CA3AF] text-sm">
            作品が見つかりませんでした。
          </div>
        ) : (
          <div
            className={cn(
              "gap-6 md:gap-8",
              view === "grid"
                ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                : "grid grid-cols-1 md:grid-cols-2"
            )}
          >
            {filteredProducts.map((product, i) => (
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
