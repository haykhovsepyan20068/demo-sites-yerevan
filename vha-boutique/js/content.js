/* =====================================================================
   ДАННЫЕ САЙТА — единственный файл, который меняется для каждой компании.
   Источники: businesses.md + research/vha-boutique.md.
   Пустое поле ("" / [] / null) = соответствующий блок скрывается.
   Все тексты двуязычные: { en: "...", hy: "..." }.
   ===================================================================== */
window.SITE = {
  slug: "vha-boutique",

  /* ---- Тема: цвета и шрифты ---- */
  theme: {
    bg: "#fbf7ec",
    ink: "#16251f",
    primary: "#0f5c46",
    accent: "#d9b45f",
    alt: "#0a4535",
    soft: "#e6f0ea",
    fontsUrl: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Playfair+Display:wght@400;600;700&family=Noto+Serif+Armenian:wght@400;600;700&display=swap",
    fontHead: "'Playfair Display', 'Cormorant Garamond', 'Noto Serif Armenian', Georgia, serif",
    fontBody: "'Cormorant Garamond', 'Noto Serif Armenian', Georgia, serif",
    radius: "4px"
  },

  /* ---- Название и описание ---- */
  name: { en: "Vha Boutique", hy: "Vha Boutique" },
  category: { en: "Clothing, shoes and accessories", hy: "Հագուստ, կոշիկ և աքսեսուարներ" },
  city: { en: "Yerevan", hy: "Երևան" },
  since: "2014",

  hero: {
    title: {
      en: "Your wardrobe, finished with care",
      hy: "Ձեր զգեստապահարանը՝ խնամքով լրացված"
    },
    text: {
      en: "Clothing, shoes and accessories await you at our boutique on Beknazaryan Street in Yerevan.",
      hy: "Հագուստ, կոշիկ և աքսեսուարներ սպասում են ձեզ մեր բուտիկում՝ Երևանի Բեկնազարյան փողոցում:"
    }
  },

  about: {
    en: "Vha Boutique is a clothing, shoe and accessories store in Yerevan. Come to Beknazaryan Street 4/1 to see the selection in person, or call us before your visit.",
    hy: "Vha Boutique-ը հագուստի, կոշիկի և աքսեսուարների խանութ է Երևանում: Եկեք Բեկնազարյան փողոց 4/1՝ ծանոթանալու տեսականուն անձամբ, կամ զանգահարեք մեզ այցելությունից առաջ:"
  },

  /* ---- Ассортимент ---- */
  products: [
    { icon: "dress",  title: { en: "Clothing",                   hy: "Հագուստ" } },
    { icon: "shoe",   title: { en: "Shoes",                      hy: "Կոշիկ" } },
    { icon: "bag",    title: { en: "Accessories & haberdashery", hy: "Աքսեսուարներ և մանրապարագաներ" } }
  ],

  delivery: null,

  /* ---- Контакты ---- */
  contacts: {
    phone: "+37493611452",
    phoneDisplay: "+374 93 611452",
    email: "",
    address: { en: "Beknazaryan Street 4/1, Yerevan", hy: "Բեկնազարյան փողոց 4/1, Երևան" },
    mapQuery: "Vha Boutique Beknazaryan Street 4/1 Yerevan",
    whatsapp: "",
    telegram: ""
  },

  hours: null,

  social: {
    website: "",
    facebook: "https://www.facebook.com/vhaboutique/",
    instagram: "",
    tiktok: ""
  },

  rating: null,

  heroIcon: "hanger",

  photos: []
};
