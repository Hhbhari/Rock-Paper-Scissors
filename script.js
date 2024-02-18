const start=0;
let win=0

for(let i=0; i<5; i++){
    playGame();
}
console.log(checkWinner(win));
console.log(win);

function playGame(){
    const playerSelection=prompt("Rock, Paper or Scissors?");
    const computerSelection=getComputerchoice();

    win += playRound(playerSelection, computerSelection, start);
}

function playRound(playerSelection, computerSelection, start){
    if(playerSelection.toLowerCase()===computerSelection.toLowerCase()){
        console.log( "Sorry!, It's a tie");
        return 0;
    }
    else if(playerSelection.toLowerCase()==='rock' && computerSelection.toLowerCase()==='scissors'){
        console.log( "You Win! Rock beats Scissors");
        return 1;
    }
    else if(playerSelection.toLowerCase()==='rock' && computerSelection.toLowerCase()==='paper'){
        console.log( "You Lose! Paper beats Rock");
        return -1;
    }
    else if(playerSelection.toLowerCase()==='scissors' && computerSelection.toLowerCase()==='rock'){
        console.log( "You Lose! Rock beats Scissors");
        return -1;
    }
    else if(playerSelection.toLowerCase()==='scissors' && computerSelection.toLowerCase()==='paper'){
        console.log( "You Win! Scissors beats Paper");
        return 1;
    }
    else if(playerSelection.toLowerCase()==='paper' && computerSelection.toLowerCase()==='scissors'){
        console.log( "You Lose! Scissors beats Paper");
        return -1;
    }
    else if(playerSelection.toLowerCase()==='paper' && computerSelection.toLowerCase()==='rock'){
        console.log( "You Win! Paper beats Rock");
        return +1;
    }
    else {
        console.log( "Wrong Input");
    }
}

function checkWinner(win){
    if(win<0){
        return `Sorry!, Computer is the Winner`;
    }
    else if(win>0){
        return `Hurray!, You are the Winner`;
    }
    else{
        return `It's a tie.`
    }
}

function getComputerchoice(){
    const value = ['Rock', 'Paper', 'Scissors'];
    const number = Math.floor(Math.random()*3);
    return value[number];
}