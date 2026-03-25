import { IconButton } from './IconButton';

/**
 * PreviewImage — the large image display with nav arrow overlays
 * @param {object} item
 * @param {function} onPrev
 * @param {function} onNext
 * @param {boolean} hasPrev
 * @param {boolean} hasNext
 * @param {boolean} dark - dark surface (fullscreen)
 */
interface PreviewImageProps {
  item: { id: string; src: string; alt: string };
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  dark?: boolean;
}

export function PreviewImage({ item, onPrev, onNext, hasPrev, hasNext, dark = false }: PreviewImageProps) {
  const bg = dark ? 'bg-black' : 'bg-surface-container';

  return (
    <div className={`relative group rounded-2xl overflow-hidden ${bg} flex items-center justify-center`}
         style={{ minHeight: '320px' }}>
      <img
        key={item.id}
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-contain max-h-[70vh] transition-opacity duration-300"
        style={{ display: 'block' }}
      />

      {/* Nav overlays */}
      <div className="absolute inset-0 flex items-center justify-between px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="pointer-events-auto">
          <IconButton
            icon="chevron_left"
            label="Previous image"
            onClick={onPrev}
            disabled={!hasPrev}
            size="lg"
            variant={dark ? 'ghost' : 'default'}
            className={`shadow-lg ${dark ? 'bg-black/30 backdrop-blur' : 'bg-surface/80 backdrop-blur'}`}
          />
        </div>
        <div className="pointer-events-auto">
          <IconButton
            icon="chevron_right"
            label="Next image"
            onClick={onNext}
            disabled={!hasNext}
            size="lg"
            variant={dark ? 'ghost' : 'default'}
            className={`shadow-lg ${dark ? 'bg-black/30 backdrop-blur' : 'bg-surface/80 backdrop-blur'}`}
          />
        </div>
      </div>
    </div>
  );
}