export interface Project {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  links: {
    demo?: string;
    repo?: string;
  };
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "hi-community-league",
    name: "Hi Community League",
    description:
      "Plataforma full-stack para gestionar ligas de fútbol amateur: dashboard administrativo con CRUD de equipos, jugadores y partidos, más un sitio público con sincronización en tiempo real. Proyecto personal donde junto código y fútbol.",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    links: {
      demo: "https://hi-community-league.vercel.app/",
    },
    featured: true,
  },
  {
    slug: "elegangster-barber-studio",
    name: "Elegangster Barber Studio",
    description:
      "Sistema de agenda digital para una barbería, desarrollado en Michelada.io. Autenticación con JWT, sistema de componentes accesibles con Chakra UI y optimización de performance vía code splitting.",
    stack: ["Next.js", "TypeScript", "Chakra UI", "JWT"],
    links: {
      demo: "https://www.elegangsterbarberstudio.com/",
      repo: "https://github.com/mindticas/mindticas2025-front",
    },
  },
  {
    slug: "colmap",
    name: "Colmap · OohYeahMedia",
    description:
      "Sistema de gestión de campañas publicitarias urbanas para una agencia de marketing. Landing, dashboard administrativo, geolocalización con Google Maps API y almacenamiento en tiempo real con Firebase.",
    stack: ["Next.js", "TypeScript", "Google Maps", "Firebase"],
    links: {
      demo: "https://oohyeahmedia.com/",
      repo: "https://github.com/diegoavalosx/colmap",
    },
  },
  {
    slug: "notas-nestjs",
    name: "Notas con etiquetas",
    description:
      "Primer proyecto full-stack con backend dedicado. API REST con NestJS, Prisma y PostgreSQL; frontend en React. Reto técnico que marcó mi salto del frontend puro al stack completo.",
    stack: ["NestJS", "Prisma", "PostgreSQL", "React"],
    links: {},
  },
];
