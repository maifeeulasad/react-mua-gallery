import { FullscreenPreviewDialog } from "./FullscreenPreviewDialog";
import { SplitPreviewPane } from "./SplitPreviewPane";
import { AdaptivePreviewControllerProps } from "./types";

/**
 * AdaptivePreviewController — renders split or fullscreen based on viewport mode
 * Props: mode, item, isOpen, onClose, onPrev, onNext, hasPrev, hasNext, children (gallery)
 */
export function AdaptivePreviewController({ mode, item, isOpen, onClose, onPrev, onNext, hasPrev, hasNext, children }: AdaptivePreviewControllerProps) {
  if (mode === "split") {
    return (
      <div style={{ display: "flex", height: "100%", overflow: "hidden" }}>
        <div style={{
          flex: 1, overflowY: "auto", minWidth: 0,
          transition: "flex 300ms cubic-bezier(0.4,0,0.2,1)",
        }} className="scroll-thin">
          {children}
        </div>
        <SplitPreviewPane
          item={item} isOpen={isOpen} onClose={onClose}
          onPrev={onPrev} onNext={onNext} hasPrev={hasPrev} hasNext={hasNext}
        />
      </div>
    );
  }

  return (
    <>
      {children}
      <FullscreenPreviewDialog
        item={item} isOpen={isOpen} onClose={onClose}
        onPrev={onPrev} onNext={onNext} hasPrev={hasPrev} hasNext={hasNext}
      />
    </>
  );
}
