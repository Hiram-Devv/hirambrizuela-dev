import type { StackItem } from "./stack";

export interface Project {
  slug: string;
  name: string;
  description: string;
  stack: StackItem[];
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
    stack: [
      { name: "Next.js", icon: "simple-icons:nextdotjs" },
      { name: "TypeScript", icon: "simple-icons:typescript" },
      { name: "Supabase", icon: "simple-icons:supabase" },
      { name: "Tailwind", icon: "simple-icons:tailwindcss" },
    ],
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
    stack: [
      { name: "Next.js", icon: "simple-icons:nextdotjs" },
      { name: "TypeScript", icon: "simple-icons:typescript" },
      { name: "Chakra UI", icon: "simple-icons:chakraui" },
      { name: "JWT" },
    ],
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
    stack: [
      { name: "React", icon: "simple-icons:react" },
      { name: "TypeScript", icon: "simple-icons:typescript" },
      { name: "Google Maps", icon: "simple-icons:googlemaps" },
      { name: "Firebase", icon: "simple-icons:firebase" },
    ],
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
    stack: [
      { name: "NestJS", icon: "simple-icons:nestjs" },
      { name: "Prisma", icon: "simple-icons:prisma" },
      { name: "PostgreSQL", icon: "simple-icons:postgresql" },
      { name: "React", icon: "simple-icons:react" },
    ],
    links: {},
  },
];
