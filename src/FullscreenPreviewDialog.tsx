import { Icon } from './Icon';
import { IconButton } from './IconButton';


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
interface FullscreenPreviewDialogProps {
  item: GalleryItem | null;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}
export function FullscreenPreviewDialog({
  item,
  isOpen,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: FullscreenPreviewDialogProps) {
  if (!isOpen || !item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Preview: ${item.title}`}
      className="fixed inset-0 z-[100] bg-black flex flex-col"
      style={{ animation: 'fadeIn 200ms ease' }}
    >
      {/* Top bar */}
      <header className="flex items-center justify-between px-5 py-4 bg-gradient-to-b from-black/70 to-transparent absolute top-0 left-0 right-0 z-10">
        <IconButton icon="arrow_back" label="Back" onClick={onClose} variant="ghost" />
        <div className="flex flex-col items-center">
          <span className="font-headline font-bold text-sm text-white tracking-tight">{item.date}</span>
          {item.location && (
            <span className="text-[10px] text-white/60 font-label uppercase tracking-widest">
              {item.location}
            </span>
          )}
        </div>
        <IconButton icon="more_vert" label="More options" variant="ghost" onClick={() => {}} />
      </header>

      {/* Image */}
      <div className="flex-1 flex items-center justify-center relative">
        <img
          key={item.id}
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-contain"
          style={{ maxHeight: '100vh' }}
        />

        {/* Side nav arrows */}
        {hasPrev && (
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur flex items-center justify-center text-white active:scale-90 transition-transform"
          >
            <Icon name="chevron_left" />
          </button>
        )}
        {hasNext && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur flex items-center justify-center text-white active:scale-90 transition-transform"
          >
            <Icon name="chevron_right" />
          </button>
        )}
      </div>

      {/* Bottom bar */}
      <footer className="absolute bottom-0 left-0 right-0 flex flex-col items-center gap-5 pb-10 pt-4 bg-gradient-to-t from-black/70 to-transparent">
        {/* Dots indicator */}
        <div className="flex gap-1.5 items-center">
          {hasPrev && <div className="w-1.5 h-1.5 rounded-full bg-white/30" />}
          <div className="w-2 h-2 rounded-full bg-white" />
          {hasNext && <div className="w-1.5 h-1.5 rounded-full bg-white/30" />}
        </div>

        {/* Action row */}
        <nav className="flex items-center gap-8 px-8 py-3.5 bg-black/30 backdrop-blur-xl rounded-[2rem] border border-white/10">
          <FullscreenAction icon="favorite" label="Like" />
          <FullscreenAction icon="info" label="Info" />
          <FullscreenAction icon="share" label="Send" />
          <FullscreenAction icon="delete" label="Bin" danger />
        </nav>
      </footer>
    </div>
  );
}

interface FullscreenActionProps {
  icon: string;
  label: string;
  danger?: boolean;
}
function FullscreenAction({ icon, label, danger = false }: FullscreenActionProps) {
  return (
    <button className="flex flex-col items-center gap-1 group active:scale-90 transition-transform">
      <span
        className={`material-symbols-outlined ${danger ? 'text-error-container' : 'text-white/80'}`}
        style={{ fontVariationSettings: "'FILL' 0, 'wght' 400" }}
      >
        {icon}
      </span>
      <span className={`text-[9px] font-medium tracking-widest uppercase font-label ${danger ? 'text-error-container/70' : 'text-white/50'}`}>
        {label}
      </span>
    </button>
  );
}