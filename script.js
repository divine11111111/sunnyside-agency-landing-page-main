const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const navMenu = document.querySelector(".nav-menu");


openMenu.addEventListener("click", () => {
   navMenu.classList.add("show");
   navMenu.style.transform = `translateX(-5rem)`;
   closeMenu.style.display = "inline-block";
   openMenu.style.display = "none ";
});

const closeNav = () => {
   navMenu.classList.remove("show")
   closeMenu.style.display = "none";
   openMenu.style.display = "inline-block";
};

closeMenu.addEventListener("click", closeNav);
