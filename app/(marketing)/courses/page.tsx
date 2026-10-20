import Link from "next/link";
import { courses, levelLabels } from "@/app/lib/courses";

type CoursesPageProps = {
  searchParams: Promise<{ level?: string | string[] }>;
};

export default async function CoursesPage({ searchParams }: CoursesPageProps) {
  const { level } = await searchParams;
  const selectedLevel = Array.isArray(level) ? level[0] : level;
  const filteredCourses = courses.filter(
    (course) => !selectedLevel || course.level === selectedLevel,
  );

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Kurslarimiz</h1>
      <nav aria-label="Daraja bo‘yicha filter" className="mt-4 flex gap-4">
        <Link href="/courses">Hammasi</Link>
        <Link href="/courses?level=beginner">Boshlang‘ich</Link>
        <Link href="/courses?level=intermediate">O‘rta</Link>
      </nav>
      <ul className="mt-4 space-y-3">
        {filteredCourses.map((course) => (
          <li key={course.id}>
            <Link
              className="font-semibold underline"
              href={`/courses/${course.slug}`}
            >
              {course.title}
            </Link>
            <span className="ml-2 text-sm">
              {course.duration} · {levelLabels[course.level]}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}