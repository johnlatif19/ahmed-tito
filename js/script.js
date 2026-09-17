/* ============================================================
   AHMED TITO — MAIN SCRIPT
   ============================================================ */

(function () {
  'use strict';

  /* ---------- TRANSLATIONS ---------- */
  const translations = {
    ar: {
      'nav.home': 'الرئيسية',
      'nav.about': 'عني',
      'nav.work': 'أعمالي',
      'nav.services': 'خدماتي',
      'nav.contact': 'تواصل',

      'hero.label': 'مصور فوتوغرافي / فنان بصري',
      'hero.statement': 'أصنع صورًا تُروي قصصًا — لحظات، أشخاص، وأماكن من منظور سينمائي.',
      'hero.location': 'القاهرة / مصر',
      'hero.specialties': 'بورتريه / موضة / فعاليات',
      'hero.scroll': 'اسحب للأسفل',

      'about.label': 'عني',
      'about.statement': 'أصوّر الناس والأماكن واللحظات، مع تركيز على الجو العام، المشاعر، والسرد الطبيعي.',
      'about.bio': '[نبذة مختصرة]',
      'about.locationLabel': 'الموقع',
      'about.locationValue': '[الموقع]',
      'about.expLabel': 'سنوات الخبرة',
      'about.expValue': '[سنوات الخبرة]',
      'about.specLabel': 'التخصصات',
      'about.specValue': 'بورتريه، موضة، فعاليات، شارع، لايف ستايل، تجاري',

      'work.label': 'أعمال مختارة',
      'work.p1.title': 'موضة',
      'work.p1.desc': 'تحرير بصري وأسلوب راقٍ.',
      'work.p2.title': 'شارع',
      'work.p2.desc': 'الحياة كما تحدث.',
      'work.cta': 'شاهد كل الأعمال (31)',

      'services.label': 'خدماتي',
      'services.s1': 'تصوير بورتريه',
      'services.s1d': 'جلسات فردية وعائلية',
      'services.s2': 'تصوير موضة',
      'services.s2d': 'تحرير بصري وحملات',
      'services.s3': 'تصوير فعاليات',
      'services.s3d': 'مؤتمرات، أفراح، مناسبات',
      'services.s4': 'تصوير تجاري',
      'services.s4d': 'منتجات وعلامات تجارية',
      'services.s5': 'إدارة فنية',
      'services.s5d': 'توجيه بصري للمشاريع',

      'process.p1': 'اكتشاف',
      'process.p2': 'تصوير',
      'process.p3': 'اختيار',
      'process.p4': 'تسليم',

      'social.label': 'تابع الأعمال',

      'contact.heading1': 'لنصنع',
      'contact.heading2': 'شيئًا',
      'contact.heading3': 'لا يُنسى.',
      'contact.sub': 'متاح لمشاريع مختارة.',
      'contact.name': 'الاسم',
      'contact.email': 'البريد الإلكتروني',
      'contact.message': 'الرسالة',
      'contact.send': 'إرسال الاستفسار',
      'contact.success': 'تم استلام استفسارك. سنتواصل معك قريبًا.',

      'footer.location': '[الموقع]',
      'footer.top': 'للأعلى ↑'
    },

    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.work': 'Work',
      'nav.services': 'Services',
      'nav.contact': 'Contact',

      'hero.label': 'Photographer / Visual Artist',
      'hero.statement': 'Making images that tell stories — people, places, and moments through a cinematic lens.',
      'hero.location': 'Cairo / Egypt',
      'hero.specialties': 'Portrait / Fashion / Events',
      'hero.scroll': 'Scroll to explore',

      'about.label': 'About',
      'about.statement': 'I photograph people, places, and moments with a focus on atmosphere, emotion, and natural storytelling.',
      'about.bio': '[Short bio]',
      'about.locationLabel': 'Location',
      'about.locationValue': '[Location]',
      'about.expLabel': 'Experience',
      'about.expValue': '[Years of experience]',
      'about.specLabel': 'Specialties',
      'about.specValue': 'Portrait, Fashion, Events, Street, Lifestyle, Commercial',

      'work.label': 'Selected Work',
      'work.p1.title': 'Fashion',
      'work.p1.desc': 'Editorial vision and refined style.',
      'work.p2.title': 'Street',
      'work.p2.desc': 'Life as it happens.',
      'work.cta': 'View all work (31)',

      'services.label': 'Services',
      'services.s1': 'Portrait Photography',
      'services.s1d': 'Individual and family sessions',
      'services.s2': 'Fashion Photography',
      'services.s2d': 'Editorial and campaigns',
      'services.s3': 'Event Photography',
      'services.s3d': 'Conferences, weddings, occasions',
      'services.s4': 'Commercial Photography',
      'services.s4d': 'Products and brands',
      'services.s5': 'Creative Direction',
      'services.s5d': 'Visual guidance for projects',

      'process.p1': 'Discover',
      'process.p2': 'Shoot',
      'process.p3': 'Select',
      'process.p4': 'Deliver',

      'social.label': 'Follow the work',

      'contact.heading1': "Let's create",
      'contact.heading2': 'something',
      'contact.heading3': 'memorable.',
      'contact.sub': 'Available for selected projects.',
      'contact.name': 'Name',
      'contact.email': 'Email',
      'contact.message': 'Message',
      'contact.send': 'Send Inquiry',
      'contact.success': 'Your inquiry has been received. We will get back to you soon.',

      'footer.location': '[Location]',
      'footer.top': 'Back to top ↑'
    }
  };

  let currentLang = 'ar';

  /* ---------- LANGUAGE ---------- */
  function setLanguage(lang) {
    currentLang = lang;
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key] !== undefined) {
        el.textContent = translations[lang][key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang][key] !== undefined) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });

    const langBtn = document.getElementById('langToggle');
    if (langBtn) langBtn.textContent = lang === 'ar' ? 'EN' : 'AR';

    try { localStorage.setItem('portfolio-lang', lang); } catch (e) {}
  }

  function initLanguage() {
    let saved = null;
    try { saved = localStorage.getItem('portfolio-lang'); } catch (e) {}
    setLanguage(saved === 'en' ? 'en' : 'ar');
  }

  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', function () {
      setLanguage(currentLang === 'ar' ? 'en' : 'ar');
    });
  }

  /* ---------- SPLASH ---------- */
  function initSplash() {
    const splash = document.createElement('div');
    splash.className = 'splash';
    splash.innerHTML = '<span class="splash-logo">Ahmed Tito</span>';
    document.body.appendChild(splash);

    setTimeout(function () {
      splash.classList.add('fade-out');
      setTimeout(function () { splash.remove(); }, 800);
    }, 900);
  }

  /* ---------- MOBILE MENU ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
      document.body.classList.toggle('menu-open');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('open');
        document.body.classList.remove('menu-open');
      });
    });
  }

  /* ---------- HEADER SCROLL ---------- */
  const header = document.getElementById('siteHeader');
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- REVEALS ---------- */
  function initReveals() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    if (!('IntersectionObserver' in window)) {
      reveals.forEach(function (el) { el.classList.add('visible'); });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- CONTACT FORM ---------- */
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      formStatus.textContent = translations[currentLang]['contact.success'];
      formStatus.style.opacity = '1';
      contactForm.reset();
      setTimeout(function () { formStatus.style.opacity = '0'; }, 5000);
    });
  }

  /* ---------- BACK TO TOP ---------- */
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- INIT ---------- */
  function init() {
    initLanguage();
    initSplash();
    initReveals();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
