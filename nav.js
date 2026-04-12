// nav.js — Shared navigation logic

const NAV_HTML = `
<nav class="navbar" id="navbar">
  <a href="index.html" class="nav-logo">
    <div class="nav-logo-icon">HSI</div>
    <span class="nav-logo-text">HSI<span>OS</span></span>
  </a>
  <ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="hsi-os.html">HSI OS</a></li>
    <li><a href="how-it-works.html">How It Works</a></li>
    <li><a href="projects.html">Projects</a></li>
    <li><a href="for-homeowners.html">Homeowners</a></li>
    <li><a href="for-developers.html">Developers</a></li>
    <li><a href="contact.html" class="nav-cta">Request Demo</a></li>
  </ul>
  <div class="hamburger" id="hamburger" aria-label="Toggle menu">
    <span></span><span></span><span></span>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About HSI</a></li>
    <li><a href="hsi-os.html">HSI OS Platform</a></li>
    <li><a href="how-it-works.html">How It Works</a></li>
    <li><a href="projects.html">Projects</a></li>
    <li><a href="for-homeowners.html">For Homeowners</a></li>
    <li><a href="for-developers.html">For Developers</a></li>
    <li><a href="contact.html">Request Demo →</a></li>
  </ul>
</div>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="index.html" class="nav-logo" style="margin-bottom:0">
        <div class="nav-logo-icon">HSI</div>
        <span class="nav-logo-text">HSI<span>OS</span></span>
      </a>
      <p>The operating system for premium interior execution. Bringing structure, transparency, and intelligence to villa and high-end residential projects.</p>
    </div>
    <div class="footer-col">
      <h4>Platform</h4>
      <ul>
        <li><a href="hsi-os.html">HSI OS</a></li>
        <li><a href="how-it-works.html">How It Works</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="contact.html">Request Demo</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Solutions</h4>
      <ul>
        <li><a href="for-homeowners.html">For Homeowners</a></li>
        <li><a href="for-developers.html">For Developers</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <ul>
        <li><a href="mailto:Support@HSIOS.in">Support@HSIOS.in</a></li>
        <li><a href="https://www.HSIOS.in">www.HSIOS.in</a></li>
        <li><a href="about.html">About HSI</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2025 Hestia Smart Interiors. All rights reserved.</p>
    <div class="footer-contact-links">
      <a href="mailto:Support@HSIOS.in">Support@HSIOS.in</a>
      <a href="https://www.HSIOS.in">www.HSIOS.in</a>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  // Inject nav
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.innerHTML = NAV_HTML;

  // Inject footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.innerHTML = FOOTER_HTML;

  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav-links a, .mobile-menu a');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // Hamburger
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
  }

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => observer.observe(el));

  // FAQ Accordion
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      // Toggle clicked
      if (!isOpen) item.classList.add('open');
    });
  });
});
