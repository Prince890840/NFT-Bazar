const nav = document.querySelector("nav");
const mobileNav = document.querySelector("nav.mobile-nav");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-menu-container .close-icon");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");

const navMenu = document.querySelector(".navigation-menu");
const menuItems = navMenu.querySelectorAll("ul li");

const menuList = navMenu.querySelector('ul');

menuItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    navMenu.querySelector('.active').classList.remove('active');
    item.classList.add('active');
  });
});

menuList.addEventListener('mouseleave', () => {
  navMenu.querySelector('.active').classList.remove('active');
  menuItems[0].classList.add('active');
});


window.addEventListener("scroll", () => {
  if (window.pageYOffset > 60) {
    nav.classList.add("scrolled");
    mobileNav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
    mobileNav.classList.remove("scrolled");
  }
});

menuIcon.addEventListener("click", () => {
  mobileMenuContainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  mobileMenuContainer.classList.remove("active");
});
