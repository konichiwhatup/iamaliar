import type {LayoutProps} from 'sanity'

/**
 * Studio のレイアウトをカスタマイズして、Published/Draft の切替UI(Perspective)を非表示化する。
 * これらは「ビュー切替」の機能で実データには影響しないが、操作できると混乱の元なので隠す。
 */
export function CustomLayout(props: LayoutProps) {
  return (
    <>
      <style>{`
        /* Perspective UI(ドキュメント上部の "Published / Draft" ピル群と
           ツールバー右上の "Published ▼" ドロップダウン)を非表示化。
           サイドバーの状態ドットは別要素なので残る。 */
        [data-testid="perspective-menu-button"],
        [data-testid="document-perspective-list"],
        [data-testid="perspective-pill"] {
          display: none !important;
        }
      `}</style>
      {props.renderDefault(props)}
    </>
  )
}
