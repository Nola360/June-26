let min = 1,
  max = 10,
  guess_remaining = 3,
  winningNumber = randomNumber(min, max);

//  Variables

const game = document.querySelector('#game');
const min_number = document.querySelector('#min_number');
const max_number = document.querySelector('#max_number');
const guess_input = document.querySelector('#guess_input')
const guess_button = document.querySelector('#guess_btn');
const message = document.querySelector('.message');


min_number.textContent = min;
max_number.textContent = max;

console.log(min, max);

guess_button.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play_again') {
    // Reloads Web Page
    window.location.reload();
  }
  e.preventDefault();
})

// Submits guess
guess_button.addEventListener('click', function (e) {
  let guess = parseInt(guess_input.value);
  if (guess < min || guess > max || isNaN(guess) || guess === '') {

    setMessage(`Please guess number between ${min} and ${max}.`, 'red');
    return false;

  }

  if (guess === winningNumber) {
    gameOver(true, `${winningNumber} is correct!!! You win!`);

  } else if (guess_remaining === 1) {
    gameOver(false, `${guess} is incorrect, game over! ${winningNumber} is the winning number!`)

  } else {
    guess_remaining -= 1;
    message.textContent = `${guess} is incorrect!!! ${guess_remaining} guesses remaining!`;
    message.style.color = 'red';
  }
  e.preventDefault()
})

function gameOver(won, msg) {
  let color;

  guess_input.disabled = true;
  won === true ? color = 'green' : color = 'red';
  message.textContent = msg;
  message.style.color = color;
  guess_input.style.borderColor = color;
  guess_button.value = 'Play Again?'
  guess_button.className += 'play_again';
  guess_input.value = ''

}


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);

}

function setMessage(msg, color) {
  message.textContent.color = msg;
  message.style.color = color;


}