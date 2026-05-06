🔗 https://iamaliar.com

ファッションブランド **I AM A LIAR** のオフィシャルサイト（本番環境）。

Next.js 15 + Sanity CMS で構築し、Cloudflare Pages にデプロイしています。
メンテナンス時には別でメンテナンスページへリライトする運用を行います。

## 技術スタック

| カテゴリ | 採用技術 |
| --- | --- |
| フレームワーク | Next.js 15 (App Router) / React 19 |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS v4 / `clsx` / `tailwind-merge` |
| アニメーション | framer-motion |
| アイコン | lucide-react |
| フォント | `@fontsource-variable/cormorant`, Noto Serif JP |
| CMS | Sanity (`@sanity/client`) |
| ホスティング | Cloudflare Pages (`@cloudflare/next-on-pages` / Wrangler) |
| Lint | ESLint 9 (`eslint-config-next`) |

## ディレクトリ構成

```
.
├── src/
│   ├── app/                  # App Router
│   │   ├── page.tsx          # メンテナンスページ（現在のトップ）
│   │   ├── (site)/           # 本来のサイトルート（collection / contact / journal）
│   │   ├── api/              # APIルート
│   │   ├── HomeClient.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/           # UIコンポーネント
│   ├── context/              # React Context
│   ├── data/                 # 静的データ
│   ├── lib/                  # Sanityクライアント等のユーティリティ
│   ├── types/                # 型定義
│   └── middleware.ts         # 全リクエストを `/` にリライト（メンテ運用）
├── iamaliar/                 # Sanity Studio（別パッケージ）
├── public/                   # 静的アセット
├── scripts/                  # ドキュメント生成用 Pythonスクリプト
├── photo/                    # 素材写真
├── next.config.ts            # 画像 / CSP / セキュリティヘッダー
└── wrangler.toml             # Cloudflare Pages設定
```

## セットアップ

```bash
npm install
cp .env.local.example .env.local  # 環境変数を設定
npm run dev
```

http://localhost:3000 で確認できます。

`.env.local` に Sanity の接続情報を設定します。

```
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxxxx
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

> `npm install` で peer dependency 解決のため `.npmrc` の `legacy-peer-deps=true` を使用しています。

Sanity の設定
ローカル開発および本番環境でデータを取得するために、Sanity 管理画面（Manage）での設定が必要です。
	1.	CORS Origins の追加:
Sanity プロジェクトの設定から API > CORS origins に以下のドメインを追加し、Allow credentials にチェックを入れてください。
•	http://localhost:3000 （開発環境）
•	https://iamaliar.com （本番環境）
•	https://*.pages.dev （プレビュー環境用）
	2.	API Token の発行（プレビューや書き込みを行う場合）:
サーバーサイドでのプレビュー機能を実装する場合は、Editor 以上の権限を持つトークンを発行し、.env.local に SANITY_API_READ_TOKEN として設定してください。

## スクリプト

| コマンド | 説明 |
| --- | --- |
| `npm run dev` | 開発サーバ (http://localhost:3000) |
| `npm run build` | 本番ビルド（事前に `public/` 配下の `.DS_Store` を削除） |
| `npm run start` | 本番サーバの起動 |
| `npm run lint` | ESLintによる静的解析 |
| `npm run pages:build` | `@cloudflare/next-on-pages` でCloudflare用ビルド |
| `npm run preview` | Wrangler によるローカルプレビュー |
| `npm run deploy` | Cloudflare Pages へデプロイ |

## メンテナンスモードについて

現在、以下の二段構えで全ページをメンテナンス画面に固定しています。

- `src/app/page.tsx` を `Under Maintenance` 用ページに置換
- `src/middleware.ts` で `/` 以外のリクエストを `/` にリライト
  （`_next/`, `favicon`, `api/` は除外）

通常運用に戻す際は、上記2ファイルを元の実装に差し戻してください。
brunchを準備し、メンテナンス時にmerge。メンテナンスが終了したらgit revertでコミットを戻す。

## セキュリティヘッダー

`next.config.ts` で以下のヘッダーを全レスポンスに付与しています。

- Content-Security-Policy（Sanity CDN / Cloudflare Web Analytics 許可）
- Strict-Transport-Security
- X-Content-Type-Options: `nosniff`
- Referrer-Policy: `strict-origin-when-cross-origin`
- Permissions-Policy（camera / microphone / geolocation / interest-cohort を無効化）

## Sanity Studio

`iamaliar/` 以下に Studio が同梱されています。詳細は [`iamaliar/README.md`](iamaliar/README.md) を参照してください。

## デプロイ

Cloudflare Pages 向けにビルドしてデプロイします。

```bash
npm run deploy
```

`wrangler.toml` でプロジェクトを設定済みです。
