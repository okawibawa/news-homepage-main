const hamburgerMenu = document.getElementById("hamburger-menu");
const navigationMobile = document.getElementById("navigation-mobile");
const navigationMobileOverlay = document.getElementById("navigation-mobile-overlay");
const closeMenu = document.getElementById("close-menu");

hamburgerMenu.addEventListener("click", () => {
  navigationMobile.classList.toggle("active");
  navigationMobileOverlay.classList.toggle("active");
});

closeMenu.addEventListener("click", () => {
  navigationMobile.classList.toggle("active");
  navigationMobileOverlay.classList.toggle("active");
});
