/* This code links my HTMl to my JS and creates the player score and computer score */

const choices = ['rock', 'paper', 'scissors','fireEXT','stapler'];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const resetButton = document.getElementById("Reset")
let playerScore = 0;
let computerScore = 0;

/* All of this code is for the actual game, Math.random is used to generate the computer choice */

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 5)];
    let result = "";

/* This code determines the winner and loser depending on the choice of the player and the generated number of the computer */  
    if(playerChoice === computerChoice){
        result = "IT'S A TIE!"
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors" || computerChoice === "fireEXT") ? "YOU WIN!" : "YOU LOSE!";
        break;
        case "paper":
            result = (computerChoice === "rock" || computerChoice === "stapler") ? "YOU WIN!" : "YOU LOSE!";
            break;
        case "scissors":
            result = (computerChoice === "paper" || computerChoice === "fireEXT") ? "YOU WIN!" : "YOU LOSE!";
            break;
            case "fireEXT":
                result = (computerChoice === "paper" || computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "stapler":
                result = (computerChoice === "fireEXT" || computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            }
    }

/* The rest of the code is for displaying the winner and ticking up one of the scores depending on who wins */

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

resultDisplay.classList.remove("greenText", "redText");

    switch(result){
case "YOU WIN!":
resultDisplay.classList.add("greenText");
playerScore++;
playerScoreDisplay.textContent = playerScore;
break;
case "YOU LOSE!":
resultDisplay.classList.add("redText");
computerScore++;
computerScoreDisplay.textContent = computerScore;
break;
    }
function resetGame(){
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent=0;
}
resetButton.addEventListener("click", resetGame)
}








