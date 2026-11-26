(function () {
  "use strict";

  // Texts from content/bs/cg-service.json (EN/HY), plus interface labels.
  var T = {
    meta: {
      title: { en: "CG Service | Car Service in Yerevan, Mazmanyan 1", hy: "CG Service | Ավտոսպասարկում Երևանում, Մազմանյան 1" },
      description: {
        en: "Car service and auto repair in Garage Masters' Mall, Mazmanyan 1, Yerevan. Injector cleaning, suspension, brake discs, CO welding, lights and alarms. Call +374 98 828211.",
        hy: "Ավտոսպասարկում և ավտոմեքենաների նորոգում Երևանում՝ Garage Masters' Mall-ում, Մազմանյան 1։ Ինժեկտորի մաքրում, ընթացող մաս, արգելակի սկավառակներ, CO եռակցում, լույսեր և ազդանշանային համակարգեր։ Զանգահարեք +374 98 828211։"
      }
    },
    hero: {
      eyebrow: { en: "Garage Masters' Mall, Yerevan", hy: "Garage Masters' Mall, Երևան" },
      title: { en: "Car service at Mazmanyan\u00a01.", hy: "Ավտոսպասարկում Մազմանյան\u00a01-ում։" },
      subtitle: {
        en: "Injector cleaning, suspension, brake discs, welding, lights and alarms. One workshop in Garage Masters' Mall, open until 22:00.",
        hy: "Ինժեկտորի մաքրում, ընթացող մաս, արգելակի սկավառակներ, եռակցում, լույսեր և ազդանշանային համակարգեր։ Մեկ արհեստանոց Garage Masters' Mall-ում, բաց է մինչև 22:00։"
      }
    },
    about: {
      title: { en: "A workshop, not a showroom", hy: "Արհեստանոց, ոչ թե ցուցասրահ" },
      text: {
        en: "CG Service is a car repair workshop in Garage Masters' Mall on Mazmanyan Street, Yerevan. Services: injector cleaning, running gear, brake discs, CO welding, lighting and alarm installation. Call or message us and describe the problem.",
        hy: "CG Service-ը ավտոնորոգման արհեստանոց է Երևանի Մազմանյան փողոցում, Garage Masters' Mall-ում։ Ծառայություններ՝ ինժեկտորների մաքրում, ընթացող մաս, արգելակի սկավառակներ, CO եռակցում, լուսավորության և ազդանշանային համակարգի տեղադրում։ Զանգահարեք կամ գրեք մեզ և նկարագրեք խնդիրը։"
      }
    },
    services: [
      { name: { en: "Injector cleaning", hy: "Ինժեկտորների մաքրում" },
        desc: { en: "Petrol injector cleaning, including ultrasonic cleaning.", hy: "Բենզինային ինժեկտորների մաքրում, այդ թվում՝ ուլտրաձայնային եղանակով։" } },
      { name: { en: "Suspension and running gear", hy: "Ընթացող մաս" },
        desc: { en: "Running gear and suspension work.", hy: "Ընթացող մասի և կախոցի աշխատանքներ։" } },
      { name: { en: "Brake discs", hy: "Արգելակի սկավառակներ" },
        desc: { en: "Brake disc repair by machining (turning).", hy: "Արգելակի սկավառակների նորոգում՝ պրոտոչկայով։" } },
      { name: { en: "CO welding", hy: "CO եռակցում" },
        desc: { en: "CO welding work.", hy: "CO եռակցման աշխատանքներ։" } },
      { name: { en: "Lighting installation", hy: "Լուսավորության տեղադրում" },
        desc: { en: "Installation of LED and halogen lighting.", hy: "LED և հալոգեն լուսավորության տեղադրում։" } },
      { name: { en: "Alarm installation", hy: "Ազդանշանային համակարգի տեղադրում" },
        desc: { en: "Installation of a car alarm system.", hy: "Ավտոմեքենայի ազդանշանային համակարգի տեղադրում։" } }
    ],
    whyUs: {
      title: { en: "What you can count on", hy: "Ինչի վրա կարող եք հույս դնել" },
      items: [
        { title: { en: "Several jobs, one address", hy: "Մի քանի աշխատանք՝ մեկ հասցեում" },
          text: { en: "Injector cleaning, running gear, brake discs, welding, lighting and alarms in one workshop.", hy: "Ինժեկտորների մաքրում, ընթացող մաս, արգելակի սկավառակներ, եռակցում, լուսավորություն և ազդանշանային համակարգեր՝ մեկ արհեստանոցում։" } },
        { title: { en: "Open until 22:00", hy: "Բաց է մինչև 22:00" },
          text: { en: "Call before you drive over to confirm the hours for your day.", hy: "Ճանապարհ ընկնելուց առաջ զանգահարեք և ճշտեք ձեր օրվա ժամերը։" } },
        { title: { en: "Direct contact", hy: "Ուղիղ կապ" },
          text: { en: "Call, or write on WhatsApp or Viber and describe the problem before you come.", hy: "Զանգահարեք կամ գրեք WhatsApp-ով կամ Viber-ով և նկարագրեք խնդիրը մինչև գալը։" } }
      ]
    },
    contact: {
      title: { en: "Find us", hy: "Գտեք մեզ" },
      address: { en: "Mazmanyan 1, Garage Masters' Mall, garage 13, Yerevan", hy: "Մազմանյան 1, Garage Masters' Mall, գարաժ 13, Երևան" },
      hours: { en: "Open until 22:00. Call to confirm hours for your day.", hy: "Բաց է մինչև 22:00։ Ձեր օրվա ժամերը ճշտելու համար զանգահարեք։" }
    },
    ctas: {
      call: { en: "Call +374 98 828211", hy: "Զանգահարել +374 98 828211" },
      whatsapp: { en: "Write on WhatsApp", hy: "Գրել WhatsApp-ով" },
      services: { en: "See services", hy: "Տեսնել ծառայությունները" },
      directions: { en: "Get directions", hy: "Ճանապարհը դեպի մեզ" }
    },
    footer: {
      tagline: { en: "CG Service. Car repair in Garage Masters' Mall, Yerevan.", hy: "CG Service։ Ավտոնորոգում Երևանում՝ Garage Masters' Mall-ում։" },
      address: { en: "Mazmanyan 1, Garage Masters' Mall, garage 13, Yerevan", hy: "Մազմանյան 1, Garage Masters' Mall, գարաժ 13, Երևան" },
      rights: { en: "All rights reserved.", hy: "Բոլոր իրավունքները պաշտպանված են։" }
    },
    ui: {
      skip: { en: "Skip to content", hy: "Անցնել բովանդակությանը" },
      navServices: { en: "Services", hy: "Ծառայություններ" },
      navWorkshop: { en: "Workshop", hy: "Արհեստանոց" },
      navContact: { en: "Contact", hy: "Կապ" },
      servicesTitle: { en: "What we work on", hy: "Ինչով ենք զբաղվում" },
      garage: { en: "Garage", hy: "Գարաժ" },
      address: { en: "Address", hy: "Հասցե" },
      phone: { en: "Phone", hy: "Հեռախոս" },
      hours: { en: "Hours", hy: "Ժամեր" },
      viber: { en: "Write on Viber", hy: "Գրել Viber-ով" },
      stamp: { en: "Open until 22:00", hy: "Բաց է մինչև 22:00" },
      dockCall: { en: "Call", hy: "Զանգ" },
      dockRoute: { en: "Route", hy: "Երթուղի" },
      menu: { en: "Menu", hy: "Մենյու" }
    }
  };

  function pick(path) {
    var node = T;
    var parts = path.split(".");
    for (var i = 0; i < parts.length; i++) {
      if (node == null) return null;
      node = node[parts[i]];
    }
    return node;
  }

  var KEY = "cg-service-lang";

  function apply(lang) {
    if (lang !== "en" && lang !== "hy") lang = "en";
    document.documentElement.lang = lang;

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var v = pick(nodes[i].getAttribute("data-i18n"));
      if (v && typeof v[lang] === "string") nodes[i].textContent = v[lang];
    }

    document.title = T.meta.title[lang];
    var d = document.querySelector('meta[name="description"]');
    if (d) d.setAttribute("content", T.meta.description[lang]);
    var ot = document.querySelector('meta[property="og:title"]');
    if (ot) ot.setAttribute("content", T.meta.title[lang]);
    var od = document.querySelector('meta[property="og:description"]');
    if (od) od.setAttribute("content", T.meta.description[lang]);
    var ar = document.querySelectorAll("[data-i18n-aria]");
    for (var k = 0; k < ar.length; k++) {
      var av = pick(ar[k].getAttribute("data-i18n-aria"));
      if (av && typeof av[lang] === "string") ar[k].setAttribute("aria-label", av[lang]);
    }
    var ol = document.querySelector('meta[property="og:locale"]');
    if (ol) ol.setAttribute("content", lang === "hy" ? "hy_AM" : "en_US");

    var btns = document.querySelectorAll(".lang button");
    for (var j = 0; j < btns.length; j++) {
      btns[j].setAttribute("aria-pressed", btns[j].getAttribute("data-lang") === lang ? "true" : "false");
    }
  }

  var saved = null;
  try { saved = window.localStorage.getItem(KEY); } catch (e) { saved = null; }
  apply(saved || "en");

  var group = document.querySelector(".lang");
  if (group) {
    group.addEventListener("click", function (ev) {
      var b = ev.target.closest("button[data-lang]");
      if (!b) return;
      var lang = b.getAttribute("data-lang");
      apply(lang);
      try { window.localStorage.setItem(KEY, lang); } catch (e) { /* storage unavailable */ }
    });
  }

  // Burger menu (widths up to 1020px, where the inline nav is hidden)
  var bar = document.querySelector(".bar");
  var burger = document.querySelector(".burger");
  function setMenu(open) {
    if (!bar || !burger) return;
    bar.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  }
  if (burger) {
    burger.addEventListener("click", function () { setMenu(burger.getAttribute("aria-expanded") !== "true"); });
    var navLinks = document.querySelectorAll(".nav a");
    for (var n = 0; n < navLinks.length; n++) navLinks[n].addEventListener("click", function () { setMenu(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && burger.getAttribute("aria-expanded") === "true") { setMenu(false); burger.focus(); }
    });
    document.addEventListener("click", function (e) { if (bar && !bar.contains(e.target)) setMenu(false); });
    window.addEventListener("resize", function () { if (window.innerWidth > 1020) setMenu(false); });
  }

  var y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  // Start the floor-paint sequence once fonts are ready, so the stencil lands on real glyphs.
  function go() { document.documentElement.classList.add("painted"); }
  if (document.fonts && document.fonts.ready) {
    var done = false;
    document.fonts.ready.then(function () { if (!done) { done = true; go(); } });
    setTimeout(function () { if (!done) { done = true; go(); } }, 1200);
  } else {
    go();
  }
})();
