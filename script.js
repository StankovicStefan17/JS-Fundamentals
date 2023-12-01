'use strict';

// Select elements score
const score0El = document.querySelector(`#score--0`);
const score1El = document.getElementById(`score--1`);
const current0El = document.getElementById(`current--0`);
const current1El = document.getElementById(`current--1`);

const diceEl = document.querySelector(`.dice`);
//btn
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add(`hidden`);

let currentScore = 0;

//Rolling dice func
btnRoll.addEventListener(`click`, function () {
  //1. Generate random dice rool
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2. Dispaly Roll
  diceEl.classList.remove(`hidden`);
  diceEl.src = `dice-${dice}.png`;
  console.log(dice);
  //3. Check for rolled dice is it 1
  if (dice !== 1) {
    //add dice to current score
    currentScore += dice;
    current0El.textContent = currentScore; //change later
    console.log(currentScore);
  } else {
    //switch
    currentScore = 0;
    current0El.textContent = currentScore;
  }
});
