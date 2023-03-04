"use strict";

const ratings = document.querySelectorAll(".rating-background");

let selectedRating = null;

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    if (selectedRating) {
      selectedRating.classList.remove("clicked");
      rating.classList.add("clicked");
      selectedRating = rating;
      console.log(selectedRating);
    } else {
      rating.classList.add("clicked");
      selectedRating = rating;
    }
  });
});

const submitBtn = document.querySelector(".btn-submit");
const illustration = document.querySelector(".illustration-thank-you");

const ratingComponent = document.querySelector(".rating-component");
const thankYouComponent = document.querySelector(".thank-you-component");

console.log(submitBtn, illustration);

submitBtn.addEventListener("click", () => {
  if (selectedRating) {
    console.log(selectedRating);
    const spanElement = selectedRating.querySelector("span");
    const rating = spanElement.getAttribute("data-rating");

    ratingComponent.style.display = "none";

    const paragraph = document.querySelector(".user-select");

    paragraph.textContent = `You selected ${rating} out of 5`;

    thankYouComponent.style.display = "block";
    thankYouComponent.style.transition = "opacity 0.5s ease-in";
    setTimeout(() => {
      thankYouComponent.style.opacity = "1";
    }, 1);
  } else {
    alert("You didnt select a rating");
  }
});
