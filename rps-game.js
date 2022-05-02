const sel = ["rock", "paper", "scissors"];
let userSel = prompt("type rock, paper or scissors").toLowerCase();
const computerSel = computerPlay();
const winMsg = "You win!";
const loseMsg = "You lose!";
const drawMsg = "It's a draw!";

console.log(userSel);
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

console.log(playRound(computerSel, userSel));