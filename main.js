// ===== RK INTERIOR — GLOBAL JS =====

// Navbar scroll effect
window.addEventListener('scroll', () => {
  document.querySelector('.navbar')?.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile menu
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
hamburger?.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  if (mobileMenu.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});
mobileMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
}));

// ===== TESTIMONIAL SLIDER =====
function initTestimonialSlider() {
  const testimonials = [
    { name: "Rajesh Sharma", loc: "Patiala", text: "RK Interior transformed our living room completely. The gypsum ceiling design is breathtaking — precision work and clean finish. Highly professional team.", rating: 5 },
    { name: "Priya Kapoor", loc: "Chandigarh", text: "Got a PVC panel ceiling done for the office. Budget-friendly, fast work, and the result exceeded our expectations. Will definitely recommend.", rating: 5 },
    { name: "Amit Verma", loc: "Mohali", text: "They handled our entire home — fall ceiling, partition walls, everything. Excellent coordination and no delays whatsoever.", rating: 5 },
    { name: "Sunita Aggarwal", loc: "Ludhiana", text: "Grid ceiling for our showroom looks absolutely stunning. The team understood our vision and executed it perfectly within the deadline.", rating: 5 },
    { name: "Vikram Singh", loc: "Patiala", text: "Outstanding workmanship on the gypsum partition work. Clean edges, no mess left behind, and the follow-up service was excellent.", rating: 5 },
    { name: "Meena Joshi", loc: "Ambala", text: "Very happy with the fall ceiling installation in our kitchen and hall. The lighting integration was done beautifully. Great value for money.", rating: 5 },
    { name: "Deepak Malhotra", loc: "Bathinda", text: "RK Interior did an amazing job with our office false ceiling. Professional attitude, on-time delivery, and pristine quality. 10/10 experience.", rating: 5 },
    { name: "Kavita Rana", loc: "Patiala", text: "The PVC panel work in our bathroom and balcony is excellent. Waterproof, elegant, and the team was very courteous throughout.", rating: 5 },
    { name: "Sandeep Bhatt", loc: "Ropar", text: "Their grid ceiling installation at our restaurant gave us the premium look we wanted. Clients love it! Will hire them again for expansion.", rating: 5 },
    { name: "Neha Chopra", loc: "Chandigarh", text: "RK Interior is the best in the region. 10 years of experience really shows in the quality of their work. Got gypsum ceiling + partition — flawless.", rating: 5 }
  ];

  const container = document.getElementById('testimonialTrack');
  const dotsContainer = document.getElementById('sliderDots');
  if (!container) return;

  const perPage = window.innerWidth < 768 ? 1 : 3;
  const pages = Math.ceil(testimonials.length / perPage);
  let current = 0;

  function renderSlides() {
    container.innerHTML = '';
    for (let p = 0; p < pages; p++) {
      const slide = document.createElement('div');
      slide.className = 'testimonial-slide';
      const inner = document.createElement('div');
      inner.className = 'testimonials-inner';
      const start = p * perPage;
      testimonials.slice(start, start + perPage).forEach(t => {
        inner.innerHTML += `
          <div class="testimonial-card">
            <div class="stars">${'★'.repeat(t.rating)}</div>
            <p class="testimonial-text">${t.text}</p>
            <div class="testimonial-author">
              <div class="author-avatar">${t.name[0]}</div>
              <div>
                <div class="author-name">${t.name}</div>
                <div class="author-loc">${t.loc}</div>
              </div>
            </div>
          </div>`;
      });
      slide.appendChild(inner);
      container.appendChild(slide);
    }
    renderDots();
    updateSlider();
  }

  function renderDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    for (let i = 0; i < pages; i++) {
      const d = document.createElement('button');
      d.className = 'slider-dot' + (i === current ? ' active' : '');
      d.addEventListener('click', () => { current = i; updateSlider(); });
      dotsContainer.appendChild(d);
    }
  }

  function updateSlider() {
    container.style.transform = `translateX(-${current * 100}%)`;
    document.querySelectorAll('.slider-dot').forEach((d, i) => d.classList.toggle('active', i === current));
  }

  document.getElementById('prevSlide')?.addEventListener('click', () => { current = (current - 1 + pages) % pages; updateSlider(); });
  document.getElementById('nextSlide')?.addEventListener('click', () => { current = (current + 1) % pages; updateSlider(); });

  renderSlides();
  window.addEventListener('resize', renderSlides);
  setInterval(() => { current = (current + 1) % pages; updateSlider(); }, 5000);
}

// ===== CONTACT FORM =====
function initContactForm() {
  document.querySelectorAll('.contact-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const success = form.querySelector('.form-success');
      if (success) { success.style.display = 'block'; }
      form.reset();
      setTimeout(() => { if (success) success.style.display = 'none'; }, 4000);
    });
  });
}

// ===== SCROLL ANIMATIONS =====
function initAnimations() {
  const els = document.querySelectorAll('.ceiling-card, .feature-item, .testimonial-card, .gallery-item, .value-card');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }
    });
  }, { threshold: 0.1 });
  els.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    obs.observe(el);
  });
}

// ===== PROJECT PAGE =====
function initProjectPage() {
  const categories = {
    gypsum:     { label: 'Gypsum Ceiling',  prefix: 'gypsom ceiling', count: 12, ext: 'jpeg' },
    partition:  { label: 'Partition',        prefix: 'partition',      count: 12, ext: 'jpeg' },
    grid:       { label: 'Grid Ceiling',     prefix: 'grid ceiling',   count: 12, ext: 'jpeg' },
    fall:       { label: 'Fall Ceiling',     prefix: 'fall ceiling',   count: 12, ext: 'jpeg' },
    pvc:        { label: 'PVC Panel',        prefix: 'pvc panel',      count: 12, ext: 'jpeg' }
  };

  const btns = document.querySelectorAll('.cat-btn');
  const gallery = document.getElementById('projectGallery');
  if (!gallery) return;

  function showCategory(key) {
    const cat = categories[key];
    gallery.innerHTML = '';
    for (let i = 1; i <= cat.count; i++) {
      const wrap = document.createElement('div');
      wrap.className = 'project-img-wrap';
      const imgName = `${cat.prefix}${i}.${cat.ext}`;
      wrap.innerHTML = `
        <img src="includes/${imgName}" alt="${cat.label} ${i}" onerror="this.parentElement.style.display='none'">
        <div class="img-label">${cat.label} — ${i}</div>`;
      gallery.appendChild(wrap);
    }
  }

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      showCategory(btn.dataset.cat);
    });
  });

  // Default
  btns[0]?.click();
}

document.addEventListener('DOMContentLoaded', () => {
  initTestimonialSlider();
  initContactForm();
  initAnimations();
  initProjectPage();
});
