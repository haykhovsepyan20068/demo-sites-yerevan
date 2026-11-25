/* =====================================================================
   ДАННЫЕ САЙТА — единственный файл, который меняется для каждой компании.
   Источники: businesses.md + research/karolli.md.
   Пустое поле ("" / [] / null) = соответствующий блок скрывается.
   Все тексты двуязычные: { en: "...", hy: "..." }.
   ===================================================================== */
window.SITE = {
  slug: "karolli",

  /* ---- Тема: цвета и шрифты ---- */
  theme: {
    bg: "#f7f6f2",
    ink: "#1b2224",
    primary: "#0f5c63",
    accent: "#e0a04a",
    alt: "#16383c",
    soft: "#e2f0ef",
    fontsUrl: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Manrope:wght@400;600;700&family=Noto+Serif+Armenian:wght@400;600;700&family=Noto+Sans+Armenian:wght@400;600;700&display=swap",
    fontHead: "'Playfair Display', 'Noto Serif Armenian', Georgia, serif",
    fontBody: "'Manrope', 'Noto Sans Armenian', system-ui, sans-serif",
    radius: "14px"
  },

  /* ---- Название и описание ---- */
  name: { en: "Karolli", hy: "Karolli" },
  category: { en: "Women's shoes and bags", hy: "Կանացի կոշիկներ և պայուսակներ" },
  city: { en: "Yerevan", hy: "Երևան" },
  since: "",

  hero: {
    title: {
      en: "Step out in your own style",
      hy: "Քայլիր քո ոճով"
    },
    text: {
      en: "A wide selection of women's shoes and bags in Yerevan, plus watches and wallets to complete the look.",
      hy: "Կանացի կոշիկների և պայուսակների լայն տեսականի Երևանում, ինչպես նաև ժամացույցներ և դրամապանակներ՝ կերպարը լրացնելու համար:"
    }
  },

  about: {
    en: "Karolli is a shoe and accessories store in Yerevan. Our shelves hold women's shoes and bags, with watches and wallets alongside, so you can pick the details of your look in one place.",
    hy: "Karolli-ն կոշիկի և աքսեսուարների խանութ է Երևանում: Մեր տեսականու մեջ կան կանացի կոշիկներ և պայուսակներ, իսկ կողքին՝ ժամացույցներ և դրամապանակներ, որպեսզի կերպարի մանրուքները ընտրեք մեկ վայրում:"
  },

  /* ---- Ассортимент ---- */
  products: [
    { icon: "shoe", title: { en: "Women's shoes", hy: "Կանացի կոշիկներ" } },
    { icon: "bag",  title: { en: "Bags",          hy: "Պայուսակներ" } },
    { icon: "clock", title: { en: "Watches",      hy: "Ժամացույցներ" } },
    { icon: "bag",  title: { en: "Wallets",       hy: "Դրամապանակներ" } }
  ],

  /* ---- Доставка: условия не подтверждены ---- */
  delivery: null,

  /* ---- Контакты ---- */
  contacts: {
    phone: "+37493932224",
    phoneDisplay: "+374 93 932224",
    email: "",
    address: { en: "Margaryan Street 14, Yerevan", hy: "Մարգարյան փողոց 14, Երևան" },
    mapQuery: "Karolli Margaryan Street 14 Yerevan",
    whatsapp: "",
    telegram: ""
  },

  /* ---- График: не подтверждён ---- */
  hours: null,

  /* ---- Соцсети и сайт ---- */
  social: {
    website:   "",
    facebook:  "",
    instagram: "https://www.instagram.com/karolli_shoes/",
    tiktok:    ""
  },

  rating: null,

  photos: [],

  heroIcon: "shoe"
};
