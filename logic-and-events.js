//this part is for game logic

//declare total points and rounds
let playerPoints = 0;
let computerPoints = 0;

//function for computer selection
function computerPlay() {
    let resultList = ["rock", "paper", "scissors"];

    //return a random value from the list
    return resultList[Math.floor(Math.random() * 3)];
}

//function for reset
function reset(){
    playerPoints = 0;
    computerPoints = 0;
}
//the fuction to decide who is the winner in a round
function playRound(playerSelection, computerSelection) {
    
    //If the selections are the same
    if (playerSelection === computerSelection) {
        document.getElementById("result").textContent="It's a draw!";
    }

    //If the player's selection wins
    if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
        document.getElementById("result").textContent=`You win! ${playerSelection} beats ${computerSelection}!`;
        playerPoints++;
    }

    //If the computer's selection wins
    if (playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "rock") {
        document.getElementById("result").textContent=`You lose! ${computerSelection} beats ${playerSelection}!`;
        computerPoints++;
    }
    if(playerPoints === 5 && computerPoints === 5){
        document.getElementById("score").textContent=`It's a tie by ${playerPoints}:${computerPoints}!`;
        reset()
    }else if(playerPoints == 5 && computerPoints < 5 ){
        document.getElementById("score").textContent=`You win by ${playerPoints}:${computerPoints}!`;
    }else if(computerPoints ==  5 && playerPoints < 5){
        document.getElementById("score").textContent=`You lose by ${playerPoints}:${computerPoints}!`;
    }
}

//these functions are no longer necessary
/*
function captalize(inputString) {
    captalizedLetter = inputString[0].toUpperCase();
    return captalizedLetter + inputString.slice(1);
}

function game() {
    let totalPoints = 0
    //for(let i=0;i<5;i++){
    playerSelection = captalize(prompt("Choose rock, paper or scissors.").toLowerCase());
    computerSelection = computerPlay();
    totalPoints = playRound(playerSelection, computerSelection, totalPoints);
    //}
    if (totalPoints == 1) {
        alert(`You got ${totalPoints} point.`);
    } else {
        alert(`You got ${totalPoints} points.`);
    }

}
game();
*/

//this part is for events
//fuction to change color on click
const allButtons = Array.from(document.getElementsByClassName("player-button"));

allButtons.forEach( button => (
    button.addEventListener("click", (e) => playRound(e.target.value, computerPlay()))
));
