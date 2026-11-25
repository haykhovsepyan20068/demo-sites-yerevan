/* =====================================================================
   ДАННЫЕ САЙТА — единственный файл, который меняется для каждой компании.
   Источники: businesses.md + research/ashna.md.
   Пустое поле ("" / [] / null) = соответствующий блок скрывается.
   Все тексты двуязычные: { en: "...", hy: "..." }.
   ===================================================================== */
window.SITE = {
  slug: "ashna",

  /* ---- Тема: цвета и шрифты ---- */
  theme: {
    bg: "#fbf3e6",
    ink: "#2b1015",
    primary: "#7a1f33",
    accent: "#e6cfa6",
    alt: "#5a1426",
    soft: "#f5e6df",
    fontsUrl: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Jost:wght@400;600;700&family=Noto+Sans+Armenian:wght@400;600;700&display=swap",
    fontHead: "'Playfair Display', 'Noto Sans Armenian', Georgia, serif",
    fontBody: "'Jost', 'Noto Sans Armenian', system-ui, sans-serif",
    radius: "14px"
  },

  /* ---- Название и описание ---- */
  name: { en: "Ashna", hy: "Ashna" },
  category: { en: "Shoe store", hy: "Կոշիկի խանութ" },
  city: { en: "Yerevan", hy: "Երևան" },
  since: "",

  heroIcon: "shoe",

  hero: {
    title: {
      en: "Shoes and bags with a sense of style",
      hy: "Կոշիկներ և պայուսակներ՝ ոճի զգացումով"
    },
    text: {
      en: "Fashionable shoes and bags in Yerevan. Visit us on Bashinjaghyan Street or ask about delivery across Armenia.",
      hy: "Նորաձև կոշիկներ և պայուսակներ Երևանում: Այցելեք մեզ Բաշինջաղյան փողոցում կամ հարցրեք առաքման մասին ամբողջ Հայաստանով:"
    }
  },

  about: {
    en: "Ashna is a shoe store in Yerevan. We offer fashionable shoes and bags, and deliver across Armenia. Call us or follow our Instagram to see what is new.",
    hy: "Ashna-ն կոշիկի խանութ է Երևանում: Մենք առաջարկում ենք նորաձև կոշիկներ և պայուսակներ և առաքում ենք ամբողջ Հայաստանով: Զանգահարեք մեզ կամ հետևեք մեր Instagram-ին՝ նորույթները տեսնելու համար:"
  },

  /* ---- Ассортимент ---- */
  products: [
    { icon: "shoe", title: { en: "Shoes", hy: "Կոշիկներ" } },
    { icon: "bag",  title: { en: "Bags",  hy: "Պայուսակներ" } }
  ],

  /* ---- Доставка: условия не подтверждены ---- */
  delivery: null,

  /* ---- Контакты ---- */
  contacts: {
    phone: "+37410353555",
    phoneDisplay: "+374 10 353555",
    email: "",
    address: { en: "Bashinjaghyan Street 189/4, Yerevan", hy: "Բաշինջաղյան փողոց 189/4, Երևան" },
    mapQuery: "Ashna Bashinjaghyan Street 189/4 Yerevan",
    whatsapp: "",
    telegram: ""
  },

  /* ---- График: полное расписание не подтверждено ---- */
  hours: null,

  /* ---- Соцсети и сайт ---- */
  social: {
    website:   "",
    facebook:  "",
    instagram: "https://instagram.com/ashnashoes",
    tiktok:    ""
  },

  /* ---- Рейтинг ---- */
  rating: { value: "4.2", count: 11, source: "Yandex Maps" },

  /* ---- Фото: права не подтверждены ---- */
  photos: []
};
