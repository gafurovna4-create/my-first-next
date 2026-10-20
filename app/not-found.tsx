import Link from "next/link";

export default function NotFound() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">404 — Sahifa topilmadi</h1>
      <Link href="/" className="mt-4 inline-block underline">
        ← Bosh sahifaga qaytish
      </Link>
    </main>
  );
}