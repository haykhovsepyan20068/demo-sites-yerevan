/* =====================================================================
   ДАННЫЕ САЙТА — единственный файл, который меняется для каждой компании.
   Источники: businesses.md + research/boom-party.md.
   Пустое поле ("" / [] / null) = соответствующий блок скрывается.
   Все тексты двуязычные: { en: "...", hy: "..." }.
   ===================================================================== */
window.SITE = {
  slug: "boom-party",

  /* ---- Тема: цвета и шрифты. Меняются под сферу бизнеса ---- */
  theme: {
    bg: "#fff8ef",
    ink: "#2a1740",
    primary: "#e0245e",
    accent: "#ffc83d",
    alt: "#0a7f74",
    soft: "#ffe7f0",
    fontHead: "'Fredoka', 'Noto Sans Armenian', system-ui, sans-serif",
    fontBody: "'Nunito', 'Noto Sans Armenian', system-ui, sans-serif",
    radius: "22px"
  },

  /* ---- Название и описание ---- */
  name: { en: "Boom Party", hy: "ԲՈՒՄ ՓԱՐԹԻ" },
  category: { en: "Party goods, toys and gifts", hy: "Տոնական ապրանքներ, խաղալիքներ և նվերներ" },
  city: { en: "Yerevan", hy: "Երևան" },
  since: "2019",

  hero: {
    title: {
      en: "Everything for your celebration, in one place",
      hy: "Ամեն ինչ քո տոնի համար՝ մեկ վայրում"
    },
    text: {
      en: "Games and toys, books, balloons and party goods. Visit our showroom in Yerevan or order delivery across Armenia.",
      hy: "Խաղեր և խաղալիքներ, գրքեր, փուչիկներ և տոնական պարագաներ: Այցելեք մեր սրահը Երևանում կամ պատվիրեք առաքում ամբողջ Հայաստանով:"
    }
  },

  about: {
    en: "Boom Party is a showroom store in Yerevan, open since 2019. We bring together toys, books, party goods and gift ideas so you can prepare for a celebration in one visit.",
    hy: "Բում Փարթին սրահ-խանութ է Երևանում, որն աշխատում է 2019 թվականից: Մենք մեկ վայրում ենք հավաքել խաղալիքներ, գրքեր, տոնական պարագաներ և նվերի գաղափարներ:"
  },

  /* ---- Ассортимент (icon: toys|book|balloon|party|tree|thermos|bouquet|wrap) ---- */
  products: [
    { icon: "toys",    title: { en: "Games and toys",      hy: "Խաղեր և խաղալիքներ" } },
    { icon: "book",    title: { en: "Books",               hy: "Գրքեր" } },
    { icon: "party",   title: { en: "Party goods",         hy: "Տոնական պարագաներ" } },
    { icon: "balloon", title: { en: "Balloons",            hy: "Փուչիկներ" } },
    { icon: "tree",    title: { en: "New Year assortment", hy: "Ամանորյա տեսականի" } },
    { icon: "thermos", title: { en: "Thermoses",           hy: "Թերմոսներ" } },
    { icon: "bouquet", title: { en: "Gift bouquets",       hy: "Նվեր-փնջեր" } },
    { icon: "wrap",    title: { en: "Gift wrapping",       hy: "Նվերների փաթեթավորում" } }
  ],

  /* ---- Доставка (по официальному сайту boomparty.am) ---- */
  delivery: {
    title: { en: "Delivery across Armenia", hy: "Առաքում ամբողջ Հայաստանում" },
    items: [
      { big: "0 AMD",   text: { en: "Delivery is free for orders from 10,000 AMD", hy: "Առաքումն անվճար է 10 000 դրամից սկսած պատվերների համար" } },
      { big: "500 AMD", text: { en: "Delivery cost for smaller orders",            hy: "Առաքման արժեքը ավելի փոքր պատվերների համար" } }
    ]
  },

  /* ---- Контакты ---- */
  contacts: {
    phone: "+37499255040",
    phoneDisplay: "+374 99 25 50 40",
    email: "boomparty00001@gmail.com",
    address: { en: "Margaryan Street 8, Yerevan", hy: "Մարգարյան փողոց 8, Երևան" },
    mapQuery: "Boom Party Margaryan Street 8 Yerevan",
    whatsapp: "",
    telegram: ""
  },

  /* ---- График. days: 1=пн ... 7=вс ---- */
  hours: {
    days: [1, 2, 3, 4, 5, 6, 7],
    open: "09:00",
    close: "22:00",
    label: { en: "Every day, 09:00 – 22:00", hy: "Ամեն օր՝ 09:00 – 22:00" },
    timezone: "Asia/Yerevan"
  },

  /* ---- Соцсети и сайт ---- */
  social: {
    website:   "https://boomparty.am",
    facebook:  "https://www.facebook.com/boomparty.best",
    instagram: "https://www.instagram.com/boom_party_am/",
    tiktok:    "https://www.tiktok.com/@boom_party_am/"
  },

  /* ---- Рейтинг (необязательно) ---- */
  rating: { value: "4.3", count: 10, source: "Yandex Maps" },

  /* ---- Фото. Пока права не подтверждены — пусто, используется графика ---- */
  photos: []
};
