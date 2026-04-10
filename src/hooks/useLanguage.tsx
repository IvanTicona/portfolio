import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Language, Translation } from '../types';
import { translations } from '../data/translations';

interface LanguageContextValue {
  language: Language;
  t: Translation;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en';
    const stored = localStorage.getItem('portfolio-lang');
    if (stored === 'en' || stored === 'es') return stored;
    return navigator.language.startsWith('es') ? 'es' : 'en';
  });

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === 'en' ? 'es' : 'en';
      localStorage.setItem('portfolio-lang', next);
      document.documentElement.lang = next;
      return next;
    });
  };

  return (
    <LanguageContext.Provider
      value={{ language, t: translations[language], toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
