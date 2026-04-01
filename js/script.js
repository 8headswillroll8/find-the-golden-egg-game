const title = document.querySelector(".game__title");
const description = document.querySelector(".game__description");
const easterEggs = document.querySelectorAll(".game__item");
const btn = document.querySelector(".btn");
const backgroundColor = document.querySelector("body");

const randomIndex = Math.floor(Math.random() * easterEggs.length);
const winningEgg = easterEggs[randomIndex];

const messages = [
  "Nope, try again!",
  "Not this one...",
  "Close, but not quite",
  "Keep trying",
  "You're getting closer",
  "Still no gold",
  "It's hiding somewhere here",
  "Well... it HAS to be this one.",
];

let messageIndex = 0;
let gameOver = false;

easterEggs.forEach(function (egg) {
  egg.addEventListener("click", function (event) {
    const clickedEgg = event.currentTarget;

    if (gameOver) {
      return;
    }

    if (clickedEgg.classList.contains("game__item--dim")) {
      return;
    }

    if (clickedEgg === winningEgg) {
      gameOver = true;
      title.textContent = "Golden egg found!";
      description.textContent = "Yeey, you win!";
      backgroundColor.classList.add("bg__color--winner");
      clickedEgg.src = "assets/golden-egg.svg";
      btn.classList.remove("is-hidden");

      easterEggs.forEach(function (egg) {
        if (egg !== winningEgg) {
          egg.classList.add("game__item--dim");
        }
      });
    } else {
      description.textContent = messages[messageIndex];
      clickedEgg.classList.add("game__item--dim");

      if (messageIndex < messages.length - 1) {
        messageIndex++;
      }
    }
  });
});

btn.addEventListener("click", function () {
  location.reload();
});
