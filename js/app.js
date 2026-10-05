/**
 * TRZEZO - Social Media Services
 * Core Client Application Logic
 */

(function () {
  'use strict';

  // Configuration & Constants
  const CONFIG = {
    whatsappNumber: '201096275626',
    displayPhone: '01096275626',
  };

  // Platforms and Services Catalog
  const SERVICES_DATA = [
    {
      id: 'tiktok',
      name: 'TikTok',
      category: 'فيديو قصير ومنصة عالمية',
      description: 'عزز حسابك على تيك توك ووسع انتشار مقاطعك ووصولها لصفحة For You بأعلى كفاءة.',
      themeClass: 'theme-tiktok',
      iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.33 6.33 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.86-4.5V9.4a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.83z"/>
      </svg>`,
      services: [
        'متابعين TikTok',
        'لايكات TikTok',
        'مشاهدات TikTok',
        'تعليقات TikTok',
        'تفاعل TikTok'
      ]
    },
    {
      id: 'instagram',
      name: 'Instagram',
      category: 'صور وريلز وبراندينج',
      description: 'ارتقِ ببروفايل إنستغرام الخاص بك، وضاعف التفاعل على الريلز والمنشورات والستوري.',
      themeClass: 'theme-instagram',
      iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>`,
      services: [
        'متابعين Instagram',
        'لايكات Instagram',
        'مشاهدات Instagram',
        'تعليقات Instagram',
        'تفاعل Instagram'
      ]
    },
    {
      id: 'facebook',
      name: 'Facebook',
      category: 'صفحات ومجموعات وتفاعل',
      description: 'طوّر أداء صفحتك التجارية أو الشخصية على فيسبوك وزد من مصداقيتك وتفاعل عملائك.',
      themeClass: 'theme-facebook',
      iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>`,
      services: [
        'متابعين Facebook',
        'لايكات Facebook',
        'مشاهدات Facebook',
        'تفاعل الصفحات',
        'خدمات الصفحات'
      ]
    },
    {
      id: 'youtube',
      name: 'YouTube',
      category: 'صناع محتوى وفيديوهات',
      description: 'ابنِ قناتك على يوتيوب وزد من عدد المشتركين ونسب المشاهدة والتفاعل على الفيديوهات والشورتس.',
      themeClass: 'theme-youtube',
      iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.35 29 29 0 0 0-.46-5.33z"/>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#0d121f"/>
      </svg>`,
      services: [
        'مشتركين YouTube',
        'مشاهدات YouTube',
        'لايكات YouTube',
        'تفاعل YouTube'
      ]
    },
    {
      id: 'telegram',
      name: 'Telegram',
      category: 'قنوات ومجتمعات وتليجرام',
      description: 'كبّر قناتك أو جروبك على تليجرام واجعل منشوراتك تصل لآلاف المشاهدين باحترافية.',
      themeClass: 'theme-telegram',
      iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .34z"/>
      </svg>`,
      services: [
        'أعضاء Telegram',
        'مشاهدات المنشورات',
        'تفاعل القنوات'
      ]
    },
    {
      id: 'snapchat',
      name: 'Snapchat',
      category: 'ستوري وعدسات وسناب',
      description: 'اجعل حسابك وقصصك على سناب شات محط أنظار الجميع مع خدمات نمو حصرية ومميزة.',
      themeClass: 'theme-snapchat',
      iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M12.06 2c-3.1 0-5.32 2.1-5.32 4.9 0 .8.2 1.6.48 2.22-.6.18-1.34.62-1.4 1.34-.04.48.24.84.6 1.07-.38.74-.88 1.52-1.8 1.7-.38.07-.64.38-.62.77.03.48.45.83.92.76.62-.1 1.25-.33 1.83-.58-.08.45-.1.9-.06 1.35.08.82.47 1.39 1.15 1.68.74.32 1.68.22 2.68.04.53-.1 1.07-.2 1.58-.2.53 0 1.05.1 1.58.2 1 .18 1.94.28 2.68-.04.68-.29 1.07-.86 1.15-1.68.04-.45.02-.9-.06-1.35.58.25 1.21.48 1.83.58.47.07.89-.28.92-.76.02-.39-.24-.7-.62-.77-.92-.18-1.42-.96-1.8-1.7.36-.23.64-.59.6-1.07-.06-.72-.8-1.16-1.4-1.34.28-.62.48-1.42.48-2.22 0-2.8-2.22-4.9-5.32-4.9z"/>
      </svg>`,
      services: [
        'متابعين Snapchat',
        'مشاهدات Snapchat',
        'تفاعل Snapchat'
      ]
    },
    {
      id: 'x',
      name: 'X',
      category: 'تغريدات وتفاعل وتريند',
      description: 'انشر أفكارك وفعّل حسابك على منصة إكس (تويتر سابقاً) لتصل لجمهور أوسع وتتصدر النقاشات.',
      themeClass: 'theme-x',
      iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>`,
      services: [
        'متابعين X',
        'لايكات X',
        'مشاهدات X',
        'تفاعل X'
      ]
    },
    {
      id: 'other',
      name: 'خدمات أخرى',
      category: 'طلبات خاصة واستفسارات',
      description: 'مش لاقي الخدمة اللي محتاجها؟ تواصل معنا وهنتأكد لك من التفاصيل ونوفر لك الحل الأنسب.',
      themeClass: 'theme-other',
      iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>`,
      services: [
        'طلب خدمة مخصصة',
        'استفسار عن منصة أخرى',
        'باقات خاصة لأصحاب الأعمال',
        'دعم واستشارة فورية'
      ]
    }
  ];

  // State Management
  const state = {
    selectedPlatform: null,
    selectedService: null,
    activeFilter: 'all'
  };

  /**
   * Helper: Generate dynamic WhatsApp Link
   */
  function createWhatsAppUrl(serviceName) {
    const text = `مرحبًا TRZEZO 👋
أريد الاستفسار عن خدمة:
${serviceName}

ممكن أعرف التفاصيل؟`;
    return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  }

  /**
   * DOM Elements
   */
  const elements = {
    header: document.getElementById('site-header'),
    menuToggle: document.getElementById('menu-toggle'),
    mobileDrawer: document.getElementById('mobile-drawer'),
    servicesGrid: document.getElementById('services-grid'),
    filterButtons: document.querySelectorAll('.filter-tab'),
    modalOverlay: document.getElementById('service-modal'),
    modalCloseBtn: document.getElementById('modal-close-btn'),
    modalCancelBtn: document.getElementById('modal-cancel-btn'),
    modalConfirmBtn: document.getElementById('modal-confirm-btn'),
    modalServiceName: document.getElementById('modal-service-name'),
    modalPlatformIcon: document.getElementById('modal-platform-icon'),
    modalSubServiceSelect: document.getElementById('modal-subservice-select'),
    copyPhoneBtn: document.getElementById('btn-copy-phone'),
    phoneDisplay: document.getElementById('phone-digits'),
    toast: document.getElementById('toast-notice')
  };

  /**
   * Render Service Cards
   */
  function renderServices() {
    if (!elements.servicesGrid) return;
    elements.servicesGrid.innerHTML = '';

    SERVICES_DATA.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = `service-card ${item.themeClass} reveal reveal-delay-${(index % 3) + 1}`;
      card.setAttribute('data-platform', item.id);

      // Create pills markup
      const pillsMarkup = item.services
        .map(svc => `<button class="service-pill" type="button" data-platform="${item.id}" data-service="${svc}">${svc}</button>`)
        .join('');

      card.innerHTML = `
        <div class="card-content-top">
          <div class="card-header-flex">
            <div class="platform-avatar">
              ${item.iconSvg}
            </div>
            <div class="platform-title-group">
              <h3>${item.name}</h3>
              <span class="platform-category">${item.category}</span>
            </div>
          </div>
          <p class="card-description">${item.description}</p>
          <div class="services-pills-list">
            ${pillsMarkup}
          </div>
        </div>
        <div class="service-card-footer">
          <button type="button" class="btn-order-service" data-platform="${item.id}" data-service="${item.services[0]}">
            <span>اطلب الخدمة</span>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      `;

      elements.servicesGrid.appendChild(card);
    });

    attachServiceEvents();
  }

  /**
   * Attach Events to Dynamic Service Elements
   */
  function attachServiceEvents() {
    // Individual service pill clicks
    document.querySelectorAll('.service-pill').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const platformId = btn.getAttribute('data-platform');
        const serviceName = btn.getAttribute('data-service');
        openServiceModal(platformId, serviceName);
      });
    });

    // Card main order buttons
    document.querySelectorAll('.btn-order-service').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const platformId = btn.getAttribute('data-platform');
        const serviceName = btn.getAttribute('data-service');
        openServiceModal(platformId, serviceName);
      });
    });
  }

  /**
   * Modal Management
   */
  function openServiceModal(platformId, selectedService) {
    const platform = SERVICES_DATA.find(p => p.id === platformId) || SERVICES_DATA[0];
    state.selectedPlatform = platform;
    state.selectedService = selectedService || platform.services[0];

    // Populate modal views
    elements.modalPlatformIcon.innerHTML = platform.iconSvg;
    elements.modalServiceName.textContent = state.selectedService;

    // Populate select options
    elements.modalSubServiceSelect.innerHTML = '';
    platform.services.forEach(svc => {
      const opt = document.createElement('option');
      opt.value = svc;
      opt.textContent = svc;
      if (svc === state.selectedService) opt.selected = true;
      elements.modalSubServiceSelect.appendChild(opt);
    });

    // Update Confirm Link
    updateModalConfirmUrl();

    // Show modal
    elements.modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeServiceModal() {
    elements.modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateModalConfirmUrl() {
    const currentService = elements.modalSubServiceSelect.value || state.selectedService;
    const url = createWhatsAppUrl(currentService);
    elements.modalConfirmBtn.setAttribute('href', url);
  }

  /**
   * Filter Tabs Functionality
   */
  function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-tab');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        const cards = document.querySelectorAll('.service-card');

        cards.forEach(card => {
          const platform = card.getAttribute('data-platform');
          if (filter === 'all' || platform === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /**
   * Accordion FAQ
   */
  function setupFaq() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const btn = item.querySelector('.faq-question-btn');
      btn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close others
        faqItems.forEach(other => other.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });
  }

  /**
   * Header Scroll Effect
   */
  function setupHeaderScroll() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        elements.header.classList.add('scrolled');
      } else {
        elements.header.classList.remove('scrolled');
      }
    });
  }

  /**
   * Mobile Menu Drawer
   */
  function setupMobileMenu() {
    if (!elements.menuToggle || !elements.mobileDrawer) return;

    elements.menuToggle.addEventListener('click', () => {
      const isOpen = elements.mobileDrawer.classList.contains('open');
      if (isOpen) {
        elements.mobileDrawer.classList.remove('open');
        elements.menuToggle.classList.remove('active');
        document.body.style.overflow = '';
      } else {
        elements.mobileDrawer.classList.add('open');
        elements.menuToggle.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });

    // Close on mobile nav click
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        elements.mobileDrawer.classList.remove('open');
        elements.menuToggle.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  /**
   * Copy to Clipboard Toast
   */
  function showToast(message) {
    if (!elements.toast) return;
    elements.toast.textContent = message;
    elements.toast.classList.add('show');
    setTimeout(() => {
      elements.toast.classList.remove('show');
    }, 3200);
  }

  function setupClipboard() {
    if (!elements.copyPhoneBtn) return;
    elements.copyPhoneBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(CONFIG.displayPhone).then(() => {
        showToast(`تم نسخ رقم واتساب بنجاح: ${CONFIG.displayPhone}`);
      }).catch(() => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = CONFIG.displayPhone;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(`تم نسخ رقم واتساب بنجاح: ${CONFIG.displayPhone}`);
      });
    });
  }

  /**
   * Scroll Reveal Observer
   */
  function setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  /**
   * Initialize App
   */
  function init() {
    renderServices();
    setupFilters();
    setupFaq();
    setupHeaderScroll();
    setupMobileMenu();
    setupClipboard();

    // Modal subservice selector change
    if (elements.modalSubServiceSelect) {
      elements.modalSubServiceSelect.addEventListener('change', (e) => {
        elements.modalServiceName.textContent = e.target.value;
        updateModalConfirmUrl();
      });
    }

    // Modal close listeners
    if (elements.modalCloseBtn) {
      elements.modalCloseBtn.addEventListener('click', closeServiceModal);
    }
    if (elements.modalCancelBtn) {
      elements.modalCancelBtn.addEventListener('click', closeServiceModal);
    }
    if (elements.modalOverlay) {
      elements.modalOverlay.addEventListener('click', (e) => {
        if (e.target === elements.modalOverlay) {
          closeServiceModal();
        }
      });
    }

    // Modal confirm action
    if (elements.modalConfirmBtn) {
      elements.modalConfirmBtn.addEventListener('click', () => {
        closeServiceModal();
      });
    }

    // Escape key closes modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && elements.modalOverlay.classList.contains('active')) {
        closeServiceModal();
      }
    });

    // Run scroll reveal on static elements
    setupScrollReveal();
  }

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
