const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-nav");
const primaryHeader = document.querySelector(".primary-header");
const navList = document.querySelector(".nav-list");

navToggle.addEventListener("click", () => {
  primaryHeader.toggleAttribute("data-overlay");
  primaryHeader.hasAttribute("data-overlay")
    ? navToggle.setAttribute("aria-expanded", true)
    : navToggle.setAttribute("aria-expanded", false);

  primaryHeader.hasAttribute("data-overlay")
    ? navList.classList.add("active")
    : navList.classList.remove("active");
});
