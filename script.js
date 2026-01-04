document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('navbar');
  const links = Array.from(nav.querySelectorAll('a'));

  // Toggle 'scrolled' class on navbar
  const onScroll = () => {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mark clicked link as active (simple single-page behavior)
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      links.forEach(l => l.classList.remove('active'));
      e.currentTarget.classList.add('active');
    });
  });
});
