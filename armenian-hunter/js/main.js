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
      ariaDock: { en: 'Quick actions', hy: 'Արագ գործողություններ' }
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

  /* ---------------- hero: topographic map + trail to the shop ---------------- */
  var topo = document.getElementById('topo');
  var linesG = document.getElementById('topo-lines');
  var trail = document.getElementById('trail');
  var pin = document.getElementById('pin');

  function drawTopo(animate) {
    if (!topo) return;
    var w = Math.max(topo.clientWidth, 320), h = Math.max(topo.clientHeight, 400);
    var narrow = w < 700;
    topo.setAttribute('viewBox', '0 0 ' + w + ' ' + h);
    while (linesG.firstChild) linesG.removeChild(linesG.firstChild);
    var r = rng(77);
    var pinX = narrow ? w * 0.2 : w * 0.76, pinY = narrow ? 120 : h * 0.66;
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
    /* trail winding from the lower-left edge to the shop pin */
    var start = narrow ? [-20, h * 0.32] : [-20, h * 0.92];
    var pts = [start];
    var steps = 6;
    for (var s = 1; s < steps; s++) {
      var t = s / steps;
      pts.push([start[0] + (pinX - start[0]) * t + (r() - 0.5) * (narrow ? 30 : 90),
                start[1] + (pinY - start[1]) * t + Math.sin(t * Math.PI * 2) * (narrow ? 20 : 50)]);
    }
    pts.push([pinX, pinY]);
    trail.setAttribute('d', openPath(pts));
    document.getElementById('pin-at').setAttribute('transform', 'translate(' + pinX.toFixed(1) + ' ' + pinY.toFixed(1) + ')');
    if (!animate) { trail.style.animation = 'none'; trail.style.opacity = '.95'; pin.style.animation = 'none'; pin.style.opacity = '1'; }
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
    html += '<g transform="translate(300 210)"><circle r="30" fill="#ff6a13" fill-opacity=".18"/><path d="M0 -6 C -14 -6 -18 -30 0 -40 C 18 -30 14 -6 0 -6 Z" transform="translate(0 6)" fill="#1c2618"/><circle cx="0" cy="-20" r="5" fill="#ff6a13"/></g>';
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
