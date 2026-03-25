import { useState, useCallback } from 'react';

/**
 * Central state for gallery selection and preview.
 */
interface GalleryItem {
  id: string;
  category?: string;
  [key: string]: any;
}

export function useGalleryState(items: GalleryItem[]) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const selectedIndex = items.findIndex((i: GalleryItem) => i.id === selectedId);
  const selectedItem = selectedIndex >= 0 ? items[selectedIndex] : null;

  const openPreview = useCallback((id: string) => setSelectedId(id), []);
  const closePreview = useCallback(() => setSelectedId(null), []);

  const goNext = useCallback(() => {
    if (selectedIndex < items.length - 1) {
      setSelectedId(items[selectedIndex + 1].id);
    }
  }, [selectedIndex, items]);

  const goPrev = useCallback(() => {
    if (selectedIndex > 0) {
      setSelectedId(items[selectedIndex - 1].id);
    }
  }, [selectedIndex, items]);

  const filteredItems =
    activeCategory === 'all'
      ? items
      : items.filter((i: GalleryItem) => i.category === activeCategory);

  return {
    selectedId,
    selectedItem,
    selectedIndex,
    isPreviewOpen: !!selectedId,
    openPreview,
    closePreview,
    goNext,
    goPrev,
    activeCategory,
    setActiveCategory,
    filteredItems,
    hasNext: selectedIndex < items.length - 1,
    hasPrev: selectedIndex > 0,
  };
}