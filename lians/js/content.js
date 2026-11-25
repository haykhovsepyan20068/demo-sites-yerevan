/* =====================================================================
   ДАННЫЕ САЙТА — единственный файл, который меняется для каждой компании.
   Источники: businesses.md + research/lians.md.
   Пустое поле ("" / [] / null) = соответствующий блок скрывается.
   Все тексты двуязычные: { en: "...", hy: "..." }.
   ===================================================================== */
window.SITE = {
  slug: "lians",

  /* ---- Тема: цвета и шрифты ---- */
  theme: {
    bg: "#f8f3ea",
    ink: "#26262b",
    primary: "#34343a",
    accent: "#d6b25e",
    alt: "#4a4137",
    soft: "#efe8da",
    fontsUrl: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Jost:wght@400;600;700&family=Noto+Serif+Armenian:wght@400;600;700&family=Noto+Sans+Armenian:wght@400;600;700&display=swap",
    fontHead: "'Cormorant Garamond', 'Noto Serif Armenian', Georgia, serif",
    fontBody: "'Jost', 'Noto Sans Armenian', system-ui, sans-serif",
    radius: "6px"
  },

  /* ---- Название и описание ---- */
  name: { en: "Lians", hy: "Lians" },
  category: { en: "Shoe store", hy: "Կոշիկի խանութ" },
  city: { en: "Yerevan", hy: "Երևան" },
  since: "",
  heroIcon: "shoe",

  hero: {
    title: {
      en: "Welcome to Lians",
      hy: "Բարի գալուստ Lians"
    },
    text: {
      en: "A shoe store in Yerevan on Beknazaryan Street. Open every day, call us or follow our pages to stay in touch.",
      hy: "Կոշիկի խանութ Երևանում՝ Բեկնազարյան փողոցում: Բաց ենք ամեն օր, զանգահարեք կամ հետևեք մեր էջերին:"
    }
  },

  about: {
    en: "Lians is a shoe store in Yerevan, at Beknazaryan Street 5/19. Get in touch by phone or through our social pages.",
    hy: "Lians-ը կոշիկի խանութ է Երևանում՝ Բեկնազարյան փողոց 5/19 հասցեում: Կապվեք մեզ հետ հեռախոսով կամ սոցիալական էջերի միջոցով:"
  },

  /* ---- Ассортимент ---- */
  products: [],

  /* ---- Доставка ---- */
  delivery: null,

  /* ---- Контакты ---- */
  contacts: {
    phone: "+37433361515",
    phoneDisplay: "+374 33 361515",
    email: "",
    address: { en: "Beknazaryan Street 5/19, Yerevan", hy: "Բեկնազարյան փողոց 5/19, Երևան" },
    mapQuery: "Lians Beknazaryan Street 5/19 Yerevan",
    whatsapp: "",
    telegram: ""
  },

  /* ---- График ---- */
  hours: {
    days: [1, 2, 3, 4, 5, 6, 7],
    open: "10:00",
    close: "21:00",
    label: { en: "Every day, 10:00 – 21:00", hy: "Ամեն օր՝ 10:00 – 21:00" },
    timezone: "Asia/Yerevan"
  },

  /* ---- Соцсети и сайт ---- */
  social: {
    website:   "",
    facebook:  "https://facebook.com/102573098139864",
    instagram: "https://instagram.com/lians_yerevan",
    tiktok:    ""
  },

  /* ---- Рейтинг ---- */
  rating: { value: "4.4", count: 9, source: "Yandex Maps" },

  /* ---- Фото ---- */
  photos: []
};
