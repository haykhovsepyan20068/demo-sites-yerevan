/* =====================================================================
   ДАННЫЕ САЙТА — единственный файл, который меняется для каждой компании.
   Источники: businesses.md + research/luska-salon.md (Spyur).
   Пустое поле ("" / [] / null) = соответствующий блок скрывается.
   Все тексты двуязычные: { en: "...", hy: "..." }.
   ===================================================================== */
window.SITE = {
  slug: "luska-salon",

  /* ---- Тема: цвета и шрифты ---- */
  theme: {
    bg: "#fdf8f6",
    ink: "#2e1f26",
    primary: "#9c4a68",
    accent: "#e8cfa6",
    alt: "#6b3a52",
    soft: "#f8e9ee",
    fontsUrl: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Jost:wght@400;600;700&family=Noto+Serif+Armenian:wght@400;600;700&family=Noto+Sans+Armenian:wght@400;600;700&display=swap",
    fontHead: "'Cormorant Garamond', 'Noto Serif Armenian', Georgia, serif",
    fontBody: "'Jost', 'Noto Sans Armenian', system-ui, sans-serif",
    radius: "18px"
  },

  /* ---- Название и описание ---- */
  name: { en: "Luska Salon", hy: "Luska Salon" },
  category: { en: "Beauty and wedding salon", hy: "Գեղեցկության և հարսանեկան սրահ" },
  city: { en: "Yerevan", hy: "Երևան" },
  heroIcon: "sparkle",
  since: "",

  hero: {
    title: {
      en: "Beauty and wedding dresses, under one roof",
      hy: "Գեղեցկություն և հարսանեկան զգեստներ՝ մեկ հարկի տակ"
    },
    text: {
      en: "Luska Salon in Yerevan is a beauty salon and a place to find a wedding dress. Call us or visit us on Bashinjaghyan Street, every day from 10:00 to 20:00.",
      hy: "Luska Salon-ը Երևանում գեղեցկության սրահ է և հարսանեկան զգեստ ընտրելու վայր: Զանգահարեք կամ այցելեք մեզ Բաշինջաղյան փողոցում՝ ամեն օր 10:00-ից 20:00:"
    }
  },

  about: {
    en: "Luska Salon is a beauty and wedding salon in Yerevan's Ajapnyak district. Here you can use beauty salon services and choose a wedding dress. To plan a visit, call us or come by any day of the week.",
    hy: "Luska Salon-ը գեղեցկության և հարսանեկան սրահ է Երևանի Աջափնյակ վարչական շրջանում: Այստեղ կարող եք օգտվել գեղեցկության սրահի ծառայություններից և ընտրել հարսանեկան զգեստ: Այցելությունը պլանավորելու համար զանգահարեք կամ մտեք շաբաթվա ցանկացած օր:"
  },

  /* ---- Услуги ---- */
  products: [
    { icon: "sparkle",  title: { en: "Beauty salon services",     hy: "Գեղեցկության սրահի ծառայություններ" } },
    { icon: "scissors", title: { en: "Haircuts and hair care",    hy: "Սանրվածք և մազերի խնամք" } },
    { icon: "comb",     title: { en: "Keratin and hair coloring", hy: "Կերատին և մազերի ներկում" } },
    { icon: "dress",    title: { en: "Wedding dresses",           hy: "Հարսանեկան զգեստներ" } },
    { icon: "car",      title: { en: "Retro cars for weddings",   hy: "Ռետրո մեքենաներ հարսանիքի համար" } }
  ],

  /* ---- Доставка ---- */
  delivery: null,

  /* ---- Контакты ---- */
  contacts: {
    phone: "+37494210505",
    phoneDisplay: "+374 94 210505",
    email: "",
    address: { en: "Bashinjaghyan Street 183, Yerevan", hy: "Բաշինջաղյան փողոց 183, Երևան" },
    mapQuery: "Bashinjaghyan Street 183 Yerevan",
    whatsapp: "",
    telegram: ""
  },

  /* ---- График. days: 1=пн ... 7=вс ---- */
  hours: {
    days: [1, 2, 3, 4, 5, 6, 7],
    open: "10:00",
    close: "20:00",
    label: { en: "Every day, 10:00 – 20:00", hy: "Ամեն օր՝ 10:00 – 20:00" },
    timezone: "Asia/Yerevan"
  },

  /* ---- Соцсети и сайт ---- */
  social: {
    website: "",
    facebook: "",
    instagram: "",
    tiktok: ""
  },

  /* ---- Рейтинг ---- */
  rating: { value: "4.7", count: 12, source: "Yandex Maps" },

  /* ---- Фото ---- */
  photos: []
};
