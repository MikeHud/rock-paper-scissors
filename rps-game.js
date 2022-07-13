//global variables 
const sel = ["rock", "paper", "scissors"];
const winMsg = "You win!";
const loseMsg = "You lose!";
const drawMsg = "It's a draw!";

function computerSel() { //computer chooses rock, paper, scissors at random 
    return sel[Math.floor(Math.random() * 3)];
}

function userSel() {
    userSel = prompt("type rock, paper or scissors").toLowerCase();
    return userSel;
}

function playRound(computer, user) { //game logic. Input from user and computer
    let result = "";
    switch(user) {
        case "rock":
            if(computer == "rock") {     
                result = drawMsg + " " + user + " " + "draws with " + computer;
                return result;
            } else if(computer == "paper") {
                result = loseMsg + " " + computer + " " + "beats " + user;
                return result;
            } else if(computer == "scissors") {
                result = winMsg + " " + user + " " + "beats " + computer;
                return result;
            }
        break;
        case "paper":
            if(computer == "paper") {
                result = drawMsg + " " + user + " " + "draws with " + computer;
                return result;
            } else if(computer == "rock") {
                result = winMsg + " " + user + " " + "beats " + computer;
                return result;
            } else if(computer == "scissors") {
                result = loseMsg + " " + computer + " " + "beats " + user;
                return result;
            }
        break;
        case "scissors":
            if(computer == "scissors") {
                result = drawMsg + " " + user + " " + "draws with " + computer;
                return result;
            } else if(computer == "rock") {
                result = loseMsg + " " + computer + " " + "beats " + user;
                return result;
            } else if(computer == "paper") {
                result = winMsg + " " + user + " " + "beats " + computer;
                return result;
            }
        break;
    }
}

function game() { //Play the game i rounds, announce winner
let userScore = 0;
let computerScore = 0;
let game = [""]; //store the results of 5 rounds in an array 

    for (let i = 1; i <= 1; i++) { //play i number of rounds and announce winner at end
    console.log("Round" + i); 
    userSel();
    game[i-1] = playRound(computerSel(), userSel); //run game i
        if (game[i-1].includes("win")) { //maybe a clunky way to trigger score tally?
            console.log(game[i-1]);
            userScore = userScore + 1;
        } else if (game[i-1].includes("lose")) {
            console.log(game[i-1]);
            computerScore = computerScore + 1;
        } else if (game[i-1].includes("draw")) {
            console.log(game[i-1]);
        }

        if (i == 5) { //After 5 rounds display the scores/winner
            console.log("You score " + userScore);
            console.log("computer scores " + computerScore);
            if(computerScore > userScore) {
                console.log("---Computer wins that round---");
            } else if (computerScore < userScore) {
                console.log("---You win that round---");
            } else {
                console.log("---Looks like draw---");
            }
        }
    } 
}

game();