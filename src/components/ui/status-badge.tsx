import { cn } from "@/lib/utils";
import type { ProductStatus } from "@/types/product";

const statusConfig: Record<ProductStatus, { label: string; className: string }> = {
  active: {
    label: "Available",
    className: "text-[#E8E5DF] border-[#E8E5DF]",
  },
  sold: {
    label: "Sold",
    className: "text-[#3A3A3A] border-[#2A2A2A]",
  },
  archived: {
    label: "Archive",
    className: "text-[#3A3A3A] border-[#2A2A2A]",
  },
  made_to_order: {
    label: "Made to Order",
    className: "text-[#C8B490] border-[#C8B490]",
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
