(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.add('js');

  // Texts from content/bs/cg-car-goods.json + interface strings.
  // Neutralised per QA (reports/bs/cg-car-goods.md): about.text, catd.1, catd.3 no longer describe staff behaviour.
  var T = {
    en: {
      'meta.title': 'CG Car Goods Yerevan | Car Accessories, Parts, Car Care',
      'meta.description': 'CG Car Goods is an auto goods store on Mazmanyan Street, Yerevan: car accessories, auto parts, car cosmetics and auto chemicals under one roof. Open until 22:00.',
      'hero.title': 'Everything for your car, in one store',
      'hero.subtitle': 'Accessories, parts, car cosmetics and auto chemicals on Mazmanyan Street in Yerevan. Call ahead to check what is in stock.',
      'about.title': 'About the store',
      'about.text': 'CG Car Goods is a store for drivers who prefer to find the small and the necessary things for a car in a single visit. The range covers four directions: car accessories, auto parts, car cosmetics and auto chemicals. You will find us on the first floor at Mazmanyan Street 1, and the store is open until 22:00, so you can stop by after work. If you are looking for a specific item, call before you come to check whether it is available.',
      'cat.0': 'Car accessories', 'cat.1': 'Auto parts', 'cat.2': 'Car cosmetics', 'cat.3': 'Auto chemicals',
      'catd.0': 'Everyday extras that make the cabin and the trip more convenient. Ask in the store to see what is currently on the shelves.',
      'catd.1': 'Spare parts for routine maintenance and repair. Call to check whether the part you need is in stock.',
      'catd.2': 'Products for keeping the exterior and interior of your car clean and presentable.',
      'catd.3': 'Chemical goods for car maintenance. Call to ask what is currently available.',
      'why.0.t': 'Four directions, one address',
      'why.0.p': 'Accessories, parts, car cosmetics and auto chemicals are available in the same place, so one trip can cover several needs.',
      'why.1.t': 'Open until 22:00',
      'why.1.p': 'Late opening hours let you visit after work without rushing.',
      'why.2.t': 'Easy to reach by phone',
      'why.2.p': 'Not sure an item is available? Call +374 98 828200 before the trip and save yourself the drive.',
      'contact.address': 'Mazmanyan Street 1, floor 1, Yerevan, Armenia',
      'contact.hours': 'Open until 22:00',
      'ctas.call': 'Call +374 98 828200',
      'ctas.directions': 'Get directions',
      'ctas.facebook': 'Visit us on Facebook',
      'footer.tagline': 'CG Car Goods: car accessories, parts, car cosmetics and auto chemicals in Yerevan.',
      'footer.rights': 'All rights reserved.',
      'footer.demo': 'This is a demo website.',
      'ui.rackTitle': 'Store shelf: point at a product to see its section',
      'ui.rackHint': 'Point at or tap a product to see its section',
      'ui.skip': 'Skip to content',
      'ui.navCatalog': 'Catalog', 'ui.navAbout': 'About', 'ui.navWhy': 'Why us', 'ui.navVisit': 'Visit',
      'ui.menu': 'Menu',
      'ui.where': 'Mazmanyan Street 1, floor 1, Yerevan',
      'ui.catalogTitle': 'What is on the shelves',
      'ui.catalogLead': 'Four sections of the store. Open a drawer to read what each one covers.',
      'ui.ask': 'Call to ask what is in stock',
      'ui.whyTitle': 'Why drivers stop by',
      'ui.visitTitle': 'Find the store',
      'ui.fAddress': 'Address', 'ui.fHours': 'Hours', 'ui.fPhone': 'Phone',
      'ui.dockCall': 'Call', 'ui.dockRoute': 'Directions'
    },
    hy: {
      'meta.title': 'CG Car Goods Երևան | Ավտոաքսեսուարներ, պահեստամասեր, ավտոքիմիա',
      'meta.description': 'CG Car Goods-ը ավտոապրանքների խանութ է Երևանում՝ Մազմանյան փողոց 1-ում. ավտոաքսեսուարներ, ավտոպահեստամասեր, ավտոկոսմետիկա և ավտոքիմիա մեկ տանիքի տակ։ Բաց է մինչև 22:00։',
      'hero.title': 'Ամեն ինչ ձեր մեքենայի համար՝ մեկ խանութում',
      'hero.subtitle': 'Աքսեսուարներ, պահեստամասեր, ավտոկոսմետիկա և ավտոքիմիա Երևանի Մազմանյան փողոցում։ Զանգահարեք և ճշտեք, թե ինչ կա առկա։',
      'about.title': 'Խանութի մասին',
      'about.text': 'CG Car Goods-ը խանութ է այն վարորդների համար, ովքեր նախընտրում են մեքենայի համար անհրաժեշտ իրերը գտնել մեկ այցով։ Տեսականին ընդգրկում է չորս ուղղություն՝ ավտոաքսեսուարներ, ավտոպահեստամասեր, ավտոկոսմետիկա և ավտոքիմիա։ Մեզ կգտնեք Մազմանյան փողոց 1-ի առաջին հարկում, իսկ խանութը բաց է մինչև 22:00, ուստի կարող եք մտնել աշխատանքից հետո։ Եթե փնտրում եք կոնկրետ ապրանք, նախքան գալը զանգահարեք և ճշտեք՝ արդյոք այն առկա է։',
      'cat.0': 'Ավտոաքսեսուարներ', 'cat.1': 'Ավտոպահեստամասեր', 'cat.2': 'Ավտոկոսմետիկա', 'cat.3': 'Ավտոքիմիա',
      'catd.0': 'Առօրյա լրացուցիչ իրեր, որոնք սրահն ու ճանապարհորդությունը դարձնում են ավելի հարմար։ Խանութում հարցրեք՝ ինչ կա դարակներում այս պահին։',
      'catd.1': 'Պահեստամասեր պլանային սպասարկման և վերանորոգման համար։ Զանգահարեք և ճշտեք՝ արդյոք ձեզ անհրաժեշտ մասն առկա է։',
      'catd.2': 'Արտադրանք մեքենայի թե՛ արտաքին, թե՛ ներքին մասերը մաքուր և կոկիկ պահելու համար։',
      'catd.3': 'Քիմիական ապրանքներ մեքենայի խնամքի համար։ Զանգահարեք և ճշտեք, թե ինչ կա առկա։',
      'why.0.t': 'Չորս ուղղություն՝ մեկ հասցե',
      'why.0.p': 'Աքսեսուարները, պահեստամասերը, ավտոկոսմետիկան և ավտոքիմիան գտնվում են նույն վայրում, ուստի մեկ այցով կարելի է փակել մի քանի կարիք։',
      'why.1.t': 'Բաց է մինչև 22:00',
      'why.1.p': 'Ուշ փակման ժամը թույլ է տալիս այցելել աշխատանքից հետո՝ առանց շտապելու։',
      'why.2.t': 'Հեշտ է կապվել հեռախոսով',
      'why.2.p': 'Վստա՞հ չեք, որ ապրանքն առկա է։ Զանգահարեք +374 98 828200 նախքան ճանապարհ ընկնելը և խնայեք ձեր ժամանակը։',
      'contact.address': 'Երևան, Մազմանյան փողոց 1, 1-ին հարկ',
      'contact.hours': 'Բաց է մինչև 22:00',
      'ctas.call': 'Զանգահարել +374 98 828200',
      'ctas.directions': 'Ինչպես հասնել',
      'ctas.facebook': 'Մեր էջը Facebook-ում',
      'footer.tagline': 'CG Car Goods՝ ավտոաքսեսուարներ, պահեստամասեր, ավտոկոսմետիկա և ավտոքիմիա Երևանում։',
      'footer.rights': 'Բոլոր իրավունքները պաշտպանված են։',
      'footer.demo': 'Սա դեմո կայք է։',
      'ui.rackTitle': 'Խանութի դարակ՝ մատնանշեք ապրանքը՝ բաժինը տեսնելու համար',
      'ui.rackHint': 'Մատնանշեք կամ հպեք ապրանքին՝ բաժինը տեսնելու համար',
      'ui.skip': 'Անցնել բովանդակությանը',
      'ui.navCatalog': 'Տեսականի', 'ui.navAbout': 'Մեր մասին', 'ui.navWhy': 'Ինչու մենք', 'ui.navVisit': 'Հասցե',
      'ui.menu': 'Մենյու',
      'ui.where': 'Երևան, Մազմանյան փողոց 1, 1-ին հարկ',
      'ui.catalogTitle': 'Ինչ կա դարակներում',
      'ui.catalogLead': 'Խանութի չորս բաժին։ Բացեք դարակը՝ իմանալու, թե ինչ է ներառում յուրաքանչյուրը։',
      'ui.ask': 'Զանգահարել և ճշտել առկայությունը',
      'ui.whyTitle': 'Ինչու են վարորդները գալիս մեզ մոտ',
      'ui.visitTitle': 'Ինչպես գտնել խանութը',
      'ui.fAddress': 'Հասցե', 'ui.fHours': 'Աշխատանքային ժամեր', 'ui.fPhone': 'Հեռախոս',
      'ui.dockCall': 'Զանգ', 'ui.dockRoute': 'Երթուղի'
    }
  };

  var nodes = document.querySelectorAll('[data-i18n]');
  var langBtns = document.querySelectorAll('.lang button');
  var metaDesc = document.querySelector('meta[name="description"]');
  var ogTitle = document.querySelector('meta[property="og:title"]');
  var ogLocale = document.querySelector('meta[property="og:locale"]');
  var ogDesc = document.querySelector('meta[property="og:description"]');
  var ogAlt = document.querySelector('meta[property="og:locale:alternate"]');

  function setLang(lang) {
    if (!T[lang]) lang = 'en';
    var d = T[lang];
    root.lang = lang;
    for (var i = 0; i < nodes.length; i++) {
      var k = nodes[i].getAttribute('data-i18n');
      if (d[k] != null) nodes[i].textContent = d[k];
    }
    document.title = d['meta.title'];
    if (metaDesc) metaDesc.setAttribute('content', d['meta.description']);
    if (ogTitle) ogTitle.setAttribute('content', d['meta.title']);
    if (ogDesc) ogDesc.setAttribute('content', d['meta.description']);
    if (ogLocale) ogLocale.setAttribute('content', lang === 'hy' ? 'hy_AM' : 'en_US');
    if (ogAlt) ogAlt.setAttribute('content', lang === 'hy' ? 'en_US' : 'hy_AM');
    if (menuBtn) menuBtn.setAttribute('aria-label', d['ui.menu']);
    for (var j = 0; j < langBtns.length; j++) {
      langBtns[j].setAttribute('aria-pressed', String(langBtns[j].getAttribute('data-lang') === lang));
    }
    try { localStorage.setItem('cgcg-lang', lang); } catch (e) {}
    if (rack) rack.relabel(d);
  }

  var rack = null;

  // Hero shelf: hover / tap / keyboard highlights a product and pops up its section name
  (function initRack() {
    var svg = document.querySelector('.rack-svg');
    if (!svg) return;
    var wrap = document.getElementById('rack');
    var zones = svg.querySelectorAll('.zone');
    var call = svg.querySelector('.callout');
    var callBg = call.querySelector('.callout__bg');
    var callText = call.querySelector('.callout__text');
    var dict = T.en, active = null, pinned = false;
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

    function zoneOf(slot) { return slot.closest('.zone'); }
    function catName(zone) { return dict['cat.' + zone.getAttribute('data-cat')] || ''; }
    function place(slot) {
      var m = slot.transform.baseVal.consolidate().matrix;
      var bb = slot.querySelector('.sku__body').getBBox();
      var cx = m.e + bb.x + bb.width / 2;
      var top = m.f + bb.y - 18;
      callText.textContent = catName(zoneOf(slot));
      var cs = parseFloat(getComputedStyle(call).getPropertyValue('--cs')) || 1;
      var w = Math.ceil(callText.getComputedTextLength()) + 26;
      var half = w / 2;
      var x = Math.max(half * cs + 4, Math.min(600 - half * cs - 4, cx));
      var tip = Math.max(-half + 10, Math.min(half - 10, (cx - x) / cs));
      callBg.setAttribute('d', 'M' + (-half) + ' -30 H' + half + ' V0 H' + (tip + 8) + ' L' + tip + ' 9 L' + (tip - 8) + ' 0 H' + (-half) + 'z');
      call.setAttribute('transform', 'translate(' + x.toFixed(1) + ' ' + Math.max(30 * cs + 2, top).toFixed(1) + ')');
    }
    function clear() {
      if (active) { active.classList.remove('is-on'); zoneOf(active).classList.remove('is-on'); }
      active = null;
      call.classList.remove('is-on');
    }
    function activate(slot) {
      if (active === slot) return;
      clear();
      if (!slot) return;
      active = slot;
      slot.classList.add('is-on');
      zoneOf(slot).classList.add('is-on');
      place(slot);
      requestAnimationFrame(function () { call.classList.add('is-on'); });
    }
    function openDrawer(zone) {
      var front = document.querySelector('.drawer[data-cat="' + zone.getAttribute('data-cat') + '"] .drawer__front');
      if (!front) return;
      if (front.getAttribute('aria-expanded') !== 'true') front.click();
      front.closest('.drawer').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
      front.focus({ preventScroll: true });
    }

    svg.addEventListener('pointerover', function (e) {
      if (e.pointerType === 'touch') return;
      var slot = e.target.closest && e.target.closest('.slot');
      if (slot) { pinned = false; activate(slot); }
    });
    svg.addEventListener('pointerleave', function (e) { if (e.pointerType !== 'touch' && !pinned) clear(); });
    svg.addEventListener('click', function (e) {
      var zone = e.target.closest('.zone');
      if (!zone) { pinned = false; clear(); return; }
      var slot = e.target.closest('.slot') || (zone.contains(active) ? active : zone.querySelector('.slot'));
      // mouse click opens the section; on touch the first tap highlights, a second tap on the same product opens its section below
      if (e.pointerType === 'mouse' || (active === slot && pinned)) { activate(slot); openDrawer(zone); return; }
      pinned = true;
      activate(slot);
    });
    document.addEventListener('pointerdown', function (e) { if (pinned && !svg.contains(e.target)) { pinned = false; clear(); } });

    for (var z = 0; z < zones.length; z++) {
      zones[z].addEventListener('focus', function () { if (!this.contains(active)) activate(this.querySelector('.slot')); });
      zones[z].addEventListener('blur', function () { if (!pinned) clear(); });
      zones[z].addEventListener('keydown', function (e) {
        var slots = this.querySelectorAll('.slot');
        var i = Array.prototype.indexOf.call(slots, active);
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          e.preventDefault();
          i = (i + (e.key === 'ArrowRight' ? 1 : slots.length - 1)) % slots.length;
          activate(slots[i]);
        } else if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openDrawer(this);
        } else if (e.key === 'Escape') { pinned = false; clear(); }
      });
    }

    // gentle tilt toward the cursor (fine pointers only)
    if (!reduce && window.matchMedia && matchMedia('(hover: hover) and (pointer: fine)').matches) {
      var hero = document.querySelector('.hero'), raf = 0, px = 0, py = 0;
      hero.addEventListener('pointermove', function (e) {
        var r = wrap.getBoundingClientRect();
        px = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / r.width));
        py = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height / 2)) / r.height));
        if (!raf) raf = requestAnimationFrame(function () {
          raf = 0;
          wrap.style.setProperty('--ry', (px * 5).toFixed(2));
          wrap.style.setProperty('--rx', (-py * 3.5).toFixed(2));
        });
      });
      hero.addEventListener('pointerleave', function () { wrap.style.setProperty('--ry', 0); wrap.style.setProperty('--rx', 0); });
    }

    function fitTags() {
      var tags = svg.querySelectorAll('.shelf-tag');
      for (var t = 0; t < tags.length; t++) {
        var txt = tags[t].querySelector('text');
        var len = txt.getComputedTextLength();
        if (len) tags[t].querySelector('rect').setAttribute('width', Math.ceil(len) + 14);
      }
    }
    var sk = svg.querySelectorAll('.sku');
    for (var n = 0; n < sk.length; n++) sk[n].style.setProperty('--i', n);
    var st = svg.querySelectorAll('.shelf-tag');
    for (var k = 0; k < st.length; k++) st[k].style.setProperty('--t', k);

    rack = {
      relabel: function (d) {
        dict = d;
        for (var z2 = 0; z2 < zones.length; z2++) zones[z2].setAttribute('aria-label', catName(zones[z2]));
        fitTags();
        if (active) place(active);
      }
    };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { fitTags(); if (active) place(active); });
  })();

  var menuBtn = document.querySelector('.menu');
  var nav = document.getElementById('nav');
  var saved = null;
  try { saved = localStorage.getItem('cgcg-lang'); } catch (e) {}
  var q = /[?&]lang=(en|hy)\b/.exec(location.search);
  if (q) saved = q[1];
  setLang(saved || 'en');
  for (var b = 0; b < langBtns.length; b++) {
    langBtns[b].addEventListener('click', function () { setLang(this.getAttribute('data-lang')); });
  }

  // Mobile menu
  function isOpen() { return nav.classList.contains('is-open'); }
  function closeMenu(returnFocus) {
    nav.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', 'false');
    if (returnFocus) menuBtn.focus();
  }
  menuBtn.addEventListener('click', function () {
    var open = !isOpen();
    nav.classList.toggle('is-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    if (open) { var first = nav.querySelector('a'); if (first) first.focus(); }
  });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') closeMenu(false); });
  document.addEventListener('keydown', function (e) {
    if (!isOpen()) return;
    if (e.key === 'Escape') { closeMenu(true); return; }
    if (e.key === 'Tab') {
      // keep focus cycling between the burger and the menu links while open
      var links = nav.querySelectorAll('a');
      var last = links[links.length - 1];
      if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); menuBtn.focus(); }
      else if (e.shiftKey && document.activeElement === menuBtn) { e.preventDefault(); last.focus(); }
    }
  });
  // close if the viewport grows past the burger breakpoint
  window.addEventListener('resize', function () { if (isOpen() && getComputedStyle(menuBtn).display === 'none') closeMenu(false); });

  // Drawer cabinet
  var fronts = document.querySelectorAll('.drawer__front');
  for (var f = 0; f < fronts.length; f++) {
    fronts[f].addEventListener('click', function () {
      var body = document.getElementById(this.getAttribute('aria-controls'));
      var open = this.getAttribute('aria-expanded') !== 'true';
      this.setAttribute('aria-expanded', String(open));
      body.hidden = !open;
      if (open) {
        body.classList.remove('is-opening');
        void body.offsetWidth;
        body.classList.add('is-opening');
      }
    });
  }

  // Decorative barcode derived from the phone number
  var svg = document.querySelector('.barcode');
  if (svg) {
    var digits = '37498828200', x = 2, out = '';
    for (var r = 0; r < 3; r++) {
      for (var c = 0; c < digits.length; c++) {
        var v = +digits[c];
        var w = 1 + (v % 3);
        out += '<rect x="' + x + '" y="0" width="' + w + '" height="40" fill="#18212C"/>';
        x += w + 1 + ((v + r) % 3);
        if (x > 196) break;
      }
    }
    svg.innerHTML = out;
  }

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
