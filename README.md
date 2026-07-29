# OnlineDilekçe

OnlineDilekçe, Türkçe hazır dilekçe şablonlarını yönlendirmeli formlarla doldurmayı amaçlayan Next.js App Router projesidir.

## Teknoloji

- Next.js App Router
- React + TypeScript
- Tailwind CSS
- Lucide React
- GitHub Actions
- Vercel uyumlu yapı

## Yerel kurulum

```bash
npm install
npm run dev
```

Uygulama varsayılan olarak `http://localhost:3000` adresinde açılır.

## Kontroller

```bash
npm run typecheck
npm run build
```

## Vercel dağıtımı

1. Vercel hesabında **Add New → Project** seçin.
2. `cirakteoman-png/onlinedilekce` deposunu içe aktarın.
3. Framework Preset olarak **Next.js** otomatik seçilir.
4. Build Command: `npm run build`
5. Install Command: `npm install`
6. Deploy seçeneğine basın.

Bu sürümde ortam değişkeni gerekmez.

## Ürün kapsamı

- Ana sayfa
- Dilekçe kategori sayfaları
- Dilekçe detay sayfası
- Çok adımlı örnek dilekçe formu
- Canlı taslak önizlemesi
- Hukuki uyarı ve KVKK taslak sayfaları
- Word/PDF indirme için demo durumları

## Hukuki not

OnlineDilekçe hukuki danışmanlık veya avukatlık hizmeti sunmaz. KVKK, gizlilik ve dilekçe metinleri üretim yayını öncesinde yetkin hukukçular tarafından incelenmelidir.
