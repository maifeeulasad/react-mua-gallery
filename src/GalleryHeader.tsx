
import { IconButton } from './IconButton';
import { GalleryHeaderProps, TabType } from './types';

/**
 * GalleryHeader — top navigation bar
 * @param {string[]} tabs - nav tab labels
 * @param {string} activeTab
 * @param {function} onTabChange
 */
export function GalleryHeader({ tabs, activeTab, onTabChange }: GalleryHeaderProps) {
  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 24px",
      background: "rgba(248,249,250,0.85)",
      backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(171,179,183,0.25)",
    }}>
      {/* Logo + Desktop tabs */}
      <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
        <span style={{ fontFamily: "var(--font-headline)", fontWeight: 800, fontSize: 20, letterSpacing: "-0.03em", color: "var(--on-surface)" }}>
          Curator
        </span>
        <nav style={{ display: "flex", gap: 4 }} className="desktop-nav">
          {tabs.map((t: TabType) => (
            <button key={t.id} onClick={() => onTabChange(t.id)} style={{
              padding: "6px 16px", borderRadius: "var(--radius-full)", border: "none", cursor: "pointer",
              fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500,
              background: activeTab === t.id ? "var(--primary-container)" : "transparent",
              color: activeTab === t.id ? "var(--on-primary-container)" : "var(--on-surface-variant)",
              transition: "all 200ms ease",
            }}>
              {t.label}
            </button>
          ))}
        </nav>
      </div>
      {/* Actions */}
      <div style={{ display: "flex", gap: 4 }}>
        <IconButton icon="search" label="Search" onClick={() => {}} />
        <IconButton icon="tune" label="Filter" onClick={() => {}} />
        <IconButton icon="account_circle" label="Account" iconFilled onClick={() => {}} />
      </div>
    </header>
  );
}