import { useRef } from 'react';
import { Icon } from './Icon';
import { IconButton } from './IconButton';
import { FullscreenPreviewDialogProps } from './types';


/**
 * FullscreenPreviewDialog — mobile/tablet fullscreen overlay
 * @param {object|null} item
 * @param {boolean} isOpen
 * @param {function} onClose
 * @param {function} onPrev
 * @param {function} onNext
 * @param {boolean} hasPrev
 * @param {boolean} hasNext
 * @param {string} dateLabel
 */
export function FullscreenPreviewDialog({ item, isOpen, onClose, onPrev, onNext, hasPrev, hasNext }: FullscreenPreviewDialogProps) {
  // Touch swipe support
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) { diff < 0 ? onNext() : onPrev(); }
    touchStartX.current = null;
  };

  if (!isOpen || !item) return null;

  return (
    <div
      role="dialog" aria-modal="true" aria-label={`Preview: ${item.title}`}
      className="fade-in"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        background: "#000",
        display: "flex", flexDirection: "column",
      }}
    >
      {/* Top bar gradient */}
      <header style={{
        position: "absolute", top: 0, left: 0, right: 0, zIndex: 10,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "20px 20px 40px",
        background: "linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, transparent 100%)",
      }}>
        <IconButton icon="arrow_back" label="Back" onClick={onClose} variant="ghost" />
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "var(--font-headline)", fontWeight: 700, fontSize: 13, color: "#fff", letterSpacing: "-0.01em" }}>
            {item.date}
          </div>
          {item.location && (
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 1 }}>
              {item.location}
            </div>
          )}
        </div>
        <IconButton icon="more_vert" label="More" variant="ghost" onClick={() => {}} />
      </header>

      {/* Image */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        <img key={item.id} src={item.src} alt={item.alt} className="fade-in"
          style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
        {hasPrev && (
          <button onClick={onPrev} style={{
            position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)",
            width: 40, height: 40, borderRadius: "50%", border: "none", cursor: "pointer",
            background: "rgba(0,0,0,0.3)", backdropFilter: "blur(8px)",
            color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Icon name="chevron_left" />
          </button>
        )}
        {hasNext && (
          <button onClick={onNext} style={{
            position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)",
            width: 40, height: 40, borderRadius: "50%", border: "none", cursor: "pointer",
            background: "rgba(0,0,0,0.3)", backdropFilter: "blur(8px)",
            color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Icon name="chevron_right" />
          </button>
        )}
      </div>

      {/* Bottom bar */}
      <footer style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        display: "flex", flexDirection: "column", alignItems: "center", gap: 18,
        padding: "32px 24px 40px",
        background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
      }}>
        {/* Dot indicators */}
        <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
          {hasPrev && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,0.3)" }} />}
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#fff" }} />
          {hasNext && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,0.3)" }} />}
        </div>

        {/* Action row */}
        <div style={{
          display: "flex", alignItems: "center", gap: 36,
          padding: "14px 32px",
          background: "rgba(0,0,0,0.35)", backdropFilter: "blur(20px)",
          borderRadius: 32, border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        }}>
          {[
            { icon: "favorite", label: "Like" },
            { icon: "info", label: "Info" },
            { icon: "share", label: "Send" },
            { icon: "delete", label: "Bin", danger: true },
          ].map(({ icon, label, danger }) => (
            <button key={icon} style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
              background: "none", border: "none", cursor: "pointer",
              color: danger ? "var(--error-container)" : "rgba(255,255,255,0.8)",
            }}>
              <Icon name={icon} size="md" />
              <span style={{ fontSize: 9, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7, fontFamily: "var(--font-body)" }}>
                {label}
              </span>
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
}
