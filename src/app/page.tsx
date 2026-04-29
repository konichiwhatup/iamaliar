export const runtime = "edge";

export default function MaintenancePage() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: '"Noto Serif JP", "Cormorant Garamond", serif',
        padding: "32px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "560px" }}>
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
      </div>
    </main>
  );
}
