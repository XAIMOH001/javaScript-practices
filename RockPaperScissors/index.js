let playGame = confirm("shall we play rock paper scissors?");

if (playGame) {
    //play
    while (playGame) {
        const playerChoice = prompt("Please enter 'rock' 'paper' or 'scissors': ");
        if (playerChoice || playerChoice === "") {
            const firstPlayer = playerChoice.trim().toLowerCase();
            if (firstPlayer === "rock" || firstPlayer === "paper" || firstPlayer === "scissors") {
                const choices = ["rock", "paper", "scissors"];
                const computerChoice = Math.floor(Math.random() * 3);
                const computer = choices[computerChoice];

                const result =
                    firstPlayer === computer
                    ? "Tie game"
                    : firstPlayer === "rock" && computer === "paper"
                    ? `firstPlayer: ${firstPlayer} \nComputer: ${computer} \nComputer Wins!`
                    : firstPlayer === "paper" && computer === "scissors"
                    ? `firstPlayer: ${firstPlayer} \nComputer: ${computer} \nComputer Wins!`
                    : firstPlayer === "scissors" && computer === "rock"
                    ? `firstPlayer: ${firstPlayer} \nComputer: ${computer} \nComputer Wins!`
                    : `firstPlayer: ${firstPlayer} \nComputer: ${computer} \nfirstPlayer Wins!`;
                alert(result);
                playGame = confirm("Play Again");
                if (!playGame) alert("Okay, thanks for playing.");
                continue;
            } else {
                alert("You did not enter 'rock' 'paper' or 'scissors'");
                continue;
            }
        } else {
            alert("Looks like you changed your mind. Maybe next time.");
            break;
        }
    }
} else {
    alert("Maybe next Time");
}