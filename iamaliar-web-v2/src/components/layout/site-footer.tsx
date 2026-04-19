import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#1C1C1C] mt-24 bg-[#060606]">
      <div className="container-site py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-serif text-2xl tracking-[0.15em] text-[#E8E5DF] block mb-4"
            >
              IAMALIAR
            </Link>
            <p className="text-xs text-[#888888] leading-relaxed tracking-wide">
              量産された衣服に対して新たな物語を与え、<br />
              服と作品の境界を曖昧にするブランド。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-[#E8E5DF] mb-5">Navigation</h4>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/collection", label: "Collection" },
                { href: "/lookbook", label: "Lookbook" },
                { href: "/journal", label: "Journal" },
                { href: "/about", label: "About" },
                { href: "/archive", label: "Archive" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-[#888888] hover:text-[#E8E5DF] transition-colors tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-[#E8E5DF] mb-5">Support</h4>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Order / Contact" },
                { href: "/policy/shipping", label: "Shipping / Returns" },
                { href: "/policy/privacy", label: "Privacy Policy" },
                { href: "/policy/legal", label: "特定商取引法" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-[#888888] hover:text-[#E8E5DF] transition-colors tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-[#E8E5DF] mb-5">Follow</h4>
            <nav className="flex flex-col gap-3">
              {[
                { href: "https://instagram.com", label: "Instagram" },
                { href: "https://tiktok.com", label: "TikTok" },
                { href: "https://line.me", label: "LINE" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#888888] hover:text-[#E8E5DF] transition-colors tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#1C1C1C] pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-[#555555] tracking-wide">
            © {new Date().getFullYear()} IAMALIAR. All rights reserved.
          </p>
          <p className="text-xs text-[#555555] tracking-widest uppercase font-mono-custom">
            Portfolio first, Commerce second.
          </p>
        </div>
      </div>
    </footer>
  );
}
