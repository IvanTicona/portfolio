import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'slan',
    company: 'SLAN - Servicios Financieros',
    role: {
      en: 'Backend Developer',
      es: 'Desarrollador Backend',
    },
    description: {
      en: 'Built the backend for the Card Management System, integrating with the UnDosTres backoffice to enable issuance and management of physical and virtual cards. Designed secure RESTful endpoints covering the entire card lifecycle, working in an Agile environment.',
      es: 'Construí el backend del Sistema de Gestión de Tarjetas, integrando con el backoffice de UnDosTres para habilitar la emisión y gestión de tarjetas físicas y virtuales. Diseñé endpoints RESTful seguros para todo el ciclo de vida de la tarjeta, trabajando en un entorno Ágil.',
    },
    startDate: '2025-09',
    endDate: '2026-07',
    tags: ['NestJS', 'REST APIs', 'Backend', 'Fintech'],
  },
  {
    id: 'upb-ta',
    company: 'Universidad Privada Boliviana',
    role: {
      en: 'Teaching Assistant — Data Structures & Algorithms',
      es: 'Auxiliar de Docencia — Estructuras de Datos y Algoritmos',
    },
    description: {
      en: 'Mentored students in advanced Data Structures and Algorithms (Graph Theory, Dynamic Programming). Reviewed complex coding assignments and exams, providing feedback on algorithmic efficiency and code quality during the intensive modular term.',
      es: 'Mentoré estudiantes en Estructuras de Datos y Algoritmos avanzados (Teoría de Grafos, Programación Dinámica). Revisé tareas y exámenes complejos de programación, brindando feedback sobre eficiencia algorítmica y calidad de código durante el módulo intensivo.',
    },
    startDate: '2025-11',
    endDate: '2025-12',
    tags: ['Algorithms', 'Graph Theory', 'Dynamic Programming', 'Mentorship'],
  },
  {
    id: 'waveware',
    company: 'WaveWare Solutions',
    role: {
      en: 'Software Engineer Intern',
      es: 'Ingeniero de Software — Pasantía',
    },
    description: {
      en: 'Led the migration of "COMPASS" from Vue.js to Next.js — a platform for managing entrepreneurship projects via interactive Lean Canvases. Designed MongoDB schemas and Express.js CRUD endpoints. Engineered AI-powered autocompletion for the Lean Canvas workflow.',
      es: 'Lideré la migración de "COMPASS" de Vue.js a Next.js — una plataforma para gestionar proyectos de emprendimiento con Lean Canvases interactivos. Diseñé schemas en MongoDB y endpoints CRUD con Express.js. Implementé autocompletado con IA para el flujo de Lean Canvas.',
    },
    startDate: '2025-07',
    endDate: '2025-09',
    tags: ['Next.js', 'Vue.js', 'MongoDB', 'Express.js', 'AI'],
  },
];
