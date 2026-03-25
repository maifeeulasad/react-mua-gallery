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

interface GallerySectionProps {
  label: string;
  count: number;
  items: GalleryItem[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  compact?: boolean;
}
import { GalleryGrid } from './GalleryGrid';

/**
 * GallerySection — a labeled group of images (e.g. "November")
 * @param {string} label
 * @param {number} count
 * @param {object[]} items
 * @param {string|null} selectedId
 * @param {function} onSelect
 * @param {boolean} compact
 */
export function GallerySection({ label, count, items, selectedId, onSelect, compact }: GallerySectionProps) {
  if (!items.length) return null;

  return (
    <section className="mb-10">
      <header className="flex items-baseline justify-between mb-4">
        <h2 className="font-headline font-extrabold text-xl tracking-tight text-on-surface">
          {label}
        </h2>
        <span className="text-xs font-medium text-on-surface-variant font-label">
          {count} items
        </span>
      </header>
      <GalleryGrid items={items} selectedId={selectedId} onSelect={onSelect} compact={compact} />
    </section>
  );
}