/* ==========================================================================
   Portfolio Redesign — Main JavaScript
   Vanilla JS. No dependencies. No frameworks.
   ========================================================================== */

(function () {
  'use strict';

  /* --- Reduced motion check --- */
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ========================================================================
     1. Mobile Navigation Toggle
     ======================================================================== */
  var navToggle = document.getElementById('navToggle');
  var navMenu = document.getElementById('navMenu');
  var body = document.body;

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      var isActive = navMenu.classList.contains('nav__menu--active');

      if (isActive) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close on nav link click
    navMenu.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        if (navMenu.classList.contains('nav__menu--active')) {
          closeMobileMenu();
        }
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navMenu.classList.contains('nav__menu--active')) {
        closeMobileMenu();
        navToggle.focus();
      }
    });
  }

  function openMobileMenu() {
    navMenu.classList.add('nav__menu--active');
    navToggle.classList.add('nav__toggle--active');
    navToggle.setAttribute('aria-expanded', 'true');
    body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    navMenu.classList.remove('nav__menu--active');
    navToggle.classList.remove('nav__toggle--active');
    navToggle.setAttribute('aria-expanded', 'false');
    body.style.overflow = '';
  }

  /* ========================================================================
     2. Smooth Scroll for Anchor Links
     ======================================================================== */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#main-content') return;

      var target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      var headerHeight = document.querySelector('.header').offsetHeight || 64;
      var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 8;

      window.scrollTo({
        top: targetPosition,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });

      // Set focus for keyboard users
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      target.addEventListener('blur', function () {
        target.removeAttribute('tabindex');
      }, { once: true });
    });
  });

  /* ========================================================================
     3. Scroll Reveal (IntersectionObserver — runs once per element)
     ======================================================================== */
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // If reduced motion or no IO support, show everything immediately
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('reveal--visible');
    });
  }

  /* ========================================================================
     4. Copy to Clipboard Utility
     ======================================================================== */
  var toast = document.getElementById('toast');
  var toastTimeout = null;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('toast--visible');

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(function () {
      toast.classList.remove('toast--visible');
    }, 2000);
  }

  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        showToast('Copied \u2713');
      }).catch(function () {
        fallbackCopy(text);
      });
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      showToast('Copied \u2713');
    } catch (e) {
      showToast('Copy failed');
    }
    document.body.removeChild(textarea);
  }

  // Attach to all [data-copy] buttons (contact cards)
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      copyToClipboard(this.getAttribute('data-copy'));
    });
  });

  /* ========================================================================
     5. Code Block Copy Buttons (for blog articles)
     ======================================================================== */
  // Inject copy button into each Rouge highlight block
  document.querySelectorAll('.highlight').forEach(function (block, index) {
    // Skip if already wrapped
    if (block.parentElement.classList.contains('code-block')) return;

    // Create wrapper
    var wrapper = document.createElement('div');
    wrapper.className = 'code-block';

    // Create header
    var header = document.createElement('div');
    header.className = 'code-block__header';

    // Language label
    var langClass = '';
    block.querySelector('[class*="language-"]');
    var codeEl = block.querySelector('code');
    if (codeEl) {
      var classMatch = codeEl.className.match(/language-(\w+)/);
      if (classMatch) langClass = classMatch[1];
    }
    var langLabel = document.createElement('span');
    langLabel.className = 'code-block__language';
    langLabel.textContent = langClass || 'code';
    header.appendChild(langLabel);

    // Copy button
    var copyBtn = document.createElement('button');
    copyBtn.className = 'code-block__copy';
    copyBtn.textContent = 'Copy';
    copyBtn.setAttribute('aria-label', 'Copy code to clipboard');
    header.appendChild(copyBtn);

    // Insert wrapper before the highlight block
    block.parentNode.insertBefore(wrapper, block);
    wrapper.appendChild(header);
    wrapper.appendChild(block);

    // Copy handler
    copyBtn.addEventListener('click', function () {
      var codeText = block.textContent || '';
      copyToClipboard(codeText);
      copyBtn.classList.add('code-block__copy--copied');
      copyBtn.textContent = 'Copied';
      setTimeout(function () {
        copyBtn.classList.remove('code-block__copy--copied');
        copyBtn.textContent = 'Copy';
      }, 2000);
    });
  });

})();
