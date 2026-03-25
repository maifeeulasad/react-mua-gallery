
import { CATEGORIES, GALLERY_ITEMS } from "./galleryData";
import { useViewportMode } from "./useViewportMode";
import { useGalleryState } from "./useGalleryState";
import { useKeyboardNav } from "./useKeyboardNav";
import { Icon } from "./Icon";
import { GalleryHeader } from "./GalleryHeader";
import { GallerySection } from "./GallerySection";
import { BottomNav } from "./BottomNav";
import { AdaptivePreviewController } from "./AdaptivePreviewController";

// // ─── DESIGN TOKENS ────────────────────────────────────────────────────────────
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

  :root {
    --bg: #f8f9fa;
    --surface: #f8f9fa;
    --surface-low: #f1f4f6;
    --surface-container: #eaeff1;
    --surface-high: #e3e9ec;
    --surface-highest: #dbe4e7;
    --on-surface: #2b3437;
    --on-surface-variant: #586064;
    --outline: #737c7f;
    --outline-variant: #abb3b7;
    --primary: #445f8a;
    --primary-container: #d6e3ff;
    --on-primary: #f6f7ff;
    --on-primary-container: #37527d;
    --secondary: #466370;
    --secondary-container: #c9e7f7;
    --on-secondary-container: #395663;
    --tertiary: #5d5d78;
    --tertiary-container: #d9d7f8;
    --error: #9f403d;
    --error-container: #fe8983;
    --on-error-container: #752121;
    --font-headline: 'Manrope', sans-serif;
    --font-body: 'Inter', sans-serif;
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --radius-xl: 24px;
    --radius-full: 9999px;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: var(--font-body);
    background: var(--bg);
    color: var(--on-surface);
    -webkit-font-smoothing: antialiased;
  }

  .mat-icon {
    font-family: 'Material Symbols Outlined';
    font-weight: normal;
    font-style: normal;
    font-size: 22px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    user-select: none;
    pointer-events: none;
  }
  .mat-icon.filled { font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
  .mat-icon.sm { font-size: 18px; }
  .mat-icon.lg { font-size: 28px; }
  .mat-icon.xl { font-size: 36px; }

  /* scrollbar */
  .scroll-thin::-webkit-scrollbar { width: 4px; }
  .scroll-thin::-webkit-scrollbar-track { background: transparent; }
  .scroll-thin::-webkit-scrollbar-thumb { background: var(--surface-highest); border-radius: 10px; }

  /* animations */
  @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
  @keyframes slideUp { from { transform: translateY(8px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
  @keyframes scaleIn { from { transform: scale(0.97); opacity: 0 } to { transform: scale(1); opacity: 1 } }

  .fade-in { animation: fadeIn 200ms ease forwards; }
  .slide-up { animation: slideUp 250ms ease forwards; }
  .scale-in { animation: scaleIn 200ms ease forwards; }

  /* glass */
  .glass {
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
`;


export function ExampleGallery() {
  const viewportMode = useViewportMode();
  const {
    selectedId, selectedItem, isPreviewOpen,
    openPreview, closePreview, goNext, goPrev,
    activeCategory, setActiveCategory,
    groups, hasNext, hasPrev,
  } = useGalleryState(GALLERY_ITEMS);

  useKeyboardNav({ isOpen: isPreviewOpen, onPrev: goPrev, onNext: goNext, onClose: closePreview });

  const isSplit = viewportMode === "split";

  return (
    <>
      <style>{CSS}</style>
      <style>{`
        .desktop-nav { display: flex; }
        .mobile-only { display: none; }
        @media (max-width: 768px) {
          .desktop-nav { display: none; }
          .mobile-only { display: flex; }
        }
        * { -webkit-tap-highlight-color: transparent; }
        button { outline: none; }
        button:focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; }
      `}</style>

      <GalleryHeader tabs={CATEGORIES} activeTab={activeCategory} onTabChange={setActiveCategory} />

      {/* Main scrollable area */}
      <div style={{
        paddingTop: 64,
        paddingBottom: isSplit ? 0 : 80,
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        overflow: isSplit ? "hidden" : "visible",
      }}>
        <AdaptivePreviewController
          mode={viewportMode}
          item={selectedItem} isOpen={isPreviewOpen}
          onClose={closePreview} onPrev={goPrev} onNext={goNext}
          hasPrev={hasPrev} hasNext={hasNext}
        >
          <main style={{ padding: "24px 20px 32px", maxWidth: isSplit ? "none" : 960, margin: "0 auto" }}>
            {Object.entries(groups).map(([label, items]) => (
              <GallerySection
                key={label} label={label} items={items}
                selectedId={selectedId} onSelect={openPreview}
                compact={isSplit}
              />
            ))}
            {Object.keys(groups).length === 0 && (
              <div style={{ textAlign: "center", padding: "80px 0", color: "var(--on-surface-variant)" }}>
                <Icon name="photo_library" size="xl" style={{ opacity: 0.3, display: "block", margin: "0 auto 12px" }} />
                <p style={{ fontFamily: "var(--font-headline)", fontSize: 18, fontWeight: 700 }}>No photos here</p>
                <p style={{ fontSize: 14, marginTop: 6 }}>Try a different category</p>
              </div>
            )}
          </main>
        </AdaptivePreviewController>
      </div>

      {/* Mobile bottom nav */}
      <BottomNav tabs={CATEGORIES} activeTab={activeCategory} onTabChange={setActiveCategory} />

      {/* FAB */}
      {!isPreviewOpen && (
        <button style={{
          position: "fixed",
          bottom: isSplit ? 32 : 96,
          right: isSplit ? 32 : 20,
          width: 56, height: 56, borderRadius: 18,
          background: "var(--primary-container)", color: "var(--on-primary-container)",
          border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 20px rgba(68,95,138,0.3)",
          zIndex: 40,
          transition: "transform 200ms ease, box-shadow 200ms ease",
        }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(68,95,138,0.38)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(68,95,138,0.3)"; }}
          aria-label="Add photos"
        >
          <Icon name="add" size="lg" style={{ fontVariationSettings: "'FILL' 0, 'wght' 600" }} />
        </button>
      )}
    </>
  );
}