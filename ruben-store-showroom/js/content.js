/* =====================================================================
   ДАННЫЕ САЙТА — единственный файл, который меняется для каждой компании.
   Источники: businesses.md + research/ruben-store-showroom.md.
   Пустое поле ("" / [] / null) = соответствующий блок скрывается.
   Все тексты двуязычные: { en: "...", hy: "..." }.
   ===================================================================== */
window.SITE = {
  slug: "ruben-store-showroom",

  /* ---- Тема: цвета и шрифты. Меняются под сферу бизнеса ---- */
  theme: {
    bg: "#faf6f0",
    ink: "#262b30",
    primary: "#a8441f",
    accent: "#f2b134",
    alt: "#3b4a55",
    soft: "#f8e7dc",
    fontsUrl: "https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700&family=Work+Sans:wght@400;600;700&family=Noto+Sans+Armenian:wght@400;600;700&display=swap",
    fontHead: "'Archivo', 'Noto Sans Armenian', system-ui, sans-serif",
    fontBody: "'Work Sans', 'Noto Sans Armenian', system-ui, sans-serif",
    radius: "6px"
  },

  /* ---- Название и описание ---- */
  name: { en: "Ruben Store Showroom", hy: "Ruben Store Showroom" },
  category: { en: "Building materials and home improvement", hy: "Շինանյութեր և տան վերանորոգման ապրանքներ" },
  city: { en: "Yerevan", hy: "Երևան" },
  since: "",

  hero: {
    title: {
      en: "Building materials for your next project",
      hy: "Շինանյութեր ձեր հաջորդ աշխատանքի համար"
    },
    text: {
      en: "Visit our store on Fuchik Street in Yerevan for building materials, tiles, wallpaper, decorative paints, laminate and tools.",
      hy: "Այցելեք մեր խանութ Ֆուչիկի փողոցում՝ Երևանում. շինանյութեր, սալիկներ, պաստառներ, դեկորատիվ ներկեր, լամինատ և գործիքներ:"
    }
  },

  about: {
    en: "Ruben Store Showroom is a building materials store in Yerevan, on Fuchik Street. Come in to see the range in person and choose materials for your renovation or construction work.",
    hy: "Ruben Store Showroom-ը շինանյութերի խանութ է Երևանում՝ Ֆուչիկի փողոցում: Այցելեք՝ տեսնելու տեսականին և ընտրելու նյութեր ձեր վերանորոգման կամ շինարարական աշխատանքների համար:"
  },

  /* ---- Ассортимент ---- */
  products: [
    { icon: "wrench", title: { en: "Building materials",   hy: "Շինանյութեր" } },
    { icon: "tile",   title: { en: "Ceramic tile",         hy: "Կերամիկական սալիկներ" } },
    { icon: "roller", title: { en: "Wallpaper",            hy: "Պաստառներ" } },
    { icon: "roller", title: { en: "Decorative paints",    hy: "Դեկորատիվ ներկեր" } },
    { icon: "tile",   title: { en: "Laminate",             hy: "Լամինատ" } },
    { icon: "wrench", title: { en: "Tools",                hy: "Գործիքներ" } }
  ],

  /* ---- Доставка ---- */
  delivery: null,

  /* ---- Контакты ---- */
  contacts: {
    phone: "+37495102090",
    phoneDisplay: "+374 95 102090",
    email: "",
    address: { en: "Fuchik Street 27/44, Yerevan", hy: "Ֆուչիկի փողոց 27/44, Երևան" },
    mapQuery: "Ruben Store Showroom Fuchik Street 27/44 Yerevan",
    whatsapp: "",
    telegram: "https://t.me/rubenarmenia"
  },

  /* ---- График. days: 1=пн ... 7=вс ---- */
  hours: {
    days: [1, 2, 3, 4, 5, 6, 7],
    open: "09:30",
    close: "19:00",
    byDay: { 7: { open: "10:00", close: "18:00" } },
    label: {
      en: "Mon–Sat 09:30 – 19:00, Sun 10:00 – 18:00",
      hy: "Երկ–Շբթ՝ 09:30 – 19:00, Կիր՝ 10:00 – 18:00"
    },
    timezone: "Asia/Yerevan"
  },

  /* ---- Соцсети и сайт ---- */
  social: {
    website:   "",
    facebook:  "https://www.facebook.com/RubenShowroom",
    instagram: "",
    tiktok:    ""
  },

  /* ---- Рейтинг (необязательно) ---- */
  rating: null,

  /* ---- Фото. Пока права не подтверждены — пусто, используется графика ---- */
  photos: [],

  heroIcon: "tile"
};
