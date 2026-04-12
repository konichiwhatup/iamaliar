import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Loader } from "@/components/ui/loader";
import { CursorFollower } from "@/components/ui/cursor";

export const runtime = "edge";

export const metadata: Metadata = {
  title: { default: "IAMALIAR — 服と作品のあいだ", template: "%s | IAMALIAR" },
  description: "IAMALIARは、量産された衣服に対して新たな物語を与え、服と作品の境界を曖昧にするブランドである。",
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
        <Loader />
        <CursorFollower />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
