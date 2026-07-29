import Link from "next/link";

const legal = [
  ["Hukuki Uyarı", "/hukuki-uyari"],
  ["KVKK", "/kvkk"],
  ["Gizlilik", "/gizlilik"],
  ["Çerez Politikası", "/cerez-politikasi"],
  ["Kullanım Koşulları", "/kullanim-kosullari"],
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/60">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="font-semibold text-primary">OnlineDilekçe</p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
              OnlineDilekçe, kullanıcıların verdiği bilgiler doğrultusunda hazır dilekçe taslakları oluşturur. Sunulan içerikler hukuki danışmanlık veya avukatlık hizmeti değildir.
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-3 text-sm md:justify-self-end" aria-label="Yasal bağlantılar">
            {legal.map(([label, href]) => (
              <Link key={href} href={href} className="text-slate-600 hover:text-primary">{label}</Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
