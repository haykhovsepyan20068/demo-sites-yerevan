/* =====================================================================
   ДАННЫЕ САЙТА — единственный файл, который меняется для каждой компании.
   Источники: businesses.md + research/moxrotik.md.
   Пустое поле ("" / [] / null) = соответствующий блок скрывается.
   Все тексты двуязычные: { en: "...", hy: "..." }.
   ===================================================================== */
window.SITE = {
  slug: "moxrotik",

  /* ---- Тема: цвета и шрифты. Меняются под сферу бизнеса ---- */
  theme: {
    bg: "#fdf6f1",
    ink: "#2b1230",
    primary: "#7a2b6e",
    accent: "#f6b98a",
    alt: "#4a1d57",
    soft: "#f7e6f1",
    fontsUrl: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Nunito+Sans:wght@400;600;700&family=Noto+Serif+Armenian:wght@400;600;700&family=Noto+Sans+Armenian:wght@400;600;700&display=swap",
    fontHead: "'Playfair Display', 'Noto Serif Armenian', Georgia, serif",
    fontBody: "'Nunito Sans', 'Noto Sans Armenian', system-ui, sans-serif",
    radius: "18px"
  },

  /* ---- Название и описание ---- */
  name: { en: "Moxrotik", hy: "Moxrotik" },
  category: { en: "Beauty salon and barber shop", hy: "Գեղեցկության սրահ և բարբերշոփ" },
  city: { en: "Yerevan", hy: "Երևան" },
  since: "",

  heroIcon: "sparkle",

  hero: {
    title: {
      en: "Your beauty salon on Margaryan Street",
      hy: "Ձեր գեղեցկության սրահը Մարգարյան փողոցում"
    },
    text: {
      en: "Beauty salon, barber shop, nail salon, makeup and styling in Yerevan. Call us to book your visit.",
      hy: "Գեղեցկության սրահ, բարբերշոփ, եղունգների սրահ, դիմահարդարում և ոճավորում Երևանում: Զանգահարեք և պայմանավորվեք այցի մասին:"
    }
  },

  about: {
    en: "Moxrotik is a beauty salon in Yerevan. Under one name you will find a barber shop, nail care, makeup artists and stylists. The Facebook page of the salon is named “Մոխրոտիկ Գեղեցկության Սրահ”.",
    hy: "Moxrotik-ը գեղեցկության սրահ է Երևանում: Մեկ անվան տակ կգտնեք բարբերշոփ, եղունգների խնամք, դիմահարդարներ և ստիլիստներ: Սրահի Facebook էջը կոչվում է «Մոխրոտիկ Գեղեցկության Սրահ»:"
  },

  /* ---- Услуги ---- */
  products: [
    { icon: "sparkle",  title: { en: "Beauty salon",       hy: "Գեղեցկության սրահ" } },
    { icon: "scissors", title: { en: "Barber shop",        hy: "Բարբերշոփ" } },
    { icon: "polish",   title: { en: "Nail salon",         hy: "Եղունգների սրահ" } },
    { icon: "comb",     title: { en: "Makeup & styling",   hy: "Դիմահարդարում և ոճավորում" } }
  ],

  /* ---- Доставка ---- */
  delivery: null,

  /* ---- Контакты ---- */
  contacts: {
    phone: "+37410399220",
    phoneDisplay: "+374 10 399220",
    email: "",
    address: { en: "Margaryan Street 10/9, Yerevan", hy: "Մարգարյան փողոց 10/9, Երևան" },
    mapQuery: "Moxrotik Margaryan Street 10/9 Yerevan",
    whatsapp: "",
    telegram: ""
  },

  /* ---- График ---- */
  hours: {
    days: [1, 2, 3, 4, 5, 6, 7],
    open: "09:30",
    close: "20:00",
    label: { en: "Every day, 09:30 – 20:00", hy: "Ամեն օր՝ 09:30 – 20:00" },
    timezone: "Asia/Yerevan"
  },

  /* ---- Соцсети и сайт ---- */
  social: {
    website:   "",
    facebook:  "https://facebook.com/moxrotik.gexeckutyansrah",
    instagram: "",
    tiktok:    ""
  },

  /* ---- Рейтинг ---- */
  rating: { value: "4.4", count: 13, source: "Yandex Maps" },

  /* ---- Фото ---- */
  photos: []
};
