const massMediaSection = document.querySelector(".mass-media");
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

const firstVideoFrameset = document.querySelector(".video-first .video-frame");
firstVideoFrameset.dataset.src = firstVideoFrameset.src;
const secondVideoFrameset = document.querySelector(
  ".video-second .video-frame"
);
secondVideoFrameset.dataset.src = secondVideoFrameset.src;
const thirdVideoFrameset = document.querySelector(".video-third .video-frame");
thirdVideoFrameset.dataset.src = thirdVideoFrameset.src;
const scrSet = [
  firstVideoFrameset.dataset.src,
  secondVideoFrameset.dataset.src,
  thirdVideoFrameset.dataset.src,
];

function massPrevSlide() {
  if (videoCurrentIndex > 0) {
    const currentVideoFrame =
      slidesMassMedia[videoCurrentIndex].querySelector(".video-frame");
    currentVideoFrame.src = "";
    videoCurrentIndex--;
    nextBtn.disabled = false;
    slideList.style.transition = "transform 0.4s ease-in-out";
    slideList.style.transform = `translateX(-${
      videoCurrentIndex * slideWidth + gap * videoCurrentIndex
    }px)`;

    slidesMassMedia[videoCurrentIndex].querySelector(".video-frame").src =
      scrSet[videoCurrentIndex];
  }
  if (videoCurrentIndex === 0) {
    prevBtn.disabled = true;
  }
}

function masNextSlide() {
  if (videoCurrentIndex < clicksCount) {
    const currentVideoFrame =
      slidesMassMedia[videoCurrentIndex].querySelector(".video-frame");
    currentVideoFrame.src = "";
    videoCurrentIndex++;
    prevBtn.disabled = false;
    slideList.style.transition = "transform 0.4s ease-in-out";
    slideList.style.transform = `translateX(-${
      videoCurrentIndex * slideWidth + gap * videoCurrentIndex
    }px)`;
    slidesMassMedia[videoCurrentIndex].querySelector(".video-frame").src =
      scrSet[videoCurrentIndex];
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
