import { useLanguage } from '../hooks/useLanguage';
import { useScrollReveal } from '../hooks/useScrollReveal';

const TECH_STACK = [
  'TypeScript', 'JavaScript', 'C++', 'Python',
  'React', 'Next.js', 'Flutter', 'Tailwind CSS',
  'NestJS', 'Express.js', 'Node.js', 'Prisma',
  'PostgreSQL', 'MongoDB', 'Docker', 'AWS',
];

export function About() {
  const { t } = useLanguage();
  const [ref, isVisible] = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="about"
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
          {t.about.title}
        </h2>

        <div className="space-y-4">
          {t.about.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`leading-relaxed ${
                index === 0
                  ? 'text-text-primary'
                  : 'text-sm text-text-secondary'
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-2 mt-8">
          {TECH_STACK.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-3 py-1.5 rounded-full bg-accent-subtle text-accent border border-accent/10 transition-colors hover:bg-accent/20 hover:border-accent/25"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
