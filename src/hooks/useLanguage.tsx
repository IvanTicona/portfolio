import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
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

  // Runs on mount too, so <html lang> matches the stored or detected language
  // instead of staying on the value hardcoded in index.html until the first
  // toggle. Kept out of the state updater: StrictMode invokes it twice.
  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('portfolio-lang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'es' : 'en'));
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
