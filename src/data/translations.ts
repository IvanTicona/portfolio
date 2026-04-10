import type { Translation } from '../types';

export const en: Translation = {
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm",
    role: 'Fullstack Developer',
    description:
      'Systems Engineering student, ICPC Latin America Regionalist, and competitive programmer. I build scalable systems with clean architecture and a passion for solving complex problems.',
    cta: 'View my work',
  },
  about: {
    title: 'About me',
    paragraphs: [
      "I'm a performance-driven Fullstack Engineer and Systems Engineering student with a strong foundation in algorithms and data structures. As an ICPC Latin America Regionalist (Top 8 National), I specialize in solving complex edge cases and optimizing logic.",
      "I've modernized legacy systems (Vue to Next.js), built production-ready Fintech applications, and I'm currently implementing Clean Architecture in NestJS while exploring RAG systems with embeddings and vector search to solve real-world academic challenges.",
      "When I'm not coding, you'll find me mentoring students in advanced algorithms, competing in programming contests, or pushing the boundaries of what AI can do in education.",
    ],
  },
  experience: {
    title: 'Experience',
  },
  projects: {
    title: 'Projects',
    viewProject: 'Live demo',
    viewCode: 'Source code',
  },
  contact: {
    title: "Let's connect",
    description:
      "I'm always open to new opportunities, interesting conversations, and challenging problems. Whether it's a Fintech project, an AI system, or competitive programming — let's talk.",
    emailMe: 'Send me an email',
    copyEmail: 'Copy email',
    copied: 'Copied!',
  },
  footer: {
    builtWith: 'Built with React & Tailwind CSS',
  },
};

export const es: Translation = {
  nav: {
    about: 'Sobre mí',
    experience: 'Experiencia',
    projects: 'Proyectos',
    contact: 'Contacto',
  },
  hero: {
    greeting: 'Hola, soy',
    role: 'Desarrollador Fullstack',
    description:
      'Estudiante de Ingeniería de Sistemas, ICPC Latin America Regionalist y programador competitivo. Construyo sistemas escalables con arquitectura limpia y pasión por resolver problemas complejos.',
    cta: 'Ver mi trabajo',
  },
  about: {
    title: 'Sobre mí',
    paragraphs: [
      'Soy un Ingeniero Fullstack orientado al rendimiento y estudiante de Ingeniería de Sistemas con una base sólida en algoritmos y estructuras de datos. Como ICPC Latin America Regionalist (Top 8 Nacional), me especializo en resolver casos borde complejos y optimizar lógica.',
      'He modernizado sistemas legacy (Vue a Next.js), construido aplicaciones Fintech listas para producción, y actualmente estoy implementando Clean Architecture en NestJS mientras exploro sistemas RAG con embeddings y búsqueda vectorial para resolver desafíos académicos reales.',
      'Cuando no estoy programando, me encontrarás mentoreando estudiantes en algoritmos avanzados, compitiendo en concursos de programación o empujando los límites de lo que la IA puede hacer en educación.',
    ],
  },
  experience: {
    title: 'Experiencia',
  },
  projects: {
    title: 'Proyectos',
    viewProject: 'Ver demo',
    viewCode: 'Código fuente',
  },
  contact: {
    title: 'Conectemos',
    description:
      'Siempre estoy abierto a nuevas oportunidades, conversaciones interesantes y problemas desafiantes. Ya sea un proyecto Fintech, un sistema de IA o programación competitiva — hablemos.',
    emailMe: 'Envíame un email',
    copyEmail: 'Copiar email',
    copied: '¡Copiado!',
  },
  footer: {
    builtWith: 'Hecho con React & Tailwind CSS',
  },
};

export const translations = { en, es } as const;
