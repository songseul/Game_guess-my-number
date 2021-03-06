"use strict";
/*
document.querySelector(".message").textContent = "π Correct Number!";
console.log(document.querySelector(".message").textContent);
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/
//0λΆν° 20μ μ μκ° λλ€μΌλ‘ λ¦¬ν΄
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    //  document.querySelector(".message").textContent = "βοΈ No Number";
    displayMessage("βοΈ No Number");
    //when player wins
  } else if (guess === secretNumber) {
    //document.querySelector(".message").textContent = "π Correct Number!";
    displayMessage("π Correct Number!");
    //μν¬λ¦Ώ λλ²λ₯Ό μ λ΅μ λ§νμλ κ³΅κ° λλλ‘ νλ€
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "π Too high!" : "π Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("π₯ you lost the game");
      //document.querySelector(".message").textContent = "π₯ you lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
  // when guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "π Too high";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "π₯ you lost the game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  //   //when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "π Too low";
  //     score = score - 1;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "π₯ you lost the game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

// Coding Challenge #1 λ¦¬μλ²νΌ λ§λ€κΈ°

document.querySelector(".again").addEventListener("click", () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
