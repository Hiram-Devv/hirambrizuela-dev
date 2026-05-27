export interface StackItem {
  name: string;
  icon?: string;
}

export interface StackCategory {
  name: string;
  items: StackItem[];
}

export const stack: StackCategory[] = [
  {
    name: "Lenguajes",
    items: [
      { name: "TypeScript", icon: "simple-icons:typescript" },
      { name: "JavaScript (ES6+)", icon: "simple-icons:javascript" },
    ],
  },
  {
    name: "Frontend",
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
    name: "Estado y datos",
    items: [
      { name: "TanStack Query", icon: "simple-icons:reactquery" },
      { name: "Zustand" },
      { name: "React Hook Form", icon: "simple-icons:reacthookform" },
      { name: "Zod", icon: "simple-icons:zod" },
    ],
  },
  {
    name: "Backend",
    items: [
      { name: "NestJS", icon: "simple-icons:nestjs" },
      { name: "Prisma", icon: "simple-icons:prisma" },
      { name: "PostgreSQL", icon: "simple-icons:postgresql" },
    ],
  },
  {
    name: "Cloud y herramientas",
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
