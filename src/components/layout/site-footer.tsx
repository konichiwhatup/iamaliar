"use client";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[#1C1C1C] mt-24 bg-[#060606]">
      <div className="container-site py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand */}
          <div>
            <Link href="/" className="font-serif text-2xl tracking-[0.15em] text-[#E8E5DF] block">
              IAMALIAR
            </Link>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-[#E8E5DF] mb-5">{t.footer.pages}</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-xs text-[#888888] hover:text-[#E8E5DF] transition-colors tracking-wide">{t.nav.home}</Link>
              <Link href="/collection" className="text-xs text-[#888888] hover:text-[#E8E5DF] transition-colors tracking-wide">{t.nav.collection}</Link>
              <Link href="/contact" className="text-xs text-[#888888] hover:text-[#E8E5DF] transition-colors tracking-wide">{t.nav.contact}</Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-[#E8E5DF] mb-5">{t.footer.follow}</h4>
            <nav className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/watashi_wa_usotsuki_desu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#888888] hover:text-[#E8E5DF] transition-colors tracking-wide"
              >
                Instagram
              </a>
            </nav>
          </div>

        </div>

        <div className="border-t border-[#1C1C1C] pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-[#555555] tracking-wide">© {new Date().getFullYear()} IAMALIAR. All rights reserved.</p>
          <p className="text-xs text-[#555555] tracking-widest uppercase font-mono-custom">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
