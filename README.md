# react-mua-gallery

A modern React gallery component with adaptive preview modes (split pane on desktop, fullscreen on smaller screens).

[![npm version](https://img.shields.io/npm/v/react-mua-gallery.svg)](https://www.npmjs.com/package/react-mua-gallery)

## Features

- React 16.8+ through React 19 support
- Adaptive preview UX: split pane and fullscreen dialog
- Keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`)
- Typed callback props for header and preview actions
- Vite-powered example build and library build

## Installation

```bash
npm install react-mua-gallery
```

or

```bash
pnpm add react-mua-gallery
```

## Quick Start

```tsx
import { Gallery } from 'react-mua-gallery';

export default function App() {
  return <Gallery />;
}
```

## Configurable Props

`Gallery` is a named export and accepts the following props:

```ts
type GalleryProps = {
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
};
```

### Example With Actions

```tsx
import { Gallery } from 'react-mua-gallery';

export default function App() {
  return (
    <Gallery
      galleryTitle="React MUA Gallery"
      onSearch={() => console.log('search')}
      onFilter={() => console.log('filter')}
      onAccount={() => console.log('account')}
      onPreviewMore={(item) => console.log('more', item.id)}
      onPreviewFavorite={(item) => console.log('favorite', item.id)}
      onPreviewDownload={(item) => console.log('download', item.src)}
      onPreviewInfo={(item) => console.log('info', item.title)}
      onPreviewShare={(item) => console.log('share', item.id)}
      onPreviewDelete={(item) => console.log('delete', item.id)}
    />
  );
}
```

## Exports

Main export:

- `Gallery`

Additional exports:

- `BottomNav`
- `FullscreenPreviewDialog`
- `GalleryGrid`
- `GalleryHeader`
- `GalleryItemCard`
- `GallerySection`
- `Icon`
- `IconButton`
- `PreviewImage`
- `PreviewMetadata`
- `PreviewToolbar`
- `SplitPreviewPane`
- `CATEGORIES`, `GALLERY_GROUPS`, `GALLERY_ITEMS`
- `useGalleryState`, `useKeyboardNav`, `useViewportMode`

## Development

```bash
pnpm install
pnpm dev
```

## Build

Library build:

```bash
pnpm run build:lib
```

Static example build:

```bash
pnpm run build:example
```

## GitHub Actions

- GitHub Pages deployment workflow: `.github/workflows/deploy-pages.yml`
- npm publish workflow: `.github/workflows/publish-npm.yaml`

## Live Example

- https://maifeeulasad.github.io/react-mua-gallery/

## License

MIT © [maifeeulasad](https://github.com/maifeeulasad)
