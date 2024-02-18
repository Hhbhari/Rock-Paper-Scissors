let value=prompt("Rock, Paper or Scissors?");

function getComputerchoice(){
    const computerSelection = ['Rock', 'Paper', 'Scissors'];
    const number = Math.floor(Math.random()*3);
    return computerSelection[number];
}