import type { StackItem } from "./stack";

export interface LocalizedText {
  es: string;
  en: string;
}

export interface Project {
  slug: string;
  name: string;
  description: LocalizedText;
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
    description: {
      es: "Plataforma full-stack para gestionar ligas de fútbol amateur: dashboard administrativo con CRUD de equipos, jugadores y partidos, más un sitio público con sincronización en tiempo real. Proyecto personal donde junto código y fútbol.",
      en: "Full-stack platform to manage amateur football leagues: admin dashboard with CRUD for teams, players and matches, plus a public site with real-time sync. Personal project where I combine code and football.",
    },
    stack: [
      { name: "Next.js", icon: "simple-icons:nextdotjs" },
      { name: "TypeScript", icon: "simple-icons:typescript" },
      { name: "Supabase", icon: "simple-icons:supabase" },
      { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
    ],
    links: {
      demo: "https://hi-community-league.vercel.app/",
    },
    featured: true,
  },
  {
    slug: "elegangster-barber-studio",
    name: "Elegangster Barber Studio",
    description: {
      es: "Sistema de agenda digital para una barbería, desarrollado en Michelada.io. Autenticación con JWT, sistema de componentes accesibles con Chakra UI y optimización de performance vía code splitting.",
      en: "Digital booking system for a barbershop, developed at Michelada.io. JWT authentication, accessible component system with Chakra UI and performance optimization via code splitting.",
    },
    stack: [
      { name: "Next.js", icon: "simple-icons:nextdotjs" },
      { name: "TypeScript", icon: "simple-icons:typescript" },
      { name: "Chakra UI", icon: "simple-icons:chakraui" },
      { name: "JWT", icon: "simple-icons:jsonwebtokens" },
    ],
    links: {
      demo: "https://www.elegangsterbarberstudio.com/",
      repo: "https://github.com/mindticas/mindticas2025-front",
    },
  },
  {
    slug: "colmap",
    name: "Colmap · OohYeahMedia",
    description: {
      es: "Sistema de gestión de campañas publicitarias urbanas para una agencia de marketing. Landing, dashboard administrativo, geolocalización con Google Maps API y almacenamiento en tiempo real con Firebase.",
      en: "Urban advertising campaign management system for a marketing agency. Landing, admin dashboard, geolocation with Google Maps API and real-time storage with Firebase.",
    },
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
    description: {
      es: "Primer proyecto full-stack con backend dedicado. API REST con NestJS, Prisma y PostgreSQL; frontend en React. Reto técnico que marcó mi salto del frontend puro al stack completo.",
      en: "First full-stack project with a dedicated backend. REST API with NestJS, Prisma and PostgreSQL; React frontend. Technical challenge that marked my leap from pure frontend to the full stack.",
    },
    stack: [
      { name: "NestJS", icon: "simple-icons:nestjs" },
      { name: "Prisma", icon: "simple-icons:prisma" },
      { name: "PostgreSQL", icon: "simple-icons:postgresql" },
      { name: "React", icon: "simple-icons:react" },
    ],
    links: {},
  },
];
