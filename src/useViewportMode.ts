import { useState, useEffect, useCallback } from 'react';

const SPLIT_BREAKPOINT = 1100;
const MIN_GALLERY_WIDTH = 380;
const MIN_PREVIEW_WIDTH = 420;

/**
 * Determines whether the current viewport can support split preview mode.
 * Split mode requires:
 *   - viewport >= SPLIT_BREAKPOINT
 *   - enough room for both gallery and preview panes
 */
export function useViewportMode() {
  const getMode = useCallback(() => {
    const vw = window.innerWidth;
    const canSplit =
      vw >= SPLIT_BREAKPOINT &&
      vw >= MIN_GALLERY_WIDTH + MIN_PREVIEW_WIDTH;
    return canSplit ? 'split' : 'fullscreen';
  }, []);

  const [mode, setMode] = useState(getMode);

  useEffect(() => {
    const handler = () => setMode(getMode());
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [getMode]);

  return mode; // 'split' | 'fullscreen'
}