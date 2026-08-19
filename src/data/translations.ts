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
      'Systems Engineering student and ICPC Latin America regionalist. Most recently: a RAG system in NestJS, the backend of a fintech card-issuing platform, and a Vue-to-Next.js migration.',
    cta: 'View my work',
  },
  about: {
    title: 'About me',
    paragraphs: [
      "I'm a Systems Engineering student and a competitive programmer. I made it to the ICPC Latin America regional (Top 8 national team), and I was a teaching assistant for Data Structures & Algorithms at UPB, reviewing assignments and exams alongside the lead professor.",
      'At WaveWare I migrated COMPASS from Vue.js to Next.js and designed its MongoDB schemas and Express endpoints. At SLAN I worked on the backend of the Card Management System: REST APIs covering the full card lifecycle, integrated with the UnDosTres backoffice for physical and virtual card issuance.',
      "Right now I'm working on Thena: an academic mentorship system in NestJS with Hexagonal Architecture and a RAG pipeline over pgvector. It's where I'm learning embeddings and vector search by actually building with them.",
    ],
  },
  experience: {
    title: 'Experience',
  },
  projects: {
    title: 'Projects',
    viewProject: 'Live demo',
    viewCode: 'Source code',
    openGallery: 'view screenshots',
    closeGallery: 'Close gallery',
    previousImage: 'Previous image',
    nextImage: 'Next image',
    imageAlt: '{title} — screenshot {n} of {total}',
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
    builtWith: 'Designed & Built by Dorian Ticona',
    inspired: 'Loosely inspired by',
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
      'Estudiante de Ingeniería de Sistemas y regionalista de ICPC Latinoamérica. Lo más reciente: un sistema RAG en NestJS, el backend de una plataforma fintech de emisión de tarjetas y una migración de Vue a Next.js.',
    cta: 'Ver mi trabajo',
  },
  about: {
    title: 'Sobre mí',
    paragraphs: [
      'Estudio Ingeniería de Sistemas y compito en programación. Llegué al regional de ICPC Latinoamérica (Top 8 nacional) y fui auxiliar de Estructuras de Datos y Algoritmos en la UPB, revisando tareas y exámenes junto al docente titular.',
      'En WaveWare migré COMPASS de Vue.js a Next.js y diseñé sus schemas de MongoDB y endpoints en Express. En SLAN trabajé en el backend del Sistema de Gestión de Tarjetas: APIs REST para todo el ciclo de vida de la tarjeta, integradas con el backoffice de UnDosTres para emisión de tarjetas físicas y virtuales.',
      'Ahora estoy trabajando en Thena: un sistema de mentoría académica en NestJS con Arquitectura Hexagonal y un pipeline RAG sobre pgvector. Es donde estoy aprendiendo embeddings y búsqueda vectorial construyendo con ellos.',
    ],
  },
  experience: {
    title: 'Experiencia',
  },
  projects: {
    title: 'Proyectos',
    viewProject: 'Ver demo',
    viewCode: 'Código fuente',
    openGallery: 'ver capturas',
    closeGallery: 'Cerrar galería',
    previousImage: 'Imagen anterior',
    nextImage: 'Imagen siguiente',
    imageAlt: '{title} — captura {n} de {total}',
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
    builtWith: 'Diseñado y construido por Dorian Ticona',
    inspired: 'Inspirado en',
  },
};

export const translations = { en, es } as const;
