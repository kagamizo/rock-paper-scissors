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
  
    const resultDiv= document.createElement("div")
    resultDiv.textContent=""
    document.body.appendChild(resultDiv)
const rockBtn= document.createElement("button");
rockBtn.textContent="Rock" 
document.body.appendChild(rockBtn)
const paperBtn= document.createElement("button");
paperBtn.textContent="Paper" 
document.body.appendChild(paperBtn)

const scissorsBtn= document.createElement("button");
scissorsBtn.textContent="Scissors" 
document.body.appendChild(scissorsBtn)

let gameOver=false;

rockBtn.addEventListener('click',(event) => {
    if (gameOver)return;

resultDiv.textContent=playRound("rock",getComputerChoice());
  if(humanScore === 5){
    resultDiv.textContent= "Holy shit you really fucking won!!"
        gameOver=true;

}
if(computerScore === 5){
    resultDiv.textContent= "Congrats computer, you're better than shit!"
        gameOver=true;

}
})
paperBtn.addEventListener('click',(event) => {
    if (gameOver)return;

resultDiv.textContent=playRound("paper",getComputerChoice());
  if(humanScore === 5){
    resultDiv.textContent= "Holy shit you really fucking won!!"
    gameOver=true;
}
if(computerScore === 5){
    resultDiv.textContent= "Congrats computer, you're better than shit!"
        gameOver=true;

}

})
scissorsBtn.addEventListener('click',(event) => {
    if (gameOver)return;

resultDiv.textContent=playRound("scissors",getComputerChoice());
  if(humanScore === 5){
    resultDiv.textContent= "Holy shit you really fucking won!!"
        gameOver=true;

}
if(computerScore === 5){
    resultDiv.textContent= "Congrats computer, you're better than shit!"
        gameOver=true;

}

})



}

playGame()
// Create three buttons, one for each selection. 
// Add an event listener to the buttons that call your playRound function 
// with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
//Add a div for displaying results and change all of your console.logs into DOM methods.
//Display the running score, and announce a winner of the game once one player reaches 5 points.
//You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.
