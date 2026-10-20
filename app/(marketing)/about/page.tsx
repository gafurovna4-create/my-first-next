import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biz haqimizda",
  description: "IT Academy haqida ma'lumot",
};

export default function AboutPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Biz haqimizda</h1>
      <p className="mt-4">
        Biz IT Academy'miz. Bu yerda zamonaviy web texnologiyalarni o'rgatamiz.
      </p>
    </main>
  );
}