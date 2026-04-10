import { useEffect, useState } from 'react';

const SECTIONS = ['about', 'experience', 'projects', 'contact'] as const;

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
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

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
