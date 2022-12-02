
let userSel = "";
let result = "";
let userScore = 0;
let computerScore = 0;

function computerSel() { //computer chooses rock, paper, scissors
    const sel = ["rock", "paper", "scissors"];
    return sel[Math.floor(Math.random() * 3)];
}

function pollUserInput() { //list for user choice and trigger game round
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
            } else if(computer == "paper") {
                result = computer + " " + "beats " + user;
                computerScore++;
                displayResult(result);
            } else if(computer == "scissors") {
                result = user + " " + "beats " + computer;
                userScore++;
                displayResult(result);
            }
        break;
        case "paper":
            if(computer == "paper") {
                result = user + " " + "draws with " + computer;
                displayResult(result);
            } else if(computer == "rock") {
                result = user + " " + "beats " + computer;
                userScore++;
                displayResult(result);
            } else if(computer == "scissors") {
                result = computer + " " + "beats " + user;
                computerScore++;;
                displayResult(result);
            }
        break;
        case "scissors":
            if(computer == "scissors") {
                result = user + " " + "draws with " + computer;
                displayResult(result);
            } else if(computer == "rock") {
                result = computer + " " + "beats " + user;
                computerScore++;
                displayResult(result);
            } else if(computer == "paper") {
                result = user + " " + "beats " + computer;
                userScore++;
                displayResult(result);
            }  
        break;  
    }
}

function displayResult(resultString) { //display scores and winner of 5 rounds
    document.getElementById("round-result").innerHTML = result;
    document.getElementById("user-score").innerHTML = userScore;
    document.getElementById("computer-score").innerHTML = computerScore;
    if(computerScore === 5 || userScore === 5) {
        if(userScore > computerScore) {
            document.getElementById("display-winner").innerHTML = "<span style= 'color: green'>You win! </span>";
        } else if(userScore < computerScore) {
            document.getElementById("display-winner").innerHTML = "<span style= 'color: red'>You lose! </span>";
        } else{
            document.getElementById("display-winner").innerHTML = "<span style = 'color: cornflowerblue'>It's a draw! </span>";
        }
        userScore = 0;
        computerScore = 0;
    }
}

pollUserInput();