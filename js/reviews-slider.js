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

revPrevBtn.disabled = true;

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
  revPrevBtn.disabled = false;
  revNextBtn.disabled = false;
  if (index === 0) {
    revPrevBtn.disabled = true;
  } else if (
    index === reviewsSlides.length - 1 ||
    (window.innerWidth >= 992 && index === 5)
  ) {
    revNextBtn.disabled = true;
  }
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
  if (reviewCurrentIndex > 0) {
    reviewCurrentIndex--;
    setActiveDot(reviewCurrentIndex);
    revNextBtn.disabled = false;
    showSlide(reviewCurrentIndex);
  }

  if (reviewCurrentIndex === 0) {
    revPrevBtn.disabled = true;
  }
});

revNextBtn.addEventListener("click", () => {
  if (reviewCurrentIndex < revClickCount) {
    reviewCurrentIndex++;
    setActiveDot(reviewCurrentIndex);
    revPrevBtn.disabled = false;
    showSlide(reviewCurrentIndex);
  }

  if (reviewCurrentIndex === revClickCount) {
    revNextBtn.disabled = true;
  }
});

reviewsSlideList.addEventListener("transitionend", () => {
  reviewsSlides.forEach((slide) => {
    slide.style.transition = "";
  });
});
