import Link from "next/link";

export default function StudentNotFound() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Talaba topilmadi</h1>
      <p className="mt-2">Bunday ID'li talaba mavjud emas.</p>
      <Link href="/dashboard/students" className="mt-4 inline-block underline">
        ← Talabalar ro'yxatiga qaytish
      </Link>
    </div>
  );
}