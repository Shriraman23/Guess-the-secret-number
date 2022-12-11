'use strict';

// ----------------------------------------------------------------------------------------------------------------------------------------
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);

  // When there is no input

  if (score > 1) {
    if (!guessNumber) {
      document.querySelector('.message').textContent = '⛔ Enter a Number!';
    } else if (guessNumber === secretNumber) {
      // Player Wins
      document.querySelector('.message').textContent = '🥳 Correct Number';
      document.querySelector('body').style.backgroundColor = ' #60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      // Display the highscore
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guessNumber !== secretNumber) {
      // When guess is Wrong
      score--;
      document.querySelector('.message').textContent =
        guessNumber > secretNumber ? '📈 Too High! ' : '📉 Too Low !';
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = '😭 You Lost the Game ! ';
    document.querySelector('.score').textContent = 0;
  }
});

// When Again button is clicked

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = 20;
  highscore = 0;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = ' ';
});
