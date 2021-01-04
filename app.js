//Declare Global Variables

const rockSelector = document.querySelector("#rock");
const paperSelector = document.querySelector("#paper");
const scissorsSelector = document.querySelector("#scissors");
const computerChoiceArray = ["rock", "paper", "scissors"];

//Declaring global eventlistener

rockSelector.addEventListener("click", runLog);
paperSelector.addEventListener("click", runLog);
scissorsSelector.addEventListener("click", runLog);

// Declaring global Functions

function runLog() {
  for (let i = 0; i < 1; i++) {
    console.log(computerChoiceArray[Math.floor(Math.random() * 3)]);
    // break;
  }
}
