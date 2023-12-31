'use strict';

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModel = document.querySelector(`.close-modal`);
const btnsOpenModel = document.querySelectorAll(`.show-modal`);
console.log(btnsOpenModel);

const openModel = function () {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};

for (let i = 0; i < btnsOpenModel.length; i++) {
  btnsOpenModel[i].addEventListener(`click`, openModel);
}

const resetBackOverlays = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

btnCloseModel.addEventListener(`click`, resetBackOverlays);

overlay.addEventListener(`click`, resetBackOverlays);

document.addEventListener(`keydown`, function (e) {
  console.log(e);
  if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
    resetBackOverlays();
    console.log(`bravo`);
  }
});
