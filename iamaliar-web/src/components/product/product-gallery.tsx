"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
  alt: string;
}

export function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="space-y-3">
        {/* Main Image */}
        <div
          className="relative aspect-[3/4] overflow-hidden bg-[#EBEBEB] cursor-zoom-in group"
          onClick={() => setModalOpen(true)}
        >
          <Image
            src={images[activeIndex]}
            alt={alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 55vw"
            priority
          />
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-white/80 backdrop-blur-sm p-2">
              <ZoomIn size={16} strokeWidth={1.5} className="text-[#111111]" />
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-1">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "relative w-16 h-20 shrink-0 overflow-hidden transition-opacity",
                  activeIndex === i ? "opacity-100 ring-1 ring-[#111111]" : "opacity-50 hover:opacity-80"
                )}
              >
                <Image
                  src={img}
                  alt={`${alt} ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:opacity-70 transition-opacity"
            onClick={() => setModalOpen(false)}
          >
            <X size={24} strokeWidth={1.5} />
          </button>
          <div
            className="relative max-w-2xl w-full max-h-[90vh] aspect-[3/4]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIndex]}
              alt={alt}
              fill
              className="object-contain"
              sizes="100vw"
              quality={95}
            />
          </div>
          {images.length > 1 && (
            <div className="absolute bottom-6 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setActiveIndex(i); }}
                  className={cn(
                    "w-1.5 h-1.5 rounded-full transition-colors",
                    activeIndex === i ? "bg-white" : "bg-white/40"
                  )}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
