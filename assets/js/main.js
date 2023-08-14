//  SHOW SIDEBAR
const navMenu = document.getElementById('sidebar'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

//  ------ SIDEBAR SHOW
/* Validate If Constant Exists */
navToggle?.addEventListener('click', () => {
  navMenu.classList.add('show-sidebar');
});

//  ------ SIDEBAR HIDDEN
/* Validate If Constant Exists */
navClose?.addEventListener('click', () => {
  navMenu.classList.remove('show-sidebar');
});

navMenu?.addEventListener('click', function (e) {
  if (e.target.closest('.nav__link')) {
    navMenu.classList.remove('show-sidebar');
  }
});

// ----------- SKILLS TABS ------------
const tabs = document.querySelectorAll('[data-target]'),
  tabContent = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tabContent.forEach(tabContents => {
      tabContents.classList.remove('skills__active');
    });

    target.classList.add('skills__active');

    tabs.forEach(tab => {
      tab.classList.remove('skills__active');
    });

    tab.classList.add('skills__active');
  });
});

//  -------------- MIXITUP FILTER PORTFOLIO -------------

let mixerPortfolio = mixitup('.work__container', {
  selectors: {
    target: '.work__card',
  },
  animation: {
    duration: 300,
  },
});

//  ------ Link Active Work
const linkWork = document.querySelectorAll('.work__item');

function activeWork() {
  linkWork.forEach(work => {
    work.classList.remove('active-work');
    this.classList.add('active-work');
  });
}

linkWork.forEach(work => work.addEventListener('click', activeWork));

//  ------ Work Popup
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('work__button')) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
});

function togglePortfolioPopup() {
  document.querySelector('.portfolio__popup').classList.toggle('open');
}

document
  .querySelector('.portfolio__popup')
  .addEventListener('click', function (e) {
    if (e.target.closest('.uil-times')) {
      togglePortfolioPopup();
      return;
    }
    if (e.target.closest('.open .portfolio__popup-inner')) return;
    else togglePortfolioPopup();
  });

function portfolioItemDetails(portfolioItem) {
  document.querySelector('.pp__thumbnail img').src =
    portfolioItem.querySelector('.work__img').src;
  document.querySelector('.pp__thumbnail img').alt =
    portfolioItem.querySelector('.work__img').alt;

  document.querySelector('.portfolio__popup-subtitle span').innerHTML =
    portfolioItem.querySelector('.work__title').innerHTML;
  document.querySelector('.portfolio__popup-body').innerHTML =
    portfolioItem.querySelector('.portfolio__item-details').innerHTML;
}

//  SERVICES MODAL
const modelViews = document.querySelectorAll('.services__model'),
  modelBtns = document.querySelectorAll('.services__button'),
  modelClose = document.querySelectorAll('.services__model-close');

let model = function (modelClick) {
  modelViews[modelClick].classList.add('active-model');
};

modelBtns.forEach((modelBtn, i) => {
  modelBtn.addEventListener('click', function () {
    model(i);
  });
});

modelClose.forEach(close => {
  close.addEventListener('click', () => {
    modelViews.forEach(modelView => {
      modelView.classList.remove('active-model');
    });
  });
});

//  INPUT ANIMATION
const inputs = document.querySelectorAll('.input');
function focus() {
  let parent = this.parentNode;
  parent.classList.add('focus');
}

function blur() {
  let parent = this.parentNode;
  if (this.value.trim() === '') {
    parent.classList.remove('focus');
  }
}

inputs.forEach(input => {
  input.addEventListener('focus', focus);
  input.addEventListener('blur', blur);
});

//  SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]');

// event listener on a scroll
window.addEventListener('scroll', navHighlightor);

function navHighlightor() {
  let scrollY = window.scrollY;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });

  //  SHOW SCROLL UP
  const scrollUp = document.querySelector('.scroll-up');
  if (scrollY > 600) {
    scrollUp.classList.add('active');
  } else {
    scrollUp.classList.remove('active');
  }
}

// Contact form email sending
document.getElementById('submitButton').addEventListener('click', function (e) {
  e.preventDefault();
  const name = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please fill all required fields!',
    });
    return;
  }

  Swal.fire('Email Ready to sent', 'We are redirecting you 👀', 'success');
  setTimeout(() => {
    const mailtoLink =
      'mailto:noumanejaz92@gmail.com' +
      '?subject=New Contact Form Submission (Portfolio)' +
      '&body=Name: ' +
      name +
      '&body=Phone: ' +
      phone +
      '%0D%0AEmail: ' +
      email +
      '&body=Message: ' +
      message;
    window.open(mailtoLink, '_blank');
  }, 2500);
});

// Handling whatsapp and other links
const whatsappBtn = document.querySelector('.whatsapp-btn');
whatsappBtn.addEventListener('click', function () {
  window.open(
    'https://wa.me/+923059639203?text=Hello%2C%20I%20just%20saw%20your%20portfolio%20website.',
    '_blank'
  );
});

const emailBtn = document.querySelector('.email-btn');
emailBtn.addEventListener('click', function () {
  window.open('mailto:noumanejaz92@gmail.com', '_blank');
});

const linkedinBtn = document.querySelector('.linkedin-btn');
linkedinBtn.addEventListener('click', function () {
  window.open('https://www.linkedin.com/in/chnoumanejaz/', '_blank');
});

// Theme changing management

const settingBtn = document.querySelector('.setting-btn');
const themeMenu = document.querySelector('.theme-menu');

const toggleSettings = function () {
  themeMenu.classList.toggle('hidden');
  if (settingBtn.innerHTML === `<i class="uil uil-times"></i>`) {
    settingBtn.innerHTML = `<i class="uil uil-setting"></i>`;
  } else {
    settingBtn.innerHTML = `<i class="uil uil-times"></i>`;
  }
};

settingBtn.addEventListener('click', toggleSettings);
const root = document.documentElement;

themeMenu?.addEventListener('click', function (e) {
  if (e.target.closest('.red')) {
    root.style.setProperty('--skin-color', 'hsl(0, 96%, 43%)');
    toggleSettings();
    localStorage.setItem('theme', 'red');
  } else if (e.target.closest('.blue')) {
    root.style.setProperty('--skin-color', 'hsl(229, 100%, 46%)');
    toggleSettings();
    localStorage.setItem('theme', 'blue');
  } else if (e.target.closest('.orange')) {
    root.style.setProperty('--skin-color', 'hsl(29, 100%, 46%)');
    toggleSettings();
    localStorage.setItem('theme', 'orange');
  } else if (e.target.closest('.default')) {
    root.style.setProperty('--skin-color', 'hsl(310, 98%, 44%)');
    toggleSettings();
    localStorage.setItem('theme', 'default');
  }
});

// Default theme load from local storage
if (
  localStorage.getItem('theme') === 'default' ||
  localStorage.getItem('theme') === null
) {
  root.style.setProperty('--skin-color', 'hsl(310, 98%, 44%)');
} else if (localStorage.getItem('theme') === 'red') {
  root.style.setProperty('--skin-color', 'hsl(0, 96%, 43%)');
} else if (localStorage.getItem('theme') === 'orange') {
  root.style.setProperty('--skin-color', 'hsl(29, 100%, 46%)');
} else if (localStorage.getItem('theme') === 'blue') {
  root.style.setProperty('--skin-color', 'hsl(229, 100%, 46%)');
}
