// variables to calcualte winner
const scores = [0, 0];

// variables to store user selection
const selection = document.querySelectorAll(".rps");
selection.forEach((button) => {
  button.addEventListener("click", () => {
    const selection = button.innerHTML;
    playGame(selection);
  });
});

// To play the game
function playGame(playerSelection) {
  const computerSelection = getComputerchoice();

  playRound(playerSelection, computerSelection);
  if (scores[0] == 5 || scores[1] == 5) {
    announceWinner(scores);
    const reset = document.querySelector("#img-content");
    reset.addEventListener("click", () => {
      document.getElementById("modal-content").style.display = "none";
      document.getElementById("img-content").style.display = "none";
      document.getElementById("winner").style.display = "none";
      document.getElementById("loser").style.display = "none";
      document.querySelector("#player1").innerHTML = scores[0] = 0;
      document.querySelector("#player2").innerHTML = scores[1] = 0;
    });
  }
}

function announceWinner(scores) {
  if (scores[0] == 5) {
    document.getElementById("modal-content").style.display = "flex";
    document.getElementById("img-content").style.display = "flex";
    document.getElementById("winner").style.display = "flex";
  } else {
    document.getElementById("modal-content").style.display = "flex";
    document.getElementById("img-content").style.display = "flex";
    document.getElementById("loser").style.display = "flex";
  }
}

// To play the round each time and return the winner point for each round
function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    console.log("Sorry!, It's a tie");
    return 0;
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    console.log("You Win! Rock beats Scissors");
    document.querySelector("#player1").innerHTML = scores[0] += 1;
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    console.log("You Lose! Paper beats Rock");
    document.querySelector("#player2").innerHTML = scores[1] += 1;
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection.toLowerCase() === "rock"
  ) {
    console.log("You Lose! Rock beats Scissors");
    document.querySelector("#player2").innerHTML = scores[1] += 1;
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    console.log("You Win! Scissors beats Paper");
    document.querySelector("#player1").innerHTML = scores[0] += 1;
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    console.log("You Lose! Scissors beats Paper");
    document.querySelector("#player2").innerHTML = scores[1] += 1;
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection.toLowerCase() === "rock"
  ) {
    console.log("You Win! Paper beats Rock");
    document.querySelector("#player1").innerHTML = scores[0] += 1;
  } else {
    console.log("Wrong Input");
  }
}

// to generate the computer choice
function getComputerchoice() {
  const value = ["Rock", "Paper", "Scissors"];
  const number = Math.floor(Math.random() * 3);
  return value[number];
}
