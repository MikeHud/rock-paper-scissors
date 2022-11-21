//global variables 
const winMsg = "You win!";
const loseMsg = "You lose!";
const drawMsg = "It's a draw!";
let userSel = "";
let result = "";
let roundCount = 0;

let userScore = 0;
let computerScore = 0;

function computerSel() { //computer chooses rock, paper, scissors at random 
    const sel = ["rock", "paper", "scissors"];
    return sel[Math.floor(Math.random() * 3)];
}
function pollUserInput() { //take user's input and trigger game play
    const rockBtn = document.querySelector('#r');
    rockBtn.addEventListener('click', () => {
        userSel = "rock";
        playRound(computerSel(), userSel);
    });  

    const paperBtn = document.querySelector('#p');
    paperBtn.addEventListener('click', () => {
        userSel = "paper";
        playRound(computerSel(), userSel);
    }); 

    const scissorsBtn = document.querySelector('#s');
    scissorsBtn.addEventListener('click', () => {
        userSel = "scissors";
        playRound(computerSel(), userSel);
    }); 
}

function playRound(computer, user) { //game logic. One round
    document.getElementById("display-winner").innerHTML = "";
    switch(user) {
        case "rock":
            if(computer == "rock") {     
                result = user + " " + "draws with " + computer;
                displayResult(result); 
                roundCount++;
            } else if(computer == "paper") {
                result = computer + " " + "beats " + user;
                computerScore++;
                roundCount++;
                displayResult(result);
            } else if(computer == "scissors") {
                result = user + " " + "beats " + computer;
                userScore++;
                roundCount++;
                displayResult(result);
            }
        break;
        case "paper":
            if(computer == "paper") {
                result = user + " " + "draws with " + computer;
                roundCount++;
                displayResult(result);
            } else if(computer == "rock") {
                result = user + " " + "beats " + computer;
                userScore++;
                roundCount++;
                displayResult(result);
            } else if(computer == "scissors") {
                result = computer + " " + "beats " + user;
                computerScore++;
                roundCount++;
                displayResult(result);
            }
        break;
        case "scissors":
            if(computer == "scissors") {
                result = drawMsg + " " + user + " " + "draws with " + computer;
                roundCount++;
                displayResult(result);
            } else if(computer == "rock") {
                result = loseMsg + " " + computer + " " + "beats " + user;
                computerScore++;
                roundCount++;
                displayResult(result);
            } else if(computer == "paper") {
                result = winMsg + " " + user + " " + "beats " + computer;
                userScore++;
                roundCount++;
                displayResult(result);
            }  
        break;  
    }
}
function displayResult(resultString) { //display scores and winner of 5 rounds
    document.getElementById("round-result").innerHTML = result;
    document.getElementById("user-score").innerHTML = userScore;
    document.getElementById("computer-score").innerHTML = computerScore;
    if(roundCount >= 5) {
        if(userScore > computerScore) {
            document.getElementById("display-winner").innerHTML = "<span style= 'color: green'>You Win!</span>";
        } else if(userScore < computerScore) {
            document.getElementById("display-winner").innerHTML = "<span style= 'color: red'>You lose! </span>";
        } else{
            document.getElementById("display-winner").innerHTML = "<span style = 'color: cornflowerblue'>It's a draw! </span>";
        }
        userScore = 0;
        computerScore = 0;
        roundCount = 0;
    }
}
//game round is triggered by user input
pollUserInput();