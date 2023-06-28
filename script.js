
function checkRock(player, computer) {
    if (player === "rock" && computer === "paper") return 1
    else if (player === "rock" && computer === "scissor") return 2
    else return 0
}

function checkPaper(player, computer) {
    if (player === "paper" && computer === "rock") return 2
    else if (player === "paper" && computer === "scissor") return 1
    else return 0
}

function checkScissor(player, computer) {
    if (player === "scissor" && computer === "rock") return 1
    else if (player === "scissor" && computer === "paper") return 2
    else return 0
}

function checkWinner(player, computer) {
    if (player !== "rock" && player !== "paper" && player !== "scissor") {
        return 3; // Invalid option
    }

    else if (player === "rock") {
        return checkRock(player, computer);
    } 
    
    else if (player === "paper") {
        return checkPaper(player, computer);
    } 
    
    else if (player === "scissor") {
        return checkScissor(player, computer);
    } 
}


function getComputerChoice(){
    const options = ["rock", "paper", "scissor"];
    const randomNumber = Math.floor(Math.random() * options.length);
    const randomOption = options[randomNumber];
    return randomOption;
}

let computerScore = 0;
let playerScore = 0;
let playerSelection = window.prompt("Inter an option");
console.log(playerSelection);


function game() {
    const computerSelection = getComputerChoice();
    const resultNumber = checkWinner(playerSelection, computerSelection); 

    if (resultNumber === 0 ) {
        console.log("this round was a tie");
        console.log(`playerScore: ${playerScore}    computerScore: ${computerScore}`);
    }

    else if (resultNumber === 1 ) {
        console.log("you lost, computer won")
        computerScore++
        console.log("the computer score is: " + computerScore);
    }
    
    else if (resultNumber === 2 ) {
        console.log("you won, computer lost")
        playerScore++
        console.log("the player score is: " + playerScore);
    }

    else if (resultNumber === 3 ) {
        console.log("Inter a valid option")
    }
}


while(computerScore < 3 && playerScore < 3) {
    game();

    if(computerScore < 3 && playerScore < 3) {
        playerSelection = window.prompt("Inter an option");
    }
}

