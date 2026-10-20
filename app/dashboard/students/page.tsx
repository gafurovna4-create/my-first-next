import type { Metadata } from "next";
import Link from "next/link";
import { students } from "@/app/lib/students";

export const metadata: Metadata = {
  title: "Talabalar",
};

export default function StudentsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Talabalar</h1>
      <ul className="mt-4 space-y-2">
        {students.map((student) => (
          <li key={student.id}>
            <Link
              href={`/dashboard/students/${student.id}`}
              className="underline"
            >
              {student.name}
            </Link>{" "}
            <span className="text-sm">— {student.group}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}