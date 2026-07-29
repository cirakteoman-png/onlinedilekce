export type Category = {
  slug: string;
  title: string;
  description: string;
};

export const categories: Category[] = [
  { slug: "sgk-emeklilik", title: "SGK / Emeklilik", description: "Emeklilik, prim, hizmet ve maaş işlemleri için dilekçeler." },
  { slug: "is-hukuku", title: "İş Hukuku", description: "İşçi ve işveren ilişkilerinde kullanılan temel başvurular." },
  { slug: "tuketici-haklari", title: "Tüketici Hakları", description: "Ayıplı ürün, hizmet ve ücret iadelerine yönelik başvurular." },
  { slug: "kira-tapu", title: "Kira / Tapu", description: "Kira ilişkileri ve taşınmaz işlemlerine yönelik dilekçeler." },
  { slug: "trafik-idare", title: "Trafik / İdare", description: "Trafik cezaları ve idari başvurular için taslaklar." },
  { slug: "vergi-maliye", title: "Vergi / Maliye", description: "Vergi dairesi ve mali işlemlere yönelik başvurular." },
  { slug: "belediye", title: "Belediye", description: "İmar, çevre, ruhsat ve belediye hizmetleri için dilekçeler." },
  { slug: "aile-hukuku", title: "Aile Hukuku", description: "Aile hukukuna ilişkin temel başvuru taslakları." },
];
