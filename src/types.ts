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