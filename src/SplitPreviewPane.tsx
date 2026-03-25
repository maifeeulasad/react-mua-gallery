import { useEffect, useRef, useState } from 'react';
import { PreviewToolbar } from './PreviewToolbar';
import { PreviewImage } from './PreviewImage';
import { PreviewMetadata } from './PreviewMetadata';
import { SplitPreviewPaneProps } from './types';

const PREVIEW_WIDTH_PERCENT = 55;
const LERP_MS = 320;

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function useLerpedValue(target: number, durationMs: number) {
  const [value, setValue] = useState(target);
  const valueRef = useRef(target);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (Math.abs(valueRef.current - target) < 0.001) {
      valueRef.current = target;
      setValue(target);
      return;
    }

    const from = valueRef.current;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / durationMs, 1);
      const eased = easeInOutCubic(t);
      const next = from + (target - from) * eased;

      valueRef.current = next;
      setValue(next);

      if (t < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [target, durationMs]);

  return value;
}

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
export function SplitPreviewPane({ item, isOpen, onClose, onPrev, onNext, hasPrev, hasNext, onFavorite, onDownload, onShare }: SplitPreviewPaneProps) {
  const progress = useLerpedValue(isOpen ? 1 : 0, LERP_MS);
  const [displayItem, setDisplayItem] = useState(item);

  useEffect(() => {
    if (item) {
      setDisplayItem(item);
    }
  }, [item]);

  useEffect(() => {
    if (!isOpen && progress <= 0.02) {
      setDisplayItem(undefined);
    }
  }, [isOpen, progress]);

  const shouldRenderContent = !!displayItem && (isOpen || progress > 0.02);

  return (
    <aside style={{
      height: "100%", display: "flex", flexDirection: "column",
      background: "var(--surface)",
      borderLeft: progress > 0.01 ? "1px solid rgba(171,179,183,0.2)" : "none",
      overflow: "hidden",
      width: `${(progress * PREVIEW_WIDTH_PERCENT).toFixed(3)}%`,
      opacity: progress,
      flexShrink: 0,
      pointerEvents: isOpen ? "auto" : "none",
      willChange: "width, opacity",
    }}>
      {shouldRenderContent && (
        <>
          <PreviewToolbar
            item={displayItem!}
            onClose={onClose}
            onFavorite={onFavorite}
            onDownload={onDownload}
            onShare={onShare}
          />
          <div className="scroll-thin" style={{ flex: 1, overflowY: "auto", padding: "24px 24px 48px" }}>
            <PreviewImage item={displayItem!} onPrev={onPrev} onNext={onNext} hasPrev={hasPrev} hasNext={hasNext} />
            <PreviewMetadata item={displayItem!} />
          </div>
        </>
      )}
    </aside>
  );
}