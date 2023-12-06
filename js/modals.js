const openCallModalBtn = document.querySelector(".header .order-call");
const closeCallModalBtn = document.querySelector(".order-call .cross-button");
const callModal = document.querySelector(".order-call.backdrop");

const openProcessModalBtn = document.querySelector(".process-button");
const openGuideDownloadModalBtn = document.querySelector(
  ".guide .catalog-button"
);
const openCatalogDownloadModalBtn = document.querySelector(
  ".catalog .catalog-button"
);
const openMobileMoreObjectsModalBtn = document.querySelector(
  ".mobile-more-objects-button"
);
const openMoreObjectsModalBtn = document.querySelector(".more-objects-button");
const openCatalogModalBtn = document.querySelector(".actual-button");
const closeCatalogModalBtn = document.querySelector(
  ".download-catalog .cross-button"
);
const catalogModal = document.querySelector(".download-catalog.backdrop");

const openConsultModalBtn = document.querySelector(".consult-button");
const closeConsultModalBtn = document.querySelector(".consult .cross-button");
const consultModal = document.querySelector(".consult.backdrop");

const openFirstVideoModalBtn = document.querySelector(".video-img.first");
const closeFirstVideoModalBtn = document.querySelector(
  ".video-first .cross-button"
);
const firstVideoModal = document.querySelector(".video-first.backdrop");

const openSecondVideoModalBtn = document.querySelector(".video-img.second");
const closeSecondVideoModalBtn = document.querySelector(
  ".video-second .cross-button"
);
const secondVideoModal = document.querySelector(".video-second.backdrop");

const openThirdVideoModalBtn = document.querySelector(".video-img.third");
const closeThirdVideoModalBtn = document.querySelector(
  ".video-third .cross-button"
);
const thirdVideoModal = document.querySelector(".video-third.backdrop");

const closeQuizModalBtn = document.querySelector(".quiz .cross-button");
const quizModal = document.querySelector(".quiz.backdrop");

openCallModalBtn.addEventListener("click", () => toggleModal(callModal));
closeCallModalBtn.addEventListener("click", () => toggleModal(callModal));

openProcessModalBtn.addEventListener("click", () => toggleModal(catalogModal));
openGuideDownloadModalBtn.addEventListener("click", () =>
  toggleModal(catalogModal)
);
openCatalogDownloadModalBtn.addEventListener("click", () =>
  toggleModal(catalogModal)
);
openMobileMoreObjectsModalBtn.addEventListener("click", () =>
  toggleModal(catalogModal)
);
openMoreObjectsModalBtn.addEventListener("click", () =>
  toggleModal(catalogModal)
);
openCatalogModalBtn.addEventListener("click", () => toggleModal(catalogModal));
closeCatalogModalBtn.addEventListener("click", () => toggleModal(catalogModal));

openConsultModalBtn.addEventListener("click", () => toggleModal(consultModal));
closeConsultModalBtn.addEventListener("click", () => toggleModal(consultModal));

closeQuizModalBtn.addEventListener("click", () => toggleModal(quizModal));

if (window.innerWidth >= 992) {
  openFirstVideoModalBtn.addEventListener("click", openFirstVideo);
  closeFirstVideoModalBtn.addEventListener("click", closeFirstVideo);

  openSecondVideoModalBtn.addEventListener("click", openSecondVideo);
  closeSecondVideoModalBtn.addEventListener("click", closeSecondVideo);

  openThirdVideoModalBtn.addEventListener("click", openThirdVideo);
  closeThirdVideoModalBtn.addEventListener("click", closeThirdVideo);
} else {
  openFirstVideoModalBtn.removeEventListener("click", openFirstVideo);
  closeFirstVideoModalBtn.removeEventListener("click", closeFirstVideo);

  openSecondVideoModalBtn.removeEventListener("click", openSecondVideo);
  closeSecondVideoModalBtn.removeEventListener("click", closeSecondVideo);

  openThirdVideoModalBtn.removeEventListener("click", openThirdVideo);
  closeThirdVideoModalBtn.removeEventListener("click", closeThirdVideo);
}

function toggleModal(modal) {
  modal.classList.toggle("is-hidden");
  document.body.style.overflow = modal.classList.contains("is-hidden")
    ? "auto"
    : "hidden";
}

function openFirstVideo() {
  toggleModal(firstVideoModal);
}

function closeFirstVideo() {
  toggleModal(firstVideoModal);
}

function openSecondVideo() {
  toggleModal(secondVideoModal);
}

function closeSecondVideo() {
  toggleModal(secondVideoModal);
}

function openThirdVideo() {
  toggleModal(thirdVideoModal);
}

function closeThirdVideo() {
  toggleModal(thirdVideoModal);
}