"use strict";

const dice = document.querySelector("#dice");
const text = document.querySelector("#advice-text");
const id = document.querySelector("#id-text");

const getAdvice = () => {
  fetch(`https://api.adviceslip.com/advice`)
    .then((advice) => advice.json())
    .then((data) => {
      console.log(data);
      text.textContent = `"${data.slip.advice}"`;
      id.textContent = `#${data.slip.id}`;
    });
};

dice.addEventListener("click", getAdvice);
