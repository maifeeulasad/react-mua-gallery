export interface GalleryItem {
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

export interface TabType {
  id: string;
  label: string;
  icon: string;
}

export interface BottomNavProps {
  tabs: TabType[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

export interface FullscreenPreviewDialogProps {
  item: GalleryItem | null;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export interface FullscreenActionProps {
  icon: string;
  label: string;
  danger?: boolean;
}

export interface GalleryGridProps {
  items: GalleryItem[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  compact?: boolean;
}

export interface GalleryHeaderProps {
  tabs: TabType[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

export interface GalleryItemCardProps {
  item: GalleryItem;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export interface GallerySectionProps {
  label: string;
  items: GalleryItem[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  compact?: boolean;
}

export interface IconProps {
  name: string;
  className?: string;
  filled?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  style?: React.CSSProperties;
}

export interface IconButtonProps {
  icon: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  label?: string;
  variant?: 'default' | 'filled' | 'ghost' | 'error';
  size?: 'sm' | 'md' | 'lg';
  iconFilled?: boolean;
  className?: string;
  disabled?: boolean;
}

export interface PreviewImageProps {
  item: GalleryItem;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  dark?: boolean;
}

export interface PreviewMetadataProps {
  item: GalleryItem;
}