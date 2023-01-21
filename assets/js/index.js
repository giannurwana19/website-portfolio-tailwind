window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop; // posisi header thd posisi atas

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

console.log('offsetTop: ', document.querySelector('header').offsetTop);
console.log('pageYOffset: ', window.pageYOffset);
