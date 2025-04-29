console.log("Hello World");

let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){ // returns 0, 1, or 2
  numberOfChoices = 3;
  choice = Math.floor(Math.random() * numberOfChoices);
  if (choice === 1) return "rock";
  if (choice === 2) return "paper";
  else return "scissors";
  console.log(`Cplayed: ${choice}`)
}


const rockChoice = document.querySelector("#rockBtn")
const paperChoice = document.querySelector("#paperBtn")
const scissorsChoice = document.querySelector("#scissorsBtn")


function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  if (humanChoice === computerChoice) {
    console.log(`Tie, ${humanChoice} can't beat ${computerChoice}`);
  } else if (
    (humanChoice === "rock" && computerChoice !== "paper") ||
    (humanChoice === "paper" && computerChoice !== "scissors") ||
    (humanChoice === "scissors" && computerChoice !== "rock")
  ) {
    humanScore++;
    console.log(`You win, ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
  }

  console.log(`HScore: ${humanScore}`);
  console.log(`CScore: ${computerScore}`);

  if (humanScore >= 5 || computerScore >= 5) {
    console.log(humanScore > computerScore ? "You won the game!" : "You lost the game.");
  }
}


  rockChoice.addEventListener("click", () => playRound("rock"));
  paperChoice.addEventListener("click", () => playRound("paper"));
  scissorsChoice.addEventListener("click", () => playRound("scissors"));
