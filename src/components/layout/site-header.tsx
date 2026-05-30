"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";

export function SiteHeader() {
  const pathname = usePathname();
  const { locale, t, toggle } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/collection", label: t.nav.collection },
    { href: "/journal", label: t.nav.journal },
    { href: "/contact", label: t.nav.contact },
  ];

  // ルート遷移でメニューを閉じる
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // ドロワー表示中は背面スクロールを止める
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const LangToggle = () => (
    <button
      onClick={toggle}
      className="flex items-center font-mono-label text-[0.6rem] md:text-[0.7rem] tracking-[0.15em] md:tracking-[0.2em] border border-[#1C1C1C] rounded-full overflow-hidden bg-[#0a0908]/40 backdrop-blur-sm relative"
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
  );

  const Brand = ({ className }: { className?: string }) => (
    <Link
      href="/"
      className={cn(
        "font-serif text-[#e8e2d8] text-[1.1rem] tracking-[0.22em] whitespace-nowrap transition-opacity hover:opacity-70",
        className
      )}
    >
      IAMALIAR
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 bg-[#0a0908] border-b border-[#1C1C1C]">
      {/* モバイル: ハンバーガー / ロゴ / 言語切替 */}
      <div className="md:hidden grid grid-cols-[1fr_auto_1fr] items-center px-3 py-3">
        <button
          onClick={() => setMenuOpen(true)}
          className="justify-self-start flex flex-col justify-center gap-[5px] w-7 h-7"
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span className="block h-px w-6 bg-[#e8e2d8]" />
          <span className="block h-px w-6 bg-[#e8e2d8]" />
        </button>
        <Brand className="justify-self-center" />
        <div className="justify-self-end">
          <LangToggle />
        </div>
      </div>

      {/* モバイル: 背面オーバーレイ */}
      <div
        onClick={() => setMenuOpen(false)}
        aria-hidden
        className={cn(
          "md:hidden fixed inset-0 z-[55] bg-black/60 transition-opacity duration-300",
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      />

      {/* モバイル: 左からスライドするドロワー (幅85%) */}
      <div
        className={cn(
          "md:hidden fixed inset-y-0 left-0 z-[60] w-[85%] max-w-[340px] bg-[#0a0908] border-r border-[#1C1C1C] flex flex-col transition-transform duration-300 ease-out",
          menuOpen ? "translate-x-0" : "-translate-x-full"
        )}
        aria-hidden={!menuOpen}
      >
        {/* 上部: 閉じるボタン */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#1C1C1C]">
          <Brand />
          <button
            onClick={() => setMenuOpen(false)}
            className="relative w-7 h-7 -mr-1"
            aria-label="Close menu"
          >
            <span className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#e8e2d8]" />
            <span className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-[#e8e2d8]" />
          </button>
        </div>

        {/* ナビゲーション (左寄せリスト) */}
        <nav className="flex flex-col px-5 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-mono-label text-[0.95rem] tracking-[0.18em] py-5 border-b border-[#1C1C1C] transition-colors",
                pathname === link.href ? "text-[#e8e2d8]" : "text-[#a0998f] hover:text-[#e8e2d8]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* 下部: 言語切替 */}
        <div className="mt-auto px-5 py-6 border-t border-[#1C1C1C]">
          <LangToggle />
        </div>
      </div>

      {/* PC: ロゴ / ナビ / 言語切替 */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8 px-12 py-6">
        <Brand className="justify-self-start" />
        <nav className="justify-self-center flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-mono-label link-accent transition-colors whitespace-nowrap text-xs tracking-[0.2em]",
                pathname === link.href ? "text-[#e8e2d8]" : "text-[#6b6560] hover:text-[#e8e2d8]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="justify-self-end">
          <LangToggle />
        </div>
      </div>
    </header>
  );
}
