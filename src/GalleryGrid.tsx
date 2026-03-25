interface GalleryItem {
  id: string;
  group: string;
  title: string;
  filename: string;
  date: string;
  location: string;
  camera: string;
  dimensions: string;
  category: string;
  tags: string[];
  description: string;
  notes: string;
  alt: string;
  src: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  compact?: boolean;
}
import { GalleryItemCard } from './GalleryItemCard';

/**
 * GalleryGrid — renders items in a responsive grid
 * @param {object[]} items
 * @param {string|null} selectedId
 * @param {function} onSelect
 * @param {boolean} compact - shrinks columns when split pane is open
 */
export function GalleryGrid({ items, selectedId, onSelect, compact = false }: GalleryGridProps) {
  const cols = compact
    ? 'grid-cols-2 sm:grid-cols-3'
    : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3';

  return (
    <div className={`grid ${cols} gap-2`}>
      {items.map((item: GalleryItem) => (
        <GalleryItemCard
          key={item.id}
          item={item}
          isSelected={selectedId === item.id}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}