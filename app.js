// Defining Global Variables
const userScore_span = document.querySelector(".user-score");
const computerScore_span = document.querySelector(".computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.querySelector("#rock");
const paper_div = document.querySelector("#paper");
const scissors_div = document.querySelector("#scissors");
const winnerLog_p = document.querySelector(".result-statement");
const userScore = 0;
const computerScore = 0;

// User choices function
window.onload = () => {
  rock_div.addEventListener("click", () => {
    game("rock");
    // console.log("rock");
  });

  paper_div.addEventListener("click", () => {
    game("paper");
    // console.log("paper");
  });
  scissors_div.addEventListener("click", () => {
    game("scissors");
    // console.log("scissors");
  });
};

// Computer choices function
function getComputerChoices() {
  const choice = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choice[randomNumber];
}

//Game logic function
function game(userChoice) {
  const computerChoice = getComputerChoices();
  const userUpperCase = userChoice.toUpperCase();
  const ComputerUpperCase = computerChoice.toUpperCase();

    console.log(`user choice => ${userChoice}`);
    console.log(`user choice => ${computerChoice}`);
  switch (userChoice + computerChoice) {
    case `rockscissors`:
    case `paperrock`:
    case `scissorspaper`:
      console.log(`User Win's.`);
      userScore_span.innerText++;
      winnerLog_p.innerHTML = `${userUpperCase} beats ${ComputerUpperCase}. User Win's`;
      break;

    case "rockspaper":
    case "paperscissors":
    case "scissorsrock":
      console.log(`User looses.`);
      computerScore_span.innerText++;
      winnerLog_p.innerHTML = `${ComputerUpperCase} beats ${userUpperCase}. Computer Win's`;
      break;

    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      console.log(`Its a Tie`);
      winnerLog_p.innerHTML = `${userUpperCase} doesn't beats ${ComputerUpperCase}. It's a TIE`;
      break;
  }

  if (userScore_span == 10) {
  }
}
