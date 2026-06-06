# IAMALIAR — Sanity Studio

**I AM A LIAR** オフィシャルサイト用の Sanity Studio です。
コンテンツの編集・公開はすべてここから行います。

## 起動

```bash
npm install
npm run dev
```

http://localhost:3333 で Studio が開きます。

## スキーマ構成

| スキーマ | タイトル | 説明 |
| --- | --- | --- |
| `product` | 商品 | コレクション作品（一点物） |
| `journal` | ジャーナル | 制作プロセス・思想・展示の記録 |
| `news` | ニュース | イベント・お知らせ・着用紹介 |
| `faq` | FAQ | よくある質問 |
| `homeHero` | ホーム画面ヒーロー | トップページのヒーロー画像設定（シングルトン） |

## news スキーマ 補足

カテゴリによって入力フィールドが変わります。

| カテゴリ | 追加フィールド |
| --- | --- |
| イベント・展示 | 開催場所 / 開催期間 / Google Maps URL |
| お知らせ | なし |
| 着用紹介 | 投稿・掲載リンク URL |

## デプロイ（本番 Studio の更新）

スキーマを変更した場合は Studio をデプロイして本番に反映してください。

```bash
npm run deploy
```
