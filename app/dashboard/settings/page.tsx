import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sozlamalar",
};

export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Sozlamalar</h1>
      <p className="mt-2">Profil va hisob sozlamalari shu yerda bo'ladi.</p>
    </div>
  );
}