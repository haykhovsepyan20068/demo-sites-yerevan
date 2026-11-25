/* =====================================================================
   ДАННЫЕ САЙТА — единственный файл, который меняется для каждой компании.
   Источники: businesses.md + research/jasis-rose.md.
   Пустое поле ("" / [] / null) = соответствующий блок скрывается.
   Все тексты двуязычные: { en: "...", hy: "..." }.
   ===================================================================== */
window.SITE = {
  slug: "jasis-rose",

  /* ---- Тема: цвета и шрифты. Меняются под сферу бизнеса ---- */
  theme: {
    bg: "#fdf6ef",
    ink: "#3a1f2b",
    primary: "#b8325f",
    accent: "#f5c9d3",
    alt: "#557358",
    soft: "#fdeaee",
    fontHead: "'Cormorant Garamond', 'Noto Serif Armenian', Georgia, serif",
    fontBody: "'Quicksand', 'Noto Sans Armenian', system-ui, sans-serif",
    radius: "18px",
    fontsUrl: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Quicksand:wght@400;600;700&family=Noto+Sans+Armenian:wght@400;600;700&family=Noto+Serif+Armenian:wght@400;600;700&display=swap"
  },

  /* ---- Название и описание ---- */
  name: { en: "Jasi's Rose", hy: "Jasi's Rose" },
  category: { en: "Flower shop with delivery", hy: "Ծաղկի սրահ՝ առաքումով" },
  city: { en: "Yerevan", hy: "Երևան" },
  since: "",

  heroIcon: "flower",

  hero: {
    title: {
      en: "Fresh flowers, every day",
      hy: "Թարմ ծաղիկներ ամեն օր"
    },
    text: {
      en: "Bouquets, compositions and fresh roses from our flower shop on Margaryan Street in Yerevan. Call or write to us on WhatsApp.",
      hy: "Փնջեր, կոմպոզիցիաներ և թարմ վարդեր մեր ծաղկի սրահից Մարգարյան փողոցում՝ Երևանում: Զանգահարեք կամ գրեք մեզ WhatsApp-ով:"
    }
  },

  about: {
    en: "Jasi's Rose is a flower shop in Yerevan. We put together bouquets and compositions and work with fresh roses, with delivery available for flowers and bouquets.",
    hy: "Jasi's Rose-ը ծաղկի սրահ է Երևանում: Մենք պատրաստում ենք փնջեր և կոմպոզիցիաներ, աշխատում ենք թարմ վարդերով, իսկ ծաղիկներն ու փնջերը կարող են առաքվել:"
  },

  /* ---- Ассортимент ---- */
  products: [
    { icon: "bouquet", title: { en: "Bouquets",     hy: "Փնջեր" } },
    { icon: "flower",  title: { en: "Compositions", hy: "Կոմպոզիցիաներ" } },
    { icon: "heart",   title: { en: "Fresh roses",  hy: "Թարմ վարդեր" } },
    { icon: "truck",   title: { en: "Delivery",     hy: "Առաքում" } }
  ],

  /* ---- Доставка: условия не подтверждены ---- */
  delivery: null,

  /* ---- Контакты ---- */
  contacts: {
    phone: "+37494333929",
    phoneDisplay: "+374 94 333929",
    email: "",
    address: { en: "Margaryan Street 19/11, Yerevan", hy: "Մարգարյան փողոց 19/11, Երևան" },
    mapQuery: "Jasi's Rose Margaryan Street 19/11 Yerevan",
    whatsapp: "+374 94 333929",
    telegram: ""
  },

  /* ---- График: подтверждённого единого расписания нет ---- */
  hours: null,

  /* ---- Соцсети и сайт ---- */
  social: {
    website:   "",
    facebook:  "",
    instagram: "https://instagram.com/jasisrose",
    tiktok:    "https://www.tiktok.com/@jasis_rose"
  },

  /* ---- Рейтинг ---- */
  rating: null,

  /* ---- Фото: права не подтверждены ---- */
  photos: []
};
