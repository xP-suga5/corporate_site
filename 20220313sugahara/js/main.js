// header__nav
const target = document.getElementById("header__nav-menu");
target.addEventListener('click', () => {
  const target = document.getElementById("header__nav-menu");
  target.classList.toggle('open');
  const nav = document.getElementById("header__drawer_nav");
  nav.classList.toggle('in');
});