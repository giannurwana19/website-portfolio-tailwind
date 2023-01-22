window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop; // posisi header thd posisi atas
  const toTop = document.getElementById('to-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.add('hidden');
    toTop.classList.remove('flex');
  }
};

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// klik di luar hamburger
window.addEventListener('click', function (e) {
  if (e.target !== hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

console.log('offsetTop: ', document.querySelector('header').offsetTop);
console.log('pageYOffset: ', window.pageYOffset);
