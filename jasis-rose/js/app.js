/* =====================================================================
   Универсальный рендер. Не содержит данных компании — всё берётся из SITE.
   Для других компаний этот файл копируется без изменений.
   ===================================================================== */
(function () {
  "use strict";
  var S = window.SITE;
  var $ = function (id) { return document.getElementById(id); };

  /* ---------- Тексты интерфейса (общие для всех сайтов) ---------- */
  var UI = {
    en: {
      nav_about: "About", nav_products: "Products", nav_delivery: "Delivery", nav_contacts: "Contacts",
      call: "Call now", directions: "Get directions",
      products_title: "What you will find here",
      contacts_title: "Visit or contact us",
      address: "Address", phone: "Phone", email: "Email", hours: "Opening hours",
      open_now: "Open now", closed_now: "Closed now",
      follow: "Follow us", website: "Website", since: "Since",
      rating: "rating", ratings: "ratings", on: "on", rating_title: "Customer rating",
      demo: "Demo version. This is not the official website of {name}. Any changes must be agreed with the client."
    },
    hy: {
      nav_about: "Մեր մասին", nav_products: "Ապրանքներ", nav_delivery: "Առաքում", nav_contacts: "Կոնտակտներ",
      call: "Զանգահարել", directions: "Ճանապարհ",
      products_title: "Ինչ կգտնեք մեզ մոտ",
      contacts_title: "Այցելեք կամ կապվեք մեզ հետ",
      address: "Հասցե", phone: "Հեռախոս", email: "Էլ. փոստ", hours: "Աշխատանքային ժամեր",
      open_now: "Բաց է հիմա", closed_now: "Փակ է հիմա",
      follow: "Հետևեք մեզ", website: "Կայք", since: "Սկսած",
      rating: "գնահատական", ratings: "գնահատական", on: "", rating_title: "Հաճախորդների գնահատական",
      demo: "Դեմո տարբերակ: Սա {name}-ի պաշտոնական կայքը չէ: Բոլոր փոփոխությունները պետք է համաձայնեցվեն պատվիրատուի հետ:"
    }
  };

  /* ---------- Иконки ---------- */
  var ICON = {
    toys:    '<path d="M4 20V10h6v10M14 20v-6h6v6M7 10V6h0a3 3 0 1 1 3 0"/><circle cx="17" cy="9" r="3"/>',
    book:    '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5M9 7h6"/>',
    balloon: '<ellipse cx="12" cy="9" rx="6" ry="7"/><path d="M12 16l-1.5 2h3zM12 18c0 2 2 2 2 4"/>',
    party:   '<path d="M3 21l5-14 9 9z"/><path d="M14 4v2M19 8h2M17 3l1 2M20 13l2 1"/>',
    tree:    '<path d="M12 3l-5 7h3l-4 6h12l-4-6h3z"/><path d="M12 16v5"/>',
    thermos: '<rect x="8" y="3" width="8" height="18" rx="2"/><path d="M8 8h8M10 3V1.5h4V3"/>',
    bouquet: '<circle cx="9" cy="8" r="3"/><circle cx="15" cy="8" r="3"/><circle cx="12" cy="5" r="3"/><path d="M8 13l4 8 4-8"/>',
    wrap:    '<rect x="3" y="9" width="18" height="12" rx="2"/><path d="M3 13h18M12 9v12M12 9C9 3 5 6 8 9M12 9c3-6 7-3 4 0"/>',
    scissors:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8.5 8l11 9M8.5 16l11-9"/>',
    shirt:   '<path d="M8 3L3 6l2 4 3-1v12h8V9l3 1 2-4-5-3a4 4 0 0 1-8 0z"/>',
    dress:   '<path d="M9 3l-1 5 2 3-4 10h14l-4-10 2-3-1-5zM9 3h6"/>',
    shoe:    '<path d="M3 16c0-3 1-5 1-9h4c1 3 3 4 6 5l6 2c1 .5 1 2 1 2z"/><path d="M3 19h19"/>',
    bag:     '<rect x="4" y="8" width="16" height="13" rx="2"/><path d="M8 8V6a4 4 0 0 1 8 0v2"/>',
    hanger:  '<path d="M12 8a2.5 2.5 0 1 0-2.5-2.5M12 8v3l9 6v2H3v-2l9-6"/>',
    baby:    '<circle cx="12" cy="10" r="5"/><path d="M9.5 10h.01M14.5 10h.01M10 12.5c1 1 3 1 4 0M7 21c0-3 2-4 5-4s5 1 5 4"/>',
    bed:     '<path d="M3 19V6M3 15h18v4M21 15v-3a3 3 0 0 0-3-3h-7v6"/><circle cx="7" cy="11" r="2"/>',
    comb:    '<path d="M4 8h16v4H4zM6 12v4M9 12v4M12 12v4M15 12v4M18 12v4"/>',
    polish:  '<rect x="8" y="11" width="8" height="10" rx="2"/><path d="M10 11V7h4v4M11 7V3h2v4"/>',
    sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/>',
    ring:    '<circle cx="12" cy="15" r="5"/><path d="M9 6l3-3 3 3-3 4z"/>',
    heart:   '<path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z"/>',
    car:     '<path d="M4 16v-4l2-5h12l2 5v4M4 16h16M4 16v2h3v-2M17 16v2h3v-2"/><circle cx="7.5" cy="13" r=".8"/><circle cx="16.5" cy="13" r=".8"/>',
    wrench:  '<path d="M14.5 6.5a4 4 0 0 0 5 5l-9 9a2 2 0 0 1-3-3z"/><path d="M14.5 6.5l3-3 2 2-3 3"/>',
    tile:    '<rect x="3" y="3" width="8" height="8"/><rect x="13" y="3" width="8" height="8"/><rect x="3" y="13" width="8" height="8"/><rect x="13" y="13" width="8" height="8"/>',
    roller:  '<rect x="4" y="3" width="13" height="6" rx="1"/><path d="M17 6h3v6h-8v3M10 15h4v6h-4z"/>',
    flower:  '<circle cx="12" cy="9" r="2.2"/><path d="M12 6.8a3 3 0 1 1 3 3M15 9.8a3 3 0 1 1-3 3M12 12.8a3 3 0 1 1-3-3M9 9.8a3 3 0 1 1 3-3M12 14v7M12 18c-2 0-3-1-4-2"/>',
    truck:   '<path d="M2 6h11v10H2zM13 9h4l4 3v4h-8"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
    star:    '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
    pin:     '<path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
    phone:   '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    mail:    '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    clock:   '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    web:     '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
    facebook:'<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z"/>',
    instagram:'<rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.5"/><circle cx="17" cy="7" r=".6"/>',
    tiktok:  '<path d="M14 3v11a3.5 3.5 0 1 1-3.5-3.5M14 3c.5 3 2.5 4.5 5 4.5"/>',
    telegram:'<path d="M21 4L3 11l6 2 2 6 3-4 5 4z"/>',
    whatsapp:'<path d="M4 20l1.3-4A8 8 0 1 1 8.5 19z"/><path d="M9 9c0 3 3 6 6 6l1-2-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2z"/>'
  };
  function icon(name, cls) {
    return '<svg class="ic ' + (cls || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICON[name] || "") + "</svg>";
  }

  var lang = "en";
  try { lang = localStorage.getItem("lang") || ((navigator.language || "").indexOf("hy") === 0 ? "hy" : "en"); } catch (e) {}
  if (!UI[lang]) lang = "en";

  var tr = function (v) { return v && typeof v === "object" ? (v[lang] || v.en || "") : (v || ""); };
  var ui = function (k) { return UI[lang][k] || UI.en[k] || ""; };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var hide = function (id, on) { var el = $(id); if (el) el.hidden = !!on; };

  /* ---------- Тема ---------- */
  var root = document.documentElement.style;
  var T = S.theme || {};
  ["bg", "ink", "primary", "accent", "alt", "soft", "radius"].forEach(function (k) { if (T[k]) root.setProperty("--" + k, T[k]); });
  if (T.fontHead) root.setProperty("--font-head", T.fontHead);
  if (T.fontBody) root.setProperty("--font-body", T.fontBody);
  if (T.fontsUrl) { var fl = document.createElement("link"); fl.rel = "stylesheet"; fl.href = T.fontsUrl; document.head.appendChild(fl); }

  /* Главная иллюстрация: если задан S.heroIcon — крупная иконка и плавающие иконки ассортимента
     (у эталона Boom Party heroIcon не задан, остаётся SVG с шарами из index.html) */
  (function heroArt() {
    var art = document.querySelector(".hero__art");
    if (!S.heroIcon || !art) return;
    var fl = (S.products || []).slice(0, 4).map(function (p, i) { return '<span class="art__f art__f' + (i + 1) + '">' + icon(p.icon) + "</span>"; }).join("");
    var st = art.querySelector(".stamp");
    art.innerHTML = '<div class="art"><i class="art__disc"></i><span class="art__main">' + icon(S.heroIcon) + "</span>" + fl + "</div>";
    if (st) art.appendChild(st);
  })();

  var C = S.contacts || {};
  var telHref = C.phone ? "tel:" + C.phone : "";
  var mapHref = C.mapQuery ? "https://yandex.com/maps/?text=" + encodeURIComponent(C.mapQuery) : "";

  /* ---------- Открыто сейчас ---------- */
  function isOpen() {
    var H = S.hours;
    if (!H || !H.open || !H.close) return null;
    try {
      var parts = new Intl.DateTimeFormat("en-GB", { timeZone: H.timezone || "UTC", weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false }).formatToParts(new Date());
      var get = function (t) { return parts.filter(function (p) { return p.type === t; })[0].value; };
      var dayNum = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 7 }[get("weekday")];
      var o = H.open, c = H.close;
      if (H.byDay && H.byDay[dayNum]) { o = H.byDay[dayNum].open; c = H.byDay[dayNum].close; }   // особые часы для дня (необязательно)
      else if (H.days && H.days.indexOf(dayNum) < 0) return false;
      var now = parseInt(get("hour"), 10) * 60 + parseInt(get("minute"), 10);
      var m = function (s) { var a = s.split(":"); return +a[0] * 60 + +a[1]; };
      return now >= m(o) && now < m(c);
    } catch (e) { return null; }
  }

  /* ---------- Рендер ---------- */
  function render() {
    document.documentElement.lang = lang;
    var name = tr(S.name);
    document.title = name + " — " + tr(S.city);
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", name + ", " + tr(S.city) + (tr(S.category) ? ": " + tr(S.category) : "") + ".");

    // статичные подписи
    document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = ui(el.getAttribute("data-i18n")); });

    // логотип и навигация
    $("logo").innerHTML = '<span class="logo__mark" aria-hidden="true">' + esc(name.charAt(0)) + "</span><span>" + esc(name) + "</span>";
    var nav = [["about", S.about], ["products", S.products && S.products.length], ["delivery", S.delivery && S.delivery.items && S.delivery.items.length], ["contacts", true]]
      .filter(function (x) { return x[1]; })
      .map(function (x) { return '<a href="#' + x[0] + '">' + esc(ui("nav_" + x[0])) + "</a>"; }).join("");
    $("nav").innerHTML = nav;

    // кнопки звонка
    ["headCall", "heroCall"].forEach(function (id) {
      var a = $(id);
      if (telHref) { a.href = telHref; a.innerHTML = icon("phone") + "<span>" + esc(id === "headCall" ? C.phoneDisplay : ui("call")) + "</span>"; a.hidden = false; } else a.hidden = true;
    });
    var fab = $("fab");
    if (telHref) { fab.href = telHref; fab.innerHTML = icon("phone"); fab.hidden = false; } else fab.hidden = true;
    var map = $("heroMap");
    if (mapHref) { map.href = mapHref; map.innerHTML = icon("pin") + "<span>" + esc(ui("directions")) + "</span>"; map.hidden = false; } else map.hidden = true;

    // hero
    $("heroEyebrow").textContent = [tr(S.category), tr(S.city)].filter(Boolean).join(" · ");
    $("heroTitle").textContent = tr(S.hero && S.hero.title);
    $("heroText").textContent = tr(S.hero && S.hero.text);
    var chips = [];
    if (S.hours && S.hours.label) chips.push(icon("clock") + esc(tr(S.hours.label)));
    if (S.delivery && S.delivery.title) chips.push(icon("wrap") + esc(tr(S.delivery.title)));
    $("heroChips").innerHTML = chips.map(function (c) { return "<li>" + c + "</li>"; }).join("");
    var stamp = $("stamp");
    if (S.since) { stamp.innerHTML = "<small>" + esc(ui("since")) + "</small><b>" + esc(S.since) + "</b>"; stamp.hidden = false; } else stamp.hidden = true;

    // about
    hide("about", !S.about);
    $("aboutTitle").textContent = name;
    $("aboutText").textContent = tr(S.about);

    // products
    var prods = S.products || [];
    hide("products", !prods.length);
    var colors = ["var(--primary)", "var(--alt)", "var(--accent)"];
    $("productGrid").innerHTML = prods.map(function (p, i) {
      return '<li class="card reveal" style="--c:' + colors[i % 3] + ';--d:' + (i % 4) * 70 + 'ms"><span class="card__ic">' + icon(p.icon) + "</span><h3>" + esc(tr(p.title)) + "</h3></li>";
    }).join("");

    // delivery
    var D = S.delivery;
    var hasD = D && D.items && D.items.length;
    hide("delivery", !hasD);
    if (hasD) {
      $("deliveryBox").innerHTML = '<div class="deliv__head">' + icon("wrap") + "<h2>" + esc(tr(D.title)) + "</h2></div><div class=\"deliv__items\">" +
        D.items.map(function (it) { return '<div class="deliv__it reveal"><b>' + esc(it.big) + "</b><span>" + esc(tr(it.text)) + "</span></div>"; }).join("") + "</div>";
    }

    // contacts
    var rows = [];
    if (C.address) rows.push(["pin", ui("address"), esc(tr(C.address)), mapHref]);
    if (C.phone) rows.push(["phone", ui("phone"), esc(C.phoneDisplay || C.phone), telHref]);
    if (C.email) rows.push(["mail", ui("email"), esc(C.email), "mailto:" + C.email]);
    if (C.whatsapp) rows.push(["whatsapp", "WhatsApp", esc(C.whatsapp), "https://wa.me/" + C.whatsapp.replace(/\D/g, "")]);
    if (C.telegram) rows.push(["telegram", "Telegram", esc(C.telegram), C.telegram]);
    $("contactList").innerHTML = rows.map(function (r) {
      var inner = '<span class="ci">' + icon(r[0]) + '</span><span><small>' + esc(r[1]) + "</small><b>" + r[2] + "</b></span>";
      return "<li>" + (r[3] ? '<a href="' + esc(r[3]) + '"' + (r[0] === "pin" ? ' target="_blank" rel="noopener"' : "") + ">" + inner + "</a>" : "<div>" + inner + "</div>") + "</li>";
    }).join("");

    // hours
    var H = S.hours, open = isOpen();
    var hasH = !!(H && H.label), hasR = !!S.rating;
    hide("hoursBox", !hasH && !hasR);
    if (hasH || hasR) {
      var rateTxt = hasR ? esc(S.rating.value) + " · " + esc(S.rating.count) + " " + esc(ui("ratings")) + (S.rating.source ? " · " + esc(S.rating.source) : "") : "";
      $("hoursBox").innerHTML = hasH
        ? icon("clock", "ic--big") + "<h3>" + esc(ui("hours")) + "</h3><p>" + esc(tr(H.label)) + "</p>" +
          (open === null ? "" : '<span class="status ' + (open ? "is-open" : "is-closed") + '">' + esc(ui(open ? "open_now" : "closed_now")) + "</span>") +
          (hasR ? '<p class="rate">★ ' + rateTxt + "</p>" : "")
        : icon("star", "ic--big") + "<h3>" + esc(ui("rating_title")) + "</h3><p>★ " + rateTxt + "</p>";
    }

    // social
    var SO = S.social || {};
    var soc = [["website", ui("website")], ["facebook", "Facebook"], ["instagram", "Instagram"], ["tiktok", "TikTok"]].filter(function (x) { return SO[x[0]]; });
    $("socialList").innerHTML = soc.map(function (x) {
      return '<li><a href="' + esc(SO[x[0]]) + '" target="_blank" rel="noopener">' + icon(x[0] === "website" ? "web" : x[0]) + "<span>" + esc(x[1]) + "</span></a></li>";
    }).join("");
    hide("socialList", !soc.length);

    // footer
    $("footName").textContent = "© " + new Date().getFullYear() + " " + name;
    $("footDemo").textContent = ui("demo").replace("{name}", name);

    // кнопки языка
    document.querySelectorAll("#lang button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.lang === lang ? "true" : "false"); });
    observe();
  }

  /* ---------- Появление блоков при прокрутке ---------- */
  var io;
  function observe() {
    var els = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    io = io || new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }); }, { threshold: 0.15 });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- События ---------- */
  document.querySelectorAll("#lang button").forEach(function (b) {
    b.addEventListener("click", function () { lang = b.dataset.lang; try { localStorage.setItem("lang", lang); } catch (e) {} render(); });
  });
  var burger = $("burger"), header = $("header");
  burger.addEventListener("click", function () { var o = header.classList.toggle("menu-open"); burger.setAttribute("aria-expanded", o); });
  $("nav").addEventListener("click", function (e) { if (e.target.tagName === "A") { header.classList.remove("menu-open"); burger.setAttribute("aria-expanded", "false"); } });
  addEventListener("scroll", function () { header.classList.toggle("scrolled", scrollY > 8); }, { passive: true });

  render();
})();
