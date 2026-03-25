import { useState } from "react";
import { Icon } from "./Icon";
import { GalleryItemCardProps } from "./types";

/**
 * GalleryItemCard — single thumbnail in the gallery grid
 * @param {object} item - gallery item data
 * @param {boolean} isSelected
 * @param {function} onSelect - (id) => void
 */
export function GalleryItemCard({ item, isSelected, onSelect }: GalleryItemCardProps) {
  const [hovered, setHovered] = useState(false);
  const isVideo = item.mediaType === "video" && !!item.videoSrc;
  const previewSrc = item.thumbnail ?? item.src;

  return (
    <button
      onClick={() => onSelect(item.id)}
      aria-label={`Open ${item.title}`}
      aria-pressed={isSelected}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative", display: "block", width: "100%",
        aspectRatio: "1 / 1",
        borderRadius: 16, overflow: "hidden",
        border: "none", cursor: "pointer", padding: 0,
        background: "var(--surface-container)",
        outline: isSelected ? "2px solid var(--primary)" : "none",
        outlineOffset: 2,
        transform: isSelected ? "scale(0.975)" : hovered ? "scale(1.02)" : "scale(1)",
        boxShadow: hovered && !isSelected ? "0 8px 24px rgba(44,52,55,0.12)" : "none",
        transition: "transform 280ms ease, box-shadow 280ms ease, outline 150ms ease",
      }}
    >
      <img
        src={previewSrc}
        alt={item.alt}
        loading="lazy"
        style={{
          width: "100%", height: "100%", objectFit: "cover",
          transform: hovered ? "scale(1.06)" : "scale(1)",
          transition: "transform 500ms ease",
          display: "block",
        }}
      />
      {isVideo && (
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            padding: "4px 8px",
            borderRadius: 999,
            background: "rgba(0,0,0,0.55)",
            color: "#fff",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.2)",
            pointerEvents: "none",
          }}
        >
          <Icon name="play_arrow" size="sm" filled />
          <span style={{ fontSize: 10, fontWeight: 600, fontFamily: "var(--font-body)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Video
          </span>
        </div>
      )}
      {/* Selected tint */}
      {isSelected && (
        <div style={{
          position: "absolute", inset: 0,
          background: "rgba(68,95,138,0.15)",
          pointerEvents: "none",
        }} />
      )}
      {/* Hover title bar */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "24px 10px 10px",
        background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)",
        opacity: hovered ? 1 : 0,
        transition: "opacity 250ms ease",
        pointerEvents: "none",
      }}>
        <p style={{ color: "#fff", fontSize: 11, fontWeight: 500, fontFamily: "var(--font-body)", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
          {item.title}
        </p>
      </div>
    </button>
  );
}