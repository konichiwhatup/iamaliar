import type { Metadata } from "next";
import "./globals.css";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Under Maintenance — IAMALIAR",
  description: "iamaliar.com is temporarily unavailable for maintenance.",
  robots: { index: false, follow: false },
};

export default function RootLayout() {
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
      <body
        style={{
          margin: 0,
          minHeight: "100dvh",
          background: "#0e0e0e",
          color: "#e8e6e1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: '"Noto Serif JP", "Cormorant Garamond", serif',
          padding: "32px",
          textAlign: "center",
        }}
      >
        <main style={{ maxWidth: "560px" }}>
          <p
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontStyle: "italic",
              fontSize: "13px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#8a8680",
              margin: 0,
            }}
          >
            I AM A LIAR
          </p>

          <h1
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: "clamp(36px, 7vw, 64px)",
              lineHeight: 1.1,
              margin: "32px 0 28px",
              letterSpacing: "0.02em",
            }}
          >
            Under Maintenance
          </h1>

          <p
            style={{
              fontWeight: 200,
              fontSize: "14px",
              lineHeight: 2,
              margin: "0 0 8px",
              color: "#cfccc6",
            }}
          >
            ただいまサイトをメンテナンスしております。
          </p>
          <p
            style={{
              fontWeight: 200,
              fontSize: "14px",
              lineHeight: 2,
              margin: 0,
              color: "#cfccc6",
            }}
          >
            しばらく経ってから再度アクセスください。
          </p>

          <div
            style={{
              width: "40px",
              height: "1px",
              background: "#3a3833",
              margin: "48px auto",
            }}
          />

          <p
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontStyle: "italic",
              fontSize: "13px",
              lineHeight: 1.9,
              color: "#8a8680",
              margin: 0,
            }}
          >
            We are currently undergoing maintenance.
            <br />
            Please check back shortly.
          </p>
        </main>
      </body>
    </html>
  );
}
