const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// card container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// service container
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});

// Explore container
ScrollReveal().reveal(".section__header", {
    ...scrollRevealOption,
    interval: 1000,
    origin: "left",
  });

ScrollReveal().reveal(".section__subheader", {
    ...scrollRevealOption,
    interval: 1500,
    origin: "right",
  });

ScrollReveal().reveal(".explore__content", {
    ...scrollRevealOption,
    origin: "left",
  });

ScrollReveal().reveal(".box", {
    ...scrollRevealOption,
    origin: "left",
  });



const about_readMoreButton = document.querySelector('.btn_read_more');
const descriptionText = document.querySelector('.section__description');

about_readMoreButton.addEventListener('click', () => {
    descriptionText.classList.toggle('show-more');
    if (descriptionText.classList.contains('show-more')) {
        about_readMoreButton.textContent = 'Read Less';
    } else {
        about_readMoreButton.textContent = 'Read More';
    }
});
