console.log("Hello World");

let humanScore = 0;
let computerScore = 0;


function getComputerChoice(numberOfChoices){ // returns 0, 1, or 2
  numberOfChoices = 3;
  choice = Math.floor(Math.random() * numberOfChoices);
  if (choice === 1) return "rock";
  if (choice === 2) return "paper";
  else return "scissors";
  console.log(`Cplayed: ${choice}`)
}

function getHumanChoice(){
  let human = prompt("What do you choose?");
  return human;

}

function playGame(){


  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if(humanChoice === computerChoice){
      console.log(`Tie, ${humanChoice} can't beat ${computerChoice}`);
      return;
    }
    if (humanChoice === "rock"){
      if( computerChoice !== "paper" ){
        humanScore+=1;
        console.log(`You win, ${humanChoice} beats ${computerChoice}`);
        return;
      }
      else{
        computerScore+=1;
        console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
        return;
      }
    }
  
    if (humanChoice === "paper" ){
      if ( computerChoice !== "scissors" ){
        humanScore+=1;
        console.log(`You win, ${humanChoice} beats ${computerChoice}`);
        return;
      }
      else{
        computerScore+=1;
        console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
        return;
      }
    }
  
    if (humanChoice === "scissors" ){
      if( computerChoice !== "rock" ){
        humanScore+=1;
        console.log(`You win, ${humanChoice} beat ${computerChoice}`);
        return;
      }
      else{
        computerScore+=1;
        console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
        return;
      }
    }
  }

  let humanSelection = "";
  let computerSelection = "";
  for(let rounds = 0; rounds < 5; rounds++){
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`HScore: ${humanScore}`);
    console.log(`CScore: ${computerScore}`);
  }
  
  if(humanScore > computerScore){
    console.log("You won the game!");
  }
  else{
    console.log("You lost the game.");
  }

}

playGame();

