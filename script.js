'use strict';

// Select elements score
const player0EL = document.querySelector(`.player--0`);
const player1EL = document.querySelector(`.player--1`);

const score0El = document.querySelector(`#score--0`);
const score1El = document.getElementById(`score--1`);
const current0El = document.getElementById(`current--0`);
const current1El = document.getElementById(`current--1`);

const diceEl = document.querySelector(`.dice`);
//btn
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

//const bgActivePlayer = document

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add(`hidden`);

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//Rolling dice func
btnRoll.addEventListener(`click`, function () {
  if (playing) {
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
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      console.log(currentScore);
    } else {
      //switch
      switchPlayer();
      // currentScore = 0;
      // document.getElementById(`current--${activePlayer}`).textContent =
      //   currentScore;

      // // document
      // //   .querySelector(`.player--${activePlayer}`)
      // //   .classList.remove(`player--active`);

      // activePlayer = activePlayer === 0 ? 1 : 0;

      // player0EL.classList.toggle(`player--active`);
      // player1EL.classList.toggle(`player--active`);

      // // document
      // //   .querySelector(`.player--${activePlayer}`)
      // //   .classList.add(`player--active`);
    }
  }
});

btnHold.addEventListener(`click`, function () {
  if (playing) {
    // 1.Add current score to the score of active players score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. check is it above 100;
    //3.1 if yes finish game
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);

      diceEl.classList.add(`hidden`);
    } else {
      switchPlayer();
    }
    //3.2 if no, switch to next player
  }
});

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;

  activePlayer = activePlayer === 0 ? 1 : 0;

  player0EL.classList.toggle(`player--active`);
  player1EL.classList.toggle(`player--active`);
};

btnNew.addEventListener(`click`, function () {
  // 1. total score
  scores[0] = 0;
  scores[1] = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;

  // 2. current score

  currentScore = 0;

  current0El.textContent = 0;
  current1El.textContent = 0;

  // 3. active player 1 i backgroudn active player 1
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove(`player--winner`);

  player0EL.classList.add(`player--active`);
  player1EL.classList.remove(`player--active`);

  activePlayer = 0;

  // 5. playing
  playing = true;
});
