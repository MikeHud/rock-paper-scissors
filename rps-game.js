const sel = ["rock", "paper", "scissors"];
function computerPlay() {
    return sel[Math.floor(Math.random() * 3)];
}

let userSel = parseInt(prompt("select 1.Rock 2.Paper 3.Scissors"));
const computerSel = computerPlay();

function playRound(computer, user) {
    let result = "";
    switch(user) {
        case 1:
            if(computer == "rock") {     
                result = "you chose " + user + "\n" + "computer chose " + computer + "\n" + "It's a draw";
                return result;
            } else {
                result = "you chose " + user + "\n" + "computer chose " + computer + "\n" + "You win";
                return result;
            }
            
        break;
        case 2:
            if(computer == "paper") {
                result = "you chose " + user + "\n" + "computer chose " + computer + "\n" + "It's a draw";
                return result;
            } else if(computer == "rock") {
                result = "you chose " + user + "\n" + "computer chose " + computer + "\n" + "You win";
                return result;
            } else if(computer == "scissors") {
                result = "you chose " + user + "\n" + "computer chose " + computer + "\n" + "You lose";
                return result;
            }

        break;
        case 3:
            if(computer == "scissors") {
                result = "you chose " + user + "\n" + "computer chose " + computer + "\n" + "It's a draw";
                return result;
            } else if(computer == "rock") {
                result = "you chose " + user + "\n" + "computer chose " + computer + "\n" + "You lose";
                return result;
            } else if(computer == "paper") {
                result = "you chose " + user + "\n" + "computer chose " + computer + "\n" + "You win";
                return result;
            }

        break;
    }

}

console.log(playRound(computerSel, userSel));