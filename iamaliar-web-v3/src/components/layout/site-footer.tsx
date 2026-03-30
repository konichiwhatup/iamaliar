import Link from "next/link";

const LINE_URL = "https://line.me/ti/p/@857usrfa";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#1C1C1C] mt-24 bg-[#060606]">
      <div className="container-site py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand */}
          <div>
            <Link href="/" className="font-serif text-2xl tracking-[0.15em] text-[#E8E5DF] block mb-4">
              IAMALIAR
            </Link>
            <p className="text-xs text-[#888888] leading-relaxed tracking-wide">
              量産された衣服に対して新たな物語を与え、<br />
              服と作品の境界を曖昧にするブランド。
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-[#E8E5DF] mb-5">Pages</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-xs text-[#888888] hover:text-[#E8E5DF] transition-colors tracking-wide">About</Link>
              <Link href="/collection" className="text-xs text-[#888888] hover:text-[#E8E5DF] transition-colors tracking-wide">Collection</Link>
              <Link href="/contact" className="text-xs text-[#888888] hover:text-[#E8E5DF] transition-colors tracking-wide">Contact</Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-[#E8E5DF] mb-5">Follow</h4>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-xs text-[#888888] hover:text-[#E8E5DF] transition-colors tracking-wide">Instagram</a>
              <a href="#" className="text-xs text-[#888888] hover:text-[#E8E5DF] transition-colors tracking-wide">TikTok</a>
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="text-xs text-[#888888] hover:text-[#E8E5DF] transition-colors tracking-wide">
                LINE @857usrfa
              </a>
            </nav>
          </div>

        </div>

        <div className="border-t border-[#1C1C1C] pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-[#555555] tracking-wide">© {new Date().getFullYear()} IAMALIAR. All rights reserved.</p>
          <p className="text-xs text-[#555555] tracking-widest uppercase font-mono-custom">wear it or frame it.</p>
        </div>
      </div>
    </footer>
  );
}
