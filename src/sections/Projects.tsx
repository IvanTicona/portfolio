import { ExternalLink } from 'lucide-react';
import { GitHubIcon } from '../components/Icons';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projects } from '../data/projects';

export function Projects() {
  const { language, t } = useLanguage();
  const [ref, isVisible] = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="projects"
      className="mb-16 lg:mb-24 scroll-mt-24"
    >
      <div
        className={`transition-all duration-700 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-5'
        }`}
      >
        <h2 className="text-sm font-mono font-medium uppercase tracking-widest text-accent mb-8">
          {t.projects.title}
        </h2>

        <div className="space-y-2">
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <div
                key={project.id}
                className="group rounded-lg p-4 -mx-4 hover:bg-surface/50 transition-all"
              >
                {/* Title + links */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-text-primary group-hover:text-accent transition-colors flex items-center gap-2">
                    {project.title}
                    {project.liveUrl && (
                      <ExternalLink
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity text-accent shrink-0"
                      />
                    )}
                  </h3>

                  <div className="flex items-center gap-1 shrink-0 ml-4">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer rounded-lg p-2 text-text-muted hover:text-text-primary transition-colors"
                        aria-label={t.projects.viewCode}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <GitHubIcon size={16} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer rounded-lg p-2 text-text-muted hover:text-text-primary transition-colors"
                        aria-label={t.projects.viewProject}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed">
                  {project.description[language]}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-full bg-accent-subtle text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
