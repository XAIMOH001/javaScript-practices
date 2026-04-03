let playGame = confirm("shall we play Rock paper Scissors?");

if (playGame) {
  let playerChoice = prompt("Enter Rock, Paper or Scissors.");
  if (playerChoice) {
    let firstPlayer = playerChoice.trim().toLowerCase();
    if (
      firstPlayer === "rock" ||
      firstPlayer === "paper" ||
      firstPlayer === "scissors"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
            ? "paper"
            : "scissors";

      let results =
        firstPlayer === computer
          ? "Tie Game"
          : firstPlayer === "rock" && computer === "paper"
            ? `FirstPlayer: ${firstPlayer} \nComputer: ${computer}
            \nComputer Wins!`
            : firstPlayer === "paper" && computer === "scissors"
            ? `FirstPlayer: ${firstPlayer} \nComputer: ${computer}
            \nComputer Wins!`
            : firstPlayer === "scissors" && computer === "rock" ? `FirstPlayer: ${firstPlayer} \nComputer: ${computer}
            \nComputer Wins!`
            : `FirstPlayer: ${firstPlayer} \nComputer: ${computer}
            \nFirstPlayer Wins!`
     alert(results);
     let playAgain = confirm("Play Again");
     playAgain ? location.reload(): alert("Okay Thank you for Playing.")
    } else {
      alert("You did not enter 'rock', 'paper' or 'scissors'.");
    }
  } else {
    alert("Looks like you changed your mind. Maybe next time.");
  }
} else {
  alert("Maybe next time.");
}
