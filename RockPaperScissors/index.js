// ROCK, PAPER, OR SCISSORS game refactored with Functions.
const initGame = () => {
  const startGame = confirm("Shall we play ROCK, PAPER, OR SCISSORS?");
  startGame ? playGame() : alert("Ok, maybe Next Time.");
};

//Game Logic
const playGame = () => {
  while (true) {
    let playerChoice = getPlayerChoice();
    playerChoice = formatPlayerChoice(playerChoice);
    if (playerChoice === "") {
      invalidChoice();
      continue;
    }
    if (!playerChoice) {
      decideNotToPlay();
      break;
    }
    playerChoice = evaluatePlayerChoice(playerChoice);
    if (!playerChoice) {
      invalidChoice();
      continue;
    }
    const computerChoice = getComputerChoice();
    const result = determineWiner(playerChoice, computerChoice);
    displayResult(result);
    if (askToPlayAgain()) {
      continue;
    } else {
      thanksForPlaying();
      break;
    }
  }
};

//start Game
const getPlayerChoice = () => {
  return prompt("Please enter 'rock' , 'paper' , or 'scissors'");
};

const formatPlayerChoice = (playerChoice) => {
  if (playerChoice || playerChoice === "") {
    return playerChoice.trim().toLowerCase();
  } else {
    return false;
  }
};

//not playing?
const decideNotToPlay = () => {
  alert("I guess you changed your mind. Maybe Next time.");
};

const evaluatePlayerChoice = (playerChoice) => {
  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors"
  ) {
    return playerChoice;
  } else {
    return false;
  }
};

//input validation
const invalidChoice = () => {
  alert("You did not enter rock, paper, or scissors.");
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const choiceArray = ['rock', 'paper', 'scissors'];
    return choiceArray[randomNumber];
};


//winner Determination
const determineWiner = (player, computer) => {
  const winner =
    player === computer
      ? "Tie Game!"
      : player === "rock" && computer === "paper"
        ? `PlayerOne: ${player}\nComputer: ${computer}\nComputer Wins!`
        : player === "paper" && computer === "scissors"
          ? `playerOne: ${player}\nComputer: ${computer}\nComputer Wins!`
          : player === "scissors" && computer === "rock"
            ? `PlayerOne: ${player}\nComputer: ${computer}\nComputer Wins!`
                      : `PlayerOne: ${player}\nComputer: ${computer}\nPlayerOne Wins!`;
    
    return winner;      
};

//result
const displayResult = (result) => {
    alert(result);
};

const askToPlayAgain = () => {
    return confirm("Play Again?");
};
 
const thanksForPlaying = () => {
    alert("Ok, thanks for playing.");
}

initGame();
