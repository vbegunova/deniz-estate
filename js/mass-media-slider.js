const massMediaSection = document.querySelector('.mass-media');
const slideList = document.querySelector(".mass-media-list");
const slidesMassMedia = document.querySelectorAll(".mass-media-item");
const prevBtn = document.querySelector(
  ".mass-media-slider-btn-ctrl:first-child"
);
const nextBtn = document.querySelector(
  ".mass-media-slider-btn-ctrl:last-child"
);
let clicksCount = 2;
let gap = 12;

const slideWidth = slidesMassMedia[0].offsetWidth;
let videoCurrentIndex = 0;
prevBtn.disabled = true;

prevBtn.addEventListener("click", () => {
  massPrevSlide();
});

nextBtn.addEventListener("click", () => {
  masNextSlide();
});

function massPrevSlide() {
  if (videoCurrentIndex > 0) {
    videoCurrentIndex--;
    nextBtn.disabled = false;
    slideList.style.transition = "transform 0.4s ease-in-out";
    slideList.style.transform = `translateX(-${
      videoCurrentIndex * slideWidth + gap * videoCurrentIndex
    }px)`;
  }
  if (videoCurrentIndex === 0) {
    prevBtn.disabled = true;
  }
}

function masNextSlide() {
  if (videoCurrentIndex < clicksCount) {
    videoCurrentIndex++;
    prevBtn.disabled = false;
    slideList.style.transition = "transform 0.4s ease-in-out";
    slideList.style.transform = `translateX(-${
      videoCurrentIndex * slideWidth + gap * videoCurrentIndex
    }px)`;
  }

  if (videoCurrentIndex === clicksCount) {
    nextBtn.disabled = true;
  }
}

slideList.addEventListener("transitionend", () => {
  slidesMassMedia.forEach((slide) => {
    slide.style.transition = "";
  });
});

massMediaSection.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

massMediaSection.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].clientX;
  if (touchEndX < touchStartX) {
    masNextSlide();
  } else if (touchEndX > touchStartX) {
    massPrevSlide();
  }
});
