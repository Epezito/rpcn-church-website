// Mobile menu toggle
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');
    burger?.addEventListener('click', () => menu.classList.toggle('open'));

    // Scroll style for nav
    const nav = document.getElementById('nav');
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 6);
    document.addEventListener('scroll', onScroll, { passive: true }); onScroll();

    // Smooth scroll for in-page links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const id = a.getAttribute('href');
        const el = document.querySelector(id);
        if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); menu.classList.remove('open'); }
      });
    });

    // Contact form (front‑end only)
    const form = document.getElementById('contactForm');
    const toast = document.getElementById('toast');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      // Simulate success (replace with real endpoint later)
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 3000);
      form.reset();
    });

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();