import { PreviewMetadataProps } from './types';

/**
 * PreviewMetadata — displays title, tags, and EXIF-like details for an image
 * @param {object} item - gallery item
 */
export function PreviewMetadata({ item }: PreviewMetadataProps) {
  return (
    <div style={{ marginTop: 28 }}>
      {/* Title + tags */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
        <h1 style={{ fontFamily: "var(--font-headline)", fontWeight: 800, fontSize: 26, letterSpacing: "-0.03em", color: "var(--on-surface)", lineHeight: 1.2 }}>
          {item.title}
        </h1>
        {item.description && (
          <p style={{ fontSize: 13, color: "var(--on-surface-variant)", lineHeight: 1.6 }}>{item.description}</p>
        )}
        {item.tags?.length > 0 && (
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 4 }}>
            {item.tags.map((tag: string) => (
              <span key={tag} style={{
                padding: "4px 12px", borderRadius: "var(--radius-full)",
                background: "var(--surface-high)", color: "var(--on-surface-variant)",
                fontSize: 11, fontWeight: 500,
              }}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* EXIF grid */}
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "16px 12px", padding: "20px 0",
        borderTop: "1px solid rgba(171,179,183,0.2)",
        marginBottom: 20,
      }}>
        {[
          { label: "Date Captured", value: item.date },
          { label: "Dimensions", value: item.dimensions },
          { label: "Location", value: item.location },
          { label: "Camera", value: item.camera },
        ].map(({ label, value }) => value ? (
          <div key={label}>
            <div style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--outline)", marginBottom: 4 }}>{label}</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "var(--on-surface)" }}>{value}</div>
          </div>
        ) : null)}
      </div>

      {/* Notes */}
      {item.notes && (
        <div style={{ background: "var(--surface-low)", borderRadius: 16, padding: 20 }}>
          <h3 style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--outline)", marginBottom: 10 }}>
            Curator's Notes
          </h3>
          <p style={{ fontSize: 13, color: "var(--on-surface-variant)", lineHeight: 1.7 }}>{item.notes}</p>
        </div>
      )}
    </div>
  );
}