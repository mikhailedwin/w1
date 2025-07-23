document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('themeToggle');
  const body = document.body;
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    body.classList.add('light');
    toggle.textContent = '☀️';
  }

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
});
