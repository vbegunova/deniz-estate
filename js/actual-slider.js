const actualSection = document.querySelector('.actual');
const actualSlideList = document.querySelector(".actual-list");
const actualSlides = document.querySelectorAll(".actual-list-item");
const actualPrevBtn = document.querySelector(".actual-slider-btn-ctrl:first-child");
const actualNextBtn = document.querySelector(".actual-slider-btn-ctrl:last-child");
let actualGap;
let actualClicksCount;

if (window.innerWidth < 768) {
  actualGap = 15;
  actualClicksCount = 4;
} else if (window.innerWidth >= 992 && window.innerWidth < 1200) {
  actualGap = 20;
  actualClicksCount = 2;
} else if (window.innerWidth >= 1200) {
  actualGap = 30;
  actualClicksCount = 2;
} else if (window.innerWidth >= 768 && window.innerWidth < 992) {
  actualGap = 24;
  actualClicksCount = 3;
}

const actualSlideWidth = actualSlides[0].offsetWidth;
let actualCurrentIndex = 0;
actualPrevBtn.disabled = true;

actualPrevBtn.addEventListener("click", () => {
  actualPrevSlide();
});

actualNextBtn.addEventListener("click", () => {
  actualNextSlide();
});

function actualNextSlide() {
  if (actualCurrentIndex < actualClicksCount) {
    actualCurrentIndex++;
    actualPrevBtn.disabled = false;
    actualSlideList.style.transition = "transform 0.4s ease-in-out";
    actualSlideList.style.transform = `translateX(-${
      actualCurrentIndex * actualSlideWidth + actualGap * actualCurrentIndex
    }px)`;
  }

  if (actualCurrentIndex === actualClicksCount) {
    actualNextBtn.disabled = true;
  }
}

function actualPrevSlide() {
  if (actualCurrentIndex > 0) {
    actualCurrentIndex--;
    actualNextBtn.disabled = false;
    actualSlideList.style.transition = "transform 0.4s ease-in-out";
    actualSlideList.style.transform = `translateX(-${
      actualCurrentIndex * actualSlideWidth + actualGap * actualCurrentIndex
    }px)`;
  }
  if (actualCurrentIndex === 0) {
    actualPrevBtn.disabled = true;
  }
}

actualSlideList.addEventListener("transitionend", () => {
  actualSlides.forEach((slide) => {
    slide.style.transition = "";
  });
});

actualSlideList.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

actualSlideList.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].clientX;
  if (touchEndX < touchStartX) {
    actualNextSlide();
  } else if (touchEndX > touchStartX) {
    actualPrevSlide();
  }
});

let actualIsDragging = false;
let actualStartX;
let actualEndX;

actualSection.addEventListener("mousedown", (e) => {
  actualIsDragging = true;
  actualStartX = e.clientX;
});

actualSection.addEventListener("mousemove", (e) => {
  if (actualIsDragging) {
    actualEndX = e.clientX;
  }
});

actualSection.addEventListener("mouseup", () => {
  if (actualIsDragging) {
    if (actualEndX < actualStartX) {
      actualNextSlide();
    } else if (actualEndX > actualStartX) {
      actualPrevSlide();
    }
    actualIsDragging = false;
  }
});
