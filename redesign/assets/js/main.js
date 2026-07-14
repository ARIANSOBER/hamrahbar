// ── Header scroll ──────────────────────────────
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// ── Active nav link ────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar a');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.navbar a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.35 });

sections.forEach(s => observer.observe(s));

// ── Scroll reveal ──────────────────────────────
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// ── Stagger service cards ──────────────────────
document.querySelectorAll('.service-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.08}s`;
});

// ── Counter animation ──────────────────────────
function animateCount(el) {
  const raw = el.textContent.trim();
  const match = raw.match(/[\d.]+/);
  if (!match) return;
  const target = parseFloat(match[0]);
  const suffix = raw.replace(match[0], '');
  const duration = 1800;
  const steps = 60;
  const increment = target / steps;
  let current = 0;
  let step = 0;
  const timer = setInterval(() => {
    step++;
    current = Math.min(current + increment, target);
    const display = Number.isInteger(target) ? Math.floor(current) : current.toFixed(1);
    el.textContent = display + suffix;
    if (step >= steps) clearInterval(timer);
  }, duration / steps);
}

const statsObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.number').forEach(animateCount);
      statsObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.stats-section, .hero-stats').forEach(s => statsObs.observe(s));

// ── Smooth scroll ──────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── Dark / Light mode toggle (نسخه نهایی) ──────
const themeToggle = document.getElementById('themeToggle');

// تابع اعمال تم - با لاگ برای دیباگ
function applyTheme(theme) {
  console.log('Applying theme:', theme);
  if (theme === 'light') {
    document.body.classList.add('light');
    if (themeToggle) themeToggle.textContent = '🌙';
  } else {
    document.body.classList.remove('light');
    if (themeToggle) themeToggle.textContent = '☀️';
  }
  console.log('Body classes:', document.body.className);
}

// دریافت تم ذخیره شده
let savedTheme = localStorage.getItem('hamrahbar-theme');
if (!savedTheme) {
  savedTheme = 'dark';
  localStorage.setItem('hamrahbar-theme', 'dark');
}
applyTheme(savedTheme);

// رویداد کلیک
if (themeToggle) {
  themeToggle.addEventListener('click', function(e) {
    console.log('Toggle clicked!');
    const isLight = document.body.classList.contains('light');
    const nextTheme = isLight ? 'dark' : 'light';
    applyTheme(nextTheme);
    localStorage.setItem('hamrahbar-theme', nextTheme);
  });
} else {
  console.error('Theme toggle button not found!');
}

console.log('🚀 Hamrahbar loaded successfully!');