// script.js
// description: JS file for rock, paper, scissors, x, y
// author: jclisham
// created: 3.24.25
// last update: 4.03.25

// html elements
const choices = ['rock', 'paper', 'scissors','fireEXT','stapler'];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const resetButton = document.getElementById("Reset")

// gives player score and computer score a value of 0
let playerScore = 0;
let computerScore = 0;

// function for the player choice and computer choice
function playGame(playerChoice){


    const computerChoice = choices[Math.floor(Math.random() * 5)];
// the result variable is declared to show the winner/loser
    let result = "";

// Chooses who wins by comparing the player and computer choices
// if player choice is equal to computer choice the result is a tie
    if(playerChoice === computerChoice){
        result = "IT'S A TIE!"
    }

// if player chooses rock and the computer chooses scissors the player wins
// if player chooses rock and the computer chooses fireEXT the player loses

    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors" || computerChoice === "fireEXT") ? "YOU WIN!" : "YOU LOSE!";
        break;

// if player chooses paper and the computer chooses rock the player wins
// if player chooses paper and the computer chooses stapler the player loses
        case "paper":
            result = (computerChoice === "rock" || computerChoice === "stapler") ? "YOU WIN!" : "YOU LOSE!";
            break;

// if player chooses scissors and the computer chooses paper the player wins
// if player chooses scissors and the computer chooses fireEXT the player loses
        case "scissors":
            result = (computerChoice === "paper" || computerChoice === "fireEXT") ? "YOU WIN!" : "YOU LOSE!";
            break;
        
// if player chooses fireEXT and the computer chooses paper the player wins
// if player chooses scissors and the computer chooses stapler the player loses
            case "fireEXT":
                result = (computerChoice === "paper" || computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;

// if player chooses stapler and the computer chooses fireEXT the player wins
// if player chooses stapler and the computer chooses rock the player loses
            case "stapler":
                result = (computerChoice === "fireEXT" || computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            }
    }

// makes the player and computer display equal to the player and computer choice

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
setTimeout (() => {
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;


    // for the red and green text when you win or lose 
    resultDisplay.classList.remove("greenText", "redText");


    // gives the result of the game and adds score depending on winner
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
}, 1000);
// resets the game and all other values when the reset button is clicked 
function resetGame(){
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent= 0;
    resultDisplay.innerHTML = '';
    
    
}

// event listener for the reset game button
resetButton.addEventListener("click", resetGame)
}








