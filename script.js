"use struct";
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const diceImg = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
let currentScore, scores, activePlayer, playing;
const intt = () => {
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
  currentScore = 0;
  scores = [0, 0];
  score0.textContent = 0;
  score1.textContent = 0;
  playing = true;
  document.querySelector(`.player--0`).classList.remove("player--winner");
  document.querySelector(`.player--1`).classList.remove("player--winner");
  activePlayer = 0;
  document;
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
  diceImg.classList.add("hidden");
};
intt();
function switchActivePlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
}
const rollingBtnFun = () => {
  if (playing) {
    const diceRolled = Math.trunc(Math.random() * 6) + 1;

    diceImg.classList.remove("hidden");
    diceImg.src = `dice-${diceRolled}.png`;
    if (diceRolled !== 1) {
      currentScore += diceRolled;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchActivePlayer();
    }
  } else {
    alert("the game is end !!");
  }
};
const holdBtnFun = () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      diceImg.classList.add("hidden");
    } else {
      switchActivePlayer();
    }
  } else {
    alert("the game is end !!");
  }
};

btnRoll.addEventListener("click", rollingBtnFun);

btnHold.addEventListener("click", holdBtnFun);
btnHold.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    holdBtnFun();
  }
});

btnNew.addEventListener("click", intt);
document.addEventListener("keydown", (event) => {
  if (event.key === "escape") {
    resetBtnFun();
  } else if (event.key === "space") {
    rollingBtnFun();
  } else if (event.key === "Enter") {
    holdBtnFun();
  }
});
