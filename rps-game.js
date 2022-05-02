const sel = ["rock", "paper", "scissors"];
function computerPlay() {
    return sel[Math.floor(Math.random() * 3)];
}

let userSel = parseInt(prompt("select 1.Rock 2.Paper 3.Scissors"));
const computerSel = computerPlay();

function displayResults(computer,user) {
    return "you chose " + sel[user - 1] + "\n" + "computer chose " + computer + "\n"
}

function playRound(computer, user) {
    let result = "";
    switch(user) {
        case 1:
            if(computer == "rock") {     
                result = displayResults(computer,user) + "It's a draw";
                return result;
            } else {
                result = displayResults(computer,user) + "You win";
                return result;
            }
        break;
        case 2:
            if(computer == "paper") {
                result = displayResults(computer,user)+ "It's a draw";
                return result;
            } else if(computer == "rock") {
                result = displayResults(computer,user) + "You win";
                return result;
            } else if(computer == "scissors") {
                result = displayResults(computer,user) + "You lose";
                return result;
            }
        break;
        case 3:
            if(computer == "scissors") {
                result = displayResults(computer,user) + "It's a draw";
                return result;
            } else if(computer == "rock") {
                result = displayResults(computer,user) + "You lose";
                return result;
            } else if(computer == "paper") {
                result = displayResults(computer,user) + "You win";
                return result;
            }
        break;
    }

}

console.log(playRound(computerSel, userSel));