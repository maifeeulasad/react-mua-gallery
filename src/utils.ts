import { GalleryItem, ImageGalleryItem, VideoGalleryItem } from "./types";

export function isVideoGalleryItem(item: GalleryItem): item is VideoGalleryItem {
  return item.mediaType === 'video';
}

export function isImageGalleryItem(item: GalleryItem): item is ImageGalleryItem {
  return item.mediaType === 'image';
}