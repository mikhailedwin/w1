document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('themeToggle');
  const body = document.body;
  const tagline = document.getElementById('tagline');
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    body.classList.add('light');
    toggle.textContent = '☀️';
  }

  const text = 'Sleepwalker';
  let idx = 0;
  (function type() {
    tagline.textContent = text.slice(0, idx++);
    if (idx <= text.length) {
      setTimeout(type, 150);
    }
  })();

  toggle.addEventListener('click', () => {
    body.classList.toggle('light');
    const isLight = body.classList.contains('light');
    toggle.textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });

  const sections = document.querySelectorAll('.content-section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(sec => {
    sec.classList.add('hidden');
    observer.observe(sec);
  });

  const header = document.querySelector('header');
  document.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    header.style.transform = `rotateX(${y}deg) rotateY(${-x}deg)`;
  });
});
