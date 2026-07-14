// =====================================
// PAGES.JS — برای تمام صفحات جدید
// =====================================

document.addEventListener('DOMContentLoaded', function() {

    // =====================================
    // 1. SCROLL REVEAL
    // =====================================
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // =====================================
    // 2. DARK MODE TOGGLE (مشکل اصلی اینجاست!)
    // =====================================
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // اگر دکمه وجود داشت
    if (themeToggle) {

        // چک کردن تم ذخیره شده
        if (localStorage.getItem('theme') === 'dark') {
            body.classList.add('dark');
            themeToggle.textContent = '☀️';
        }

        // رویداد کلیک
        themeToggle.addEventListener('click', function() {
            body.classList.toggle('dark');

            if (body.classList.contains('dark')) {
                themeToggle.textContent = '☀️';
                localStorage.setItem('theme', 'dark');
            } else {
                themeToggle.textContent = '🌙';
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // =====================================
    // 3. HEADER SCROLL EFFECT
    // =====================================
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // =====================================
    // 4. MOBILE MENU TOGGLE
    // =====================================
    const menuToggle = document.getElementById('menuToggle');
    const navbar = document.getElementById('navbar');

    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', function() {
            navbar.classList.toggle('active');
        });

        // بستن منو با کلیک روی لینک
        document.querySelectorAll('.navbar a').forEach(link => {
            link.addEventListener('click', function() {
                navbar.classList.remove('active');
            });
        });
    }

    // =====================================
    // 5. ACCORDION (برای صفحه قوانین)
    // =====================================
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const parent = this.parentElement;
            const isActive = parent.classList.contains('active');

            // بستن همه
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
            });

            // باز کردن این یکی اگر بسته بود
            if (!isActive) {
                parent.classList.add('active');
            }
        });
    });

    // باز کردن اولین آیتم به صورت پیش‌فرض
    const firstAccordion = document.querySelector('.accordion-item');
    if (firstAccordion) {
        firstAccordion.classList.add('active');
    }

    console.log('🚀 همراه بار - صفحات جدید لود شدند!');
});