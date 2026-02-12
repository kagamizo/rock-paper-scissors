function getComputerChoice(){
  const r = Math.random();
  if (r <= 0.2) {
    return "rock";}
  else if (r <= 0.2 && r < 0.4) {
return "paper";
    }
  else if (r <= 0.4 && r < 0.6){
return "scissors"

} else if (r <= 0.6 && r < 0.8){
return "rock"
}
  else {
    return "paper"
} 
}

function getHumanChoice(){
    let choice=  prompt("Choose wisely!").toLowerCase();
if (choice === "rock"){
    return "rock"
} else if (choice === "paper"){
    return "paper"
} else if (choice === "scissors"){
    return "scissors"
}
}



let humanScore= 0;
let computerScore= 0;
function playRound(humanChoice, computerChoice) {
if(humanChoice === "rock" && computerChoice === "paper"){
    return "You lose! Paper beats rock you dumbass!" + ++computerScore + "-" + humanScore
}
else if(humanChoice === "scissors" && computerChoice === "rock"){
    return "You lose! Rock beats scissors you dumbass!" + ++computerScore + "-" + humanScore

}
else if(humanChoice === "paper" && computerChoice === "scissors"){
    return "You lose! Scissors beats paper you dumbass!" + ++computerScore + "-" + humanScore
}

else if(humanChoice === computerChoice ){
    return "That's a fucking draw!"

}

else if(humanChoice === "paper" && computerChoice === "rock" ){
    return "You win! Paper beats rock you champion!"  + ++humanScore + "-" + computerScore

}
else if(humanChoice === "rock" && computerChoice === "scissors" ){
    return "You win! Rock beats scissors you champion!" + ++humanScore + "-" + computerScore

}
else if(humanChoice === "scissors" && computerChoice === "paper" ){
    return "You win! Scissors beats paper you champion!" + ++humanScore + "-" + computerScore

}
}

function playGame(){
for (let i = 0; i < 5; i++){
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));

}
}

playGame()
