import Link from "next/link";
import { notFound } from "next/navigation";

const petitions = {
  "emekli-maasi-yeniden-hesaplama": {
    title: "Emekli Maaşı Yeniden Hesaplama Dilekçesi",
    authority: "Sosyal Güvenlik Kurumu Başkanlığı",
    when: "Emekli aylığınızın hesabında hizmet süresi, prime esas kazanç veya dönem bilgilerinin eksik ya da hatalı olduğunu düşünüyorsanız kullanılır.",
    required: ["Ad soyad", "T.C. kimlik numarası", "İletişim bilgileri", "Başvuru tarihi", "Açıklama ve talep"],
  },
};

export default async function PetitionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const petition = petitions[slug as keyof typeof petitions];
  if (!petition) notFound();

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold text-accent">{petition.authority}</p>
      <h1 className="mt-3 font-serif text-4xl font-semibold text-primary">{petition.title}</h1>
      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px]">
        <div className="space-y-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-semibold text-primary">Ne zaman kullanılır?</h2><p className="mt-3 leading-7 text-slate-600">{petition.when}</p></div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-semibold text-primary">Hangi bilgiler gerekir?</h2><ul className="mt-4 space-y-2 text-slate-600">{petition.required.map((item) => <li key={item}>• {item}</li>)}</ul></div>
        </div>
        <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft lg:sticky lg:top-24 lg:self-start">
          <h2 className="font-semibold text-primary">Taslağını hazırlamaya başla</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">Yönlendirmeli formu doldur ve dilekçe önizlemeni kontrol et.</p>
          <Link href={`/dilekce/${slug}/hazirla`} className="mt-6 block rounded-xl bg-primary px-4 py-3 text-center font-semibold text-white">Dilekçeyi Hazırla</Link>
        </aside>
      </div>
    </section>
  );
}
