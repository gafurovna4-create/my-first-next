"use client";

import { useState, type FormEvent } from "react";

export default function LoginForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Kirish xizmati hali ulanmagan. Bu forma hozircha demo rejimida.");
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <label className="flex flex-col gap-1 text-sm">
        Email
        <input
          className="rounded border p-2"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="name@example.com"
          required
        />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        Parol
        <input
          className="rounded border p-2"
          type="password"
          name="password"
          autoComplete="current-password"
          placeholder="Parolingiz"
          required
        />
      </label>
      <button
        className="cursor-pointer rounded bg-blue-600 p-2 text-white hover:bg-blue-700"
        type="submit"
      >
        Kirish
      </button>
      {message && (
        <p className="text-sm" role="status">
          {message}
        </p>
      )}
    </form>
  );
}