import { FullscreenPreviewDialog } from "./FullscreenPreviewDialog";
import { SplitPreviewPane } from "./SplitPreviewPane";
import { AdaptivePreviewControllerProps } from "./types";

/**
 * AdaptivePreviewController — renders split or fullscreen based on viewport mode
 * Props: mode, item, isOpen, onClose, onPrev, onNext, hasPrev, hasNext, children (gallery)
 */
export function AdaptivePreviewController({ mode, item, isOpen, onClose, onPrev, onNext, hasPrev, hasNext, onPreviewMore, onPreviewFavorite, onPreviewDownload, onPreviewInfo, onPreviewShare, onPreviewDelete, children }: AdaptivePreviewControllerProps) {
  if (mode === "split") {
    return (
      <div style={{ display: "flex", height: "100%", overflow: "hidden" }}>
        <div style={{
          flex: 1, overflowY: "auto", minWidth: 0,
        }} className="scroll-thin">
          {children}
        </div>
        <SplitPreviewPane
          item={item} isOpen={isOpen} onClose={onClose}
          onPrev={onPrev} onNext={onNext} hasPrev={hasPrev} hasNext={hasNext}
          onFavorite={onPreviewFavorite}
          onDownload={onPreviewDownload}
          onShare={onPreviewShare}
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
        onMore={onPreviewMore}
        onLike={onPreviewFavorite}
        onInfo={onPreviewInfo}
        onShare={onPreviewShare}
        onDelete={onPreviewDelete}
      />
    </>
  );
}
