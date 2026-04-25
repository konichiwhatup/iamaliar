"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale, t, toggle } = useLanguage();

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/collection", label: t.nav.collection },
    { href: "/journal", label: t.nav.journal },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 px-12 py-6 grid grid-cols-[1fr_auto_1fr] items-center md:gap-8 bg-[#0a0908]/80 backdrop-blur-md border-b border-[#1C1C1C]"
      >
        {/* Left spacer — keeps nav truly centered */}
        <div className="hidden md:block" aria-hidden />

        <nav className="hidden md:flex items-center gap-10 justify-self-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-mono-label link-accent transition-colors",
                pathname === link.href ? "text-[#e8e2d8]" : "text-[#6b6560] hover:text-[#e8e2d8]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Language toggle — desktop */}
        <button
          onClick={toggle}
          className="hidden md:flex justify-self-end items-center font-mono-label text-[0.7rem] tracking-[0.2em] border border-[#1C1C1C] rounded-full overflow-hidden bg-[#0a0908]/40 backdrop-blur-sm relative"
          aria-label="Toggle language"
        >
          <span
            aria-hidden
            className="absolute top-0 bottom-0 w-1/2 bg-[#e8e2d8] rounded-full transition-transform duration-300 ease-out"
            style={{ transform: locale === "ja" ? "translateX(0)" : "translateX(100%)" }}
          />
          <span
            className={cn(
              "relative px-4 py-1.5 transition-colors duration-300",
              locale === "ja" ? "text-[#080808]" : "text-[#6b6560]"
            )}
          >
            JP
          </span>
          <span
            className={cn(
              "relative px-4 py-1.5 transition-colors duration-300",
              locale === "en" ? "text-[#080808]" : "text-[#6b6560]"
            )}
          >
            EN
          </span>
        </button>

        <button className="md:hidden col-start-1 justify-self-start text-[#6b6560] hover:text-[#e8e2d8] transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </header>

      {/* Mobile */}
      <div className={cn(
        "fixed inset-0 z-40 bg-[#0a0908] flex flex-col justify-center items-center transition-all duration-500 md:hidden",
        menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <nav className="flex flex-col items-center gap-12">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="font-serif text-3xl font-light tracking-wider text-[#e8e2d8] hover:text-[#c4a87c] transition-colors duration-300">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Language toggle — mobile */}
        <button
          onClick={toggle}
          className="mt-16 flex items-center font-mono-label text-sm tracking-[0.2em] border border-[#1C1C1C] rounded-full overflow-hidden bg-[#0a0908]/40 relative"
          aria-label="Toggle language"
        >
          <span
            aria-hidden
            className="absolute top-0 bottom-0 w-1/2 bg-[#e8e2d8] rounded-full transition-transform duration-300 ease-out"
            style={{ transform: locale === "ja" ? "translateX(0)" : "translateX(100%)" }}
          />
          <span
            className={cn(
              "relative px-6 py-2 transition-colors duration-300",
              locale === "ja" ? "text-[#080808]" : "text-[#6b6560]"
            )}
          >
            JP
          </span>
          <span
            className={cn(
              "relative px-6 py-2 transition-colors duration-300",
              locale === "en" ? "text-[#080808]" : "text-[#6b6560]"
            )}
          >
            EN
          </span>
        </button>
      </div>
    </>
  );
}
