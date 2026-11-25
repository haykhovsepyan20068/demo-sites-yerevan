/* =====================================================================
   ДАННЫЕ САЙТА — единственный файл, который меняется для каждой компании.
   Источники: businesses.md + research/bedding-shop-am.md.
   Пустое поле ("" / [] / null) = соответствующий блок скрывается.
   Все тексты двуязычные: { en: "...", hy: "..." }.
   ===================================================================== */
window.SITE = {
  slug: "bedding-shop-am",

  /* ---- Тема: цвета и шрифты. Меняются под сферу бизнеса ---- */
  theme: {
    bg: "#fbf7ef",
    ink: "#1b1f3f",
    primary: "#2d3678",
    accent: "#d3c6f1",
    alt: "#4a3d8c",
    soft: "#ebe8f7",
    fontsUrl: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Nunito+Sans:wght@400;600;700&family=Noto+Sans+Armenian:wght@400;600;700&family=Noto+Serif+Armenian:wght@400;600;700&display=swap",
    fontHead: "'Cormorant Garamond', 'Noto Serif Armenian', Georgia, serif",
    fontBody: "'Nunito Sans', 'Noto Sans Armenian', system-ui, sans-serif",
    radius: "18px"
  },

  /* ---- Название и описание ---- */
  name: { en: "Bedding Shop.am", hy: "Bedding Shop.am" },
  category: { en: "Bedding and mattresses", hy: "Անկողնային պարագաներ և ներքնակներ" },
  city: { en: "Yerevan", hy: "Երևան" },
  since: "",

  hero: {
    title: {
      en: "Rest well, wake up rested",
      hy: "Հանգստացեք լավ, արթնացեք թարմ"
    },
    text: {
      en: "Bedding, mattresses and more for a cozy bedroom. Find us in Yerevan's Ajapnyak district, with delivery available.",
      hy: "Անկողնային պարագաներ, ներքնակներ և ավելին՝ հարմարավետ ննջարանի համար: Մենք Երևանի Աջափնյակ վարչական շրջանում ենք, հասանելի է առաքում:"
    }
  },

  about: {
    en: "Bedding Shop.am is a bedding store in Yerevan's Ajapnyak district. Our range includes bedding sets and mattresses, and our Instagram also features baby cots and blankets. Delivery is available, so a comfortable night's sleep can come to your door.",
    hy: "Bedding Shop.am-ը անկողնային պարագաների խանութ է Երևանի Աջափնյակ վարչական շրջանում: Մեր տեսականու մեջ կան անկողնային հավաքածուներ և ներքնակներ, իսկ Instagram-ի էջում ներկայացված են նաև մանկական մահճակալներ և ծածկոցներ: Առաքումը հասանելի է, այնպես որ հարմարավետ քունը կհասնի մինչև ձեր տուն:"
  },

  /* ---- Ассортимент ---- */
  products: [
    { icon: "bed",    title: { en: "Bedding",                    hy: "Անկողնային պարագաներ" } },
    { icon: "bed",    title: { en: "Mattresses",                 hy: "Ներքնակներ" } },
    { icon: "baby",   title: { en: "Baby cots",                  hy: "Մանկական մահճակալներ" } },
    { icon: "heart",  title: { en: "Blankets",                   hy: "Ծածկոցներ" } },
    { icon: "shirt",  title: { en: "Underwear and swimwear",     hy: "Ներքնազգեստ և լողազգեստ" } }
  ],

  /* ---- Доставка: условия не подтверждены ---- */
  delivery: null,

  /* ---- Контакты ---- */
  contacts: {
    phone: "+37499111040",
    phoneDisplay: "+374 99 111040",
    email: "beddingshop.am@gmail.com",
    address: { en: "Norashen Quarter 36/3, Ajapnyak, Yerevan", hy: "Նորաշեն թաղամաս 36/3, Աջափնյակ, Երևան" },
    mapQuery: "Bedding Shop.am Norashen 36/3 Ajapnyak Yerevan",
    whatsapp: "+374 96 906097",
    telegram: ""
  },

  /* ---- График: расхождение источников (09:30 / 10:00) ---- */
  hours: null,

  /* ---- Соцсети и сайт ---- */
  social: {
    website:   "",
    facebook:  "",
    instagram: "https://www.instagram.com/beddingshop.am",
    tiktok:    ""
  },

  /* ---- Рейтинг: не использован ---- */
  rating: null,

  /* ---- Фото: права не подтверждены ---- */
  photos: [],

  /* ---- Иконка главного экрана ---- */
  heroIcon: "bed"
};
