function getComputerChoice() {
    let rand = Math.random()
    rand = Math.floor(rand*3);
    let rpsArray = ['rock', 'paper', 'scissors'];
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
        return "You win! " + playerSelection + " beats " + computerSelection + "!";
    }
    else if (playerSelection == "rock" && computerSelection == "paper" 
    || playerSelection == "scissors" && computerSelection == "rock" 
    || playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! " + computerSelection + " beats " + playerSelection + "!";
    }
    else {
        return "Invalid Input";
    }
}

function game() {
    let playerCount = 0;
    let computerCount = 0;
    for (let i=0; i<5; i++) {
        let playerChoice = prompt("Enter Rock, Paper, or Scissors:");
        let computerChoice = getComputerChoice();
        let outcome = playRound(playerChoice, computerChoice)
        alert(outcome);
        
        if (outcome.includes("win")) {
            playerCount++;
        }
        if (outcome.includes("lose")) {
            computerCount++;
        }
    }
    alert ("Final score:\nYou: " + playerCount + "\nComputer: " + computerCount);
}

game();
