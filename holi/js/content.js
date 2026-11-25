/* =====================================================================
   ДАННЫЕ САЙТА — единственный файл, который меняется для каждой компании.
   Источники: businesses.md + research/holi.md.
   Пустое поле ("" / [] / null) = соответствующий блок скрывается.
   Все тексты двуязычные: { en: "...", hy: "..." }.
   ===================================================================== */
window.SITE = {
  slug: "holi",

  /* ---- Тема: цвета и шрифты. Меняются под сферу бизнеса ---- */
  theme: {
    bg: "#f4faff",
    ink: "#17324d",
    primary: "#1a6fbd",
    accent: "#ffd23f",
    alt: "#c83e32",
    soft: "#e3f2fd",
    fontsUrl: "https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600;700&family=Nunito:wght@400;600;700&family=Noto+Sans+Armenian:wght@400;600;700&display=swap",
    fontHead: "'Baloo 2', 'Noto Sans Armenian', system-ui, sans-serif",
    fontBody: "'Nunito', 'Noto Sans Armenian', system-ui, sans-serif",
    radius: "24px"
  },

  /* ---- Название и описание ---- */
  name: { en: "Holi", hy: "ՀոԼի" },
  category: { en: "Children's clothing store", hy: "Մանկական հագուստի խանութ" },
  city: { en: "Yerevan", hy: "Երևան" },
  since: "",

  heroIcon: "baby",

  hero: {
    title: {
      en: "Holi: clothing for kids in Yerevan",
      hy: "ՀոԼի՝ մանկական հագուստ Երևանում"
    },
    text: {
      en: "A children's clothing store on Beknazaryan Street. Drop in, call us or message us on social media.",
      hy: "Մանկական հագուստի խանութ Բեկնազարյան փողոցում: Այցելեք մեզ, զանգահարեք կամ գրեք սոցիալական ցանցերով:"
    }
  },

  about: {
    en: "Holi is a children's clothing store in Yerevan. You can find us at Beknazaryan Street 5/19, reach us by phone, and follow us on Facebook and Instagram.",
    hy: "ՀոԼի-ն մանկական հագուստի խանութ է Երևանում: Մեզ կարող եք գտնել Բեկնազարյան փողոց 5/19 հասցեում, զանգահարել և հետևել Facebook-ում ու Instagram-ում:"
  },

  /* ---- Ассортимент ---- */
  products: [],

  /* ---- Доставка ---- */
  delivery: null,

  /* ---- Контакты ---- */
  contacts: {
    phone: "+37441508595",
    phoneDisplay: "+374 41 508595",
    email: "",
    address: { en: "Beknazaryan Street 5/19, Yerevan", hy: "Բեկնազարյան փողոց 5/19, Երևան" },
    mapQuery: "Holi Beknazaryan Street 5/19 Yerevan",
    whatsapp: "",
    telegram: ""
  },

  /* ---- График ---- */
  hours: {
    days: [1, 2, 3, 4, 5, 6, 7],
    open: "10:00",
    close: "20:00",
    label: { en: "Every day, 10:00 – 20:00", hy: "Ամեն օր՝ 10:00 – 20:00" },
    timezone: "Asia/Yerevan"
  },

  /* ---- Соцсети и сайт ---- */
  social: {
    website:   "",
    facebook:  "https://facebook.com/HOLIMANKAKANHAGUST",
    instagram: "https://instagram.com/holi_kids_",
    tiktok:    ""
  },

  /* ---- Рейтинг ---- */
  rating: { value: "4.2", count: 5, source: "Yandex Maps" },

  /* ---- Фото ---- */
  photos: []
};
