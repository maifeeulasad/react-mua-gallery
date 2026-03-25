
import { IconButton } from './IconButton';
interface TabType {
  id: string;
  label: string;
  icon: string;
}
interface GalleryHeaderProps {
  tabs: TabType[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

/**
 * GalleryHeader — top navigation bar
 * @param {string[]} tabs - nav tab labels
 * @param {string} activeTab
 * @param {function} onTabChange
 */
export function GalleryHeader({ tabs, activeTab, onTabChange }: GalleryHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/20">
      {/* Logo */}
      <div className="flex items-center gap-8">
        <span className="font-headline font-extrabold text-xl tracking-tighter text-on-surface">
          Curator
        </span>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-1">
          {tabs.map((tab: TabType) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                px-4 py-1.5 rounded-full text-sm font-medium font-body transition-all duration-200
                ${activeTab === tab.id
                  ? 'bg-primary-container text-on-primary-container'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1">
        <IconButton icon="search" label="Search" onClick={() => {}} />
        <IconButton icon="tune" label="Filter" onClick={() => {}} />
        <IconButton icon="account_circle" label="Account" size="md" iconFilled onClick={() => {}} />
      </div>
    </header>
  );
}