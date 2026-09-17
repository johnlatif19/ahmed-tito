/* ============================================================
   AHMED TITO — GALLERY PAGE SCRIPT
   ============================================================ */

(function () {
  'use strict';

  /* ---------- TRANSLATIONS ---------- */
  const translations = {
    ar: {
      'gallery.back': 'رجوع',
      'gallery.label': 'كل الأعمال',
      'gallery.title1': 'معرض',
      'gallery.title2': 'الصور',
      'gallery.count': '31 صورة مختارة',
      'gallery.years': '2022 — 2025',
      'gallery.backHome': 'العودة للرئيسية',
      'filter.all': 'الكل',
      'filter.portrait': 'بورتريه',
      'filter.fashion': 'موضة',
      'filter.event': 'فعاليات',
      'filter.street': 'شارع',
      'filter.lifestyle': 'لايف ستايل',
      'filter.commercial': 'تجاري',
      'category.portrait': 'بورتريه',
      'category.fashion': 'موضة',
      'category.event': 'فعاليات',
      'category.street': 'شارع',
      'category.lifestyle': 'لايف ستايل',
      'category.commercial': 'تجاري'
    },
    en: {
      'gallery.back': 'Back',
      'gallery.label': 'All Work',
      'gallery.title1': 'Photo',
      'gallery.title2': 'Gallery',
      'gallery.count': '31 selected images',
      'gallery.years': '2022 — 2025',
      'gallery.backHome': 'Back to home',
      'filter.all': 'All',
      'filter.portrait': 'Portrait',
      'filter.fashion': 'Fashion',
      'filter.event': 'Events',
      'filter.street': 'Street',
      'filter.lifestyle': 'Lifestyle',
      'filter.commercial': 'Commercial',
      'category.portrait': 'Portrait',
      'category.fashion': 'Fashion',
      'category.event': 'Events',
      'category.street': 'Street',
      'category.lifestyle': 'Lifestyle',
      'category.commercial': 'Commercial'
    }
  };

  /* ---------- IMAGES DATA (31 صورة) ----------
     ⚠️ استبدل الروابط دي بروابط صورك من imgBB
     category: portrait | fashion | event | street | lifestyle | commercial
  -------------------------------------------- */
  const images = [
    // ===== Hero images من الصفحة الرئيسية =====
    { src: 'https://i.ibb.co/57b065W/Ahmed-Tito.jpg',        category: 'portrait',   title: 'Ahmed Tito' },
    { src: 'https://i.ibb.co/0jZQ7Yq/fashion-editorial.jpg', category: 'fashion',    title: 'Editorial' },
    { src: 'https://i.ibb.co/9mKqX7Y/street-photography.jpg',category: 'street',     title: 'Street Life' },

    // ===== صور إضافية — استبدلها بصورك =====
    { src: 'https://i.ibb.co/6PqXp5B/hero-photography.jpg',  category: 'portrait',   title: 'Portrait 01' },
    { src: 'https://i.ibb.co/3Wq5zYc/event-photography.jpg', category: 'event',      title: 'Event 01' },
    { src: 'https://i.ibb.co/5GqXp5B/lifestyle-photography.jpg', category: 'lifestyle', title: 'Lifestyle 01' },
    { src: 'https://i.ibb.co/7QqXp5B/commercial-photography.jpg', category: 'commercial', title: 'Commercial 01' },
    { src: 'https://i.ibb.co/6PqXp5B/hero-photography.jpg',  category: 'portrait',   title: 'Portrait 02' },
    { src: 'https://i.ibb.co/0jZQ7Yq/fashion-editorial.jpg', category: 'fashion',    title: 'Fashion 02' },
    { src: 'https://i.ibb.co/3Wq5zYc/event-photography.jpg', category: 'event',      title: 'Event 02' },
    { src: 'https://i.ibb.co/9mKqX7Y/street-photography.jpg',category: 'street',     title: 'Street 02' },
    { src: 'https://i.ibb.co/5GqXp5B/lifestyle-photography.jpg', category: 'lifestyle', title: 'Lifestyle 02' },
    { src: 'https://i.ibb.co/7QqXp5B/commercial-photography.jpg', category: 'commercial', title: 'Commercial 02' },
    { src: 'https://i.ibb.co/6PqXp5B/hero-photography.jpg',  category: 'portrait',   title: 'Portrait 03' },
    { src: 'https://i.ibb.co/0jZQ7Yq/fashion-editorial.jpg', category: 'fashion',    title: 'Fashion 03' },
    { src: 'https://i.ibb.co/3Wq5zYc/event-photography.jpg', category: 'event',      title: 'Event 03' },
    { src: 'https://i.ibb.co/9mKqX7Y/street-photography.jpg',category: 'street',     title: 'Street 03' },
    { src: 'https://i.ibb.co/5GqXp5B/lifestyle-photography.jpg', category: 'lifestyle', title: 'Lifestyle 03' },
    { src: 'https://i.ibb.co/7QqXp5B/commercial-photography.jpg', category: 'commercial', title: 'Commercial 03' },
    { src: 'https://i.ibb.co/6PqXp5B/hero-photography.jpg',  category: 'portrait',   title: 'Portrait 04' },
    { src: 'https://i.ibb.co/0jZQ7Yq/fashion-editorial.jpg', category: 'fashion',    title: 'Fashion 04' },
    { src: 'https://i.ibb.co/3Wq5zYc/event-photography.jpg', category: 'event',      title: 'Event 04' },
    { src: 'https://i.ibb.co/9mKqX7Y/street-photography.jpg',category: 'street',     title: 'Street 04' },
    { src: 'https://i.ibb.co/5GqXp5B/lifestyle-photography.jpg', category: 'lifestyle', title: 'Lifestyle 04' },
    { src: 'https://i.ibb.co/7QqXp5B/commercial-photography.jpg', category: 'commercial', title: 'Commercial 04' },
    { src: 'https://i.ibb.co/6PqXp5B/hero-photography.jpg',  category: 'portrait',   title: 'Portrait 05' },
    { src: 'https://i.ibb.co/0jZQ7Yq/fashion-editorial.jpg', category: 'fashion',    title: 'Fashion 05' },
    { src: 'https://i.ibb.co/3Wq5zYc/event-photography.jpg', category: 'event',      title: 'Event 05' },
    { src: 'https://i.ibb.co/9mKqX7Y/street-photography.jpg',category: 'street',     title: 'Street 05' },
    { src: 'https://i.ibb.co/5GqXp5B/lifestyle-photography.jpg', category: 'lifestyle', title: 'Lifestyle 05' },
    { src: 'https://i.ibb.co/7QqXp5B/commercial-photography.jpg', category: 'commercial', title: 'Commercial 05' }
  ];

  /* ---------- LANGUAGE ---------- */
  let currentLang = 'ar';

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

    const langBtn = document.getElementById('langToggle');
    if (langBtn) langBtn.textContent = lang === 'ar' ? 'EN' : 'AR';

    // Re-render gallery to update titles
    renderGallery();
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

  /* ---------- RENDER GALLERY ---------- */
  const galleryGrid = document.getElementById('galleryGrid');

  function renderGallery() {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = '';

    images.forEach(function (img, index) {
      const item = document.createElement('article');
      item.className = 'gallery-item';
      item.dataset.category = img.category;
      item.dataset.index = index;

      item.innerHTML =
        '<img src="' + img.src + '" alt="' + img.title + '" loading="lazy">' +
        '<div class="gallery-item-info">' +
          '<h3>' + img.title + '</h3>' +
          '<span>' + translations[currentLang]['category.' + img.category] + '</span>' +
        '</div>';

      item.addEventListener('click', function () {
        openLightbox(index);
      });

      galleryGrid.appendChild(item);
    });

    // Reveal with stagger
    setTimeout(function () {
      document.querySelectorAll('.gallery-item').forEach(function (el, i) {
        setTimeout(function () {
          el.classList.add('visible');
        }, i * 40);
      });
    }, 50);
  }

  /* ---------- FILTERS ---------- */
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterButtons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      document.querySelectorAll('.gallery-item').forEach(function (item) {
        if (filter === 'all' || item.dataset.category === filter) {
          item.classList.remove('hidden');
          setTimeout(function () { item.classList.add('visible'); }, 20);
        } else {
          item.classList.add('hidden');
          item.classList.remove('visible');
        }
      });
    });
  });

  /* ---------- LIGHTBOX ---------- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCat = document.getElementById('lightboxCat');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let currentIndex = 0;
  let visibleIndices = [];

  function updateVisibleIndices() {
    visibleIndices = [];
    document.querySelectorAll('.gallery-item').forEach(function (item) {
      if (!item.classList.contains('hidden')) {
        visibleIndices.push(parseInt(item.dataset.index, 10));
      }
    });
  }

  function openLightbox(index) {
    if (!lightbox) return;
    currentIndex = index;
    updateVisibleIndices();
    updateLightbox();
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function updateLightbox() {
    const img = images[currentIndex];
    if (!img) return;
    lightboxImg.src = img.src;
    lightboxImg.alt = img.title;
    lightboxTitle.textContent = img.title;
    lightboxCat.textContent = translations[currentLang]['category.' + img.category];
  }

  function nextImage() {
    const pos = visibleIndices.indexOf(currentIndex);
    const nextPos = (pos + 1) % visibleIndices.length;
    currentIndex = visibleIndices[nextPos];
    updateLightbox();
  }

  function prevImage() {
    const pos = visibleIndices.indexOf(currentIndex);
    const prevPos = (pos - 1 + visibleIndices.length) % visibleIndices.length;
    currentIndex = visibleIndices[prevPos];
    updateLightbox();
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevImage);
  if (lightboxNext) lightboxNext.addEventListener('click', nextImage);

  const overlay = document.querySelector('.lightbox-overlay');
  if (overlay) overlay.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', function (e) {
    if (!lightbox || !lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') {
      if (currentLang === 'ar') prevImage();
      else nextImage();
    }
    if (e.key === 'ArrowLeft') {
      if (currentLang === 'ar') nextImage();
      else prevImage();
    }
  });

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

  /* ---------- INIT ---------- */
  function init() {
    initLanguage();
    initReveals();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
