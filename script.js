const menuMobile = document.querySelector(".menu-mobile");
const menuList = document.querySelector(".menu-mobile-items");

function openMenu() {
  menuList.classList.toggle("active");
}
menuMobile.addEventListener("click", openMenu);
