import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStudentById } from "@/app/lib/students";
import FavoriteButton from "./FavoriteButton";

type StudentPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: StudentPageProps): Promise<Metadata> {
  const { id } = await params;
  const student = getStudentById(Number(id));

  return {
    title: student ? student.name : "Talaba topilmadi",
  };
}

export default async function StudentPage({ params }: StudentPageProps) {
  const { id } = await params;
  const student = getStudentById(Number(id));

  if (!student) {
    notFound();
  }

  return (
    <div>
      <Link href="/dashboard/students" className="text-sm underline">
        ← Barcha talabalar
      </Link>

      <div className="mt-4 flex items-center gap-3">
        <h1 className="text-2xl font-bold">{student.name}</h1>
        <FavoriteButton />
      </div>
      <div className="mt-4 space-y-1">
        <p>Guruh: {student.group}</p>
        <p>Email: {student.email}</p>
        <p>O'rtacha baho: {student.grade}</p>
      </div>
    </div>
  );
}