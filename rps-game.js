const sel = ["rock", "paper", "scissors"];
const winMsg = "You win!";
const loseMsg = "You lose!";
const drawMsg = "It's a draw!";

function computerPlay() {
    return sel[Math.floor(Math.random() * 3)];
}

function playRound(computer, user) {
    let result = "";
    switch(user) {
        case "rock":
            if(computer == "rock") {     
                result = drawMsg + " " + user + " " + "draws with " + computer;
                return result;
            } else {
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
/* Best of 5 rounds */
function game() {
let userScore = 0;
let computerScore = 0;
let game = [""]; //store the 5 rounds in an array 

    for (let i = 1; i <= 5; i++) {
    console.log("Round" + i); //display round count 
    userSel = prompt("type rock, paper or scissors").toLowerCase(); // get new user input
    game[i-1] = playRound(computerPlay(), userSel); // run game i
        if (game[i-1].includes("win")) {
            console.log(game[i-1]);
            userScore = userScore + 1;
            
        } else if (game[i-1].includes("lose")) {
            console.log(game[i-1]);
            computerScore = computerScore + 1;
            
        } else if (game[i-1].includes("draw")) {
            console.log(game[i-1]);
        }

        if (i == 5) {
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