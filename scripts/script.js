'use strict';

// const navAbout = document.querySelector('.nav-about');

// navAbout.addEventListener('click', function (e) {
//   e.preventDefault();

//   const id = e.target.getAttribute('href');
//   console.log(id);

//   document.querySelector(`${id}`).scrollIntoView({
//     behavior: 'smooth',
//   });
// });
const navBtn = document.querySelector('.close-and-open-btn');

const navAbout = document.querySelector('.nav-items');

navAbout.addEventListener('click', function (e) {
  if (!e.target.classList.contains('nav-link-scroll')) return;

  e.preventDefault();

  const id = e.target.getAttribute('href');

  document.querySelector(`${id}`).scrollIntoView({
    behavior: 'smooth',
  });
});

navBtn.addEventListener('click', function () {
  document.querySelector('.open-icon').classList.toggle('display-btn');

  document.querySelector('.close-icon').classList.toggle('display-btn');

  document.querySelector('.nav-items').classList.toggle('show-nav-items');
});

const heroSection = document.querySelector('.hero-section');

const observerCallBack = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    document.querySelector('.header').classList.add('fix-top');
  } else {
    document.querySelector('.header').classList.remove('fix-top');
  }
};

const observeHeroSection = new IntersectionObserver(observerCallBack, {
  threshold: 0,
  rootMargin: '10px',
});

observeHeroSection.observe(heroSection);

function checkFlexGap() {
  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add('no-flexbox-gap');
}
checkFlexGap();
