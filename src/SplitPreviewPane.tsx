import { PreviewToolbar } from './PreviewToolbar';
import { PreviewImage } from './PreviewImage';
import { PreviewMetadata } from './PreviewMetadata';
import { SplitPreviewPaneProps } from './types';

/**
 * SplitPreviewPane — desktop side-by-side preview pane
 * @param {object|null} item
 * @param {boolean} isOpen
 * @param {function} onClose
 * @param {function} onPrev
 * @param {function} onNext
 * @param {boolean} hasPrev
 * @param {boolean} hasNext
 */
export function SplitPreviewPane({ item, isOpen, onClose, onPrev, onNext, hasPrev, hasNext }: SplitPreviewPaneProps) {
  return (
    <aside style={{
      height: "100%", display: "flex", flexDirection: "column",
      background: "var(--surface)",
      borderLeft: "1px solid rgba(171,179,183,0.2)",
      overflow: "hidden",
      width: isOpen ? "55%" : 0,
      opacity: isOpen ? 1 : 0,
      transition: "width 300ms cubic-bezier(0.4,0,0.2,1), opacity 300ms ease",
      flexShrink: 0,
    }}>
      {item && isOpen && (
        <>
          <PreviewToolbar item={item} onClose={onClose} />
          <div className="scroll-thin" style={{ flex: 1, overflowY: "auto", padding: "24px 24px 48px" }}>
            <PreviewImage item={item} onPrev={onPrev} onNext={onNext} hasPrev={hasPrev} hasNext={hasNext} />
            <PreviewMetadata item={item} />
          </div>
        </>
      )}
    </aside>
  );
}