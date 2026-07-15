const header = document.querySelector('.site-header');
const menu = document.querySelector('.menu-button');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.innerHTML = `<i class="bx ${open ? 'bx-x' : 'bx-menu'}"></i>`;
});

nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
  menu.innerHTML = '<i class="bx bx-menu"></i>';
}));

addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 8), { passive: true });

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
document.querySelector('#year').textContent = new Date().getFullYear();
