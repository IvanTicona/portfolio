import { Moon, Sun, Languages, ArrowDown, Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollSpy } from '../hooks/useScrollSpy';

const NAV_ITEMS = ['about', 'experience', 'projects', 'contact'] as const;

export function Sidebar() {
  const { theme, toggleTheme } = useTheme();
  const { language, t, toggleLanguage } = useLanguage();
  const activeSection = useScrollSpy();

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 lg:px-12 xl:px-20 px-6 pt-24 pb-12">
      {/* Top: Identity */}
      <div>
        <p className="text-sm font-mono text-accent mb-3">{t.hero.greeting}</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">
          Dorian Ticona
        </h1>
        <p className="font-mono text-lg text-text-secondary mt-2">
          {t.hero.role}
        </p>
        <p className="text-text-secondary mt-4 max-w-sm leading-relaxed text-sm">
          {t.hero.description}
        </p>

        {/* Nav — desktop only */}
        <nav className="hidden lg:block mt-12">
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={`group flex items-center gap-3 py-2 text-sm transition-all ${
                    activeSection === item
                      ? 'text-accent'
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                >
                  <span
                    className={`h-px transition-all duration-300 ${
                      activeSection === item
                        ? 'w-16 bg-accent'
                        : 'w-8 bg-text-muted group-hover:w-12 group-hover:bg-text-secondary'
                    }`}
                  />
                  <span className="text-xs font-medium uppercase tracking-widest">
                    {t.nav[item]}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom: Controls + Socials */}
      <div className="mt-8 lg:mt-0">
        {/* Controls */}
        <div className="flex items-center gap-2 mb-6">
          <button
            onClick={toggleLanguage}
            className="cursor-pointer flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-mono text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-all"
            aria-label={`Switch to ${language === 'en' ? 'Spanish' : 'English'}`}
          >
            <Languages size={14} />
            <span className="uppercase">{language === 'en' ? 'ES' : 'EN'}</span>
          </button>
          <button
            onClick={toggleTheme}
            className="cursor-pointer rounded-lg p-2 text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-all"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/IvanTicona"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-lg p-2 text-text-muted hover:text-text-primary transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/dorian-ivan-ticona-vega-359900215/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-lg p-2 text-text-muted hover:text-text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={20} />
          </a>
          <a
            href="mailto:ivan.ticona.v@gmail.com"
            className="cursor-pointer rounded-lg p-2 text-text-muted hover:text-text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Scroll hint — mobile only */}
        <a
          href="#about"
          className="lg:hidden inline-flex items-center gap-2 mt-8 text-xs font-mono text-text-muted hover:text-accent transition-colors"
        >
          <span>{t.hero.cta}</span>
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </div>
    </header>
  );
}
