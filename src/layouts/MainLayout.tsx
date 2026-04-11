import type { ReactNode } from 'react';
import { Sidebar } from '../components/Sidebar';
import { useLanguage } from '../hooks/useLanguage';
import { useEffect, useRef } from 'react';

export function MainLayout({ children }: { children: ReactNode }) {
  const { t } = useLanguage();
  const mainRef = useRef<HTMLDivElement>(null);

  /* Cursor spotlight that follows mouse across the whole page */
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-text-primary">
      {/* Global spotlight gradient */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background:
            'radial-gradient(600px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99, 102, 241, 0.04), transparent 80%)',
        }}
      />

      <div className="mx-auto max-w-screen-xl lg:flex">
        {/* Left: Sticky sidebar */}
        <Sidebar />

        {/* Right: Scrollable content */}
        <main
          ref={mainRef}
          className="lg:w-1/2 lg:py-24 lg:px-12 xl:px-16 px-6 pt-8 pb-24"
        >
          {children}

          <footer className="border-t border-border mt-16 pt-8 text-center lg:text-left space-y-1">
            <p className="text-xs text-text-muted">
              {t.footer.builtWith} · {new Date().getFullYear()}
            </p>
            <p className="text-xs text-text-muted">
              {t.footer.inspired}{' '}
              <a
                href="https://brittanychiang.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
              >
                Brittany Chiang
              </a>
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
