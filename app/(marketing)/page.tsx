import Link from "next/link";
import { courses } from "@/app/lib/courses";

type CoursesPageProps = {
  searchParams: Promise<{ level?: string }>;
};

export default async function CoursesPage({ searchParams }: CoursesPageProps) {
  const { level } = await searchParams;

  const filteredCourses = courses.filter((course) => {
    if (!level) return true;
    return course.level === level;
  });

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Kurslarimiz</h1>
      
      {/* Filtr havolalari */}
      <div className="flex gap-4 my-4">
        <Link href="/courses" className="underline text-blue-600">Hammasi</Link>
        <Link href="/courses?level=beginner" className="underline text-blue-600">Boshlang'ich</Link>
        <Link href="/courses?level=intermediate" className="underline text-blue-600">O'rta</Link>
      </div>

      <ul className="mt-4 space-y-4">
        {filteredCourses.map((course) => (
          <li key={course.id} className="border p-4 rounded">
            <h2 className="text-xl font-bold">{course.title}</h2>
            <p>{course.description}</p>
            <span className="text-sm text-gray-500">Daraja: {course.level}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}