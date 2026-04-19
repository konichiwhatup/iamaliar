import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP, DM_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-noto-sans",
  display: "swap",
});

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-noto-serif",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "IAMALIAR — 服と作品のあいだ",
    template: "%s | IAMALIAR",
  },
  description:
    "IAMALIARは、量産された衣服に対して新たな物語を与え、服と作品の境界を曖昧にするブランドである。",
  keywords: ["IAMALIAR", "一点物", "再構築", "デニム", "刺し子", "アパレル"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "IAMALIAR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSans.variable} ${notoSerif.variable} ${dmMono.variable}`}
    >
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
