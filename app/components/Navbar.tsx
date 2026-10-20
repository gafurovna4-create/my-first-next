import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-6 border-b px-6 py-4">
      <Link href="/">Bosh sahifa</Link>
      <Link href="/about">Biz haqimizda</Link>
      <Link href="/courses">Kurslar</Link>
      <Link href="/contact">Aloqa</Link>
    </nav>
  );
}