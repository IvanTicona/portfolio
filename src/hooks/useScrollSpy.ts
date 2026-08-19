import { useEffect, useState } from 'react';

const SECTIONS = ['about', 'experience', 'projects', 'contact'] as const;

// How close to the end of the page counts as "the bottom".
const BOTTOM_THRESHOLD_PX = 96;

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const visible = new Set<string>();
    let atBottom = false;

    function resolve() {
      // The last section sits above the footer and the page's bottom padding,
      // so it can never be pushed into the observed band — the page runs out of
      // scroll first. Once we're at the bottom, it is the active one.
      if (atBottom) {
        setActiveSection(SECTIONS[SECTIONS.length - 1]);
        return;
      }

      // Document order, not callback order: when two sections touch the band,
      // the higher one wins instead of whichever entry arrived last.
      const next = SECTIONS.find((id) => visible.has(id));
      if (next) setActiveSection(next);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.add(entry.target.id);
          } else {
            visible.delete(entry.target.id);
          }
        }
        resolve();
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    for (const section of SECTIONS) {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    }

    function handleScroll() {
      const scrolled = window.innerHeight + window.scrollY;
      const next =
        scrolled >= document.documentElement.scrollHeight - BOTTOM_THRESHOLD_PX;
      if (next === atBottom) return;
      atBottom = next;
      resolve();
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return activeSection;
}
