import { IconButton } from './IconButton';

/**
 * PreviewToolbar — top bar for the preview pane (split mode)
 * @param {object} item
 * @param {function} onClose
 * @param {boolean} isFullscreen - adjusts styling
 */
interface PreviewToolbarProps {
  item: { filename?: string };
  onClose: () => void;
  isFullscreen?: boolean;
}

export function PreviewToolbar({ item, onClose, isFullscreen = false }: PreviewToolbarProps) {
  const bg = isFullscreen
    ? 'bg-black/30 backdrop-blur-xl text-white border-white/10'
    : 'bg-surface/80 backdrop-blur-xl text-on-surface border-outline-variant/20';

  return (
    <div className={`flex items-center justify-between px-4 h-14 border-b ${bg}`}>
      <div className="flex items-center gap-3">
        <IconButton
          icon="close"
          label="Close preview"
          onClick={onClose}
          variant={isFullscreen ? 'ghost' : 'default'}
        />
        <span className={`text-sm font-medium font-body truncate max-w-[200px] ${isFullscreen ? 'text-white/90' : 'text-on-surface'}`}>
          {item?.filename}
        </span>
      </div>

      <div className="flex items-center gap-1">
        <IconButton
          icon="star"
          label="Favourite"
          iconFilled
          variant={isFullscreen ? 'ghost' : 'default'}
          onClick={() => {}}
        />
        <IconButton
          icon="download"
          label="Download"
          variant={isFullscreen ? 'ghost' : 'default'}
          onClick={() => {}}
        />
        <IconButton
          icon="share"
          label="Share"
          variant={isFullscreen ? 'ghost' : 'filled'}
          onClick={() => {}}
        />
      </div>
    </div>
  );
}