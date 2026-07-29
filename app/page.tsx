import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, ShieldCheck } from "lucide-react";
import { categories } from "@/data/categories";

const steps = [
  ["1", "Dilekçeni seç", "İhtiyacına uygun hazır şablonu bul."],
  ["2", "Bilgilerini doldur", "Yalın ve yönlendirmeli formu tamamla."],
  ["3", "Taslağını indir", "Belgeni kontrol et ve çıktını al."],
];

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden border-b border-slate-200">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-28">
          <div>
            <span className="inline-flex rounded-full border border-accent/20 bg-white px-3 py-1 text-sm font-medium text-accent">Dijital dilekçe hazırlama hizmeti</span>
            <h1 className="mt-6 max-w-4xl font-serif text-5xl font-semibold leading-tight tracking-tight text-primary sm:text-6xl">
              SGK&apos;ya, mahkemeye, belediyeye — dilekçeni 2 dakikada hazırla
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Hazır dilekçe şablonunu seç, bilgilerini doldur ve kullanıma hazır taslağını hemen indir.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/dilekceler" className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-white">Dilekçe Hazırla <ArrowRight className="h-4 w-4" /></Link>
              <Link href="#kategoriler" className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-primary">Dilekçe Türlerini Gör</Link>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
              {["Üyelik gerekmez", "Tarayıcıda hazırlanır", "Word ve PDF çıktısı yakında", "Türkçe hazır şablonlar"].map((item) => <div key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" />{item}</div>)}
            </div>
          </div>
          <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
            <div className="rounded-2xl border border-slate-200 p-7">
              <div className="flex items-center justify-between"><FileText className="h-8 w-8 text-primary" /><span className="rounded bg-gold/10 px-2 py-1 text-xs font-semibold text-gold">TASLAK</span></div>
              <p className="mt-8 text-right text-xs text-slate-500">İstanbul, 29.07.2026</p>
              <h2 className="mt-4 font-semibold text-primary">SOSYAL GÜVENLİK KURUMU BAŞKANLIĞINA</h2>
              <p className="mt-6 text-sm leading-7 text-slate-600">Emekli aylığımın hesaplanmasına esas hizmet ve kazanç bilgilerimin yeniden incelenmesini arz ederim.</p>
              <div className="mt-8 border-t border-dashed border-slate-300 pt-5 text-right text-sm text-slate-500">Ad Soyad<br />İmza</div>
            </div>
          </div>
        </div>
      </section>

      <section id="nasil-calisir" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold text-primary">Nasıl çalışır?</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">{steps.map(([n,t,d]) => <div key={n} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"><span className="grid h-10 w-10 place-items-center rounded-full bg-primary font-semibold text-white">{n}</span><h3 className="mt-5 text-lg font-semibold">{t}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{d}</p></div>)}</div>
      </section>

      <section id="kategoriler" className="border-y border-slate-200 bg-white/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-primary">Dilekçe kategorileri</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{categories.map((category) => <Link key={category.slug} href={`/dilekceler/${category.slug}`} className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-soft"><h3 className="font-semibold text-primary">{category.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p></Link>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-primary p-8 text-white md:p-12"><ShieldCheck className="h-8 w-8 text-emerald-300" /><h2 className="mt-5 font-serif text-3xl font-semibold">Şeffaf ve kontrollü süreç</h2><p className="mt-4 max-w-3xl text-sm leading-7 text-slate-200">Bu sürüm bir arayüz prototipidir. Üretim yayını öncesinde KVKK metinleri ve dilekçe şablonları hukukçu incelemesine sunulacaktır.</p></div>
      </section>
    </>
  );
}
