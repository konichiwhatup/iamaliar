// メンテナンスモード
// ------------------------------------------------------------
// MAINTENANCE を true にすると、middleware が全ページに対して
// 下の HTML を HTTP 503 + Retry-After で返す(検索エンジンには「一時停止」と伝わる)。
// 通常運用の main では false のまま。maintenance ブランチだけ true にしておき、
// メンテ時に main へマージ → 終わったら revert する。

export const MAINTENANCE = true

// 再訪を促す秒数(Retry-After ヘッダー)。3600 = 1時間
export const MAINTENANCE_RETRY_AFTER_SECONDS = 3600

export const MAINTENANCE_CSP = [
  "default-src 'none'",
  "style-src 'unsafe-inline' https://fonts.googleapis.com",
  "font-src https://fonts.gstatic.com",
  "img-src 'self' data:",
  "base-uri 'none'",
  "form-action 'none'",
  "frame-ancestors 'none'",
].join('; ')

export const MAINTENANCE_HTML = `<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#0a0908">
<title>Old, yet new — myself</title>
<meta name="description" content="iamaliar.com is temporarily unavailable for maintenance.">
<link rel="icon" href="/favicon.ico">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Noto+Serif+JP:wght@200;300&display=swap">
<style>
  *, *::before, *::after { box-sizing: border-box; }
  html, body { margin: 0; background: #0a0908; color: #e8e2d8; -webkit-font-smoothing: antialiased; }
  main {
    min-height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Cormorant Garamond", "Noto Serif JP", serif;
    padding: 32px;
    text-align: center;
  }
  .inner { max-width: 560px; }
  .brand {
    font-family: "Cormorant Garamond", serif;
    font-style: italic;
    font-size: 13px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #6b6560;
    margin: 0;
  }
  h1 {
    font-family: "Cormorant Garamond", serif;
    font-weight: 300;
    font-size: clamp(36px, 7vw, 64px);
    line-height: 1.1;
    margin: 32px 0 28px;
    letter-spacing: 0.02em;
  }
  .ja { font-weight: 200; font-size: 14px; line-height: 2; color: #8a8680; margin: 0 0 8px; }
  .ja + .ja { margin: 0; }
  .divider { width: 40px; height: 1px; background: #1e1a17; margin: 48px auto; }
  .en {
    font-family: "Cormorant Garamond", serif;
    font-style: italic;
    font-size: 13px;
    line-height: 1.9;
    color: #6b6560;
    margin: 0;
  }
</style>
</head>
<body>
<main>
  <div class="inner">
    <p class="brand">I AM A LIAR</p>
    <h1>Under Maintenance</h1>
    <p class="ja">ただいまサイトをメンテナンスしております。</p>
    <p class="ja">しばらく経ってから再度アクセスください。</p>
    <div class="divider"></div>
    <p class="en">We are currently undergoing maintenance.<br>Please check back shortly.</p>
  </div>
</main>
</body>
</html>`
