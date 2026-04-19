"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/collection", label: "Collection" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Order / Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[#F5F3EF]/95 backdrop-blur-sm border-b border-[#E5E2DC]"
            : "bg-transparent"
        )}
      >
        <div className="container-site flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-xl md:text-2xl tracking-[0.15em] text-[#111111] hover:opacity-70 transition-opacity"
          >
            IAMALIAR
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xs tracking-[0.12em] uppercase transition-colors link-underline",
                  pathname?.startsWith(link.href)
                    ? "text-[#111111]"
                    : "text-[#6B7280] hover:text-[#111111]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <Link
              href="/cart"
              className="text-[#6B7280] hover:text-[#111111] transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
            </Link>
            <button
              className="md:hidden text-[#6B7280] hover:text-[#111111] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-[#F5F3EF] flex flex-col justify-center items-center transition-all duration-500 md:hidden",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-serif text-3xl tracking-wider text-[#111111] hover:opacity-60 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-12 flex gap-6 text-xs tracking-[0.15em] text-[#6B7280]">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#111111] transition-colors">
            Instagram
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#111111] transition-colors">
            TikTok
          </a>
          <a href="https://line.me" target="_blank" rel="noopener noreferrer" className="hover:text-[#111111] transition-colors">
            LINE
          </a>
        </div>
      </div>
    </>
  );
}
