import type { Metadata } from "next";
import "./globals.css";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Under Maintenance — IAMALIAR",
  description: "iamaliar.com is temporarily unavailable for maintenance.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Noto+Serif+JP:wght@200;300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, background: "#0e0e0e", color: "#e8e6e1" }}>
        {children}
      </body>
    </html>
  );
}
