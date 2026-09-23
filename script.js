document.addEventListener('DOMContentLoaded', () => {
  // Current language ('en' or 'pl')
  let currentLang = localStorage.getItem('mandragora_lang') || 'en';

  const langToggleBtn = document.getElementById('lang-toggle');
  const langLabel = document.getElementById('lang-label');

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('mandragora_lang', lang);
    document.documentElement.lang = lang;

    // Update label on toggle button
    if (langLabel) {
      langLabel.textContent = lang === 'en' ? '🇵🇱 PL' : '🇬🇧 EN';
    }

    // Translate all elements with data-en & data-pl attributes
    const translatableElements = document.querySelectorAll('[data-en][data-pl]');
    translatableElements.forEach(el => {
      const text = el.getAttribute(`data-${lang}`);
      if (text) {
        el.textContent = text;
      }
    });
  }

  // Initial language application
  setLanguage(currentLang);

  // Toggle language event handler
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const newLang = currentLang === 'en' ? 'pl' : 'en';
      setLanguage(newLang);
    });
  }

  // FAQ Accordion functionality
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const faqItem = btn.parentElement;
      const isActive = faqItem.classList.contains('active');

      // Close all other active items
      document.querySelectorAll('.faq-item.active').forEach(item => {
        if (item !== faqItem) {
          item.classList.remove('active');
        }
      });

      // Toggle clicked item
      faqItem.classList.toggle('active', !isActive);
    });
  });

  // Dynamic copyright year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
