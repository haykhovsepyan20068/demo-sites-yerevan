/* =====================================================================
   ДАННЫЕ САЙТА — Yek Beauty Hub.
   Источники: businesses.md + research/yek-beauty-hub.md.
   Пустое поле ("" / [] / null) = соответствующий блок скрывается.
   Все тексты двуязычные: { en: "...", hy: "..." }.
   ===================================================================== */
window.SITE = {
  slug: "yek-beauty-hub",

  /* ---- Тема: графит + розовое золото ---- */
  theme: {
    bg: "#faf6f4",
    ink: "#1f1c20",
    primary: "#2d2a31",
    accent: "#e3b2a0",
    alt: "#463a3f",
    soft: "#efe7e5",
    fontsUrl: "https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700&family=Manrope:wght@400;600;700&family=Noto+Sans+Armenian:wght@400;600;700&display=swap",
    fontHead: "'Jost', 'Noto Sans Armenian', system-ui, sans-serif",
    fontBody: "'Manrope', 'Noto Sans Armenian', system-ui, sans-serif",
    radius: "10px"
  },

  /* ---- Название и описание ---- */
  name: { en: "Yek Beauty Hub", hy: "Yek Beauty Hub" },
  category: { en: "Beauty salon and barbershop", hy: "Գեղեցկության սրահ և բարբերշոփ" },
  city: { en: "Yerevan", hy: "Երևան" },
  since: "",

  hero: {
    title: {
      en: "Your look, shaped with care",
      hy: "Ձեր կերպարը՝ հոգատար ձեռքերում"
    },
    text: {
      en: "A beauty salon and barbershop in Yerevan on Beknazaryan Street. Haircuts, beard styling, coloring and manicure.",
      hy: "Գեղեցկության սրահ և բարբերշոփ Երևանում՝ Բեկնազարյան փողոցում: Սանրվածք, մորուքի ձևավորում, ներկում և մատնահարդարում:"
    }
  },

  about: {
    en: "Yek Beauty Hub is a beauty salon and barbershop in Yerevan. Here you can get a haircut, have your beard shaped, color your hair or book a manicure. Call us to choose a convenient time.",
    hy: "Yek Beauty Hub-ը գեղեցկության սրահ և բարբերշոփ է Երևանում: Այստեղ կարող եք կտրել մազերը, ձևավորել մորուքը, ներկել մազերը կամ գրանցվել մատնահարդարման: Զանգահարեք և ընտրեք Ձեզ հարմար ժամը:"
  },

  /* ---- Услуги (без цен) ---- */
  products: [
    { icon: "scissors", title: { en: "Haircut",            hy: "Սանրվածք" } },
    { icon: "comb",     title: { en: "Beard styling",      hy: "Մորուքի ձևավորում" } },
    { icon: "sparkle",  title: { en: "Hair washing",       hy: "Մազերի լվացում" } },
    { icon: "flower",   title: { en: "Hair coloring",      hy: "Մազերի ներկում" } },
    { icon: "heart",    title: { en: "Haircut with a design", hy: "Սանրվածք նախշով" } },
    { icon: "polish",   title: { en: "Manicure",           hy: "Մատնահարդարում" } }
  ],

  /* ---- Доставка ---- */
  delivery: null,

  /* ---- Контакты ---- */
  contacts: {
    phone: "+37444766796",
    phoneDisplay: "+374 44 766796",
    email: "",
    address: { en: "Beknazaryan Street 5/7, Yerevan", hy: "Բեկնազարյան փողոց 5/7, Երևան" },
    mapQuery: "Yek Beauty Hub Beknazaryan Street 5/7 Yerevan",
    whatsapp: "",
    telegram: ""
  },

  /* ---- График: Яндекс.Карты и Instagram совпадают, вторник выходной ---- */
  hours: {
    days: [1, 3, 4, 5, 6, 7],
    open: "10:00",
    close: "20:00",
    label: { en: "Mon, Wed–Sun, 10:00 – 20:00 (closed on Tuesday)", hy: "Երկ., Չրք.–Կիր.՝ 10:00 – 20:00 (երեքշաբթի՝ հանգստյան օր)" },
    timezone: "Asia/Yerevan"
  },

  /* ---- Соцсети и сайт ---- */
  social: {
    website:   "",
    facebook:  "",
    instagram: "https://www.instagram.com/yek_beauty_hub/",
    tiktok:    ""
  },

  /* ---- Рейтинг: Яндекс.Карты ---- */
  rating: { value: "4.4", count: 25, source: "Yandex Maps" },

  /* ---- Фото: права не подтверждены ---- */
  photos: [],

  heroIcon: "scissors"
};
