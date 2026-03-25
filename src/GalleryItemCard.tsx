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
  thumbnail?: string;
}

interface GalleryItemCardProps {
  item: GalleryItem;
  isSelected: boolean;
  onSelect: (id: string) => void;
}
/**
 * GalleryItemCard — single thumbnail in the gallery grid
 * @param {object} item - gallery item data
 * @param {boolean} isSelected
 * @param {function} onSelect - (id) => void
 */
export function GalleryItemCard({ item, isSelected, onSelect }: GalleryItemCardProps) {
  return (
    <button
      onClick={() => onSelect(item.id)}
      aria-label={`Preview ${item.title}`}
      aria-pressed={isSelected}
      className={`
        relative group w-full overflow-hidden rounded-2xl bg-surface-container
        transition-all duration-300 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2
        ${isSelected
          ? 'ring-2 ring-primary ring-offset-2 ring-offset-surface scale-[0.98]'
          : 'hover:scale-[1.02] hover:shadow-lg hover:shadow-on-surface/10'
        }
      `}
    >
      <div className="aspect-square">
        <img
          src={item.thumbnail}
          alt={item.alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Selected overlay */}
      {isSelected && (
        <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
      )}

      {/* Hover info overlay */}
      <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <p className="text-white text-xs font-medium font-label truncate">{item.title}</p>
      </div>
    </button>
  );
}