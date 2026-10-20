import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { courses, getCourseBySlug, levelLabels } from "@/app/lib/courses";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

type CoursePageProps = {
  params: Promise<{ slug: string }>;
};

	export async function generateMetadata({
	  params,
	}: CoursePageProps): Promise<Metadata> {
	  const { slug } = await params;
	  const course = getCourseBySlug(slug);
	
	  return {
	    title: course ? course.title : "Kurs topilmadi",
	    description: course?.description,
	  };
	}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="p-6">
      <Link href="/courses" className="text-sm underline">
        ← Barcha kurslar
      </Link>
      <h1 className="mt-4 text-3xl font-bold">{course.title}</h1>
      <p className="mt-2 text-sm">
        Davomiyligi: {course.duration} · Daraja: {levelLabels[course.level]}
      </p>
      <p className="mt-4">{course.description}</p>
      <h2 className="mt-6 text-xl font-semibold">Mavzular</h2>
      <ul className="mt-2 list-disc pl-6">
        {course.topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
    </main>
  );
}