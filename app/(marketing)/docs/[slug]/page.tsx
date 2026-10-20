type Props = {
  params: Promise<{ slug?: string[] }>;
};

export default async function DocsPage({ params }: Props) {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    return <main className="p-6"><h1 className="text-2xl font-bold">404 — Sahifa topilmadi</h1></main>;
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Hujjatlar</h1>
      <p className="mt-2">Yo'l: {slug.join(" / ")}</p>
      <p className="text-gray-500">Chuqurlik: {slug.length}</p>
    </main>
  );
}