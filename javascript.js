let startButton = document.querySelector('#start');
startButton.addEventListener("click", playGame);

function getComputerChoice() {
    const STATE = ["Rock", "Paper", "Scissor"];
    num = Math.floor(Math.random() * 3);

    return STATE[num];
}

function getHumanChoice() {
    // let humanChoice = prompt("What do you choose?")
    // console.log(humanChoice)
    // let playerButtons = document.querySelector('#playerButtons');
    let humanChoice = "";
    let validation = [false, ""]
    do {
        let playerButtons = document.querySelector("#playerButtons")
        playerButtons.addEventListener("click", (event) => {
            validation = inputValidation(event.target.id);
            humanChoice = validation[1];
            console.log("Human chose " + humanChoice);
            console.log(validation[0])
        });
    } while (!validation[0]);
    // while (humanChoice === "") {
    console.log("Escaped do while in getHumanChoice");
    // }

    return humanChoice
}

function inputValidation(text) {
    let input = text;
    const VALID_INPUT = ["Rock", "Paper", "Scissor"];

    let valid = false;
    // while (inValid) {
    // input = prompt("Your choice: ");
    input = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();

    if (input != null && VALID_INPUT.includes(input)) {
        valid = true;
    }

    return valid ? [true, input] : [false, text]
    // }
    // return input;
}

function rule(humanChoice, computerChoice) {
    let score = 0;
    if (humanChoice == "rock") {
        if (computerChoice == "scissor") {
            score++;
        } else if (computerChoice == "paper") {
            score--;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            score++;
        } else if (computerChoice == "scissor") {
            score--;
        }
    } else {
        if (computerChoice == "paper") {
            score++;
        } else if (computerChoice == "rock") {
            score--;
        }
    }

    return score;
}

function playRound(humanChoice, computerChoice) {
    let score = 0;
    // let human = "";
    // let computer = "";

    // for (i = 0; i < 5; i++) {
    // human = humanChoice
    // computer = computerChoice;
    score = rule(humanChoice, computerChoice);

    // console.log("Human: " + humanChoice + ". Computer: " + computerChoice + "\n");
    // console.log("Score = " + score);
    // }

    return score
}

function playGame() {
    let totalScore = 0;
    let humanChoice = getHumanChoice();
    console.log(humanChoice)
    let computerChoice = getComputerChoice();

    totalScore += playRound(humanChoice, computerChoice);
    if (totalScore < 0) {
        console.log("You lose!");
    } else if (totalScore > 0) {
        console.log("You win!");
    } else {
        console.log("Draw!");
    }
}

// playGame();

