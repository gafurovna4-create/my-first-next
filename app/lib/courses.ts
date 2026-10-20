
export type Course = {
  id: number;
  slug: string;
  title: string;
  duration: string;
  level: "beginner" | "intermediate";
  description: string;
  topics: string[];
};

export const levelLabels: Record<Course["level"], string> = {
  beginner: "Boshlang'ich",
  intermediate: "O'rta",
};

export const courses: Course[] = [
  {
    id: 1,
    slug: "javascript",
    title: "JavaScript asoslari",
    duration: "2 oy",
    level: "beginner",
    description:
      "Dasturlashni noldan boshlaydiganlar uchun: asosiy tushunchalar va birinchi mini-loyihalar.",
    topics: [
      "O'zgaruvchilar va ma'lumot turlari",
      "Funksiyalar",
      "DOM bilan ishlash",
      "Promise va async/await",
    ],
  },
  {
    id: 2,
    slug: "react",
    title: "React",
    duration: "3 oy",
    level: "intermediate",
    description:
      "Komponentlar, hooklar va real loyiha bilan zamonaviy interfeyslar yaratish.",
    topics: [
      "JSX va komponentlar",
      "useState va useEffect",
      "React Router",
      "TanStack Query",
    ],
  },
  {
    id: 3,
    slug: "nextjs",
    title: "Next.js",
    duration: "2 oy",
    level: "intermediate",
    description:
      "React asosida to'liq (full-stack) ilovalar: routing, serverda render va deploy.",
    topics: [
      "App Router va layout'lar",
      "Dinamik marshrutlar",
      "Server va Client Component'lar",
      "Deploy",
    ],
  },
  {
    id: 4,
    slug: "typescript",
    title: "TypeScript",
    duration: "1 oy",
    level: "beginner",
    description: "TypeScript asoslari va tiplashtirish",
    topics: ["Type basics", "Interfaces", "Generics", "React with TS"],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}