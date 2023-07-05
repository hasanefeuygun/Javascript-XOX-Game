const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");
const box7 = document.querySelector(".box7");
const box8 = document.querySelector(".box8");
const box9 = document.querySelector(".box9");

const allBoxes = document.querySelectorAll(".box");

const gameOverScreen = document.querySelector(".gameOverScreen");
const gameWinnerSymbol = document.querySelector(".winner-player");
const playAgainBtn = document.querySelector(".playAgainBtn");
const gameOverLetter = document.querySelector(".gameOverLetter");

const symbol1 = document.createElement("img");
const symbol3 = document.createElement("img");
const symbol5 = document.createElement("img");
const symbol7 = document.createElement("img");
const symbol9 = document.createElement("img");

const symbol2 = document.createElement("img");
const symbol4 = document.createElement("img");
const symbol6 = document.createElement("img");
const symbol8 = document.createElement("img");
const symbol10 = document.createElement("img");

symbol1.className = "o";
symbol2.className = "x";
symbol3.className = "o";
symbol4.className = "x";
symbol5.className = "o";
symbol6.className = "x";
symbol7.className = "o";
symbol8.className = "x";
symbol9.className = "o";
symbol10.className = "draw";

symbol1.src = "/images/circle-png1.webp";
symbol2.src = "/images/Red_X.svg.png";
symbol3.src = "/images/circle-png1.webp";
symbol4.src = "/images/Red_X.svg.png";
symbol5.src = "/images/circle-png1.webp";
symbol6.src = "/images/Red_X.svg.png";
symbol7.src = "/images/circle-png1.webp";
symbol8.src = "/images/Red_X.svg.png";
symbol9.src = "/images/circle-png1.webp";

function whichSymbol(box) {
  if (box.querySelector(".o")) {
    console.log("this is O symbol");
  } else if (box.querySelector(".x")) {
    console.log("this is X symbol");
  } else {
    console.log("this is just empty");
  }
}

function controlSymbol(box) {
  let state = "empty";
  if (box.querySelector(".o")) {
    state = "O";
  } else if (box.querySelector(".x")) {
    state = "X";
  }
  return state;
}

let counter = 1;
let isGameOver = "no";

allBoxes.forEach(function (box) {
  box.addEventListener("click", function (e) {
    currentSymbol = eval("symbol" + counter);
    box.append(currentSymbol);
    counter += 1;

    if (isGameOver == "no") {
      //Controlling Player O situation

      //Controlling horizontal
      if (
        controlSymbol(box1) == "O" &&
        controlSymbol(box2) == "O" &&
        controlSymbol(box3) == "O"
      ) {
        isGameOver = "yes";
      } else if (
        controlSymbol(box4) == "O" &&
        controlSymbol(box5) == "O" &&
        controlSymbol(box6) == "O"
      ) {
        isGameOver = "yes";
      } else if (
        controlSymbol(box7) == "O" &&
        controlSymbol(box8) == "O" &&
        controlSymbol(box9) == "O"
      ) {
        isGameOver = "yes";
      }
      // Controlling across
      else if (
        controlSymbol(box1) == "O" &&
        controlSymbol(box5) == "O" &&
        controlSymbol(box9) == "O"
      ) {
        isGameOver = "yes";
      } else if (
        controlSymbol(box3) == "O" &&
        controlSymbol(box5) == "O" &&
        controlSymbol(box7) == "O"
      ) {
        isGameOver = "yes";
      }
      // Controlling vertical
      else if (
        controlSymbol(box1) == "O" &&
        controlSymbol(box4) == "O" &&
        controlSymbol(box7) == "O"
      ) {
        isGameOver = "yes";
      } else if (
        controlSymbol(box2) == "O" &&
        controlSymbol(box5) == "O" &&
        controlSymbol(box8) == "O"
      ) {
        isGameOver = "yes";
      } else if (
        controlSymbol(box3) == "O" &&
        controlSymbol(box6) == "O" &&
        controlSymbol(box9) == "O"
      ) {
        isGameOver = "yes";
      }

      // Controlling Player X situation

      // Controlling Horizontal
      if (
        controlSymbol(box1) == "X" &&
        controlSymbol(box2) == "X" &&
        controlSymbol(box3) == "X"
      ) {
        isGameOver = "yes";
      } else if (
        controlSymbol(box4) == "X" &&
        controlSymbol(box5) == "X" &&
        controlSymbol(box6) == "X"
      ) {
        isGameOver = "yes";
      } else if (
        controlSymbol(box7) == "X" &&
        controlSymbol(box8) == "X" &&
        controlSymbol(box9) == "X"
      ) {
        isGameOver = "yes";
      }

      // Controlling across
      else if (
        controlSymbol(box1) == "X" &&
        controlSymbol(box5) == "X" &&
        controlSymbol(box9) == "X"
      ) {
        isGameOver = "yes";
      } else if (
        controlSymbol(box3) == "X" &&
        controlSymbol(box5) == "X" &&
        controlSymbol(box7) == "X"
      ) {
        isGameOver = "yes";
      }

      // Controlling Vertical
      else if (
        controlSymbol(box1) == "X" &&
        controlSymbol(box4) == "X" &&
        controlSymbol(box7) == "X"
      ) {
        isGameOver = "yes";
      } else if (
        controlSymbol(box2) == "X" &&
        controlSymbol(box5) == "X" &&
        controlSymbol(box8) == "X"
      ) {
        isGameOver = "yes";
      } else if (
        controlSymbol(box3) == "X" &&
        controlSymbol(box6) == "X" &&
        controlSymbol(box9) == "X"
      ) {
        isGameOver = "yes";
      }
    }
    if (isGameOver == "yes") {
      if (e.target.querySelector("img").className == "x") {
        gameWinnerSymbol.src = "/images/Red_X.svg.png";
        gameOverScreen.style.display = "flex";
      } else if (e.target.querySelector("img").className == "o") {
        gameWinnerSymbol.src = "/images/circle-png1.webp";
        gameOverScreen.style.display = "flex";
      }
    }
    if (counter == 10 && isGameOver == "no") {
      gameOverLetter.innerHTML = "Draw!";
      gameOverScreen.style.display = "flex";
    }
  });
});

playAgainBtn.addEventListener("click", function () {
  location.reload();
});
