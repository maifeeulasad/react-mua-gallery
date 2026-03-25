import { PreviewToolbar } from './PreviewToolbar';
import { PreviewImage } from './PreviewImage';
import { PreviewMetadata } from './PreviewMetadata';

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
interface SplitPreviewPaneProps {
  item: any;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export function SplitPreviewPane({ item, isOpen, onClose, onPrev, onNext, hasPrev, hasNext }: SplitPreviewPaneProps) {
  return (
    <aside
      className={`
        h-full flex flex-col bg-surface border-l border-outline-variant/20
        transition-all duration-300 overflow-hidden
        ${isOpen ? 'w-[55%] opacity-100' : 'w-0 opacity-0'}
      `}
    >
      {item && (
        <>
          <PreviewToolbar item={item} onClose={onClose} />
          <div className="flex-1 overflow-y-auto p-6 pb-10 custom-scrollbar">
            <PreviewImage
              item={item}
              onPrev={onPrev}
              onNext={onNext}
              hasPrev={hasPrev}
              hasNext={hasNext}
            />
            <PreviewMetadata item={item} />
          </div>
        </>
      )}
    </aside>
  );
}