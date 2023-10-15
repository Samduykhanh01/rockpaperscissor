function getComputerChoice() {
    const STATE = ["Rock", "Paper", "Scissor"];
    num = Math.floor(Math.random() * 3);

    return STATE[num];
}

function rule(computer, human) {
    let score = 0;
    if (human == "Rock") {
        if (computer == "Scissor") {
            score++;
        } else if (computer == "Paper") {
            score--;
        }
    } else if (human == "Paper") {
        if (computer == "Rock") {
            score++;
        } else if (computer == "Scissor") {
            score--;
        }
    } else {
        if (computer == "Paper") {
            score++;
        } else if (computer == "Rock") {
            score--;
        }
    }

    return score;
}

function inputValidation() {
    let input = "";
    const VALID_INPUT = ["Rock", "Paper", "Scissor"];

    let inValid = true;
    while (inValid) {
        input = prompt("Your choice: ");
        input = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
        
        if (input != null && VALID_INPUT.includes(input)) {
            inValid = false;
        }
    }
    return input;
}

function game() {
    let score = 0;
    let human = "";
    let computer = "";
    
    for (i = 0; i < 5; i++){
        human = inputValidation();
        computer = getComputerChoice();
        score += rule(human, computer);
        
        console.log("Human: " + human + ". Computer: " + computer + "\n");
        console.log("Score = " + score);
    }

    if (score < 0) {
        console.log("You lose!");
    } else if (score > 0) {
        console.log("You win!");
    } else {
        console.log("Draw!");
    }
}

game();

