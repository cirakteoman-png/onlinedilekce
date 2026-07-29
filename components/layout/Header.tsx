import Link from "next/link";
import { FileText } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold text-primary">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-white">
            <FileText className="h-5 w-5" />
          </span>
          OnlineDilekçe
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex" aria-label="Ana menü">
          <Link href="/dilekceler">Dilekçeler</Link>
          <Link href="/#nasil-calisir">Nasıl çalışır?</Link>
          <Link href="/#fiyatlandirma">Fiyatlandırma</Link>
          <Link href="/sss">SSS</Link>
        </nav>
        <Link href="/dilekceler" className="rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white">
          Dilekçe Hazırla
        </Link>
      </div>
    </header>
  );
}
