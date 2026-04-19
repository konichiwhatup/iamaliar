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
        style={{ mixBlendMode: "difference" }}
        className="fixed top-0 left-0 right-0 z-50 px-12 py-8 flex justify-center items-center"
      >
        <nav className="hidden md:flex items-center gap-10">
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
          className="hidden md:flex absolute right-12 items-center gap-1 font-mono-label text-xs tracking-[0.15em] text-[#6b6560] hover:text-[#e8e2d8] transition-colors"
          aria-label="Toggle language"
        >
          <span className={locale === "ja" ? "text-[#e8e2d8]" : ""}>JA</span>
          <span className="text-[#2e2e2e]">/</span>
          <span className={locale === "en" ? "text-[#e8e2d8]" : ""}>EN</span>
        </button>

        <button className="md:hidden text-[#6b6560] hover:text-[#e8e2d8] transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
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
          className="mt-16 flex items-center gap-2 font-mono-label text-[#6b6560] hover:text-[#e8e2d8] transition-colors"
          aria-label="Toggle language"
        >
          <span className={locale === "ja" ? "text-[#e8e2d8]" : ""}>JA</span>
          <span className="text-[#2e2e2e]">/</span>
          <span className={locale === "en" ? "text-[#e8e2d8]" : ""}>EN</span>
        </button>
      </div>
    </>
  );
}
