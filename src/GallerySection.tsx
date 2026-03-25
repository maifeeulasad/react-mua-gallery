import { GalleryGrid } from './GalleryGrid';
import { GallerySectionProps } from './types';

/**
 * GallerySection — a labeled group of images (e.g. "November")
 * @param {string} label
 * @param {number} count
 * @param {object[]} items
 * @param {string|null} selectedId
 * @param {function} onSelect
 * @param {boolean} compact
 */
export function GallerySection({ label, items, selectedId, onSelect, compact }: GallerySectionProps) {
  if (!items.length) return null;
  return (
    <section style={{ marginBottom: 40 }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 14 }}>
        <h2 style={{ fontFamily: "var(--font-headline)", fontWeight: 800, fontSize: 20, letterSpacing: "-0.02em", color: "var(--on-surface)" }}>
          {label}
        </h2>
        <span style={{ fontSize: 12, fontWeight: 500, color: "var(--on-surface-variant)" }}>
          {items.length} items
        </span>
      </div>
      <GalleryGrid items={items} selectedId={selectedId} onSelect={onSelect} compact={compact} />
    </section>
  );
}