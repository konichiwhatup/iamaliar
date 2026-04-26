"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";

export function SiteHeader() {
  const pathname = usePathname();
  const { locale, t, toggle } = useLanguage();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/collection", label: t.nav.collection },
    { href: "/journal", label: t.nav.journal },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0908]/80 backdrop-blur-md md:border-b md:border-[#1C1C1C]">
      <div className="px-3 md:px-12 flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8 md:py-6">
        {/* PC のみ: 左スペーサー(nav を中央に) */}
        <div className="hidden md:block" aria-hidden />

        {/* Nav: モバイルは下に区切り線、PCは線なし */}
        <nav className="flex items-center justify-center gap-4 md:gap-10 py-3 md:py-0 border-b border-[#1C1C1C] md:border-b-0">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-mono-label link-accent transition-colors whitespace-nowrap text-[1.1rem] md:text-xs tracking-[0.08em] md:tracking-[0.2em] font-medium md:font-normal",
                pathname === link.href ? "text-[#e8e2d8]" : "text-[#a0998f] md:text-[#6b6560] hover:text-[#e8e2d8]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Language toggle: モバイルは線の下/右端、PCは右端 */}
        <button
          onClick={toggle}
          className="self-end my-2 md:my-0 md:justify-self-end flex items-center font-mono-label text-[0.6rem] md:text-[0.7rem] tracking-[0.15em] md:tracking-[0.2em] border border-[#1C1C1C] rounded-full overflow-hidden bg-[#0a0908]/40 backdrop-blur-sm relative"
          aria-label="Toggle language"
        >
          <span
            aria-hidden
            className="absolute top-0 bottom-0 w-1/2 bg-[#e8e2d8] rounded-full transition-transform duration-300 ease-out"
            style={{ transform: locale === "ja" ? "translateX(0)" : "translateX(100%)" }}
          />
          <span
            className={cn(
              "relative px-3 md:px-4 py-1 md:py-1.5 transition-colors duration-300",
              locale === "ja" ? "text-[#080808]" : "text-[#6b6560]"
            )}
          >
            JP
          </span>
          <span
            className={cn(
              "relative px-3 md:px-4 py-1 md:py-1.5 transition-colors duration-300",
              locale === "en" ? "text-[#080808]" : "text-[#6b6560]"
            )}
          >
            EN
          </span>
        </button>
      </div>
    </header>
  );
}
