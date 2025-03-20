function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}
function getHumanChoice() {
  let humanChoice = prompt("Rock, Paper, Scissors");
  return humanChoice.toLowerCase();
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice == "rock" && computerChoice == "rock") ||
    (humanChoice == "paper" && computerChoice == "paper") ||
    (humanChoice == "scissors" && computerChoice == "scissors")
  ) {
    return "Draw";
  } else if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "rock")
  ) {
    computerScore += 1;
    return "Computer Won!";
  } else {
    humanScore += 1;
    return "Human Won!";
  }
}
let i = 0;
while (i < 3) {
  i++;
  console.log(playRound(getHumanChoice(), getComputerChoice()));
  console.log(`Human Score: ${humanScore}`, `Computer Score: ${computerScore}`);
}
