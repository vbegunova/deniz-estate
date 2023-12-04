if (window.innerWidth <= 767) {
    const slides = document.querySelectorAll(".actual-list-item");
  
    const slidesCount = slides.length;
  
    let visibleSlides = 3;
    let currentSlideIndex = 0;
  
    function showSlides() {
      slides.forEach((slide, index) => {
        if (
          index >= currentSlideIndex &&
          index < currentSlideIndex + visibleSlides
        ) {
          slide.style.display = "block";
        } else {
          slide.style.display = "none";
        }
      });
    }
  
    document
      .querySelector(".actual-slider-btn-ctrl:first-child")
      .addEventListener("click", () => {
        if (currentSlideIndex > 0) {
          currentSlideIndex--;
        } else {
          currentSlideIndex = slidesCount - visibleSlides;
        }
        showSlides();
      });
  
    document
      .querySelector(".actual-slider-btn-ctrl:last-child")
      .addEventListener("click", () => {
        if (currentSlideIndex < slidesCount - visibleSlides) {
          currentSlideIndex++;
        } else {
          currentSlideIndex = 0;
        }
        showSlides();
      });
  
    showSlides();
  }
  
  if (window.innerWidth > 767) {
    const slideList = document.querySelector(".actual-list");
    const slides = document.querySelectorAll(".actual-list-item");
    const prevBtn = document.querySelector(".actual-slider-btn-ctrl:first-child");
    const nextBtn = document.querySelector(".actual-slider-btn-ctrl:last-child");
    let gap;
    let clicksCount;
  
    if (window.innerWidth >= 992 && window.innerWidth < 1200) {
      gap = 20;
      clicksCount = 2;
    } else if (window.innerWidth >= 1200) {
      gap = 30;
      clicksCount = 2;
    } else if (window.innerWidth < 992) {
      gap = 24;
      clicksCount = 3;
    }
  
    const slideWidth = slides[0].offsetWidth;
    let currentIndex = 0;
    prevBtn.disabled = true;
  
    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        nextBtn.disabled = false;
        slideList.style.transition = "transform 0.4s ease-in-out";
        slideList.style.transform = `translateX(-${
          currentIndex * slideWidth + gap * currentIndex
        }px)`;
      }
      if (currentIndex === 0) {
        prevBtn.disabled = true;
      }
    });
  
    nextBtn.addEventListener("click", () => {
      console.log(clicksCount);
      if (currentIndex < clicksCount) {
        currentIndex++;
        prevBtn.disabled = false;
        slideList.style.transition = "transform 0.4s ease-in-out";
        slideList.style.transform = `translateX(-${
          currentIndex * slideWidth + gap * currentIndex
        }px)`;
      }
  
      if (currentIndex === clicksCount) {
        nextBtn.disabled = true;
      }
    });
  
    slideList.addEventListener("transitionend", () => {
      slides.forEach((slide) => {
        slide.style.transition = "";
      });
    });
  }
  