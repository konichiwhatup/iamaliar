import { cn } from "@/lib/utils";
import type { ProductStatus } from "@/types/product";

const statusConfig: Record<ProductStatus, { label: string; className: string }> = {
  active: {
    label: "Available",
    className: "text-[#111111] border-[#111111]",
  },
  sold: {
    label: "Sold",
    className: "text-[#9CA3AF] border-[#9CA3AF]",
  },
  archived: {
    label: "Archive",
    className: "text-[#9CA3AF] border-[#9CA3AF]",
  },
  made_to_order: {
    label: "Made to Order",
    className: "text-[#1B2A4A] border-[#1B2A4A]",
  },
};

export function StatusBadge({
  status,
  className,
}: {
  status: ProductStatus;
  className?: string;
}) {
  const config = statusConfig[status];
  return (
    <span
      className={cn(
        "inline-block text-[10px] tracking-[0.15em] uppercase border px-2 py-0.5",
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}
