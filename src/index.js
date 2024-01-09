import "./style.css";

(function dynamicNavigation() {
  const navList = document.querySelectorAll(".nav-item");

  const navArray = [];
  const noDropdownIDs = ["home", "faq"];

  navList.forEach((nav) => {
    nav.addEventListener("mouseenter", showDropdown);
    nav.addEventListener("mouseleave", hideDropdown);

    if (noDropdownIDs.indexOf(nav.id) < 0) {
      navArray.push(nav.id);
    }

    function showDropdown() {
      let location = null;
      if (navArray.indexOf(nav.id) >= 0) {
        location = navArray.indexOf(nav.id);

        const dropdown = document.querySelector(
          "." + navArray[location] + "-drop",
        );

        dropdown.classList.add("reveal");
      }
    }

    function hideDropdown() {
      let location = null;
      if (navArray.indexOf(nav.id) >= 0) {
        location = navArray.indexOf(nav.id);

        const dropdown = document.querySelector(
          "." + navArray[location] + "-drop",
        );

        dropdown.classList.remove("reveal");
      }
    }
  });
})();
