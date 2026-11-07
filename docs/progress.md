# IAMALIAR 開発進捗

## 現在の状態

- **URL**: https://iamaliar.com
- **インフラ**: Cloudflare Pages + Sanity CMS
- **Next.js**: 15.5.29
- **公開状態**: メンテナンスモード中（本番は非公開）

---

## フェーズ別まとめ

### フェーズ 1 — 土台構築
- Next.js 15 / React 19 / TypeScript でプロジェクト初期化
- Cloudflare Pages デプロイ設定（wrangler.toml）
- Sanity CMS 接続・スキーマ設計（product / journal / news / homeHero）
- JA / EN 言語切り替え機能
- ページ構成: Home / Collection / Journal / Contact

### フェーズ 2 — UI・コンテンツ整備
- ホームヒーロー画像を Sanity で管理できるように対応
- Collection 一覧 / 詳細ページ（Sanity データ連携）
- Journal 一覧 / 詳細ページ（Sanity データ連携）
- ブランドストーリーセクション・画像更新
- サイトタイトル変更: "Old, yet new — myself"
- LINE リンクを `lin.ee` ショートリンクに変更

### フェーズ 3 — ヘッダー・iOS 対応（長期戦）
iOS Safari でヘッダー帯にコンテンツが透けて見える問題を複数のアプローチで対処。
- `viewport-fit=cover` + `safe-area-inset-top` 追加
- `theme-color` でステータスバー帯を黒に統一
- `body overflow-x: clip` に変更（sticky 破壊の回避）
- セーフエリアを fixed マスクで常時塞ぐ対応
- ヘッダー背景を上方向に延長
- **現状**: PC は正常。iOS Safari は一部環境で課題が残存（後日継続）

### フェーズ 4 — News タブ新設（2026-11 上旬）
- News ページ（一覧 / 詳細）を新設
- Sanity に `news` スキーマ追加（イベント / お知らせ / 着用紹介）
- Contact ページに写真追加
- フッター整備
- README 更新

### フェーズ 5 — セキュリティ強化（2026-11-07）

#### コードの脆弱性対応
| 深刻度 | 内容 | 対応 |
| --- | --- | --- |
| HIGH | `venueMapUrl` / `externalLink` を無検証で `href` に使用 → XSS リスク | `safeHref()` を追加し https/http のみ許可 |
| MEDIUM | CSP の nonce 生成が機能していなかった（layout に渡していなかった） | middleware を修正して nonce を正しく Next.js に渡す |
| LOW | セキュリティヘッダーが `next.config.ts` と middleware の両方に重複 | `next.config.ts` 側を削除して middleware に一元化 |
| LOW | Sanity project ID が `queries.ts` にハードコード | env var（`NEXT_PUBLIC_SANITY_PROJECT_ID`）を参照するように変更 |

#### パッケージ脆弱性対応
- `npm audit fix` を実施: **170件 → 16件**に削減
- Next.js: 15.5.18 → 15.5.29（critical の RCE / SSRF / DoS / キャッシュポイズニングを解消）
- 残り16件の内訳:
  - dev ツール（wrangler / miniflare）内部の問題 → 訪問者への影響なし
  - Next.js 16 が必要なもの（postcss）→ 要破壊的アップグレード、急がなくてOK
  - 修正版未リリースのもの → 待ちのみ

---

## 未解決 / 今後やること

| 優先度 | 内容 |
| --- | --- |
| 中 | iOS Safari のヘッダー透け問題（一部環境で残存） |
| 低 | Next.js 16 へのアップグレード（大型アップデート、タイミングを見て） |
| 低 | `@cloudflare/next-on-pages` / `miniflare` の脆弱性（修正版リリース待ち） |
| - | メンテナンスモード解除（本番公開の準備が整ったら） |

---

## 主なファイル構成メモ

```
src/
  middleware.ts          # CSP / セキュリティヘッダー（全リクエストに付与）
  lib/
    sanity.ts            # Sanity クライアント
    queries.ts           # データ取得関数（GROQ クエリ）
    utils.ts             # safeHref() など汎用ユーティリティ
  app/
    layout.tsx           # 共通レイアウト・フォント読み込み
    (site)/
      collection/        # 商品一覧・詳細
      journal/           # ジャーナル一覧・詳細
      news/              # ニュース一覧・詳細
      contact/           # コンタクトページ
```

## ルール

- **push は「pushして」と言われたときだけ実行する**（自動 push 禁止）
- `.env.local` は git 管理外（`.gitignore` で除外済み）
- 外部 URL を `href` に使うときは必ず `safeHref()` を通す
