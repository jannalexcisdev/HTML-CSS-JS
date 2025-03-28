const score = JSON.parse(localStorage.getItem('score')) || {
  win: 0,
  loss: 0,
  tie: 0
};

updateScoreElement()

let isAutoPlay = false;
let intervalID;

// const autoPlay = () => {
//   if (!isAutoPlay) {
//     intervalID = setInterval( () => {
//       const playerMove = pickComputerMove();
//       playGame(playerMove) ;
//     }, 1000);
//     isAutoPlay = true;
//   } else {
//     clearInterval(intervalID);
//     isAutoPlay = false;
//   }
// };

function autoPlay() {   //<easier to read and hoisting then the above
  if (!isAutoPlay) {
    intervalID = setInterval( () => {
      const playerMove = pickComputerMove();
      playGame(playerMove) ;
    }, 1000);
    isAutoPlay = true;
  } else {
    clearInterval(intervalID);
    isAutoPlay = false;
  }
}

document.querySelector('.js-rock-button').addEventListener('click',() => {
  playGame('rock');
})

document.querySelector('.js-paper-button').addEventListener('click',() => {
playGame('paper');
})

document.querySelector('.js-scissors-button').addEventListener ('click', () => {
  playGame('scissors');
})


document.body.addEventListener('keydown', (event) => { if (event.key === 'r') {
playGame('rock')
} else if (event.key === 'p') {
  playGame('paper')
}else if (event.key === 's') {
  playGame('scissors')
}
});
// onkeydown('r', () => {
//   playGame('rock')
// })

function playGame(playerMove) {
const computerMove = pickComputerMove();

let result = '';

if (playerMove === 'scissors') {
  if (computerMove === 'rock') {
    result = 'You lose.';
  } else if (computerMove === 'paper') {
    result = 'You win.';
  } else if (computerMove === 'scissors') {
    result = 'Tie.';
  }

} else if (playerMove === 'paper') {
  if (computerMove === 'rock') {
    result = 'You win.';
  } else if (computerMove === 'paper') {
    result = 'Tie.';
  } else if (computerMove === 'scissors') {
    result = 'You lose.';
  }
  
} else if (playerMove === 'rock') {
  if (computerMove === 'rock') {
    result = 'Tie.';
  } else if (computerMove === 'paper') {
    result = 'You lose.';
  } else if (computerMove === 'scissors') {
    result = 'You win.';
  }
}

if (result === 'You win.') {
  score.win +=1;
} else if (result === 'You lose.') {
  score.loss +=1;
} else if (result === 'Tie.') {
  score.tie += 1;
}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement()

document.querySelector('.js-result').innerText = result;

document.querySelector('.js-moves')
  .innerHTML = `You <img src="./images/${playerMove}-emoji.png" alt="" class="move-icon">
  <img src="./images/${computerMove}-emoji.png" alt="" class="move-icon"> Computer`;

}

function updateScoreElement () {
document.querySelector('.js-score')
  .innerText = `Wins:${score.win} Loss:${score.loss} Tie: ${score.tie}`
}

function pickComputerMove() {
const randomNumber = Math.random();

let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1 / 3) {
  computerMove = 'rock';
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
  computerMove = 'paper';
} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
  computerMove = 'scissors';
}

return computerMove;
}