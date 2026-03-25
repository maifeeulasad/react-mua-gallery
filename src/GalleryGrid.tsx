
import { GalleryItemCard } from './GalleryItemCard';
import { GalleryGridProps, GalleryItem } from './types';

/**
 * GalleryGrid — renders items in a responsive grid
 * @param {object[]} items
 * @param {string|null} selectedId
 * @param {function} onSelect
 * @param {boolean} compact - shrinks columns when split pane is open
 */
export function GalleryGrid({ items, selectedId, onSelect, compact = false }: GalleryGridProps) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: compact ? "repeat(3, 1fr)" : "repeat(auto-fill, minmax(140px, 1fr))",
      gap: 8,
    }}>
      {items.map((item: GalleryItem) => (
        <GalleryItemCard key={item.id} item={item} isSelected={selectedId === item.id} onSelect={onSelect} />
      ))}
    </div>
  );
}