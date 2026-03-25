import { Icon } from './Icon';
import { BottomNavProps, TabType } from './types';

/**
 * BottomNav — mobile-only bottom navigation
 * @param {Array} tabs - [{id, label, icon}]
 * @param {string} activeTab
 * @param {function} onTabChange
 */
export function BottomNav({ tabs, activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav style={{
      position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 50,
      display: "flex", justifyContent: "space-around", alignItems: "center",
      padding: "12px 16px 20px",
      background: "rgba(248,249,250,0.88)",
      backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
      borderTop: "1px solid rgba(171,179,183,0.2)",
      borderRadius: "24px 24px 0 0",
    }} className="mobile-only">
      {tabs.map((t: TabType) => {
        const active = activeTab === t.id;
        return (
          <button key={t.id} onClick={() => onTabChange(t.id)} style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
            padding: "8px 16px", borderRadius: 16, border: "none", cursor: "pointer",
            background: active ? "rgba(68,95,138,0.12)" : "transparent",
            color: active ? "var(--primary)" : "var(--on-surface-variant)",
            transition: "all 200ms ease",
          }}>
            <Icon name={t.icon} filled={active} size="md" />
            <span style={{ fontSize: 10, fontWeight: 500, fontFamily: "var(--font-body)", letterSpacing: "0.04em" }}>
              {t.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}