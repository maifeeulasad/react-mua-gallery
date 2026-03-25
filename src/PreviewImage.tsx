import { useState } from 'react';
import { Icon } from './Icon';
import { PreviewImageProps } from './types';

/**
 * PreviewImage — the large image display with nav arrow overlays
 * @param {object} item
 * @param {function} onPrev
 * @param {function} onNext
 * @param {boolean} hasPrev
 * @param {boolean} hasNext
 * @param {boolean} dark - dark surface (fullscreen)
 */
export function PreviewImage({ item, onPrev, onNext, hasPrev, hasNext, dark = false }: PreviewImageProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 20, overflow: "hidden",
        background: dark ? "#000" : "var(--surface-container)",
        display: "flex", alignItems: "center", justifyContent: "center",
        minHeight: 240,
      }}
    >
      <img
        key={item.id}
        src={item.src}
        alt={item.alt}
        className="scale-in"
        style={{ width: "100%", maxHeight: "60vh", objectFit: "contain", display: "block" }}
      />
      {/* Nav arrows */}
      {hasPrev && (
        <button
          onClick={onPrev}
          style={{
            position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)",
            width: 44, height: 44, borderRadius: 12, border: "none", cursor: "pointer",
            background: dark ? "rgba(0,0,0,0.4)" : "rgba(248,249,250,0.85)",
            backdropFilter: "blur(12px)", color: dark ? "#fff" : "var(--on-surface)",
            display: "flex", alignItems: "center", justifyContent: "center",
            opacity: hovered ? 1 : 0, transition: "opacity 200ms ease",
            boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
          }}
        >
          <Icon name="chevron_left" />
        </button>
      )}
      {hasNext && (
        <button
          onClick={onNext}
          style={{
            position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
            width: 44, height: 44, borderRadius: 12, border: "none", cursor: "pointer",
            background: dark ? "rgba(0,0,0,0.4)" : "rgba(248,249,250,0.85)",
            backdropFilter: "blur(12px)", color: dark ? "#fff" : "var(--on-surface)",
            display: "flex", alignItems: "center", justifyContent: "center",
            opacity: hovered ? 1 : 0, transition: "opacity 200ms ease",
            boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
          }}
        >
          <Icon name="chevron_right" />
        </button>
      )}
    </div>
  );
}