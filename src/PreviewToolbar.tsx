import { IconButton } from './IconButton';
import { PreviewToolbarProps } from './types';

/**
 * PreviewToolbar — top bar for the preview pane (split mode)
 * @param {object} item
 * @param {function} onClose
 * @param {boolean} isFullscreen - adjusts styling
 */
export function PreviewToolbar({ item, onClose, dark = false, onFavorite, onDownload, onShare }: PreviewToolbarProps) {
  const handleFavorite = () => {
    if (item) onFavorite?.(item);
  };

  const handleDownload = () => {
    if (item) onDownload?.(item);
  };

  const handleShare = () => {
    if (item) onShare?.(item);
  };

  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 16px", height: 56, flexShrink: 0,
      background: dark ? "rgba(0,0,0,0.3)" : "rgba(248,249,250,0.85)",
      backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
      borderBottom: dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(171,179,183,0.2)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
        <IconButton icon="close" label="Close" onClick={onClose} variant={dark ? "ghost" : "default"} />
        <span style={{
          fontSize: 13, fontWeight: 500, color: dark ? "rgba(255,255,255,0.85)" : "var(--on-surface)",
          overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", maxWidth: 220,
        }}>
          {item?.filename}
        </span>
      </div>
      <div style={{ display: "flex", gap: 2 }}>
        <IconButton icon="star" label="Favourite" iconFilled variant={dark ? "ghost" : "default"} onClick={handleFavorite} />
        <IconButton icon="download" label="Download" variant={dark ? "ghost" : "default"} onClick={handleDownload} />
        <IconButton icon="share" label="Share" variant={dark ? "filled" : "filled"} onClick={handleShare} />
      </div>
    </div>
  );
}