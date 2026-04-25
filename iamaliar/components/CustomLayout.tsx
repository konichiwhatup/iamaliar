import type {LayoutProps} from 'sanity'

/**
 * Studio のレイアウトをカスタマイズして、Published/Draft の切替UI(Perspective)を非表示化する。
 * これらは「ビュー切替」の機能で実データには影響しないが、操作できると混乱の元なので隠す。
 */
export function CustomLayout(props: LayoutProps) {
  return (
    <>
      <style>{`
        /* Document toolbar の Perspective 切替 (Published / Draft pill) */
        [data-testid="document-perspective-list"],
        [data-testid="perspective-menu-button"],
        [data-testid="perspective-toolbar"],
        [data-testid="release-perspective"],
        button[aria-label*="erspective"],
        button[aria-label*="リース"],
        button[aria-label*="elease"] {
          display: none !important;
        }
      `}</style>
      {props.renderDefault(props)}
    </>
  )
}
