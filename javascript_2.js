let humanChoice = ""
let humanScore = 0, computerScore = 0
let message = ""
let turnCount = 0

let playButton = document.querySelector("#playButtons")
playButton.addEventListener("click", (event) => {
  console.log("Human pressed '" + event.target.name + "' button");
  humanChoice = getHumanChoice(event.target.name.toLowerCase())
  console.log("Human choice is " + humanChoice);
});


let resetButton = document.querySelector("#resetButton")
resetButton.addEventListener("click", (event) => {
  humanScore = 0
  computerScore = 0
  turnCount = 0
  message = "Playing......."
});

let computerChoice = getComputerChoice()
if (humanChoice != "reset")
  playGame()

function getHumanChoice(choice) {
  let buttons = document.querySelectorAll(".choose")
  let buttonsName = []
  buttons.forEach((button) => {
    buttonsName.push(button.name.toLowerCase())
  })
  console.log(buttonsName)

  return buttonsName.includes(choice) ? choice.toLowerCase() : ""
}

function getComputerChoice() {
  const STATE = ["rock", "paper", "scissor"];
  let num = Math.floor(Math.random() * 3);

  return STATE[num];
}

function rule(humanChoice, computerChoice) {
  if (humanChoice == "rock") {
    if (computerChoice == "scissor") {
      humanScore++;
    } else if (computerChoice == "paper") {
      computerScore++;
    }
  } else if (humanChoice == "paper") {
    if (computerChoice == "rock") {
      humanScore++;
    } else if (computerChoice == "scissor") {
      computerScore++;
    }
  } else {
    if (computerChoice == "paper") {
      humanScore++;
    } else if (computerChoice == "rock") {
      computerScore++;
    }
  }
}

const div = document.createElement("div")
function playGame() {
  if (turnCount <= 5){
    rule(humanChoice, computerChoice)
    turnCount++;
  } else {
    if (humanScore > computerScore){
      message = "Human Won"
    } else if (humanScore < computerScore) {
      message = "Computer Won"
    } else {
      message = "Draw"
    }
  }
}

div.textContent = message
const body = document.querySelector("body")
body.appendChild(div)
div.textContent = "Human: " + humanScore + ". Computer: " + computerScore
body.appendChild(div)





