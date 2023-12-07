const reviewsSection = document.querySelector('.reviews');
const reviewsSlideList = document.querySelector(".reviews-list");
const reviewsSlides = document.querySelectorAll(".review-item");
const revPrevBtn = document.querySelector(
  ".reviews-slider-btn-ctrl:first-child"
);
const revNextBtn = document.querySelector(
  ".reviews-slider-btn-ctrl:last-child"
);
const dotsContainer = document.querySelector(".slider-dots");

let revClickCount = 7;
let revGap = 10;

if (window.innerWidth >= 992) {
  revClickCount = 5;
}

const revSlideWidht = reviewsSlides[0].offsetWidth;
let reviewCurrentIndex = 0;

let touchStartX = 0;
let touchEndX = 0;

reviewsSlides.forEach((slide, index) => {
  if (window.innerWidth >= 992 && index > 5) {
    return;
  }
  const dot = document.createElement("span");
  dot.classList.add("dot");
  setActiveDot(reviewCurrentIndex);
  dot.addEventListener("click", () => {
    reviewCurrentIndex = index;
    setActiveDot(reviewCurrentIndex);
    showSlide(reviewCurrentIndex);
  });
  dotsContainer.appendChild(dot);
});

function setActiveDot(index) {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function showSlide(index) {
  reviewsSlideList.style.transition = "transform 0.4s ease-in-out";
  reviewsSlideList.style.transform = `translateX(-${
    index * revSlideWidht + revGap * index
  }px)`;
}

revPrevBtn.addEventListener("click", () => {
  prevSlide();
});

revNextBtn.addEventListener("click", () => {
  nextSlide();
});

function nextSlide() {
  if (reviewCurrentIndex < revClickCount) {
    reviewCurrentIndex++;
    setActiveDot(reviewCurrentIndex);
    showSlide(reviewCurrentIndex);
  } else if (reviewCurrentIndex === revClickCount) {
    reviewCurrentIndex = 0;
    setActiveDot(reviewCurrentIndex);
    showSlide(reviewCurrentIndex);
  }
}

function prevSlide() {
  if (reviewCurrentIndex > 0) {
    reviewCurrentIndex--;
    setActiveDot(reviewCurrentIndex);
    showSlide(reviewCurrentIndex);
  } else if (reviewCurrentIndex === 0) {
    reviewCurrentIndex = revClickCount;
    setActiveDot(reviewCurrentIndex);
    showSlide(reviewCurrentIndex);
  }
}


reviewsSlideList.addEventListener("transitionend", () => {
  reviewsSlides.forEach((slide) => {
    slide.style.transition = "";
  });
});

reviewsSlideList.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

reviewsSlideList.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].clientX;
  if (touchEndX < touchStartX) {
    nextSlide();
  } else if (touchEndX > touchStartX) {
    prevSlide();
  }
});

let reviewsIsDragging = false;
let reviewsStartX;
let reviewsEndX;

reviewsSection.addEventListener("mousedown", (e) => {
  reviewsIsDragging = true;
  reviewsStartX = e.clientX;
});

reviewsSection.addEventListener("mousemove", (e) => {
  if (reviewsIsDragging) {
    reviewsEndX = e.clientX;
  }
});

reviewsSection.addEventListener("mouseup", () => {
  if (reviewsIsDragging) {
    if (reviewsEndX < reviewsStartX) {
      nextSlide();
    } else if (reviewsEndX > reviewsStartX) {
      prevSlide();
    }
    reviewsIsDragging = false;
  }
});