export interface StackItem {
  name: string;
  icon?: string;
}

export interface StackCategory {
  key: string; // nueva: clave para mapear a traducciones
  items: StackItem[];
}

export const stack: StackCategory[] = [
  {
    key: "languages",
    items: [
      { name: "TypeScript", icon: "simple-icons:typescript" },
      { name: "JavaScript (ES6+)", icon: "simple-icons:javascript" },
    ],
  },
  {
    key: "frontend",
    items: [
      { name: "React", icon: "simple-icons:react" },
      { name: "Next.js", icon: "simple-icons:nextdotjs" },
      { name: "Astro", icon: "simple-icons:astro" },
      { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
      { name: "Chakra UI", icon: "simple-icons:chakraui" },
      { name: "shadcn/ui", icon: "simple-icons:shadcnui" },
    ],
  },
  {
    key: "stateData",
    items: [
      { name: "TanStack Query", icon: "simple-icons:reactquery" },
      { name: "Zustand" },
      { name: "React Hook Form", icon: "simple-icons:reacthookform" },
      { name: "Zod", icon: "simple-icons:zod" },
    ],
  },
  {
    key: "backend",
    items: [
      { name: "NestJS", icon: "simple-icons:nestjs" },
      { name: "Prisma", icon: "simple-icons:prisma" },
      { name: "PostgreSQL", icon: "simple-icons:postgresql" },
    ],
  },
  {
    key: "cloudTools",
    items: [
      {
        name: "AWS Cloud Practitioner",
        icon: "simple-icons:amazonwebservices",
      },
      { name: "Supabase", icon: "simple-icons:supabase" },
      { name: "Firebase", icon: "simple-icons:firebase" },
      { name: "Vercel", icon: "simple-icons:vercel" },
      { name: "Git", icon: "simple-icons:git" },
    ],
  },
];
