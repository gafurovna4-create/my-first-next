import type { Metadata } from "next";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Kirish",
};

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-bold">Tizimga kirish</h1>
      <LoginForm />
    </div>
  );
}