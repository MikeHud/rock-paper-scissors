const sel = ["rock", "paper", "scissors"];
let userSel = prompt("type rock, paper or scissors");
const computerSel = computerPlay();
const winMsg = "You win!";
const loseMsg = "You lose!";
const drawMsg = "It's a draw";

console.log(userSel);
function computerPlay() {
    return sel[Math.floor(Math.random() * 3)];
}

function displayResults(computer,user) { 
    return "you chose " + user + "\n" + "computer chose " + computer + "\n"
}

function playRound(computer, user) {
    let result = "";
    switch(user) {
        case "rock":
            if(computer == "rock") {     
                result = displayResults(computer,user) + drawMsg;
                return result;
            } else {
                result = displayResults(computer,user) + winMsg;
                return result;
            }
        break;
        case "paper":
            if(computer == "paper") {
                result = displayResults(computer,user)+ drawMsg;
                return result;
            } else if(computer == "rock") {
                result = displayResults(computer,user) + winMsg;
                return result;
            } else if(computer == "scissors") {
                result = displayResults(computer,user) + loseMsg;
                return result;
            }
        break;
        case "scissors":
            if(computer == "scissors") {
                result = displayResults(computer,user) + drawMsg;
                return result;
            } else if(computer == "rock") {
                result = displayResults(computer,user) + loseMsg;
                return result;
            } else if(computer == "paper") {
                result = displayResults(computer,user) + winMsg;
                return result;
            }
        break;
    }

}

console.log(playRound(computerSel, userSel));