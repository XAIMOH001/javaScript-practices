let playGame = confirm("shall we play rock, paper, scissors?");

if (playGame) {
  while (playGame) {
    const playerChoice = prompt("please enter 'rock', 'paper', or 'scissors'");
    if (playerChoice || playerChoice === "") {
      const firstPlayer = playerChoice.trim().toLowerCase();
      if (
        firstPlayer === "rock" ||
        firstPlayer === "paper" ||
        firstPlayer === "scissors"
      ) {
        const computerChoice = Math.floor(Math.random() * 3);
        const choiceArray = ["rock", "paper", "scissors"];
        const computer = choiceArray[computerChoice];

        const result =
          firstPlayer === computer
            ? "Tie game"
            : firstPlayer === "rock" && computer === "paper"
              ? `firstPlayer: ${firstPlayer} \nComputer: ${computer} \nComputer Wins`
              : firstPlayer === "paper" && computer === "scissors"
                ? `firstPlayer: ${firstPlayer} \nComputer: ${computer} \nComputer Wins`
                : firstPlayer === "scissors" && computer === "rock"
                  ? `firstPlayer: ${firstPlayer} \nComputer: ${computer} \nComputer Wins`
                            : `firstPlayer: ${firstPlayer} \nComputer: ${computer} \firstPlayer Wins`;
          alert(result);
          playGame = confirm("play Again");
          if (!playGame) alert("Ok, thanks for playing.");
          continue;
      } else {
          alert("you din't enter rock, paper, or scissors.");
          continue;
      }
    } else {
        alert("I guess you changed your mind. Maybe next time.");
        break;
    }
  }
} else {
  alert("maybe next time");
}
