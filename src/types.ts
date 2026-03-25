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
  span?: 'normal' | 'wide' | 'tall';
  mediaType?: 'image' | 'video';
  videoSrc?: string;
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
  item?: GalleryItem;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  onMore?: (item: GalleryItem) => void;
  onLike?: (item: GalleryItem) => void;
  onInfo?: (item: GalleryItem) => void;
  onShare?: (item: GalleryItem) => void;
  onDelete?: (item: GalleryItem) => void;
}

export interface FullscreenActionProps {
  icon: string;
  label: string;
  danger?: boolean;
}

export interface GalleryGridProps {
  items: GalleryItem[];
  selectedId?: string;
  onSelect: (id: string) => void;
  compact?: boolean;
}

export interface GalleryHeaderProps {
  tabs: TabType[];
  activeTab: string;
  onTabChange: (id: string) => void;
  title?: string;
  onSearch?: () => void;
  onFilter?: () => void;
  onAccount?: () => void;
}

export interface GalleryItemCardProps {
  item: GalleryItem;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export interface GallerySectionProps {
  label: string;
  items: GalleryItem[];
  selectedId?: string;
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

export interface MetaFieldProps {
  label: string;
  value: GalleryItem;
  icon?: string;
}

export interface PreviewToolbarProps {
  item?: GalleryItem;
  onClose: () => void;
  isFullscreen?: boolean;
  dark?: boolean;
  onFavorite?: (item: GalleryItem) => void;
  onDownload?: (item: GalleryItem) => void;
  onShare?: (item: GalleryItem) => void;
}

export interface SplitPreviewPaneProps {
  item?: GalleryItem;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  onFavorite?: (item: GalleryItem) => void;
  onDownload?: (item: GalleryItem) => void;
  onShare?: (item: GalleryItem) => void;
}

export interface KeyboardNavProps {
  isOpen: boolean;
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
}

export interface AdaptivePreviewControllerProps {
  mode: "split" | "fullscreen" | string;
  item?: GalleryItem;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  onPreviewMore?: (item: GalleryItem) => void;
  onPreviewFavorite?: (item: GalleryItem) => void;
  onPreviewDownload?: (item: GalleryItem) => void;
  onPreviewInfo?: (item: GalleryItem) => void;
  onPreviewShare?: (item: GalleryItem) => void;
  onPreviewDelete?: (item: GalleryItem) => void;
  children: React.ReactNode;
}

export interface GalleryProps {
  galleryTitle?: string;
  onSearch?: () => void;
  onFilter?: () => void;
  onAccount?: () => void;
  onPreviewMore?: (item: GalleryItem) => void;
  onPreviewFavorite?: (item: GalleryItem) => void;
  onPreviewDownload?: (item: GalleryItem) => void;
  onPreviewInfo?: (item: GalleryItem) => void;
  onPreviewShare?: (item: GalleryItem) => void;
  onPreviewDelete?: (item: GalleryItem) => void;
}