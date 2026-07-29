import Link from "next/link";
import { notFound } from "next/navigation";
import { categories } from "@/data/categories";

export function generateStaticParams() {
  return categories.map((category) => ({ kategori: category.slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ kategori: string }> }) {
  const { kategori } = await params;
  const category = categories.find((item) => item.slug === kategori);
  if (!category) notFound();

  const featured = kategori === "sgk-emeklilik"
    ? [{ slug: "emekli-maasi-yeniden-hesaplama", title: "Emekli Maaşı Yeniden Hesaplama Dilekçesi", description: "Aylık hesabına esas hizmet ve kazanç bilgilerinin yeniden incelenmesi için." }]
    : [{ slug: "ornek-dilekce", title: `${category.title} Örnek Dilekçesi`, description: "Bu kategori için örnek taslak akışı yakında genişletilecektir." }];

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <Link href="/dilekceler" className="text-sm font-semibold text-accent">← Tüm kategoriler</Link>
      <h1 className="mt-5 font-serif text-4xl font-semibold text-primary">{category.title}</h1>
      <p className="mt-4 max-w-2xl text-slate-600">{category.description}</p>
      <div className="mt-10 grid gap-5">
        {featured.map((item) => (
          <Link key={item.slug} href={`/dilekce/${item.slug}`} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-lg font-semibold text-primary">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
