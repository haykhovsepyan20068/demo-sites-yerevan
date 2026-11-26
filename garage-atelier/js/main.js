(function () {
  "use strict";

  var T = {
    en: {
      docTitle: "Garage Atelier | Car Service in Yerevan, Mazmanyan 1/1",
      docDesc: "Garage Atelier is a car service and auto repair workshop at Mazmanyan 1/1, Yerevan. Open until 22:00. Call +374 96 700025.",
      skip: "Skip to content",
      navAbout: "About", navServices: "Services", navWhy: "Why us", navContact: "Contact",
      heroBadge: "Car service, auto repair",
      heroTitle: "Car service and auto repair in Yerevan.",
      heroSub: "Garage Atelier is a car service and auto repair workshop on Mazmanyan Street in Yerevan. Bring your car in, or call us first.",
      ctaCall: "Call now", ctaDirections: "Get directions",
      hoursShort: "Open until 22:00", addressShort: "Mazmanyan 1/1, Yerevan",
      svgPattern: "Pattern: your car", svgBody: "Body side ×2", svgWheel: "Wheel ×4",
      aboutTitle: "A workshop for cars that need attention",
      aboutLead: "Garage Atelier is a car service and auto repair workshop at Mazmanyan 1/1, Yerevan.",
      aboutBody: "The workshop is open until 22:00, so you can come after the working day. To discuss your car, call us and describe what is happening.",
      servicesTitle: "What we do",
      s1Name: "Car service", s1Desc: "Car service at our workshop on Mazmanyan Street. Call to describe what your car needs.",
      s2Name: "Auto repair", s2Desc: "Repair work on your vehicle. Tell us about the problem by phone and we will talk through the next step.",
      whyTitle: "Why come to us",
      w1Title: "Open until 22:00", w1Text: "The workshop works into the evening, which suits those who cannot come during the day.",
      w2Title: "Direct contact", w2Text: "One phone number: call and talk about your car directly.",
      w3Title: "Our address", w3Text: "We are at Mazmanyan 1/1, Yerevan.",
      contactTitle: "Contact Garage Atelier",
      lblAddress: "Address", lblPhone: "Phone", lblContact: "Contact", lblHours: "Hours",
      address: "Mazmanyan Street 1/1, Yerevan, Armenia",
      hours: "Open until 22:00",
      yandex: "Find us on Yandex Maps",
      footTag: "Garage Atelier. Car service and auto repair in Yerevan.",
      footRights: "All rights reserved.",
      ariaCall: "Call +374 96 700025", ariaMenu: "Open menu", ariaMenuClose: "Close menu",
      ariaNav: "Main", ariaLang: "Language", ariaDock: "Quick contact", ogLocale: "en_US", ogAlt: "hy_AM"
    },
    hy: {
      docTitle: "Garage Atelier | Ավտոսպասարկում Երևանում, Մազմանյան 1/1",
      docDesc: "Garage Atelier-ը ավտոսպասարկման և ավտովերանորոգման արհեստանոց է Երևանում՝ Մազմանյան 1/1 հասցեում։ Բաց է մինչև 22:00։ Զանգահարեք՝ +374 96 700025։",
      skip: "Անցնել բովանդակությանը",
      navAbout: "Մեր մասին", navServices: "Ծառայություններ", navWhy: "Ինչու մենք", navContact: "Կապ",
      heroBadge: "Ավտոսպասարկում, ավտովերանորոգում",
      heroTitle: "Ավտոսպասարկում և ավտովերանորոգում Երևանում։",
      heroSub: "Garage Atelier-ը ավտոսպասարկման և ավտովերանորոգման արհեստանոց է Երևանի Մազմանյան փողոցում։ Բերեք մեքենան կամ նախ զանգահարեք մեզ։",
      ctaCall: "Զանգահարել", ctaDirections: "Ինչպես հասնել",
      hoursShort: "Բաց է մինչև 22:00", addressShort: "Մազմանյան 1/1, Երևան",
      svgPattern: "Լեկալ՝ ձեր մեքենան", svgBody: "Թափքի կողք ×2", svgWheel: "Անիվ ×4",
      aboutTitle: "Արհեստանոց այն մեքենաների համար, որոնք խնամք են պահանջում",
      aboutLead: "Garage Atelier-ը ավտոսպասարկման և ավտովերանորոգման արհեստանոց է Երևանում՝ Մազմանյան 1/1 հասցեում։",
      aboutBody: "Արհեստանոցը բաց է մինչև 22:00, այնպես որ կարող եք գալ աշխատանքային օրից հետո։ Ձեր մեքենայի մասին խոսելու համար զանգահարեք և նկարագրեք, թե ինչ է կատարվում։",
      servicesTitle: "Ինչ ենք անում",
      s1Name: "Ավտոսպասարկում", s1Desc: "Ավտոսպասարկում մեր արհեստանոցում՝ Մազմանյան փողոցում։ Զանգահարեք և ասեք, թե ինչ է պետք մեքենային։",
      s2Name: "Ավտովերանորոգում", s2Desc: "Ձեր մեքենայի վերանորոգման աշխատանքներ։ Հեռախոսով պատմեք խնդրի մասին, և մենք միասին կքննարկենք հաջորդ քայլը։",
      whyTitle: "Ինչու գալ մեզ մոտ",
      w1Title: "Բաց է մինչև 22:00", w1Text: "Արհեստանոցն աշխատում է մինչև երեկո, ինչը հարմար է նրանց, ովքեր ցերեկը չեն կարող գալ։",
      w2Title: "Ուղիղ կապ", w2Text: "Մեկ հեռախոսահամար. զանգահարեք և ուղիղ խոսեք ձեր մեքենայի մասին։",
      w3Title: "Մեր հասցեն", w3Text: "Մենք գտնվում ենք Երևանում՝ Մազմանյան 1/1 հասցեում։",
      contactTitle: "Կապ Garage Atelier-ի հետ",
      lblAddress: "Հասցե", lblPhone: "Հեռախոս", lblContact: "Կոնտակտ", lblHours: "Աշխատանքային ժամեր",
      address: "Երևան, Մազմանյան փողոց 1/1, Հայաստան",
      hours: "Բաց է մինչև 22:00",
      yandex: "Գտեք մեզ Yandex Քարտեզներում",
      footTag: "Garage Atelier. Ավտոսպասարկում և ավտովերանորոգում Երևանում։",
      footRights: "Բոլոր իրավունքները պաշտպանված են։",
      ariaCall: "Զանգահարել +374 96 700025", ariaMenu: "Բացել ընտրացանկը", ariaMenuClose: "Փակել ընտրացանկը",
      ariaNav: "Հիմնական", ariaLang: "Լեզու", ariaDock: "Արագ կապ", ogLocale: "hy_AM", ogAlt: "en_US"
    }
  };

  var KEY = "garage-atelier-lang";

  function store(get, val) {
    try {
      if (get) return window.localStorage.getItem(KEY);
      window.localStorage.setItem(KEY, val);
    } catch (e) { return null; }
  }

  function setMeta(sel, val) {
    var m = document.querySelector(sel);
    if (m && val != null) m.setAttribute("content", val);
  }

  function setLang(lang) {
    if (!T[lang]) lang = "en";
    var dict = T[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k] != null) el.textContent = dict[k];
    });
    document.title = dict.docTitle;
    setMeta('meta[name="description"]', dict.docDesc);
    setMeta('meta[property="og:title"]', dict.docTitle);
    setMeta('meta[property="og:description"]', dict.docDesc);
    setMeta('meta[property="og:locale"]', dict.ogLocale);
    setMeta('meta[property="og:locale:alternate"]', dict.ogAlt);
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-aria");
      if (el.classList.contains("burger") && el.getAttribute("aria-expanded") === "true") k = "ariaMenuClose";
      if (dict[k] != null) el.setAttribute("aria-label", dict[k]);
    });
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
    store(false, lang);
  }

  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });
  setLang(store(true) || "en");

  // Mobile / tablet menu
  var burger = document.querySelector(".burger");
  var nav = document.getElementById("site-nav");
  function toggleMenu(open) {
    if (!burger || !nav) return;
    var lang = document.documentElement.lang === "hy" ? "hy" : "en";
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", T[lang][open ? "ariaMenuClose" : "ariaMenu"]);
    nav.classList.toggle("is-open", open);
  }
  if (burger && nav) {
    burger.addEventListener("click", function () {
      toggleMenu(burger.getAttribute("aria-expanded") !== "true");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { toggleMenu(false); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && burger.getAttribute("aria-expanded") === "true") { toggleMenu(false); burger.focus(); }
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 1020) toggleMenu(false);
    });
  }

  var y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  // Sew the seam once on load.
  var sheet = document.querySelector(".sheet");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (sheet) {
    if (reduce) {
      sheet.classList.add("is-sewn");
    } else {
      requestAnimationFrame(function () {
        sheet.classList.add("is-sewing");
        var run = document.getElementById("needleRun");
        setTimeout(function () {
          try { run.beginElement(); } catch (e) { /* SMIL unsupported: seam still sews */ }
        }, 350);
      });
    }
  }
})();
