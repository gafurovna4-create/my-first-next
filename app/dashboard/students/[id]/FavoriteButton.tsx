"use client";

import { useState } from "react";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      onClick={() => setIsFavorite(!isFavorite)}
      className="mt-4 px-4 py-2 border rounded"
    >
      {isFavorite ? "⭐ Tanlangan" : "☆ Tanlanmagan"}
    </button>
  );
}