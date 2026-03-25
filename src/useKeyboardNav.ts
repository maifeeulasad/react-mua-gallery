import { useEffect } from 'react';
import { KeyboardNavProps } from './types';

/**
 * Handles keyboard navigation for preview mode:
 *   - ArrowLeft/ArrowRight: navigate prev/next
 *   - Escape: close preview
 */

export function useKeyboardNav({ isOpen, onPrev, onNext, onClose }: KeyboardNavProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') onPrev();
      else if (e.key === 'ArrowRight') onNext();
      else if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onPrev, onNext, onClose]);
}