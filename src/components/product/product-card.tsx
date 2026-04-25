"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils";
import { StatusBadge } from "@/components/ui/status-badge";
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);
  const secondImage = product.gallery[0] ?? product.featuredImage;
  const isSold = product.status === "sold" || product.status === "archived";

  return (
    <Link
      href={`/collection/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-[#141414] aspect-[3/4] mb-4">
        <Image
          src={hovered && secondImage !== product.featuredImage ? secondImage : product.featuredImage}
          alt={product.title}
          fill
          className={cn(
            "object-cover transition-all duration-700",
            isSold && "opacity-60 grayscale",
            "group-hover:scale-[1.03]"
          )}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Status overlay for sold */}
        {isSold && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#080808]/70 px-4 py-2">
              <span className="text-xs tracking-[0.2em] uppercase text-[#555555]">
                {product.status === "archived" ? "Archive" : "Sold"}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="space-y-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-serif text-sm text-[#E8E5DF] leading-snug">
              {product.title}
            </p>
          </div>
          <StatusBadge status={product.status} className="shrink-0 mt-0.5" />
        </div>
        <p className="text-sm text-[#E8E5DF] tracking-wide">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
