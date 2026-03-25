import { Icon } from './Icon';

/**
 * PreviewMetadata — displays title, tags, and EXIF-like details for an image
 * @param {object} item - gallery item
 */
interface PreviewMetadataProps {
  item: {
    title: string;
    description?: string;
    tags?: string[];
    date?: string;
    dimensions?: string;
    location?: string;
    camera?: string;
    notes?: string;
  };
}

export function PreviewMetadata({ item }: PreviewMetadataProps) {
  return (
    <div className="mt-8">
      {/* Title + Tags */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="font-headline font-extrabold text-3xl tracking-tighter text-on-surface">
            {item.title}
          </h1>
          {item.description && (
            <p className="text-on-surface-variant font-body text-sm mt-1.5 leading-relaxed">
              {item.description}
            </p>
          )}
        </div>
        {Array.isArray(item.tags) && item.tags.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {item.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-medium font-label"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* EXIF Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-outline-variant/15">
        <MetaField label="Date Captured" value={item.date} icon="calendar_today" />
        <MetaField label="Dimensions" value={item.dimensions} icon="straighten" />
        <MetaField
          label="Location"
          value={item.location}
          icon="location_on"
        />
        <MetaField label="Camera" value={item.camera} icon="photo_camera" />
      </div>

      {/* Notes */}
      {item.notes && (
        <div className="bg-surface-container-low rounded-2xl p-6 mt-2">
          <h3 className="font-headline font-bold text-sm uppercase tracking-widest text-outline mb-3">
            Curator's Notes
          </h3>
          <p className="text-on-surface-variant leading-relaxed font-body text-sm">
            {item.notes}
          </p>
        </div>
      )}
    </div>
  );
}

interface MetaFieldProps {
  label: string;
  value: any;
  icon?: string;
}

function MetaField({ label, value, icon }: MetaFieldProps) {
  if (!value) return null;
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[10px] font-bold uppercase tracking-widest text-outline font-label">
        {label}
      </span>
      <span className="text-on-surface font-semibold text-sm font-body flex items-center gap-1">
        {icon && <Icon name={icon} size="sm" className="text-on-surface-variant" />}
        {value}
      </span>
    </div>
  );
}