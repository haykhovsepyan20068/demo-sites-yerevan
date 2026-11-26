(function () {
  "use strict";
  var dict = window.NG_I18N || {};
  var KEY = "neo-garage-lang";
  var root = document.documentElement;

  function store(get, val) {
    try {
      if (get) return localStorage.getItem(KEY);
      localStorage.setItem(KEY, val);
    } catch (e) { return null; }
  }

  function setLang(lang) {
    var t = dict[lang];
    if (!t) return;
    root.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (t[k] != null) el.textContent = t[k];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-aria");
      if (t[k] != null) el.setAttribute("aria-label", t[k]);
    });
    document.title = t["meta.title"];
    function meta(sel, val) {
      var m = document.querySelector(sel);
      if (m && val != null) m.setAttribute("content", val);
    }
    meta('meta[name="description"]', t["meta.desc"]);
    meta('meta[property="og:title"]', t["meta.title"]);
    meta('meta[property="og:description"]', t["meta.desc"]);
    meta('meta[property="og:locale"]', t["meta.locale"]);
    meta('meta[property="og:locale:alternate"]', t["meta.localeAlt"]);
    var ld = document.getElementById("ld-json");
    if (ld) {
      try {
        var data = JSON.parse(ld.textContent);
        data.description = t["meta.ldDesc"];
        data.inLanguage = lang;
        data.address.streetAddress = lang === "hy" ? "Մազմանյան փողոց 1/2" : "Mazmanyan Street, 1/2";
        data.address.addressLocality = lang === "hy" ? "Երևան" : "Yerevan";
        ld.textContent = JSON.stringify(data);
      } catch (e) { /* keep static JSON-LD */ }
    }
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
    store(false, lang);
  }

  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.dataset.lang); });
  });
  var saved = store(true);
  if (saved && dict[saved] && saved !== "en") setLang(saved);

  /* Burger menu (narrow screens) */
  var burger = document.querySelector(".burger");
  var nav = document.getElementById("site-nav");
  function closeMenu() {
    if (!burger) return;
    burger.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }
  if (burger && nav) {
    burger.addEventListener("click", function () {
      var open = burger.getAttribute("aria-expanded") !== "true";
      burger.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("menu-open", open);
    });
    nav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeMenu); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && burger.getAttribute("aria-expanded") === "true") { closeMenu(); burger.focus(); }
    });
    window.matchMedia("(min-width: 1021px)").addEventListener("change", function (m) { if (m.matches) closeMenu(); });
  }

  /* Hero art: tap / Enter charges the pack, mouse tilts the art */
  var art = document.querySelector(".art");
  if (art) {
    var hits = art.querySelectorAll("[data-charge]");
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    var setOn = function (on) {
      art.classList.toggle("is-on", on);
      hits.forEach(function (h) { h.setAttribute("aria-pressed", String(on)); });
    };
    hits.forEach(function (h) {
      h.addEventListener("click", function () { setOn(!art.classList.contains("is-on")); });
      h.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOn(!art.classList.contains("is-on")); }
      });
    });
    art.addEventListener("pointermove", function (e) {
      if (e.pointerType !== "mouse" || reduce.matches) return;
      var r = art.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      art.classList.add("is-tracking");
      art.style.setProperty("--ry", (x * 14).toFixed(2) + "deg");
      art.style.setProperty("--rx", (-y * 10).toFixed(2) + "deg");
    });
    art.addEventListener("pointerleave", function () {
      art.classList.remove("is-tracking");
      art.style.setProperty("--ry", "0deg");
      art.style.setProperty("--rx", "0deg");
    });
  }

  var year = document.querySelector(".js-year");
  if (year) year.textContent = String(new Date().getFullYear());

  /* Scroll = charge: header battery and the services wire */
  var fill = document.querySelector(".battery__fill");
  var wire = document.querySelector(".wire");
  var nodes = wire ? Array.prototype.slice.call(wire.querySelectorAll(".node")) : [];
  var ticking = false;

  function update() {
    ticking = false;
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    if (fill) fill.parentElement.style.setProperty("--p", p.toFixed(3));

    if (wire) {
      var r = wire.getBoundingClientRect();
      var vh = window.innerHeight;
      var wp = (vh * 0.8 - r.top) / (r.height * 0.9);
      wp = Math.min(1, Math.max(0, wp));
      wire.style.setProperty("--wire", (wp * 100).toFixed(1) + "%");
      var vertical = window.matchMedia("(max-width: 860px)").matches;
      nodes.forEach(function (n) {
        var nr = n.getBoundingClientRect();
        var pos = vertical ? (nr.top - r.top) / r.height : (nr.left - r.left) / r.width;
        n.classList.toggle("is-live", wp > 0 && wp >= pos);
      });
    }
  }
  function onScroll() {
    if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();
})();
