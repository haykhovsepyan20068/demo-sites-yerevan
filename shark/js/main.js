(function () {
  'use strict';
  document.documentElement.classList.add('js');

  // Texts from content/bs/shark.json (EN/HY). UI labels are interface strings only.
  var T = {
    en: {
      'meta.title': 'Shark Gym Yerevan | Fitness Club in Ajapnyak',
      'meta.description': 'Shark Gym is a fitness club on Beknazaryan St. in Yerevan. Fitness and bodybuilding with professional instructors. Call +374 77 035550.',
      'ui.skip': 'Skip to content',
      'ui.address': 'Address', 'ui.phone': 'Phone', 'ui.hours': 'Hours', 'ui.social': 'Social',
      'ui.yandex': 'Open on Yandex Maps',
      'nav.about': 'About', 'nav.training': 'Training', 'nav.why': 'Why Shark', 'nav.visit': 'Visit',
      'hero.side': 'Beknazaryan 38/12, Ajapnyak, Yerevan',
      'hero.headline': 'Train hard. Train at Shark.',
      'hero.sub': 'A gym in Ajapnyak for fitness and bodybuilding, with professional instructors on your side. Rated 4.9 on Yandex Maps.',
      'hero.cta': 'Call now',
      'facts.hours': 'Open until', 'facts.rating': 'Yandex Maps',
      'about.title': 'About Shark Gym',
      'about.text': "Shark Gym (Շարք Ջիմ) is a fitness club at Beknazaryan St. 38/12 in Yerevan's Ajapnyak district. We are a place for people who want to move, build strength and keep a steady training routine close to home. Our instructors are professionals, and fitness and bodybuilding are at the heart of what we do. Come by, look around and see if Shark feels like your kind of gym.",
      'svc.0.name': 'Fitness',
      'svc.0.desc': 'Regular training in a gym setting for anyone who wants to get moving and stay active.',
      'svc.1.name': 'Bodybuilding',
      'svc.1.desc': 'Strength-focused training for those who want to work on muscle and power.',
      'svc.2.name': 'Professional instructors',
      'svc.2.desc': 'Our instructors are there to guide you. Ask about training options when you call or visit.',
      'why.title': 'Why Shark',
      'why.0.title': 'Rated 4.9', 'why.0.desc': 'Our members rate Shark 4.9 out of 5 on Yandex Maps.',
      'why.1.title': 'Professional instructors', 'why.1.desc': 'Fitness and bodybuilding with professional instructors.',
      'why.2.title': 'Open into the evening', 'why.2.desc': 'Open until 22:45. Call to check the schedule.',
      'why.3.title': 'In Ajapnyak, Yerevan', 'why.3.desc': 'Find us on Beknazaryan St. 38/12.',
      'contact.title': 'Contact us',
      'contact.address': 'Beknazaryan St. 38/12, Ajapnyak, Yerevan',
      'contact.hours': 'Open until 22:45',
      'ctas.call': 'Call +374 77 035550', 'ctas.visit': 'Visit us',
      'ctas.directions': 'Get directions', 'ctas.pricing': 'Ask about membership by phone',
      'footer.tagline': 'Shark Gym. Fitness and bodybuilding in Ajapnyak, Yerevan.',
      'footer.rights': 'All rights reserved.',
      'aria.menu': 'Menu', 'aria.lang': 'Language', 'aria.nav': 'Main', 'aria.dock': 'Quick contact', 'aria.band': 'Membership',
      'og.locale': 'en_US', 'og.alt': 'hy_AM'
    },
    hy: {
      'meta.title': 'Շարք Ջիմ | Մարզասրահ Երևանում, Աջափնյակ',
      'meta.description': 'Շարք Ջիմը մարզասրահ է Երևանում՝ Բեկնազարյան փողոցում։ Ֆիթնես և բոդիբիլդինգ՝ հմուտ մարզիչների հետ։ Զանգահարեք՝ +374 77 035550։',
      'ui.skip': 'Անցնել բովանդակությանը',
      'ui.address': 'Հասցե', 'ui.phone': 'Հեռախոս', 'ui.hours': 'Ժամեր', 'ui.social': 'Սոցցանցեր',
      'ui.yandex': 'Բացել Yandex Maps-ում',
      'nav.about': 'Մեր մասին', 'nav.training': 'Մարզումներ', 'nav.why': 'Ինչու Շարք', 'nav.visit': 'Կապ',
      'hero.side': 'Բեկնազարյան 38/12, Աջափնյակ, Երևան',
      'hero.headline': 'Մարզվիր լիարժեք։ Մարզվիր Շարքում։',
      'hero.sub': 'Մարզասրահ Աջափնյակում՝ ֆիթնեսի և բոդիբիլդինգի համար, հմուտ մարզիչների աջակցությամբ։ Գնահատականը Yandex Maps-ում՝ 4.9։',
      'hero.cta': 'Զանգահարել հիմա',
      'facts.hours': 'Բաց է մինչև', 'facts.rating': 'Yandex Maps',
      'about.title': 'Շարք Ջիմի մասին',
      'about.text': 'Շարք Ջիմը (Shark Gym) մարզասրահ է Երևանի Աջափնյակ վարչական շրջանում՝ Բեկնազարյան փողոց 38/12 հասցեում։ Սա վայր է նրանց համար, ովքեր ուզում են շարժվել, զարգացնել ուժը և տնից հեռու չգնալով պահել կայուն մարզական ռեժիմ։ Մեր մարզիչները հմուտ են, իսկ ֆիթնեսն ու բոդիբիլդինգը մեր աշխատանքի հիմքն են։ Այցելեք, դիտեք ու համոզվեք՝ արդյոք Շարքը ձեր մարզասրահն է։',
      'svc.0.name': 'Ֆիթնես',
      'svc.0.desc': 'Կանոնավոր մարզումներ մարզասրահում բոլորի համար, ովքեր ուզում են շարժվել և մնալ ակտիվ։',
      'svc.1.name': 'Բոդիբիլդինգ',
      'svc.1.desc': 'Ուժային մարզումներ նրանց համար, ովքեր ուզում են աշխատել մկանների և ուժի վրա։',
      'svc.2.name': 'Հմուտ մարզիչներ',
      'svc.2.desc': 'Մեր մարզիչները պատրաստ են ուղղորդել ձեզ։ Մարզումների մանրամասները հարցրեք զանգելիս կամ այցելելիս։',
      'why.title': 'Ինչու Շարք',
      'why.0.title': 'Գնահատական՝ 4.9', 'why.0.desc': 'Այցելուները Շարքը գնահատել են 4.9՝ 5-ից Yandex Maps-ում։',
      'why.1.title': 'Հմուտ մարզիչներ', 'why.1.desc': 'Ֆիթնես և բոդիբիլդինգ՝ հմուտ մարզիչների հետ։',
      'why.2.title': 'Բաց է մինչև երեկո', 'why.2.desc': 'Բաց է մինչև 22:45։ Ժամերը ճշտեք հեռախոսով։',
      'why.3.title': 'Երևանում, Աջափնյակում', 'why.3.desc': 'Մեզ կգտնեք Բեկնազարյան փողոց 38/12 հասցեում։',
      'contact.title': 'Կապ մեզ հետ',
      'contact.address': 'Բեկնազարյան փողոց 38/12, Աջափնյակ, Երևան',
      'contact.hours': 'Բաց է մինչև 22:45',
      'ctas.call': 'Զանգահարել +374 77 035550', 'ctas.visit': 'Այցելեք մեզ',
      'ctas.directions': 'Ինչպես հասնել', 'ctas.pricing': 'Աբոնեմենտի մասին հարցրեք հեռախոսով',
      'footer.tagline': 'Շարք Ջիմ։ Ֆիթնես և բոդիբիլդինգ Երևանի Աջափնյակում։',
      'footer.rights': 'Բոլոր իրավունքները պաշտպանված են։',
      'aria.menu': 'Ընտրացանկ', 'aria.lang': 'Լեզու', 'aria.nav': 'Հիմնական ընտրացանկ', 'aria.dock': 'Արագ կապ', 'aria.band': 'Աբոնեմենտ',
      'og.locale': 'hy_AM', 'og.alt': 'en_US'
    }
  };

  var KEY = 'shark-lang';
  function store(get, val) {
    try { return get ? localStorage.getItem(KEY) : localStorage.setItem(KEY, val); } catch (e) { return null; }
  }

  function setLang(lang) {
    if (!T[lang]) lang = 'en';
    var d = T[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = d[el.getAttribute('data-i18n')];
      if (v != null) el.textContent = v;
    });
    document.title = d['meta.title'];
    function meta(sel, val) { var m = document.querySelector(sel); if (m) m.setAttribute('content', val); }
    meta('meta[name="description"]', d['meta.description']);
    meta('meta[property="og:title"]', d['meta.title']);
    meta('meta[property="og:description"]', d['meta.description']);
    meta('meta[property="og:locale"]', d['og.locale']);
    meta('meta[property="og:locale:alternate"]', d['og.alt']);
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var v = d[el.getAttribute('data-i18n-aria')];
      if (v != null) el.setAttribute('aria-label', v);
    });
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
    store(false, lang);
  }

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.lang); });
  });
  setLang(store(true) || 'en');

  // Mobile menu
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');
  function closeNav() { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
  burger.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) closeNav(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeNav(); });

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
