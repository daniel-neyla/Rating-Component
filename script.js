"use strict";

const ratings = document.querySelectorAll(".rating-background");

let activeRating = null;

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    if (activeRating) {
      activeRating.classList.remove("clicked");
      rating.classList.add("clicked");
      activeRating = rating;
      console.log(activeRating);
    } else {
      rating.classList.add("clicked");
      activeRating = rating;
    }
  });
});

// const arr = [1, 3, 5];
// const containsEvenNumber = arr.some((num) => {
//   return num % 2 === 0;
// });

// console.log(containsEvenNumber);
