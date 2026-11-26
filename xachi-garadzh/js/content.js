/* =====================================================================
   ДАННЫЕ САЙТА — единственный файл, который меняется для каждой компании.
   Источники: businesses.md + research/xachi-garadzh.md.
   Пустое поле ("" / [] / null) = соответствующий блок скрывается.
   Все тексты двуязычные: { en: "...", hy: "..." }.
   ===================================================================== */
window.SITE = {
  slug: "xachi-garadzh",

  /* ---- Тема: цвета и шрифты. Меняются под сферу бизнеса ---- */
  theme: {
    bg: "#f2f3f5",
    ink: "#14181d",
    primary: "#c2410c",
    accent: "#ffb15c",
    alt: "#2b3440",
    soft: "#fdeee4",
    fontsUrl: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700&family=Barlow:wght@400;600;700&family=Noto+Sans+Armenian:wght@400;600;700&display=swap",
    fontHead: "'Barlow Condensed', 'Noto Sans Armenian', system-ui, sans-serif",
    fontBody: "'Barlow', 'Noto Sans Armenian', system-ui, sans-serif",
    radius: "8px"
  },

  /* ---- Название и описание ---- */
  name: { en: "Xachi Garadzh", hy: "Xachi Garadzh" },
  category: { en: "Car service and auto repair", hy: "Ավտոսպասարկում և ավտոմեքենաների վերանորոգում" },
  city: { en: "Yerevan", hy: "Երևան" },
  since: "",

  heroIcon: "wrench",

  hero: {
    title: {
      en: "Your car in capable hands",
      hy: "Ձեր մեքենան վստահելի ձեռքերում"
    },
    text: {
      en: "Xachi Garadzh is a car service in Yerevan. Call us or drop by Fuchik Street to talk about your car's repair.",
      hy: "Xachi Garadzh-ը ավտոսպասարկման կենտրոն է Երևանում: Զանգահարեք մեզ կամ այցելեք Ֆուչիկի փողոց՝ մեքենայի վերանորոգման մասին խոսելու համար:"
    }
  },

  about: {
    en: "Xachi Garadzh is an auto repair and car service shop in Yerevan, on Fuchik Street. Drivers rate it 4.3 on Yandex Maps. Call ahead and tell us what is going on with your car.",
    hy: "Xachi Garadzh-ը ավտոսպասարկման և ավտոմեքենաների վերանորոգման կետ է Երևանում՝ Ֆուչիկի փողոցում: Վարորդները այն գնահատել են 4.3՝ Yandex Maps-ում: Զանգահարեք և պատմեք, թե ինչ է կատարվում ձեր մեքենայի հետ:"
  },

  /* ---- Ассортимент: подтверждённого перечня услуг нет ---- */
  products: [],

  /* ---- Доставка: не применимо ---- */
  delivery: null,

  /* ---- Контакты ---- */
  contacts: {
    phone: "+37477585892",
    phoneDisplay: "+374 77 585892",
    email: "",
    address: { en: "Fuchik Street 32A, Yerevan", hy: "Ֆուչիկի փողոց 32A, Երևան" },
    mapQuery: "Xachi Garadzh Fuchik Street 32A Yerevan",
    whatsapp: "",
    telegram: ""
  },

  /* ---- График: полное расписание не подтверждено ---- */
  hours: null,

  /* ---- Соцсети и сайт ---- */
  social: {
    website: "",
    facebook: "",
    instagram: "",
    tiktok: ""
  },

  /* ---- Рейтинг ---- */
  rating: { value: "4.3", count: 65, source: "Yandex Maps" },

  /* ---- Фото. Права не подтверждены — пусто, используется графика ---- */
  photos: []
};
