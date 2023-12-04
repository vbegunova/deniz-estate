const argumentsSlideList = document.querySelector(".arguments-slider");
const argumentsSlides = document.querySelectorAll(".arguments-slider-box");
const argPrevBtn = document.querySelector(
  ".arguments-slider-btn-ctrl:first-child"
);
const argNextBtn = document.querySelector(
  ".arguments-slider-btn-ctrl:last-child"
);

const argCurrentPage = document.querySelector('.current-arg-page');

let argClickCount = 7;
let argGap = 12;

const argSlideWidht = argumentsSlides[0].offsetWidth;
let argumentCurrentIndex = 0;
argPrevBtn.disabled = true;

argPrevBtn.addEventListener("click", () => {
  if (argumentCurrentIndex > 0) {
    argumentCurrentIndex--;
    argCurrentPage.innerHTML = `0${argumentCurrentIndex + 1}`
    argNextBtn.disabled = false;
    argumentsSlideList.style.transition = "transform 0.4s ease-in-out";
    argumentsSlideList.style.transform = `translateX(-${
      argumentCurrentIndex * argSlideWidht + argGap * argumentCurrentIndex
    }px)`;
  }

  if (argumentCurrentIndex === 0) {
    argPrevBtn.disabled = true;
  }
});

argNextBtn.addEventListener("click", () => {
  if (argumentCurrentIndex < argClickCount) {
    argumentCurrentIndex++;
    argCurrentPage.innerHTML = `0${argumentCurrentIndex + 1}`
    argPrevBtn.disabled = false;
    argumentsSlideList.style.transition = "transform 0.4s ease-in-out";
    argumentsSlideList.style.transform = `translateX(-${
      argumentCurrentIndex * argSlideWidht + argGap * argumentCurrentIndex
    }px)`;
  }

  if (argumentCurrentIndex === argClickCount) {
    argNextBtn.disabled = true;
  }
});

argumentsSlideList.addEventListener("transitionend", () => {
  argumentsSlides.forEach((slide) => {
    slide.style.transition = "";
  });
});
