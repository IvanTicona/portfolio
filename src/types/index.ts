export type Language = 'en' | 'es';

export interface Translation {
  nav: {
    about: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    description: string;
    cta: string;
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  experience: {
    title: string;
  };
  projects: {
    title: string;
    viewProject: string;
    viewCode: string;
  };
  contact: {
    title: string;
    description: string;
    emailMe: string;
    copyEmail: string;
    copied: string;
  };
  footer: {
    builtWith: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: Record<Language, string>;
  tags: string[];
  imageUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: Record<Language, string>;
  description: Record<Language, string>;
  startDate: string;
  endDate: string | null;
  tags: string[];
  companyUrl?: string;
}
