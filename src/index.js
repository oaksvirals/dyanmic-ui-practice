import "./style.css";
import { dynamicDesktopNavigation } from "./desktop-navigation";
import { dynamicMobileNavigation } from "./mobile-navigation";

dynamicDesktopNavigation();
dynamicMobileNavigation();

// slider.js

const totalSlides = 5;
let slideNumber = 1;

function nextSlide() {
  const slide = document.querySelector(".slider-img");

  if (
    slideNumber !== totalSlides &&
    slide.classList.contains("slide-" + slideNumber)
  ) {
    slide.classList.remove("slide-" + slideNumber);
    slideNumber++;
    slide.classList.add("slide-" + slideNumber);
  } else {
    slide.classList.remove("slide-" + slideNumber);
    slideNumber = 1;
    slide.classList.add("slide-" + slideNumber);
  }
  activeDot();
}

setInterval(nextSlide, 5000);

function previousSlide() {
  const slide = document.querySelector(".slider-img");

  if (slideNumber === 1 && slide.classList.contains("slide-" + slideNumber)) {
    slide.classList.remove("slide-" + slideNumber);
    slideNumber = totalSlides;
    slide.classList.add("slide-" + slideNumber);
  } else {
    slide.classList.remove("slide-" + slideNumber);
    slideNumber--;
    slide.classList.add("slide-" + slideNumber);
  }
  activeDot();
}

const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");

nextButton.addEventListener("click", nextSlide);
previousButton.addEventListener("click", previousSlide);

const dots = document.querySelectorAll(".dots");

dots.forEach((dot) => {
  dot.addEventListener("click", selectDot);
});

// TODO: improve selectDot function

function selectDot() {
  const slide = document.querySelector(".slider-img");

  if (this.classList.contains("dot-active")) {
    console.log("not this one!");
  }

  slide.classList.remove("slide-1");
  slide.classList.remove("slide-2");
  slide.classList.remove("slide-3");
  slide.classList.remove("slide-4");
  slide.classList.remove("slide-5");

  if (this.classList.contains("dot-1")) {
    slideNumber = 1;
  } else if (this.classList.contains("dot-2")) {
    slideNumber = 2;
  } else if (this.classList.contains("dot-3")) {
    slideNumber = 3;
  } else if (this.classList.contains("dot-4")) {
    slideNumber = 4;
  } else if (this.classList.contains("dot-5")) {
    slideNumber = 5;
  }

  slide.classList.add("slide-" + slideNumber);

  activeDot();
}

function activeDot() {
  const activeDot = document.querySelector(".dot-" + slideNumber);

  dots.forEach((dot) => {
    if (dot.classList.contains("dot-active")) {
      dot.classList.remove("dot-active");
    }
  });

  activeDot.classList.add("dot-active");
}
