import menuCloseImage from "./assets/menu-close.png";
import menuBurgerImage from "./assets/menu-burger.png";
export { dynamicMobileNavigation };

function dynamicMobileNavigation() {
  const menuIcon = document.querySelector(".menu-icon");
  const mobileDropdown = document.querySelectorAll(
    ".mobile-nav .nav-item:not(:nth-child(1)):not(:nth-child(2))",
  );

  function toggleMobileMenu() {
    if (menuIcon.classList.contains("menu-burger")) {
      menuIcon.style.backgroundImage = `url(${menuCloseImage})`;
      menuIcon.classList.remove("menu-burger");
      menuIcon.classList.add("menu-close");
      mobileDropdown.forEach((dropdown) => {
        dropdown.classList.remove("hide");
      });
    } else {
      menuIcon.style.backgroundImage = `url(${menuBurgerImage})`;
      menuIcon.classList.remove("menu-close");
      menuIcon.classList.add("menu-burger");
      mobileDropdown.forEach((dropdown) => {
        dropdown.classList.add("hide");
      });
    }
  }

  menuIcon.addEventListener("click", toggleMobileMenu);
}
