import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Loader } from "@/components/ui/loader";
import { CursorFollower } from "@/components/ui/cursor";
import { Providers } from "@/components/providers";

export const runtime = "edge";

export const metadata: Metadata = {
  title: { default: "IAMALIAR — Between garment and artwork", template: "%s | IAMALIAR" },
  description: "IAMALIAR gives new narratives to mass-produced garments, blurring the boundary between clothing and art.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Noto+Serif+JP:wght@200;300;400&family=Noto+Sans+JP:wght@300;400&family=DM+Mono:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <Loader />
          <CursorFollower />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
