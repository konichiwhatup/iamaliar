import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Serif_JP, Noto_Sans_JP, DM_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Loader } from "@/components/ui/loader";
import { CursorFollower } from "@/components/ui/cursor";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});
const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--font-noto-serif",
  display: "swap",
});
const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-noto-sans",
  display: "swap",
});
const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "IAMALIAR — 服と作品のあいだ", template: "%s | IAMALIAR" },
  description: "IAMALIARは、量産された衣服に対して新たな物語を与え、服と作品の境界を曖昧にするブランドである。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${cormorant.variable} ${notoSerif.variable} ${notoSans.variable} ${dmMono.variable}`}>
      <body>
        <Loader />
        <CursorFollower />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
