import { Mail, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollReveal } from '../hooks/useScrollReveal';

const EMAIL = 'ivan.ticona.v@gmail.com';

export function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [ref, isVisible] = useScrollReveal<HTMLElement>();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: do nothing
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="mb-16 lg:mb-24 scroll-mt-24"
    >
      <div
        className={`transition-all duration-700 will-change-transform ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-5'
        }`}
      >
        <h2 className="text-sm font-mono font-medium uppercase tracking-widest text-accent mb-6">
          {t.contact.title}
        </h2>

        <p className="text-text-secondary leading-relaxed mb-8">
          {t.contact.description}
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="cursor-pointer inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
          >
            <Mail size={16} />
            {t.contact.emailMe}
          </a>

          <button
            onClick={handleCopy}
            className="cursor-pointer inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-mono text-text-secondary hover:text-text-primary hover:border-accent/30 hover:bg-surface transition-all"
          >
            {copied ? (
              <Check size={16} className="text-cta" />
            ) : (
              <Copy size={16} />
            )}
            {copied ? t.contact.copied : t.contact.copyEmail}
          </button>
        </div>
      </div>
    </section>
  );
}
