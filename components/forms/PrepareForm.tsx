"use client";

import { useMemo, useState } from "react";

const steps = ["Başvuru", "Kişisel", "Konu", "Kontrol", "İndir"];

export function PrepareForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ city: "İstanbul", date: "", firstName: "", lastName: "", tckn: "", phone: "", subject: "Emekli aylığımın yeniden hesaplanması talebi", body: "", confirmInfo: false, confirmLegal: false });

  const canContinue = useMemo(() => {
    if (step === 0) return Boolean(form.city && form.date);
    if (step === 1) return Boolean(form.firstName && form.lastName && /^\d{11}$/.test(form.tckn));
    if (step === 2) return Boolean(form.subject && form.body);
    if (step === 3) return form.confirmInfo && form.confirmLegal;
    return true;
  }, [form, step]);

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
      <div>
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm font-semibold text-primary sm:hidden"><span>{step + 1} / 5 — {steps[step]}</span><span>{Math.round(((step + 1) / 5) * 100)}%</span></div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200 sm:hidden"><div className="h-full bg-accent" style={{ width: `${((step + 1) / 5) * 100}%` }} /></div>
          <div className="hidden grid-cols-5 gap-2 sm:grid">{steps.map((item, index) => <div key={item} className={`rounded-xl border px-3 py-3 text-center text-xs font-semibold ${index <= step ? "border-primary bg-primary text-white" : "border-slate-200 bg-white text-slate-500"}`}>{index + 1}. {item}</div>)}</div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          {step === 0 && <div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-medium">Şehir<input className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3" value={form.city} onChange={(e) => update("city", e.target.value)} /></label><label className="text-sm font-medium">Başvuru tarihi<input type="date" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3" value={form.date} onChange={(e) => update("date", e.target.value)} /></label></div>}
          {step === 1 && <div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-medium">Ad<input className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3" value={form.firstName} onChange={(e) => update("firstName", e.target.value)} /></label><label className="text-sm font-medium">Soyad<input className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3" value={form.lastName} onChange={(e) => update("lastName", e.target.value)} /></label><label className="text-sm font-medium">T.C. Kimlik No<input inputMode="numeric" maxLength={11} className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3" value={form.tckn} onChange={(e) => update("tckn", e.target.value.replace(/\D/g, "").slice(0, 11))} /></label><label className="text-sm font-medium">Telefon<input className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3" value={form.phone} onChange={(e) => update("phone", e.target.value)} /></label></div>}
          {step === 2 && <div className="grid gap-5"><label className="text-sm font-medium">Konu<input className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3" value={form.subject} onChange={(e) => update("subject", e.target.value)} /></label><label className="text-sm font-medium">Açıklama ve talep<textarea rows={8} className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3" value={form.body} onChange={(e) => update("body", e.target.value)} /></label></div>}
          {step === 3 && <div className="space-y-4"><label className="flex gap-3 rounded-xl border border-slate-200 p-4 text-sm"><input type="checkbox" checked={form.confirmInfo} onChange={(e) => update("confirmInfo", e.target.checked)} />Girdiğim bilgilerin doğru olduğunu onaylıyorum.</label><label className="flex gap-3 rounded-xl border border-slate-200 p-4 text-sm"><input type="checkbox" checked={form.confirmLegal} onChange={(e) => update("confirmLegal", e.target.checked)} />Bu belgenin bir dilekçe taslağı olduğunu ve hukuki danışmanlık yerine geçmediğini kabul ediyorum.</label></div>}
          {step === 4 && <div className="rounded-xl border border-accent/30 bg-accent/10 p-5"><h2 className="font-semibold text-primary">Taslağın hazır</h2><p className="mt-2 text-sm text-slate-600">Bu Next.js geçiş sürümünde indirme butonları demo durumundadır. Gerçek Word/PDF üretimi sonraki aşamada bağlanacaktır.</p><div className="mt-5 grid gap-3 sm:grid-cols-2"><button className="rounded-xl bg-primary px-4 py-3 font-semibold text-white">Word indir — yakında</button><button className="rounded-xl border border-slate-300 bg-white px-4 py-3 font-semibold text-primary">PDF indir — yakında</button></div></div>}

          <div className="mt-8 flex justify-between gap-3"><button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="rounded-xl border border-slate-300 px-4 py-3 font-semibold disabled:opacity-40">Geri</button>{step < 4 && <button onClick={() => setStep((s) => Math.min(4, s + 1))} disabled={!canContinue} className="rounded-xl bg-primary px-5 py-3 font-semibold text-white disabled:opacity-40">İleri</button>}</div>
        </div>
      </div>

      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-500"><span>Canlı önizleme</span><span className="rounded bg-gold/10 px-2 py-1 text-gold">Taslak</span></div>
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-soft">
          <div className="pointer-events-none absolute inset-0 grid place-items-center -rotate-12 text-6xl font-bold text-slate-100">TASLAK</div>
          <div className="relative break-words text-sm leading-7 text-slate-700"><p className="text-right text-xs text-slate-500">{form.city}, {form.date || "Tarih"}</p><h2 className="mt-5 font-semibold text-primary">SOSYAL GÜVENLİK KURUMU BAŞKANLIĞINA</h2><p className="mt-5"><strong>Konu:</strong> {form.subject}</p><p className="mt-5 whitespace-pre-line">{form.body || "Dilekçe açıklamanız ve talebiniz burada görüntülenecektir."}</p><div className="mt-8 border-t border-dashed border-slate-300 pt-4 text-right">{form.firstName || "Ad"} {form.lastName || "Soyad"}<br />{form.tckn && `T.C.: ${form.tckn}`}</div></div>
        </div>
      </aside>
    </div>
  );
}
