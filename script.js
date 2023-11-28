'use strict';

/*
console.log(document.querySelector('.message').textContent);

let word = document.querySelector('.message').textContent;

document.querySelector(`.message`).textContent = `🎉 Correct Number `;

console.log(document.querySelector('.message').textContent);

document.querySelector(`.number`).textContent = `?`;
document.querySelector(`.score`).textContent = 20;

console.log((document.querySelector(`.guess`).value = 23));

*/
/*
let secreteNumber;
function generateSecreteNubmer() {
  secreteNumber = Math.trunc(Math.random() * 20) + 1;
}

generateSecreteNubmer();

const number = document.querySelector(`.number`);
console.log(secreteNumber);

const message = document.querySelector(`.message`);
const score = document.querySelector(`.score`);

let highscore = 0;

let isItCorrect = false;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess);

  if (!guess) {
    document.querySelector(`.message`).textContent = `⛔ No number`;
  } else if (guess === secreteNumber) {
    document.querySelector(`.message`).textContent = `🎉 Correct Number!`;

    if (Number(score.textContent) > highscore) {
      document.querySelector(
        `.label-highscore`
      ).textContent = `🥇 Highscore: ${score.textContent}`;

      highscore = Number(score.textContent);
    }
    isItCorrect = true;

    number.textContent = secreteNumber;

    console.log(Number(score.textContent) + Number(highscore.textContent));
  } else if (guess >= secreteNumber) {
    message.textContent = `🔽 The secrete number is smaller`;
  } else if (guess <= secreteNumber) {
    message.textContent = `🔼 The secrete number is higher`;
  }

  if (!isItCorrect) score.textContent = Number(score.textContent) - 1;
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  generateSecreteNubmer();
  document.querySelector(`.check`).textContent = ``;
  number.textContent = `?`;
  message.textContent = `Start Guessing...`;
  score.textContent = 20;
});
*/
let score = 20;

const secreteNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector(`.number`).textContent = secreteNumber;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  //well is no input
  if (!guess) {
    document.querySelector(`.message`).textContent = `⛔ No number!`;

    //when player wins
  } else if (guess === secreteNumber) {
    document.querySelector(`.message`).textContent = `🎉 Correct Number!`;
    document.querySelector(`.highscore`).textContent = score;

    document.querySelector(`.message`).textContent = `🎉 Correct Number!`;

    document.querySelector(`body`).style.backgroundColor = `#60b347`;

    document.querySelector(`.number`).style.width = `30rem`;

    //Guess is to high
  } else if (guess > secreteNumber) {
    if (score > 0) {
      document.querySelector(`.message`).textContent = `📈 Too High`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lose game`;
    }

    //Guess is to low
  } else if (guess < secreteNumber) {
    if (score > 0) {
      document.querySelector(`.message`).textContent = `📉 Too Low`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lose game`;
    }
  }
});
