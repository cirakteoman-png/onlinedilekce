import { notFound } from "next/navigation";

const pages: Record<string, { title: string; body: string[] }> = {
  sss: { title: "Sık Sorulan Sorular", body: ["OnlineDilekçe hukuki danışmanlık verir mi? Hayır. Sistem yalnızca hazır dilekçe taslakları sunar.", "Bilgilerim saklanıyor mu? Bu prototipte form bilgileri yalnızca tarayıcı arayüzünde kullanılır.", "Word ve PDF indirme ne zaman açılacak? Üretim sürümünde belge üretim altyapısı tamamlandığında aktif edilecektir."] },
  "hukuki-uyari": { title: "Hukuki Uyarı", body: ["OnlineDilekçe, kullanıcıların verdiği bilgiler doğrultusunda hazır dilekçe taslakları oluşturur. Sunulan içerikler hukuki danışmanlık veya avukatlık hizmeti değildir. Oluşturulan dilekçenin ilgili olaya ve güncel mevzuata uygunluğunun kontrol edilmesi kullanıcının sorumluluğundadır. Gerekli durumlarda bir avukattan hukuki destek alınması önerilir."] },
  kvkk: { title: "KVKK Aydınlatma Metni", body: ["Bu metin taslaktır. Üretim yayını öncesinde KVKK uzmanı ve hukukçu tarafından gözden geçirilmelidir.", "Üretim sürümünde işlenen kişisel veriler, işleme amaçları, hukuki sebepler, saklama süreleri ve ilgili kişi hakları ayrıntılı şekilde açıklanacaktır."] },
  gizlilik: { title: "Gizlilik Politikası", body: ["Bu metin taslaktır. Üretim yayını öncesinde KVKK uzmanı ve hukukçu tarafından gözden geçirilmelidir.", "Bu prototipte kişisel bilgiler yalnızca tarayıcı arayüzünde form önizlemesi oluşturmak amacıyla kullanılır."] },
  "cerez-politikasi": { title: "Çerez Politikası", body: ["Bu prototipte zorunlu olmayan analiz veya reklam çerezleri kullanılmamaktadır. Üretim sürümünde kullanılan çerezler açıkça listelenecektir."] },
  "kullanim-kosullari": { title: "Kullanım Koşulları", body: ["OnlineDilekçe bir dilekçe taslağı hazırlama aracıdır ve avukatlık hizmeti sunmaz.", "Kullanıcı, girdiği bilgilerin doğruluğundan ve oluşturulan taslağın kendi olayına uygunluğunu kontrol etmekten sorumludur."] },
  hakkimizda: { title: "Hakkımızda", body: ["OnlineDilekçe, vatandaşların günlük resmi işlemlerinde ihtiyaç duyduğu dilekçe taslaklarını daha kolay hazırlamasını hedefleyen form tabanlı bir hizmettir."] },
  iletisim: { title: "İletişim", body: ["Destek talepleriniz için: destek@onlinedilekce.com", "İletişim formu üretim sürümünde aktif edilecektir."] },
};

export default async function LegalPage({ params }: { params: Promise<{ legal: string }> }) {
  const { legal } = await params;
  const page = pages[legal];
  if (!page) notFound();

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-serif text-4xl font-semibold text-primary">{page.title}</h1>
      <div className="mt-8 space-y-5 rounded-2xl border border-slate-200 bg-white p-7 shadow-soft">
        {page.body.map((paragraph) => <p key={paragraph} className="leading-7 text-slate-600">{paragraph}</p>)}
      </div>
    </section>
  );
}
