const slides = [
  {
    label: "Новий комплекс на Коста-Бланці, Іспанія",
    title: "Вілла 3 спальні 115 м² в Коста Бланке, Іспанія",
    description: "Житловий комплекс з двоквартирних та окремих вілл",
    price: "399 950",
    image: "./images/actual/actual-costa-blanca.jpg",
  },
  {
    label: "Новый комплекс в Calpe, Испания",
    title: "Апартаменты 45 м² в Calpe, Испания",
    description:
      "Впечатляющий частный жилой комплекс, расположенный всего в 100 метрах от пляжа",
    price: "325 000",
    image: "./images/actual/actual-calpe.jpg",
  },
  {
    label: "Новий комплекс в Playa Flamenca, Іспанія",
    title: "Апартаменти 76 м² в Playa Flamenca, Іспанія",
    description: "Приватний житловий комплекс",
    price: "339 000",
    image: "./images/actual/actual-playa-flamenca.jpg",
  },
  {
    label: "Новий комплекс у Сан-Мігель-де-Салінас, Іспанія",
    title: "Апартаменти, 68 м² у Сан-Мігель-де-Салінас, Іспанія",
    description: "Сучасний житловий комплекс",
    price: "154 900",
    image: "./images/actual/actual-san-miguel-de-salinas.jpg",
  },
  {
    label: "Новий комплекс у Campoamor, Іспанія",
    title: "Апартаменти, 65 м² у Campoamor, Іспанія",
    description: "Приватний житловий комплекс",
    price: "216 000",
    image: "./images/actual/actual-campoamor.jpg",
  },
];

const objectLabel = document.querySelector(".objects-label");
const objectTitle = document.querySelector(".object-title");
const objectDescription = document.querySelector(".object-description");
const objectPrice = document.querySelector(".object-price");
const objectImg = document.querySelector(".img-obj");
const objectSliderPrev = document.querySelector(
  ".object-slider-btn-ctrl:first-child"
);
const objectSliderNext = document.querySelector(
  ".object-slider-btn-ctrl:last-child"
);
const mobileObjectSliderPrev = document.querySelector(
  ".mobile-object-slider-btn-ctrl:first-child"
);
const mobileObjectSliderNext = document.querySelector(
  ".mobile-object-slider-btn-ctrl:last-child"
);
const currentObj = document.querySelector(".current-obj-page");
const mobileCurrentObj = document.querySelector(".current-mobile-obj-page");

let currentIndex = 0;
const totalSlides = slides.length;
mobileObjectSliderPrev.disabled = true;
objectSliderPrev.disabled = true;

function updateSlide(index) {
  const currentSlide = slides[index];
  objectLabel.textContent = currentSlide.label;
  objectTitle.textContent = currentSlide.title;
  objectDescription.textContent = currentSlide.description;
  objectPrice.textContent = `${currentSlide.price} €`;
  objectImg.src = currentSlide.image;
  currentObj.textContent = `0${index + 1}`;
  mobileCurrentObj.textContent = `0${index + 1}`;
}

function slideButtonClick(direction) {
  if (direction === "next") {
    currentIndex++;
    objectSliderNext.disabled = false;
    mobileObjectSliderNext.disabled = false;
    if (currentIndex === totalSlides - 1) {
      objectSliderNext.disabled = true;
      mobileObjectSliderNext.disabled = true;
    }
  } else {
    currentIndex--;
    mobileObjectSliderPrev.disabled = false;
    objectSliderPrev.disabled = false;
    if (currentIndex === 0) {
      mobileObjectSliderPrev.disabled = true;
      objectSliderPrev.disabled = true;
    }
  }

  objectSliderNext.disabled = currentIndex === totalSlides - 1;
  mobileObjectSliderNext.disabled = currentIndex === totalSlides - 1;
  objectSliderPrev.disabled = currentIndex === 0;
  mobileObjectSliderPrev.disabled = currentIndex === 0;

  updateSlide(currentIndex);
}

objectSliderPrev.addEventListener("click", () => {
  slideButtonClick("prev");
});

objectSliderNext.addEventListener("click", () => {
  slideButtonClick("next");
});

mobileObjectSliderPrev.addEventListener("click", () => {
  slideButtonClick("prev");
});

mobileObjectSliderNext.addEventListener("click", () => {
  slideButtonClick("next");
});

updateSlide(currentIndex);
