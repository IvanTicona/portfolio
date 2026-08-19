import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { GitHubIcon } from '../components/Icons';
import { Lightbox } from '../components/Lightbox';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projects } from '../data/projects';

const ACHIEVEMENT_TAGS = ['1st Place'];

export function Projects() {
  const { language, t } = useLanguage();
  const [ref, isVisible] = useScrollReveal<HTMLElement>();
  const [gallery, setGallery] = useState<{ id: string; index: number } | null>(
    null,
  );

  const openProject = gallery
    ? projects.find((p) => p.id === gallery.id)
    : undefined;

  return (
    <section
      ref={ref}
      id="projects"
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
          {t.projects.title}
        </h2>

        <div className="space-y-4">
          {projects
            .filter((p) => p.featured)
            .map((project) => {
              const primaryUrl = project.liveUrl || project.repoUrl;
              const images = project.images ?? [];

              return (
                <div
                  key={project.id}
                  className="group relative rounded-lg p-4 -mx-4 hover:bg-surface/50 transition-all"
                >
                  {/* Invisible link covering the whole card for a11y */}
                  {primaryUrl && (
                    <a
                      href={primaryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-10"
                      aria-label={`${project.title} — ${project.liveUrl ? t.projects.viewProject : t.projects.viewCode}`}
                    />
                  )}

                  {/* Title + links */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-text-primary group-hover:text-accent transition-colors flex items-center gap-2">
                      {project.title}
                      {primaryUrl && (
                        <ExternalLink
                          size={12}
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-accent shrink-0"
                        />
                      )}
                    </h3>

                    <div className="relative z-20 flex items-center gap-1 shrink-0 ml-4">
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-pointer rounded-lg p-2 text-text-muted hover:text-text-primary transition-colors"
                          aria-label={t.projects.viewCode}
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
                        className={`text-xs font-mono px-2.5 py-1 rounded-full ${
                          ACHIEVEMENT_TAGS.includes(tag)
                            ? 'bg-cta/10 text-cta border border-cta/20'
                            : 'bg-accent-subtle text-accent'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Screenshots. z-20 lifts them above the full-card link
                      overlay, otherwise the click would follow the link. */}
                  {images.length > 0 && (
                    <div className="relative z-20 mt-4 grid grid-cols-3 gap-2">
                      {images.map((src, index) => (
                        <button
                          key={src}
                          type="button"
                          onClick={() =>
                            setGallery({ id: project.id, index })
                          }
                          aria-label={t.projects.imageAlt
                            .replace('{title}', project.title)
                            .replace('{n}', String(index + 1))
                            .replace('{total}', String(images.length))}
                          className="cursor-pointer overflow-hidden rounded border border-border hover:border-accent/50 transition-colors"
                        >
                          <img
                            src={src}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            width={320}
                            height={180}
                            className="w-full aspect-video object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>

      {gallery && openProject?.images && (
        <Lightbox
          images={openProject.images}
          title={openProject.title}
          index={gallery.index}
          onIndexChange={(index) => setGallery({ ...gallery, index })}
          onClose={() => setGallery(null)}
        />
      )}
    </section>
  );
}
