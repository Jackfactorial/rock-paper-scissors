function getComputerChoice() {
    let rand = Math.random()
    rand = Math.floor(rand * 3);
    const rpsArray = ['rock', 'paper', 'scissors'];
    return rpsArray[rand];

}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return "Draw";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"
        || playerSelection == "scissors" && computerSelection == "paper"
        || playerSelection == "paper" && computerSelection == "rock") {
        return "You win! " + playerSelection + " beats " + computerSelection + ".";
    }
    else if (playerSelection == "rock" && computerSelection == "paper"
        || playerSelection == "scissors" && computerSelection == "rock"
        || playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! " + computerSelection + " beats " + playerSelection + ".";
    }
    else {
        return "Invalid Input";
    }
}

function game() {
    let playerCount = 0;
    let computerCount = 0;
    let playerChoice;
    let computerChoice;
    let outcome;
    const buttons = document.querySelectorAll('.rpsButton');
    const results = document.querySelector('#results');
    const score = document.querySelector('#score');



    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerChoice = button.id;
            computerChoice = getComputerChoice();
            outcome = playRound(playerChoice, computerChoice);
            results.textContent = outcome;
            if (outcome.includes("win")) {
                playerCount++;
            }
            if (outcome.includes("lose")) {
                computerCount++;
            }
            score.textContent = "You: " + playerCount + ". Computer: " + computerCount;
            if (playerCount==2 || computerCount ==2) {
                score.textContent = "Game over. Final score: You: " + playerCount + ". Computer: " + computerCount;
            }
        });
    });
}


game();
