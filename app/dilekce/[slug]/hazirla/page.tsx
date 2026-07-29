import { notFound } from "next/navigation";
import { PrepareForm } from "@/components/forms/PrepareForm";

export default async function PreparePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug !== "emekli-maasi-yeniden-hesaplama") notFound();

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold text-accent">Dilekçe hazırlama ekranı</p>
      <h1 className="mt-3 font-serif text-4xl font-semibold text-primary">Emekli Maaşı Yeniden Hesaplama Dilekçesi</h1>
      <p className="mt-4 max-w-3xl text-slate-600">Bilgilerini adım adım doldur. Sağdaki önizleme verdiğin bilgilere göre güncellenir.</p>
      <div className="mt-10"><PrepareForm /></div>
      <div className="mt-10 rounded-2xl border border-gold/30 bg-gold/10 p-5 text-sm leading-6 text-slate-700">
        OnlineDilekçe, kullanıcıların verdiği bilgiler doğrultusunda hazır dilekçe taslakları oluşturur. Sunulan içerikler hukuki danışmanlık veya avukatlık hizmeti değildir. Oluşturulan dilekçenin ilgili olaya ve güncel mevzuata uygunluğunun kontrol edilmesi kullanıcının sorumluluğundadır. Gerekli durumlarda bir avukattan hukuki destek alınması önerilir.
      </div>
    </section>
  );
}
