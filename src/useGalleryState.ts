import { useState, useCallback } from 'react';
import { GalleryItem } from './types';

/**
 * Central state for gallery selection and preview.
 */
export function useGalleryState(items: GalleryItem[]) {
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined);
  const [activeCategory, setActiveCategory] = useState('all');

  const selectedIndex = items.findIndex((i: GalleryItem) => i.id === selectedId);
  const selectedItem = selectedIndex >= 0 ? items[selectedIndex] : undefined;

  const openPreview = useCallback((id: string) => setSelectedId(id), []);
  const closePreview = useCallback(() => setSelectedId(undefined), []);

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

  const groups = filteredItems.reduce((acc: Record<string, GalleryItem[]>, item: GalleryItem) => {
    if (!acc[item.group]) acc[item.group] = [];
    acc[item.group].push(item);
    return acc;
  }, {} as Record<string, GalleryItem[]>);

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
    groups,
  };
}