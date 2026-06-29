// Shared components injected by each page
const NAV_HTML = `
<nav class="navbar">
  <a href="index.html" class="nav-logo">
    <div class="logo-mark">RK</div>
    <div>
      <div class="logo-text">RK Interior</div>
      <div class="logo-sub">Ceiling Specialists</div>
    </div>
  </a>
  <ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="ceiling-projects.html">Ceiling Projects</a></li>
    <li><a href="about.html">About Us</a></li>
    <li><a href="contact.html">Contact Us</a></li>
    <li><a href="contact.html" class="nav-cta">Get Quote</a></li>
  </ul>
  <div class="hamburger">
    <span></span><span></span><span></span>
  </div>
</nav>
<div class="mobile-menu">
  <a href="index.html">Home</a>
  <a href="ceiling-projects.html">Ceiling Projects</a>
  <a href="about.html">About Us</a>
  <a href="contact.html">Contact Us</a>
  <a href="contact.html" style="color:var(--gold);">📞 Get Free Quote</a>
</div>`;

const FLOATING_HTML = `
<div class="floating-actions">
  <a href="https://wa.me/918010561544?text=Hello%2C%20I%27m%20interested%20in%20your%20ceiling%20services" target="_blank" class="float-btn float-wa" title="WhatsApp Us">
    <span class="float-label">WhatsApp Us</span>
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.828L.057 23.804a.5.5 0 0 0 .61.637l6.094-1.597A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.817 9.817 0 0 1-5.007-1.37l-.36-.213-3.716.974.991-3.618-.235-.372A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
    </svg>
  </a>
  <a href="tel:+918010561544" class="float-btn float-call" title="Call Us">
    <span class="float-label">Call Now</span>
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  </a>
</div>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <div class="nav-logo" style="margin-bottom:16px;">
        <div class="logo-mark">RK</div>
        <div>
          <div class="logo-text">RK Interior</div>
          <div class="logo-sub">Ceiling Specialists</div>
        </div>
      </div>
      <p>Punjab's trusted ceiling experts with 10+ years of experience. Gypsum, grid, fall, PVC, and partition — beautifully crafted for every space.</p>
    </div>
    <div class="footer-col">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="ceiling-projects.html">Projects</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Services</h4>
      <ul>
        <li><a href="ceiling-projects.html?cat=gypsum">Gypsum Ceiling</a></li>
        <li><a href="ceiling-projects.html?cat=partition">Partition</a></li>
        <li><a href="ceiling-projects.html?cat=grid">Grid Ceiling</a></li>
        <li><a href="ceiling-projects.html?cat=fall">Fall Ceiling</a></li>
        <li><a href="ceiling-projects.html?cat=pvc">PVC Panel</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <ul>
        <li><a href="tel:+918010561544">📞 8010561544</a></li>
        <li><a href="https://wa.me/918010561544" target="_blank">💬 WhatsApp</a></li>
        <li><a href="contact.html">📍 Patiala, Punjab</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2025 RK Interior. All rights reserved.</span>
    <span>Made with ❤️ in Punjab</span>
  </div>
</footer>`;

// Inject shared components
document.getElementById('nav-placeholder')?.insertAdjacentHTML('afterend', NAV_HTML);
document.getElementById('floating-placeholder')?.insertAdjacentHTML('afterend', FLOATING_HTML);
document.getElementById('footer-placeholder')?.insertAdjacentHTML('afterend', FOOTER_HTML);

// Set active nav link
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
});
