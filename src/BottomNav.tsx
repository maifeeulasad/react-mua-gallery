import { Icon } from './Icon';

/**
 * BottomNav — mobile-only bottom navigation
 * @param {Array} tabs - [{id, label, icon}]
 * @param {string} activeTab
 * @param {function} onTabChange
 */
interface TabType {
  id: string;
  label: string;
  icon: string;
}
interface BottomNavProps {
  tabs: TabType[];
  activeTab: string;
  onTabChange: (id: string) => void;
}
export function BottomNav({ tabs, activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex justify-around items-center px-4 pb-6 pt-3 bg-surface/80 backdrop-blur-xl border-t border-outline-variant/20 rounded-t-3xl">
      {tabs.map((tab: TabType) => {
        const active = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center gap-1 px-4 py-1.5 rounded-2xl transition-all duration-200 active:scale-95 ${
              active ? 'bg-primary-container/60' : ''
            }`}
          >
            <Icon
              name={tab.icon}
              filled={active}
              className={active ? 'text-primary' : 'text-on-surface-variant'}
              size="md"
            />
            <span
              className={`text-[10px] font-medium font-label tracking-wide ${
                active ? 'text-primary' : 'text-on-surface-variant'
              }`}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}