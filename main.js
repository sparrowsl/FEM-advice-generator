"use strict";
const changeAdviceBtn = document.querySelector("button.quote-toggle");
let currentAdvice = document.querySelector("div.advice-quote span");
let adviceID = document.querySelector(".advice-id");
const adviceURL = "https://api.adviceslip.com/advice";

changeAdviceBtn.addEventListener("click", () => {
  fetch(adviceURL)
    .then(response => response.json())
    .then(data => {
      currentAdvice.textContent = `${data.slip.advice}`;
      adviceID.textContent = `${data.slip.id}`;
    })
    .catch(err => console.error(err));
});
