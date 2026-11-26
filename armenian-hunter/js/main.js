/* Armenian Hunter: i18n, generative camouflage, topographic hero, field-guide tabs */
(function () {
  'use strict';
  var C = window.AH_CONTENT || {};
  var root = document.documentElement;
  root.classList.add('js');
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var SVGNS = 'http://www.w3.org/2000/svg';

  /* Interface words that are not part of the business copy */
  var UI = {
    nav: {
      about: { en: 'The shop', hy: 'Խանութը' },
      guide: { en: 'What to ask about', hy: 'Ինչ հարցնել' },
      find: { en: 'Find us', hy: 'Գտեք մեզ' }
    },
    ui: {
      skip: { en: 'Skip to content', hy: 'Անցնել բովանդակությանը' },
      where: { en: 'Where', hy: 'Հասցե' },
      when: { en: 'Hours', hy: 'Աշխատանքային ժամեր' },
      phone: { en: 'Phone', hy: 'Հեռախոս' },
      askPhone: { en: 'Ask by phone', hy: 'Հարցնել հեռախոսով' },
      call: { en: 'Call', hy: 'Զանգել' },
      route: { en: 'Route', hy: 'Երթուղի' },
      ariaMain: { en: 'Main', hy: 'Գլխավոր ընտրացանկ' },
      ariaMenu: { en: 'Menu', hy: 'Ընտրացանկ' },
      ariaLang: { en: 'Language', hy: 'Լեզու' },
      ariaCallAhead: { en: 'Call ahead', hy: 'Զանգահարեք նախօրոք' },
      ariaDock: { en: 'Quick actions', hy: 'Արագ գործողություններ' },
      ariaScene: { en: 'Highland forest illustration', hy: 'Լեռնային անտառի պատկեր' },
      ariaMouflon: { en: 'Mouflon on the ridge', hy: 'Մուֆլոնը լեռնաշղթայի վրա' },
      ariaForest: { en: 'Fir forest', hy: 'Եղևնու անտառ' },
      ariaCompass: { en: 'Compass', hy: 'Կողմնացույց' },
      demo: { en: 'This is a demo website.', hy: 'Սա դեմո կայք է։' }
    }
  };

  function lookup(path) {
    var parts = path.split('.');
    var src = (parts[0] === 'nav' || parts[0] === 'ui') ? UI : C;
    var node = src;
    for (var i = 0; i < parts.length; i++) {
      if (node == null) return null;
      node = node[/^\d+$/.test(parts[i]) ? +parts[i] : parts[i]];
    }
    return node;
  }

  /* ---------------- language ---------------- */
  var lang = root.lang === 'hy' ? 'hy' : 'en';

  function applyLang(next) {
    lang = next;
    root.lang = next;
    try { localStorage.setItem('ah-lang', next); } catch (e) {}
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = lookup(el.getAttribute('data-i18n'));
      if (v && v[next]) el.textContent = v[next];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var v = lookup(el.getAttribute('data-i18n-aria'));
      if (v && v[next]) el.setAttribute('aria-label', v[next]);
    });
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === next));
    });
    if (C.meta) {
      document.title = C.meta.title[next];
      setMeta('name', 'description', C.meta.description[next]);
      setMeta('property', 'og:title', C.meta.title[next]);
      setMeta('property', 'og:description', C.meta.description[next]);
      setMeta('property', 'og:locale', next === 'hy' ? 'hy_AM' : 'en_US');
    }
    renderPanel(current, false);
    if (tabsEl && tabsEl.children.length === items.length) {
      /* update labels in place so keyboard focus on a tab is not lost */
      items.forEach(function (it, i) { tabsEl.children[i].children[1].textContent = it.name[next]; });
    } else buildTabs();
  }
  function setMeta(attr, key, val) {
    var m = document.querySelector('meta[' + attr + '="' + key + '"]');
    if (m) m.setAttribute('content', val);
  }
  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
  });

  /* ---------------- mobile menu ---------------- */
  var bar = document.querySelector('.bar');
  var menuBtn = document.querySelector('.menu-btn');
  function setMenu(open) {
    if (!bar || !menuBtn) return;
    bar.classList.toggle('is-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
  }
  if (menuBtn) {
    menuBtn.addEventListener('click', function () { setMenu(!bar.classList.contains('is-open')); });
    document.querySelectorAll('#site-nav a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && bar.classList.contains('is-open')) { setMenu(false); menuBtn.focus(); }
    });
    document.addEventListener('click', function (e) { if (!bar.contains(e.target)) setMenu(false); });
  }

  /* ---------------- seeded random ---------------- */
  function rng(seed) {
    return function () {
      seed |= 0; seed = seed + 0x6D2B79F5 | 0;
      var t = Math.imul(seed ^ seed >>> 15, 1 | seed);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  /* closed smooth path through points (Catmull-Rom to Bezier) */
  function closedPath(pts) {
    var n = pts.length, d = 'M' + pts[0][0].toFixed(1) + ' ' + pts[0][1].toFixed(1);
    for (var i = 0; i < n; i++) {
      var p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
      var c1x = p1[0] + (p2[0] - p0[0]) / 6, c1y = p1[1] + (p2[1] - p0[1]) / 6;
      var c2x = p2[0] - (p3[0] - p1[0]) / 6, c2y = p2[1] - (p3[1] - p1[1]) / 6;
      d += 'C' + c1x.toFixed(1) + ' ' + c1y.toFixed(1) + ' ' + c2x.toFixed(1) + ' ' + c2y.toFixed(1) + ' ' + p2[0].toFixed(1) + ' ' + p2[1].toFixed(1);
    }
    return d + 'Z';
  }
  function openPath(pts) {
    var n = pts.length, d = 'M' + pts[0][0].toFixed(1) + ' ' + pts[0][1].toFixed(1);
    for (var i = 0; i < n - 1; i++) {
      var p0 = pts[Math.max(i - 1, 0)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(i + 2, n - 1)];
      d += 'C' + (p1[0] + (p2[0] - p0[0]) / 6).toFixed(1) + ' ' + (p1[1] + (p2[1] - p0[1]) / 6).toFixed(1) + ' ' +
        (p2[0] - (p3[0] - p1[0]) / 6).toFixed(1) + ' ' + (p2[1] - (p3[1] - p1[1]) / 6).toFixed(1) + ' ' +
        p2[0].toFixed(1) + ' ' + p2[1].toFixed(1);
    }
    return d;
  }

  /* ---------------- generative woodland camouflage (seamless tile) ---------------- */
  function camoTile(seed, size, colors) {
    var r = rng(seed), out = '<svg xmlns="http://www.w3.org/2000/svg" width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '">';
    out += '<rect width="' + size + '" height="' + size + '" fill="' + colors[0] + '"/>';
    var counts = [14, 13, 11];
    for (var L = 1; L < colors.length; L++) {
      var paths = '';
      for (var b = 0; b < counts[L - 1]; b++) {
        var cx = r() * size, cy = r() * size;
        var base = size * (0.05 + r() * 0.07);
        var stretch = 1.4 + r() * 1.2;          /* woodland blobs run horizontally */
        var tilt = (r() - 0.5) * 0.9;
        var n = 9, pts = [];
        for (var k = 0; k < n; k++) {
          var a = (k / n) * Math.PI * 2;
          var rad = base * (0.55 + r() * 0.75);
          var x = Math.cos(a) * rad * stretch, y = Math.sin(a) * rad;
          pts.push([x * Math.cos(tilt) - y * Math.sin(tilt), x * Math.sin(tilt) + y * Math.cos(tilt)]);
        }
        var reach = base * stretch * 1.4;
        for (var ox = -1; ox <= 1; ox++) for (var oy = -1; oy <= 1; oy++) {
          var tx = cx + ox * size, ty = cy + oy * size;
          if (tx + reach < 0 || tx - reach > size || ty + reach < 0 || ty - reach > size) continue;
          paths += closedPath(pts.map(function (p) { return [p[0] + tx, p[1] + ty]; }));
        }
      }
      out += '<path fill="' + colors[L] + '" d="' + paths + '"/>';
    }
    out += '</svg>';
    return 'url("data:image/svg+xml,' + encodeURIComponent(out) + '")';
  }
  root.style.setProperty('--camo-woodland', camoTile(1908, 520, ['#5d6534', '#8a9459', '#5b3f2a', '#1c2618']));
  /* muted page-wide camo: same woodland logic, low-contrast dark tones so text plates stay readable */
  root.style.setProperty('--camo-page', camoTile(808, 640, ['#2b3423', '#3a4529', '#35291d', '#1d2518']));

  /* ---------------- hero: topographic contours in the sky ---------------- */
  var topo = document.getElementById('topo');
  var linesG = document.getElementById('topo-lines');

  function drawTopo(animate) {
    if (!topo) return;
    var w = Math.max(topo.clientWidth, 320), h = Math.max(topo.clientHeight, 400);
    var narrow = w < 700;
    topo.setAttribute('viewBox', '0 0 ' + w + ' ' + h);
    while (linesG.firstChild) linesG.removeChild(linesG.firstChild);
    var r = rng(77);
    var pinX = narrow ? w * 0.2 : w * 0.76, pinY = narrow ? 120 : h * 0.3;
    var hills = [
      { x: pinX + (narrow ? 30 : 40), y: pinY - (narrow ? 10 : 30), rings: narrow ? 9 : 13, step: narrow ? 22 : 30 },
      { x: w * (narrow ? 0.9 : 0.42), y: h * (narrow ? 0.62 : 0.12), rings: 10, step: narrow ? 24 : 34 },
      { x: w * (narrow ? 0.1 : 0.06), y: h * 0.95, rings: 8, step: 36 }
    ];
    var idx = 0;
    hills.forEach(function (hl) {
      var phases = [r() * 6.28, r() * 6.28, r() * 6.28];
      for (var i = 1; i <= hl.rings; i++) {
        var pts = [], n = 28, base = i * hl.step;
        for (var k = 0; k < n; k++) {
          var a = (k / n) * Math.PI * 2;
          var mod = 1 + 0.18 * Math.sin(a * 2 + phases[0]) + 0.1 * Math.sin(a * 3 + phases[1] + i * 0.08) + 0.06 * Math.sin(a * 5 + phases[2]);
          pts.push([hl.x + Math.cos(a) * base * mod * 1.25, hl.y + Math.sin(a) * base * mod * 0.85]);
        }
        var p = document.createElementNS(SVGNS, 'path');
        p.setAttribute('d', closedPath(pts));
        p.setAttribute('class', 'c' + (i % 4 === 0 ? ' c--major' : ''));
        linesG.appendChild(p);
        var len = Math.ceil(p.getTotalLength());
        p.style.setProperty('--len', len);
        p.style.setProperty('--d', (idx * 0.035).toFixed(3) + 's');
        if (!animate) p.style.animation = 'none', p.style.strokeDashoffset = '0';
        idx++;
      }
    });
  }
  drawTopo(!reduceMotion);
  var lastW = window.innerWidth, rt;
  window.addEventListener('resize', function () {
    clearTimeout(rt);
    rt = setTimeout(function () {
      if (Math.abs(window.innerWidth - lastW) < 40) return;   /* ignore mobile toolbar resizes */
      lastW = window.innerWidth; drawTopo(false);
    }, 200);
  });

  /* ---------------- highland scene: firs, eye-shine, compass, interaction ---------------- */
  (function scene() {
    var svg = document.getElementById('scene');
    if (!svg) return;
    var r = rng(4108);
    function fir(x, base, h, w, col) {
      var tiers = 5, d = '';
      for (var t = 0; t < tiers; t++) {
        var top = base - h + t * h * 0.17, bot = top + h * 0.34;
        var hw = w * (0.32 + 0.68 * t / (tiers - 1)) / 2;
        d += 'M' + x.toFixed(1) + ' ' + top.toFixed(1) + 'L' + (x + hw).toFixed(1) + ' ' + bot.toFixed(1) +
          'Q' + x.toFixed(1) + ' ' + (bot - h * 0.05).toFixed(1) + ' ' + (x - hw).toFixed(1) + ' ' + bot.toFixed(1) + 'Z';
      }
      return '<g class="fir" style="--sw:' + (r() * 1.2).toFixed(2) + 's"><rect x="' + (x - w * 0.04).toFixed(1) + '" y="' + (base - h * 0.06).toFixed(1) + '" width="' + (w * 0.08).toFixed(1) + '" height="' + (h * 0.12).toFixed(1) + '" fill="#2a1d12"/><path d="' + d + '" fill="' + col + '"/></g>';
    }
    /* back row lighter, front row darker; leave a clearing around the compass */
    var html = '', x;
    for (x = 10; x < 1220; x += 34 + r() * 30) {
      if (x > 1010 && x < 1200) continue;
      var hb = 90 + r() * 60; if (x > 870 && x < 1050) hb = Math.min(hb, 92);
      html += fir(x, 452 + r() * 12, hb, 46 + r() * 16, r() > .5 ? '#2f4a22' : '#34502a');
    }
    for (x = -10; x < 1220; x += 52 + r() * 48) {
      if (x > 1000) continue;
      var hf = 130 + r() * 90; if (x > 860 && x < 1060) hf = Math.min(hf, 140);
      html += fir(x, 500 + r() * 14, hf, 64 + r() * 24, r() > .5 ? '#1c2c17' : '#223519');
    }
    document.getElementById('firs').innerHTML = html;
    /* eye-shine pairs hidden among the trunks */
    var eyes = [[190, 470], [560, 486], [905, 466]], eh = '';
    eyes.forEach(function (e, i) {
      eh += '<g class="eyes__pair" style="--ed:' + (i * 0.18) + 's"><circle class="eye" cx="' + e[0] + '" cy="' + e[1] + '" r="2.6"/><circle class="eye" cx="' + (e[0] + 11) + '" cy="' + e[1] + '" r="2.6"/></g>';
    });
    document.getElementById('eyes').innerHTML = eh;
    /* compass ticks */
    var tk = '';
    for (var a = 0; a < 360; a += 10) {
      var rad = a * Math.PI / 180, r1 = a % 90 === 0 ? 46 : (a % 30 === 0 ? 52 : 56);
      tk += '<line x1="' + (Math.sin(rad) * r1).toFixed(1) + '" y1="' + (-Math.cos(rad) * r1).toFixed(1) + '" x2="' + (Math.sin(rad) * 60).toFixed(1) + '" y2="' + (-Math.cos(rad) * 60).toFixed(1) + '"/>';
    }
    document.getElementById('compass-ticks').innerHTML = tk;

    /* hover / focus light parts via CSS; tap or Enter/Space toggles a sticky "lit" state */
    var zones = svg.querySelectorAll('.hz');
    zones.forEach(function (z) {
      function toggle() {
        var on = !z.classList.contains('is-lit');
        z.classList.toggle('is-lit', on);
        z.setAttribute('aria-pressed', String(on));
      }
      z.addEventListener('click', toggle);
      z.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
      });
    });

    if (reduceMotion) return;
    /* parallax + compass needle following the pointer */
    var hero = svg.closest('.hero'), layers = svg.querySelectorAll('.layer');
    var needle = document.getElementById('needle'), compass = document.getElementById('hz-compass');
    var tx = 0, ty = 0, cx = 0, cy = 0, ang = 0, tang = 0, raf = 0, idle = true, t0 = performance.now();
    hero.addEventListener('pointermove', function (e) {
      var b = hero.getBoundingClientRect();
      tx = ((e.clientX - b.left) / b.width) * 2 - 1;
      ty = ((e.clientY - b.top) / b.height) * 2 - 1;
      var cb = compass.getBoundingClientRect();
      tang = Math.atan2(e.clientX - (cb.left + cb.width / 2), -(e.clientY - (cb.top + cb.height / 2))) * 180 / Math.PI;
      idle = false; kick();
    });
    hero.addEventListener('pointerleave', function () { tx = ty = 0; idle = true; kick(); });
    function kick() { if (!raf) raf = requestAnimationFrame(step); }
    function step(now) {
      raf = 0;
      cx += (tx - cx) * 0.08; cy += (ty - cy) * 0.08;
      layers.forEach(function (l) {
        var d = +l.getAttribute('data-depth');
        l.setAttribute('transform', 'translate(' + (-cx * d).toFixed(2) + ' ' + (-cy * d * 0.4).toFixed(2) + ')');
      });
      var target = idle ? Math.sin((now - t0) / 900) * 14 : tang;
      var diff = ((target - ang + 540) % 360) - 180;
      ang += diff * 0.1;
      needle.setAttribute('transform', 'rotate(' + ang.toFixed(2) + ')');
      if (idle || Math.abs(tx - cx) > .001 || Math.abs(ty - cy) > .001 || Math.abs(diff) > .05) raf = requestAnimationFrame(step);
    }
    /* idle needle wobble only while the hero is on screen */
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) { if (en[0].isIntersecting) kick(); else if (raf) { cancelAnimationFrame(raf); raf = 0; } }).observe(hero);
    } else kick();
  })();

  /* ---------------- pine sprig over the bark ---------------- */
  (function sprig() {
    var svg = document.getElementById('sprig');
    if (!svg) return;
    var r = rng(5), html = '';
    var stem = [[200, 310], [160, 240], [120, 170], [90, 100], [70, 20]];
    html += '<path d="' + openPath(stem) + '" fill="none" stroke="#3b2a1b" stroke-width="5" stroke-linecap="round"/>';
    for (var t = 0.06; t < 0.98; t += 0.035) {
      var i = Math.min(Math.floor(t * (stem.length - 1)), stem.length - 2), f = t * (stem.length - 1) - i;
      var x = stem[i][0] + (stem[i + 1][0] - stem[i][0]) * f, y = stem[i][1] + (stem[i + 1][1] - stem[i][1]) * f;
      var ang = Math.atan2(stem[i + 1][1] - stem[i][1], stem[i + 1][0] - stem[i][0]);
      var len = 34 + r() * 16 - t * 12;
      [-1, 1].forEach(function (side) {
        var a = ang + side * (0.75 + r() * 0.25);
        var col = r() > 0.5 ? '#2f4a22' : '#56702f';
        html += '<line x1="' + x.toFixed(1) + '" y1="' + y.toFixed(1) + '" x2="' + (x + Math.cos(a) * len).toFixed(1) + '" y2="' + (y + Math.sin(a) * len).toFixed(1) + '" stroke="' + col + '" stroke-width="2.4" stroke-linecap="round"/>';
      });
    }
    html += '<g fill="#7a5233" stroke="#3b2a1b" stroke-width="1.5"><ellipse cx="196" cy="300" rx="12" ry="18" transform="rotate(-30 196 300)"/></g>';
    svg.innerHTML = html;
  })();

  /* ---------------- find-us decorative map ---------------- */
  (function minimap() {
    var svg = document.getElementById('minimap');
    if (!svg) return;
    var r = rng(31), html = '';
    [[300, 210, 12, 22], [70, 60, 6, 26], [560, 400, 7, 28]].forEach(function (hl) {
      var ph = [r() * 6.28, r() * 6.28];
      for (var i = 1; i <= hl[2]; i++) {
        var pts = [];
        for (var k = 0; k < 24; k++) {
          var a = (k / 24) * Math.PI * 2, m = 1 + 0.2 * Math.sin(a * 2 + ph[0]) + 0.1 * Math.sin(a * 3 + ph[1]);
          pts.push([hl[0] + Math.cos(a) * i * hl[3] * m * 1.3, hl[1] + Math.sin(a) * i * hl[3] * m * 0.8]);
        }
        html += '<path d="' + closedPath(pts) + '" fill="none" stroke="#5b3f2a" stroke-opacity="' + (i % 4 === 0 ? 0.55 : 0.28) + '" stroke-width="' + (i % 4 === 0 ? 1.8 : 1) + '"/>';
      }
    });
    html += '<path d="M-10 380 C 80 360 120 300 190 290 S 260 240 300 210" fill="none" stroke="#ff6a13" stroke-width="3.5" stroke-dasharray="2 10" stroke-linecap="round"/>';
    html += '<g class="mm-pin" transform="translate(300 210)"><circle r="30" fill="#ff6a13" fill-opacity=".18"/><path d="M0 -6 C -14 -6 -18 -30 0 -40 C 18 -30 14 -6 0 -6 Z" transform="translate(0 6)" fill="#1c2618"/><circle cx="0" cy="-20" r="5" fill="#ff6a13"/></g>';
    svg.innerHTML = html;
  })();

  /* ---------------- field guide (category navigator) ---------------- */
  var ICONS = [
    /* clothing: field jacket */
    '<path d="M24 8 32 14l8-6 12 6 6 20-8 3-2-9v30H16V28l-2 9-8-3 6-20Z"/><path d="M32 14v44"/><path d="m24 8 4 14 4-8 4 8 4-14"/><rect x="20" y="38" width="8" height="8"/><rect x="36" y="38" width="8" height="8"/>',
    /* footwear: boot */
    '<path d="M18 6h18v28l18 8c4 2 4 10 2 14H10v-8c4-6 8-14 8-22Z"/><path d="M10 50h46"/><path d="M36 14h-8M36 20h-8M36 26h-8"/>',
    /* gear: pack */
    '<rect x="14" y="16" width="36" height="42" rx="10"/><path d="M24 16v-4a8 8 0 0 1 16 0v4"/><rect x="20" y="36" width="24" height="14" rx="3"/><path d="M14 30h36"/>',
    /* optics: binoculars */
    '<rect x="8" y="22" width="20" height="34" rx="6"/><rect x="36" y="22" width="20" height="34" rx="6"/><path d="M12 22V12h12v10M40 22V12h12v10"/><path d="M28 32h8M28 42h8"/><circle cx="18" cy="46" r="5"/><circle cx="46" cy="46" r="5"/>',
    /* camp: lantern */
    '<path d="M32 4v6"/><path d="M22 10h20l-2 8H24Z"/><rect x="20" y="18" width="24" height="30" rx="4"/><path d="M32 25c-4 6-4 10 0 14 4-4 4-8 0-14Z"/><path d="M18 48h28v8H18Z"/>'
  ];
  var CAMO_POS = ['0 0', '-180px -140px', '-330px -60px', '-90px -300px', '-260px -420px'];
  var items = (C.categories && C.categories.items) || [];
  var tabsEl = document.getElementById('guide-tabs');
  var panel = document.getElementById('guide-panel');
  var current = 0;

  function iconSvg(i) {
    return '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">' + ICONS[i % ICONS.length] + '</svg>';
  }
  function buildTabs() {
    if (!tabsEl) return;
    tabsEl.innerHTML = '';
    items.forEach(function (it, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'tab';
      b.id = 'tab-' + i;
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-controls', 'guide-panel');
      b.setAttribute('aria-selected', String(i === current));
      b.tabIndex = i === current ? 0 : -1;
      b.innerHTML = '<span class="tab__sw" aria-hidden="true" style="background-position:' + CAMO_POS[i % CAMO_POS.length] + '"></span><span></span>' +
        '<svg class="tab__arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      b.children[1].textContent = it.name[lang];
      b.addEventListener('click', function () { select(i, false); });
      b.addEventListener('keydown', onKey);
      tabsEl.appendChild(b);
    });
    panel.setAttribute('aria-labelledby', 'tab-' + current);
  }
  function renderPanel(i, animate) {
    var it = items[i];
    if (!it || !panel) return;
    var apply = function () {
      document.getElementById('panel-title').textContent = it.name[lang];
      document.getElementById('panel-desc').textContent = it.desc[lang];
      document.getElementById('panel-icon').innerHTML = iconSvg(i);
      panel.querySelector('.panel__camo').style.backgroundPosition = CAMO_POS[i % CAMO_POS.length];
      panel.classList.remove('is-swapping');
    };
    if (animate && !reduceMotion) { panel.classList.add('is-swapping'); setTimeout(apply, 220); }
    else apply();
  }
  function select(i, focus) {
    if (i === current) return;
    current = i;
    tabsEl.querySelectorAll('.tab').forEach(function (t, k) {
      t.setAttribute('aria-selected', String(k === i));
      t.tabIndex = k === i ? 0 : -1;
    });
    panel.setAttribute('aria-labelledby', 'tab-' + i);
    var tab = document.getElementById('tab-' + i);
    if (focus) tab.focus();
    if (tab.scrollIntoView && window.innerWidth <= 820) tab.scrollIntoView({ block: 'nearest', inline: 'center', behavior: reduceMotion ? 'auto' : 'smooth' });
    renderPanel(i, true);
  }
  function onKey(e) {
    var n = items.length, k = e.key;
    if (k === 'ArrowDown' || k === 'ArrowRight') { e.preventDefault(); select((current + 1) % n, true); }
    else if (k === 'ArrowUp' || k === 'ArrowLeft') { e.preventDefault(); select((current - 1 + n) % n, true); }
    else if (k === 'Home') { e.preventDefault(); select(0, true); }
    else if (k === 'End') { e.preventDefault(); select(n - 1, true); }
  }

  applyLang(lang);
})();
