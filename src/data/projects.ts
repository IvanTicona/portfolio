import type { Project } from '../types';
import thenaFeedback from '../assets/projects/feedback-thena.png';
import thenaDashboard from '../assets/projects/dashboard-thena.png';
import thenaLogin from '../assets/projects/login-thena.png';
import marketingGenerated from '../assets/projects/generated-markt-ai.png';
import marketingArchitecture from '../assets/projects/arch-markt-ai.png';

// To add screenshots: drop the files in src/assets/projects/, import them here
// and list them in `images` — they render as thumbnails in that order. Import
// them — never hardcode a path — so Vite prefixes the `base` from
// vite.config.ts and the build fails if a file is missing.
//
//   import cover from '../assets/projects/thena.webp';
//   { id: 'thena', /* ... */, images: [cover] }

export const projects: Project[] = [
  {
    id: 'thena',
    title: 'Thena',
    description: {
      en: 'Agentic AI academic mentorship system. Multi-agent cognitive engine using NestJS and Hexagonal Architecture that pre-evaluates theses with real-time, pedagogically sound feedback. Features a hierarchical RAG pipeline with pgvector querying across 3 contextual layers.',
      es: 'Sistema de mentoría académica con IA agéntica. Motor cognitivo multi-agente con NestJS y Arquitectura Hexagonal que pre-evalúa tesis con feedback pedagógico en tiempo real. Incluye un pipeline RAG jerárquico con pgvector consultando 3 capas contextuales.',
    },
    tags: ['NestJS', 'React', 'PostgreSQL', 'pgvector', 'RAG', 'Clean Architecture'],
    images: [thenaLogin, thenaDashboard, thenaFeedback],
    repoUrl: 'https://github.com/IvanTicona/thena',
    featured: true,
  },
  {
    id: 'gen-ai-marketing',
    title: 'Generative AI Marketing Tool',
    description: {
      en: '1st Place winner in a corporate innovation challenge. Built the frontend for a Generative AI tool in partnership with a Senior Software Architect. Designed the UI with React and Ant Design, translating complex agent configurations into a user-friendly dashboard under strict deadlines.',
      es: '1er Lugar en un desafío de innovación corporativa. Construí el frontend de una herramienta de IA Generativa junto a un Arquitecto de Software Senior. Diseñé la UI con React y Ant Design, traduciendo configuraciones complejas de agentes en un dashboard intuitivo bajo plazos ajustados.',
    },
    tags: ['React', 'Ant Design', 'Generative AI', '1st Place'],
    images: [marketingGenerated, marketingArchitecture],
    featured: true,
  },
  {
    id: 'isc-system',
    title: 'ISC System Web',
    description: {
      en: 'University platform to digitize the entire graduation paperwork process. Served as Frontend Developer & DevOps, streamlining administrative workflows for the Systems Engineering department.',
      es: 'Plataforma universitaria para digitalizar todo el proceso de trámites de graduación. Trabajé como Desarrollador Frontend y DevOps, optimizando flujos administrativos para el departamento de Ingeniería de Sistemas.',
    },
    tags: ['React', 'DevOps', 'Docker', 'AWS'],
    featured: true,
  },
  {
    id: 'learning-agent',
    title: 'Learning Agent',
    description: {
      en: 'AI-assisted study tool that generates automated tests and interview simulations from course materials. Led the Frontend & QA teams, ensuring quality across the entire user experience.',
      es: 'Herramienta de estudio asistida por IA que genera tests automáticos y simulaciones de entrevistas a partir de material de cursos. Lideré los equipos de Frontend y QA, asegurando calidad en toda la experiencia de usuario.',
    },
    tags: ['React', 'AI', 'Testing', 'QA'],
    featured: true,
  },
];
