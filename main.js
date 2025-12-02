/**
* Template Name: AMR
* Template URL: https://bootstrapmade.com/kelly-free-bootstrap-cv-resume-html-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  const body = document.body;
  const header = document.querySelector('#header');

  function syncScrolledClass() {
    if (!header) return;
    const shouldScroll = window.scrollY > 100;
    body.classList.toggle('scrolled', shouldScroll);
    header.classList.toggle('scrolled', shouldScroll);
  }

  document.addEventListener('scroll', syncScrolledClass);
  window.addEventListener('load', syncScrolledClass);

  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function toggleMobileNav() {
    if (!mobileNavToggleBtn) return;
    body.classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }

  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', toggleMobileNav);
  }

  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (body.classList.contains('mobile-nav-active')) {
        toggleMobileNav();
      }
    });
  });

  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  const scrollTop = document.querySelector('.scroll-top');

  function handleScrollTop() {
    if (!scrollTop) return;
    scrollTop.classList.toggle('active', window.scrollY > 100);
  }

  if (scrollTop) {
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  window.addEventListener('scroll', handleScrollTop);
  window.addEventListener('load', handleScrollTop);

  if (typeof AOS !== 'undefined') {
    window.addEventListener('load', () => {
      AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false });
    });
  }

  const progressBars = document.querySelectorAll('.skills .progress .progress-bar');
  if (progressBars.length) {
    window.addEventListener('load', () => {
      progressBars.forEach(bar => {
        const value = Number(bar.getAttribute('aria-valuenow')) || 0;
        bar.style.width = `${value}%`;
        bar.parentElement.classList.add('skills-progress-finished');
      });
    });
  }

})();
