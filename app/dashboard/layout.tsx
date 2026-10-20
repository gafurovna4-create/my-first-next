import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-56 border-r p-4">
        <h2 className="mb-4 text-lg font-bold">Dashboard</h2>
        <nav className="flex flex-col gap-2">
          <Link href="/dashboard">Umumiy</Link>
          <Link href="/dashboard/students">Talabalar</Link>
          <Link href="/dashboard/settings">Sozlamalar</Link>
        </nav>
        <Link href="/" className="mt-8 block text-sm">
          ← Saytga qaytish
        </Link>
      </aside>
      <section className="flex-1 p-6">{children}</section>
    </div>
  );
}