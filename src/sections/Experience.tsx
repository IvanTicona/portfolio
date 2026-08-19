import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { experiences } from '../data/experience';

function formatDate(dateStr: string, language: 'en' | 'es'): string {
  // Build the date in local time. `new Date('YYYY-MM-DD')` parses as UTC and
  // shifts back a full month once rendered in a negative-offset timezone.
  const [year, month] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1, 1);
  return date.toLocaleDateString(language === 'en' ? 'en-US' : 'es-ES', {
    year: 'numeric',
    month: 'short',
  });
}

export function Experience() {
  const { language, t } = useLanguage();
  const [ref, isVisible] = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="experience"
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
          {t.experience.title}
        </h2>

        <div className="space-y-4">
          {experiences.map((exp) => {
            const hasLink = Boolean(exp.companyUrl);
            const Tag = hasLink ? 'a' : 'div';
            const linkProps = hasLink
              ? {
                  href: exp.companyUrl,
                  target: '_blank' as const,
                  rel: 'noopener noreferrer',
                }
              : {};

            return (
              <Tag
                key={exp.id}
                {...linkProps}
                className={`group block rounded-lg p-4 -mx-4 hover:bg-surface/50 transition-all ${
                  hasLink ? 'cursor-pointer' : ''
                }`}
              >
                {/* Date on top */}
                <span className="text-xs font-mono text-text-muted mb-2 block">
                  {formatDate(exp.startDate, language)} —{' '}
                  {exp.endDate
                    ? formatDate(exp.endDate, language)
                    : language === 'en'
                      ? 'Present'
                      : 'Actualidad'}
                </span>

                {/* Role */}
                <h3 className="font-medium text-text-primary group-hover:text-accent transition-colors flex items-center gap-2">
                  {exp.role[language]}
                  {hasLink && (
                    <ExternalLink
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-accent shrink-0"
                    />
                  )}
                </h3>

                {/* Company */}
                <span className="text-sm text-text-secondary">
                  {exp.company}
                </span>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed mt-2">
                  {exp.description[language]}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-full bg-accent-subtle text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
