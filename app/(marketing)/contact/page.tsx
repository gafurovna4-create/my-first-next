import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aloqa",
};

export default function ContactPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Biz bilan bog'laning</h1>
      <ul className="mt-4 space-y-2">
        <li>📞 Telefon: +998 90 123 45 67</li>
        <li>✉️ Email: info@itacademy.uz</li>
      </ul>
    </main>
  );
}