"use client";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";

export function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-[#1C1C1C] mt-24 bg-[#060606]">
      <div className="container-site py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <Link href="/" className="font-serif text-2xl tracking-[0.15em] text-[#E8E5DF] block">
            IAMALIAR
          </Link>
          <div className="flex flex-col md:items-end gap-2">
            <p className="text-xs text-[#555555] tracking-wide">© {new Date().getFullYear()} IAMALIAR. All rights reserved.</p>
            <p className="text-xs text-[#555555] tracking-widest uppercase font-mono-custom">{t.footer.tagline}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
