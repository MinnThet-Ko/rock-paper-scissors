//declare total points
let totalPoints = 0;
//this part is for game logic
function computerPlay() {
    let resultList = ["Rock", "Paper", "Scissors"];

    //return a random value from the list
    return resultList[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {

    console.log(playerSelection);
    console.log(computerSelection);
    console.log(document.getElementById("result").id);
    //If the selections are the same
    if (playerSelection === computerSelection) {
        alert("It is a draw!");
    }

    //If the player's selection wins
    if (playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper") {
        alert(`You win! ${playerSelection} beats ${computerSelection}!`);
        document.getElementById("result").textContent=`You win! ${playerSelection} beats ${computerSelection}!`;
        totalPoints++;
    }

    //If the computer's selection wins
    if (playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Rock") {
        alert(`You lose! ${computerSelection} beats ${playerSelection}!`);
    }

    document.getElementById("score").textContent=totalPoints;
}

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
//game();

//this part is for events

//get player's buttons

//get all buttons
const allButtons = Array.from(document.getElementsByTagName("button"));

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
//allButtons.addEventListener("click", (e) => console.log(e.target.textContent));

allButtons.forEach(element => {
    element.addEventListener("click", (e) => playRound(e.target.textContent, computerPlay()));
})