import Link from "next/link";

export default function CourseNotFound() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Kurs topilmadi 😕</h1>
      <p className="mt-2">Bunday kurs mavjud emas yoki o'chirilgan.</p>
      <Link href="/courses" className="mt-4 inline-block underline">
        ← Barcha kurslarga qaytish
      </Link>
    </main>
  );
}