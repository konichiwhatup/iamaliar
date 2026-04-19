"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/collection", label: "Collection" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

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
      </div>
    </>
  );
}
