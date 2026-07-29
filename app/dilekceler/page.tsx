import Link from "next/link";
import { categories } from "@/data/categories";

export const metadata = { title: "Dilekçeler" };

export default function PetitionsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold text-accent">Dilekçe kütüphanesi</p>
      <h1 className="mt-3 font-serif text-4xl font-semibold text-primary">İhtiyacına uygun dilekçeyi seç</h1>
      <p className="mt-4 max-w-2xl text-slate-600">Kategoriyi aç, dilekçe türünü incele ve yönlendirmeli form ile taslağını hazırla.</p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Link key={category.slug} href={`/dilekceler/${category.slug}`} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="font-semibold text-primary">{category.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
