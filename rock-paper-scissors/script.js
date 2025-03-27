const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const playerScoreEl = document.querySelector(".playerScore");
const computerScoreEl = document.querySelector(".computerScore");
const statusX = document.querySelector(".status");

let humanScore = 0;
let computerScore = 0;
const ROUNDS_TO_WIN = 5;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
  statusX.textContent = "";
  if (humanChoice === computerChoice) {
    statusX.textContent = "It's a Draw!";
    return "draw";
  }

  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (winConditions[humanChoice] === computerChoice) {
    humanScore++;
    playerScoreEl.textContent = humanScore;
    statusX.textContent = "You Won this round!";
    return "human";
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    statusX.textContent = "Computer Won this round!";
    return "computer";
  }
}

function checkGameWinner() {
  if (humanScore === ROUNDS_TO_WIN) {
    statusX.textContent = "Congratulations! You won the game!";
    disableButtons();
  } else if (computerScore === ROUNDS_TO_WIN) {
    statusX.textContent = "Computer won the game. Better luck next time!";
    disableButtons();
  }
}

function disableButtons() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = "0";
  computerScoreEl.textContent = "0";
  statusX.textContent = "Choose your move!";
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
}

rockBtn.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  playRound("rock", computerChoice);
  checkGameWinner();
});

paperBtn.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  playRound("paper", computerChoice);
  checkGameWinner();
});

scissorsBtn.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  playRound("scissors", computerChoice);
  checkGameWinner();
});

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset Game";
resetBtn.addEventListener("click", resetGame);
document.querySelector(".game").appendChild(resetBtn);

statusX.textContent = "Choose your move!";
