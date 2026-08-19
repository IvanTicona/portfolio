import { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface LightboxProps {
  images: string[];
  title: string;
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

export function Lightbox({
  images,
  title,
  index,
  onIndexChange,
  onClose,
}: LightboxProps) {
  const { t } = useLanguage();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const total = images.length;

  const goPrev = useCallback(
    () => onIndexChange((index - 1 + total) % total),
    [index, total, onIndexChange],
  );

  const goNext = useCallback(
    () => onIndexChange((index + 1) % total),
    [index, total, onIndexChange],
  );

  // Move focus into the dialog, and hand it back to whatever opened it.
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    return () => opener?.focus();
  }, []);

  // Stop the page behind the dialog from scrolling.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key === 'ArrowLeft') {
        goPrev();
        return;
      }
      if (event.key === 'ArrowRight') {
        goNext();
        return;
      }
      if (event.key !== 'Tab') return;

      // Focus trap: Tab must not escape into the page behind the dialog.
      const focusable = dialogRef.current?.querySelectorAll('button');
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [goPrev, goNext, onClose]);

  const alt = t.projects.imageAlt
    .replace('{title}', title)
    .replace('{n}', String(index + 1))
    .replace('{total}', String(total));

  // Rendered into <body>: the Projects section sits inside a translated
  // wrapper, and any transform other than `none` becomes the containing block
  // for fixed descendants — the overlay would be clipped to the section.
  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4 sm:p-8"
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label={t.projects.closeGallery}
        className="absolute top-4 right-4 cursor-pointer rounded-lg p-2 text-text-muted hover:text-text-primary hover:bg-surface transition-colors"
      >
        <X size={20} />
      </button>

      <div
        onClick={(event) => event.stopPropagation()}
        className="w-full max-w-5xl"
      >
        <img
          src={images[index]}
          alt={alt}
          className="w-full aspect-video object-contain rounded-lg border border-border bg-surface"
        />

        {total > 1 && (
          <div className="mt-4 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={goPrev}
              aria-label={t.projects.previousImage}
              className="cursor-pointer rounded-lg p-2 text-text-muted hover:text-text-primary hover:bg-surface transition-colors"
            >
              <ChevronLeft size={20} />
            </button>

            <span className="text-xs font-mono text-text-muted tabular-nums">
              {index + 1} / {total}
            </span>

            <button
              type="button"
              onClick={goNext}
              aria-label={t.projects.nextImage}
              className="cursor-pointer rounded-lg p-2 text-text-muted hover:text-text-primary hover:bg-surface transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}
