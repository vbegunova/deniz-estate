let allSteps = document.querySelectorAll(".qa-step");
let totalSteps = allSteps.length;
const quizPrevButton = document.querySelector(".quiz-ctrl-button.prev");
const quizNextButton = document.querySelector(".quiz-ctrl-button.next");
const currentPage = document.querySelector(".current-quiz-page");

let questionCurrentIndex = 0;

quizPrevButton.addEventListener("click", () => {
  if (questionCurrentIndex > 0) {
    allSteps[questionCurrentIndex].classList.remove("active");
    questionCurrentIndex--;
    allSteps[questionCurrentIndex].classList.add("active");

    currentPage.innerHTML = `0${questionCurrentIndex + 1}`;
  }
});

quizNextButton.addEventListener("click", () => {
  let radios = document.querySelectorAll(".qa-step.active .quiz-radio-button");
  let isChecked = Array.from(radios).some((radio) => radio.checked);

  if (isChecked) {
    document.querySelector(".qa-step.active .quiz-error").style.display =
      "none";

    if (questionCurrentIndex === totalSteps - 1) {
      toggleModal(quizModal);
    } else {
      allSteps[questionCurrentIndex].classList.remove("active");
      questionCurrentIndex++;
      allSteps[questionCurrentIndex].classList.add("active");

      currentPage.innerHTML = `0${questionCurrentIndex + 1}`;
    }
  } else {
    document.querySelector(".qa-step.active .quiz-error").style.display =
      "block";
  }
});